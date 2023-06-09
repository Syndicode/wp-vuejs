<script>
import authApi from '../api/authentication.js'
import Heading from "../components/Heading.vue";
import ErrorList from "../components/ErrorList.vue";
import FormItemText from "../components/FormItemText.vue";
import Loader from "../components/Loader.vue";

export default {
  name: "CompleteParentView",
  components: {Loader, FormItemText, ErrorList, Heading},
  watch: {
    form: {
      handler() {
        this.isFormValid = this.isRequiredFieldsFiled();
      },
      deep: true
    }
  },
  data() {
    return {
      isLinkActive: true,
      isSubmitting: false,
      isFormValid: false,
      user: null,
      errors: [],
      form: {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        password: '',
        passwordRepeat: ''
      }
    };
  },
  methods: {
    isRequiredFieldsFiled() {
      let isFiled = true;
      for (let field in this.form) {
        if (this.form[field] === '') {
          isFiled = false;
        }
      }

      return isFiled;
    },
    async formSubmit() {
      this.isSubmitting = true;
      if (this.form.password !== this.form.passwordRepeat) {
        this.errors.push('Passwords must match!');
        this.isSubmitting = false;
      } else {
        this.errors = [];
        authApi.activationUser({
          parentId: this.$route.query.id,
          form: this.form,
          activation_token: this.$route.query.token,
        }).then((response) => {
          if (response.data.success) {
            this.$store.commit('activationSuccess')
            this.$router.push({name: 'sign-in'})
          }
        });
      }
    }
  },
  mounted() {
    authApi.checkUser(localStorage.getItem('pki-auth')).then((response) => {
      if (!response.data.success) {
        authApi.activationCheck({
          id: this.$route.query.id,
          token: this.$route.query.token,
        }).then((response) => {
          if (response.data.success) {
            this.user = response.data.data;
            this.form.firstName = this.user.first_name;
            this.form.lastName = this.user.last_name;
            this.form.login = this.user.user_login;
            this.form.email = this.user.email;
          } else {
            this.isLinkActive = false;
            this.errors.push(response.data.data)
          }
        });
      } else {
        this.$router.push({name: 'board'});
      }
    });
  }
}
</script>

<template>
  <Loader :class="{active: isSubmitting}"/>
  <div class="wrapper wrapper--form">
    <Heading :level="1">Activate you account</Heading>
    <ErrorList v-if="errors.length" :errors="errors"/>
    <form v-if="isLinkActive" @submit.prevent="formSubmit">
      <div class="form__fieldset">
        <FormItemText :name="`first-name`" :label="`First Name`" :input-type="`text`" :is-required="true"
                      v-model="form.firstName"/>
        <FormItemText :name="`last-name`" :label="`Last Name`" :input-type="`text`" :is-required="true"
                      v-model="form.lastName"/>
        <FormItemText :name="`login`" :label="`Login`" :input-type="`text`" :is-required="true"
                      v-model="form.login" :is-disabled="true"/>
        <FormItemText :name="`email`" :label="`Email`" :input-type="`email`" :is-required="true"
                      v-model="form.email" :css-modifier="`full`"/>
        <FormItemText :name="`password`" :label="`Password`" :input-type="`password`" :is-required="true"
                      v-model="form.password"/>
        <FormItemText :name="`password-repeat`" :label="`Password Repeat`" :input-type="`password`" :is-required="true"
                      v-model="form.passwordRepeat"/>
      </div>

      <div class="form__actions">
        <button type="submit" class="button button--lime" :disabled="!isFormValid">Submit</button>
        <span v-if="!isFormValid"
              class="form__actions-note">Please fill in all required <sup>(*)</sup> fields</span>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
