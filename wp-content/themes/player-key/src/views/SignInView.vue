<script>
import Heading from "../components/Heading.vue";
import FormItemText from "../components/FormItemText.vue";
import ErrorList from "../components/ErrorList.vue";
import MessageList from "../components/MessageList.vue";

export default {
  name: "LoginView",
  components: {
    MessageList,
    ErrorList,
    Heading,
    FormItemText,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      isFormValid: false,
    };
  },
  computed: {
    errors() {
      return this.$store.state.authentication.validationErrors;
    },
    messages() {
      return this.$store.state.authentication.messages;
    },
  },
  watch: {
    form: {
      handler() {
        this.isFormValid = this.isRequiredFieldsFiled();
      },
      deep: true
    }
  },
  methods: {
    isRequiredFieldsFiled() {
      return this.form.email !== '' && this.form.password !== '';
    },
    async formSubmit() {
      this.$store.dispatch('login', this.form)
          .then((data) => {

            // If the Parent came from a link from an email
            if (this.$store.state.authentication.athleteToken) {
              this.$router.push({
                name: 'board-entity',
                params: {
                  entity: 'athletes'
                },
              })
            } else {
              this.$router.push({name: 'board'})
            }
          });
    }
  }
}
</script>

<template>
  <div class="wrapper wrapper--form">
    <Heading :level="1" :class="`form-holder__heading`">Sign in</Heading>
    <ErrorList v-if="errors.length" :errors="errors"/>
    <MessageList v-if="messages.length" :messages="messages" :type="`success`"/>
    <form class="form" @submit.prevent="formSubmit">
      <div class="form__fieldset">
        <FormItemText :name="`email`" :label="`Email`" :input-type="`email`" :is-required="true" v-model="form.email"/>
        <FormItemText :name="`password`" :label="`Password`" :input-type="`password`" :is-required="true"
                      v-model="form.password"/>
      </div>
      <div class="form__links">
        <RouterLink :to="{name: 'sign-up'}">Not registered?</RouterLink>
        <RouterLink :to="{name: 'password-reset'}">Lost your password?</RouterLink>
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
