<script>
import Heading from "../components/Heading.vue";
import FormItemText from "../components/FormItemText.vue";
import authApi from "../api/authentication.js";
import MessageList from "../components/MessageList.vue";
import ErrorList from "../components/ErrorList.vue";
import Loader from "../components/Loader.vue";

export default {
  name: "PasswordRestView",
  components: {
    Loader,
    ErrorList, MessageList,
    FormItemText,
    Heading,
  },
  data() {
    return {
      isRequest: true,
      isLoaded: false,
      isFormValid: false,
      errors: [],
      messages: [],
      form: {
        login: '',
        password: '',
        passwordRepeat: '',
      }
    };
  },
  watch: {
    form: {
      handler() {
        if (this.isRequest) {
          this.isFormValid = this.form.login !== '';
        } else {
          this.isFormValid = (this.form.password !== '' && this.form.passwordRepeat !== '');
        }
      },
      deep: true
    }
  },
  methods: {
    checkPasswords() {
      if (this.form.password !== this.form.passwordRepeat) {
        this.errors.push('Passwords must match');
        return false;
      }

      if (this.form.password.length < 7) {
        this.errors.push('Password must consist of at least 7 characters');
        return false;
      }

      if (this.form.password.length < 7) {
        this.errors.push('Password must contain at least 7 characters');
        return false;
      }

      const regExp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
      if (!regExp.test(this.form.password)) {
        this.errors.push('Password must contain symbol, upper and lower case letters and a number');
        return false;
      }

      return true
    },
    async formSubmit() {
      this.errors = [];
      this.messages = [];

      if (this.isRequest) {
        await authApi.resetPasswordRequest({
          login: this.form.login
        }).then((response) => {
          if (response.data.success) {
            this.messages.push(response.data.data);
          } else {
            this.errors.push(response.data.data);
          }
        });
      } else {
        if (this.checkPasswords()) {
          await authApi.resetPassword({
            login: this.$route.query.login,
            token: this.$route.query.token,
            password: this.form.password,
            passwordRepeat: this.form.passwordRepeat,
          }).then((response) => {
            if (response.data.success) {
              this.messages.push(response.data.data);
            } else {
              this.errors.push(response.data.data);
            }
          });
        }
      }
    }
  },
  mounted() {
    if (this.$route.query.login && this.$route.query.token) {
      this.isRequest = false;
    }

    this.isLoaded = true;
  }
}
</script>

<template>
  <Loader :class="{active: !isLoaded}"/>
  <div v-if="isLoaded" class="wrapper" :class="{'wrapper--form-short': isRequest, 'wrapper--form': !isRequest}">
    <Heading :level="1" :class="`form-holder__heading`">Password Reset</Heading>
    <ErrorList v-if="errors.length" :errors="errors"/>
    <MessageList v-if="messages.length" :messages="messages" :type="`success`"/>
    <form class="form" @submit.prevent="formSubmit">
      <div v-if="isRequest" class="form__fieldset">
        <FormItemText :name="`login`" :label="`Please enter your login or email`" :input-type="`text`"
                      :is-required="true" :css-modifier="`full`" v-model="form.login"/>
      </div>
      <div v-else class="form__fieldset">
        <FormItemText :name="`password`" :label="`Password`" :input-type="`password`"
                      :is-required="true" v-model="form.password"/>
        <FormItemText :name="`password-repeat`" :label="`Password repeat`" :input-type="`password`"
                      :is-required="true" v-model="form.passwordRepeat"/>
      </div>
      <div class="form__links">
        <RouterLink :to="{name: 'sign-up'}">Not registered?</RouterLink>
      </div>
      <div class="form__actions">
        <button type="submit" class="button button--lime" :disabled="!isFormValid">Submit</button>
        <span v-if="!isFormValid" class="form__actions-note">Please fill in all required <sup>(*)</sup> fields</span>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
