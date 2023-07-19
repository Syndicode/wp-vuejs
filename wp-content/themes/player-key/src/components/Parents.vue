<script>
import Heading from "./Heading.vue";
import FormItemText from "./FormItemText.vue";
import parentsApi from "../api/parents.js";
import authApi from "../api/authentication.js";
import ErrorList from "./ErrorList.vue";
import Loader from "./Loader.vue";

export default {
  name: 'Parents',
  components: {
    Loader,
    ErrorList,
    FormItemText,
    Heading
  },
  data() {
    return {
      action: '',
      editParentId: null,
      entities: null,
      errors: [],
      form: {
        firstName: '',
        lastName: '',
        email: '',
      },
      isLoading: false,
      isLayoutVisible: false,
      isSubmitting: false,
      isFormValid: false,
    };
  },
  watch: {
    form: {
      handler() {
        this.errors = [];
        this.isFormValid = this.isRequiredFieldsFiled();
      },
      deep: true
    }
  },
  methods: {
    closeLayout() {
      this.isLayoutVisible = false;
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
      };
    },
    edit(entity) {
      this.action = 'Edit';
      this.isLayoutVisible = true;
      this.form.firstName = entity.first_name;
      this.form.lastName = entity.last_name;
      this.form.email = entity.email;
      this.editParentId = entity.ID;
      this.isFormValid = true;
    },
    async fetchData() {
      await parentsApi.getParents({
        token: this.$store.state.authentication.token,
      }).then((response) => {
        if (response.data.success) {
          this.entities = response.data.data
        } else {
          this.entities = [];
        }
      });
    },
    async formSubmit() {
      this.isSubmitting = true;
      if (this.action === 'Add') {
        await parentsApi.createParent({
          token: this.$store.state.authentication.token,
          form: this.form,
        }).then(this.onFormSubmit);
      } else if (this.action === 'Edit') {
        await parentsApi.editParent({
          token: this.$store.state.authentication.token,
          parentId: this.editParentId,
          form: this.form,
        }).then(this.onFormSubmit);
      }
    },
    isRequiredFieldsFiled() {
      let isFiled = true;
      for (let field in this.form) {
        if (this.form[field] === '') {
          isFiled = false;
        }
      }

      return isFiled;
    },
    onFormSubmit(response) {
      if (response.data.success) {
        this.entities = response.data.data;
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
        }
        this.isLayoutVisible = false;
        this.isFormValid = false;
      } else {
        this.errors.push(response.data.data)
      }
      this.isSubmitting = false;
    },
    async resend(id) {
      await authApi.resendActivationLink({
        token: this.$store.state.authentication.token,
        parentId: id,
      }).then((response) => {
        if (response.data.success) {
          console.log('yes');
        }
      })
    },
    async remove(id) {
      this.isLoading = true;
      await parentsApi.removeParent({
        token: this.$store.state.authentication.token,
        parentId: id,
      }).then((response) => {
        if (response.data.success) {
          this.entities = this.entities.filter((entity) => entity.ID !== id)
        }
        this.isLoading = false;
      });
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<template>
  <Loader :class="{active: entities === null || isLoading}"/>
  <Heading :level="1">Parents</Heading>
  <div class="entities">
    <div class="entities__layout" :class="{active: isLayoutVisible}">
      <Loader :class="{active: isSubmitting}"/>
      <button class="entities__close-button" @click="closeLayout">
        <svg viewBox="0 0 50 50">
          <path
              d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
        </svg>
      </button>
      <div class="entities__layout-inner">
        <Heading :level="2">{{ action }} Parent</Heading>
        <ErrorList v-if="errors.length" :errors="errors"/>
        <form @submit.prevent="formSubmit">
          <FormItemText :name="`first-name`" :label="`First Name`" :input-type="`text`" :is-required="true"
                        v-model="form.firstName"/>
          <FormItemText :name="`last-name`" :label="`Last Name`" :input-type="`text`" :is-required="true"
                        v-model="form.lastName"/>
          <FormItemText :name="`email`" :label="`Email`" :input-type="`email`" :is-required="true"
                        v-model="form.email"/>
          <div class="form__actions">
            <button type="submit" class="button button--lime" :disabled="!isFormValid">Submit</button>
            <span v-if="!isFormValid"
                  class="form__actions-note">Please fill in all required <sup>(*)</sup> fields</span>
          </div>
        </form>
      </div>
    </div>
    <div class="wrapper entities__wrapper">
      <div class="entities__actions">
        <button type="button" class="button button--lime" @click="isLayoutVisible = true; action = 'Add'">
          Add Parent
        </button>
      </div>
      <div v-if="entities !== null && entities.length > 0" class="entities__list-holder">
        <ul class="entities__list">
          <li class="entities__item entities__item--parent">
            <span class="entities__cell">#</span>
            <span class="entities__cell">Name</span>
            <span class="entities__cell">Athletes</span>
            <span class="entities__cell">Is Activated</span>
            <span class="entities__cell">Actions</span>
          </li>
          <li v-for="(entity, index) in entities" :key="entity.ID" class="entities__item entities__item--parent">
            <span class="entities__cell">{{ index + 1 }}.</span>
            <span class="entities__cell">{{ entity.first_name }} {{ entity.last_name }}</span>
            <span class="entities__cell">{{ entity.athletes }}</span>
            <div class="entities__cell">
              <span v-if="entity.is_activated === 'yes'"
                    class="entities__cell-indicator entities__cell-indicator--true">Yes</span>
              <span v-else-if="entity.is_activated === 'no' || !entity.is_activated"
                    class="entities__cell-indicator entities__cell-indicator--false">No</span>
              <span v-else-if="entity.is_activated === 'expired'"
                    class="entities__cell-indicator entities__cell-indicator--expired">Expired</span>
            </div>
            <div class="entities__cell entities__cell--actions">
              <button type="button" class="entities__action" @click="edit(entity)">Edit</button>
              <button type="button" class="entities__action" @click="remove(entity.ID)">Remove</button>
              <button v-if="entity.is_activated === 'expired' || !entity.is_activated" type="button"
                      class="entities__action" @click="resend(entity.ID)">Resend activation Link
              </button>
            </div>
          </li>
        </ul>
      </div>
      <p v-else-if="entities !== null && entities.length === 0">You don't have associated parents yet</p>
    </div>
  </div>

</template>

<style scoped>

</style>
