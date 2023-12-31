<script>
import Heading from "../components/Heading.vue";
import FormItemText from "../components/FormItemText.vue";
import formFields from "./data/formFields.js"
import ErrorList from "../components/ErrorList.vue";
import MessageList from "../components/MessageList.vue";

export default {
  name: "RegisterRoleView",
  components: {
    MessageList,
    ErrorList,
    FormItemText,
    Heading,
  },
  data() {
    const formData = {};
    formFields[this.$route.params.role].forEach((section) => {
      section.fields.forEach((field) => {
        formData[field.model] = ''
      });
    });

    formData.role = this.$route.params.role;

    return {
      errors: [],
      messages: [],
      form: formData,
      formFields: formFields,
      isFormValid: false,
    };
  },
  watch: {
    form: {
      handler() {
        this.isFormValid = this.isRequiredFieldsFiled();
      },
      deep: true
    }
  },
  computed: {
    errors() {
      return this.$store.state.authentication.validationErrors;
    },
    isSubmitting() {
      return this.$store.state.authentication.isSubmitting
    },
  },
  mounted() {
    this.$store.commit('clearValidationErrors');
  },
  methods: {
    isRequiredFieldsFiled() {
      let isFiled = true;
      formFields[this.$route.params.role].forEach((section) => {
        section.fields.forEach((field) => {
          if (field.isRequired && this.form[field.model] === '') {
            isFiled = false;
          }
        });
      });
      return isFiled;
    },
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
      this.$store.commit('registerStart');

      if (this.checkPasswords()) {
        this.$store.dispatch('register', this.form)
            .then(() => {
              if (this.$route.params.role !== 'admin') {
                this.$router.push({name: 'sign-in'});
              } else {
                this.messages.push('You have successfully registered. After the approval of your account, you will receive a message to your email.');
              }

            });
      } else {
        this.$store.commit('registerFailure', this.errors)
      }
    }
  },

}
</script>

<template>
  <div class="wrapper wrapper--form">
    <div class="form-holder">
      <Heading :level="1" :class="`form-holder__heading`">{{ `Sign Up as ` }} <span
          class="form-holder__heading-role">{{ $route.params.role }}</span></Heading>
      <ErrorList v-if="errors.length > 0" :errors="errors"/>
      <MessageList v-if="messages.length > 0" :messages="messages" :type="`success`"/>
      <form class="form" @submit.prevent="formSubmit">
        <div v-for="(section, index) in formFields[this.$route.params.role]" class="form__fieldset">
          <Heading :level="3" :align="`left`" :class="`form__fieldset-title`">
            {{ `${index + 1}. ${section.title}` }}
          </Heading>
          <FormItemText v-for="formField in section.fields"
                        :name="formField.name"
                        :is-required="formField.isRequired"
                        :label="formField.label"
                        :input-type="formField.type"
                        :css-modifier="formField.cssModifier ?? formField.cssModifier"
                        v-model="form[formField.model]"/>
        </div>
        <div class="form__actions">
          <button type="submit" class="button button--lime" :disabled="!isFormValid || isSubmitting">Submit</button>
          <span v-if="!isFormValid" class="form__actions-note">Please fill in all required <sup>(*)</sup> fields</span>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-holder__heading-role {
  font-weight: 900;
}
</style>
