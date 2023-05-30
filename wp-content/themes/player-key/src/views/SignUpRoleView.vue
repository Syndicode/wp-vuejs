<script>
import Heading from "../components/Heading.vue";
import FormItem from "../components/FormItem.vue";
import formFields from "./data/formFields.js"
import ErrorList from "../components/ErrorList.vue";

export default {
  name: "RegisterRoleView",
  components: {
    ErrorList,
    FormItem,
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
    formData.nonce = wp.nonce;

    return {
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
    isPasswordsMatch() {
      return this.form.password === this.form.passwordRepeat
    },
    async formSubmit() {

      if (this.isPasswordsMatch()) {
        this.$store.dispatch('register', this.form)
            .then(() => {
              this.$store.commit('registerSuccess');
              this.$router.push({name: 'sign-in'});
            });
      } else {
        this.$store.commit('registerStart')
        this.$store.commit('registerFailure', 'Passwords must match')
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
      <form class="form" @submit.prevent="formSubmit">
        <div v-for="(section, index) in formFields[this.$route.params.role]" class="form__fieldset">
          <Heading :level="3" :align="`left`" :class="`form__fieldset-title`">
            {{ `${index + 1}. ${section.title}` }}
          </Heading>
          <FormItem v-for="formField in section.fields"
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
