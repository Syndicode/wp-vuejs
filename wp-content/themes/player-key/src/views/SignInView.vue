<script>
import Heading from "../components/Heading.vue";
import FormItem from "../components/FormItem.vue";

export default {
  name: "LoginView",
  components: {
    Heading,
    FormItem,
  },
  data() {
    return {
      form: {
        login: '',
        password: '',
      },
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
  methods: {
    isRequiredFieldsFiled() {
      return this.form.login !== '' && this.form.password !== '';
    },
    async formSubmit() {
      this.$store.dispatch('login', this.form)
          .then((data) => {
            this.$router.push({name: 'board'})
          });
    }
  }
}
</script>

<template>
  <div class="wrapper wrapper--form">
    <Heading :level="1" :class="`form-holder__heading`">Login</Heading>
    <form class="form" @submit.prevent="formSubmit">
      <div class="form__fieldset">
        <FormItem :name="`login`" :label="`Login`" :input-type="`text`" :is-required="true" v-model="form.login"/>
        <FormItem :name="`password`" :label="`Password`" :input-type="`password`" :is-required="true" v-model="form.password"/>
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
