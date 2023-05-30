<script>
import Heading from "./Heading.vue";
import FormItem from "./FormItem.vue";
import entitiesApi from "../api/entities.js";
import ErrorList from "./ErrorList.vue";

export default {
  name: "Parents",
  components: {
    ErrorList,
    FormItem,
    Heading
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
  data() {
    return {
      errors: [],
      editParentId: null,
      action: '',
      isLayoutVisible: false,
      entities: null,
      isFormValid: false,
      form: {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
      }
    };
  },
  methods: {
    async fetchData() {
      await entitiesApi.getEntitles({
        entityType: 'parents',
        token: this.$store.state.authentication.token,
      }).then((response) => {
        if (response.data.success) {
          this.entities = response.data.data
        }
      });
    },
    async formSubmit() {
      if (this.action === 'Add') {
        await entitiesApi.createEntity({
          entityType: 'parent',
          token: this.$store.state.authentication.token,
          form: this.form,
        }).then((response) => {
          if (response.data.success) {
            this.entities = response.data.data;
            this.form = {
              firstName: '',
              lastName: '',
              login: '',
              email: '',
            }
            this.isLayoutVisible = false;
            this.isFormValid = false;
          } else {
            this.errors.push(response.data.data)
          }
        });
      } else if (this.action === 'Edit') {
        await entitiesApi.editEntity({
          entityType: 'parent',
          token: this.$store.state.authentication.token,
          parentId: this.editParentId,
          form: this.form,
        }).then((response) => {
          if (response.data.success) {
            this.entities = response.data.data;
            this.form = {
              firstName: '',
              lastName: '',
              login: '',
              email: '',
            },
            this.isLayoutVisible = false;
            this.isFormValid = false;
          }
        });
      }
    },
    edit(entity) {
      this.action = 'Edit';
      this.isLayoutVisible = true;
      this.form.firstName = entity.first_name;
      this.form.lastName = entity.last_name;
      this.form.email = entity.email;
      this.form.login = entity.login;
      this.editParentId = entity.ID;
      this.isFormValid = true;
    },
    async remove(id) {
      await entitiesApi.removeEntity({
        entityType: 'parent',
        token: this.$store.state.authentication.token,
        parentId: id,
      }).then((response) => {
        console.log(response);
        if (response.data.success) {
          this.entities = this.entities.filter((entity) => entity.ID !== id)
        }
      });
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
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<template>

  <Heading :level="1">Parents</Heading>
  <div class="entities">
    <div class="entities__layout" :class="{active: isLayoutVisible}">
      <button class="entities__close-button" @click="isLayoutVisible = false;">
        <svg viewBox="0 0 50 50">
          <path
              d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
        </svg>
      </button>
      <div class="entities__layout-inner">
        <Heading :level="2">{{ action }} Parent</Heading>
        <ErrorList v-if="errors.length" :errors="errors"/>
        <form @submit.prevent="formSubmit">
          <FormItem :name="`first-name`" :label="`First Name`" :input-type="`text`" :is-required="true"
                    v-model="form.firstName"/>
          <FormItem :name="`last-name`" :label="`Last Name`" :input-type="`text`" :is-required="true"
                    v-model="form.lastName"/>
          <FormItem :name="`login`" :label="`Login`" :input-type="`text`" :is-required="true"
                    v-model="form.login"/>
          <FormItem :name="`email`" :label="`Email`" :input-type="`email`" :is-required="true"
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
      <ul v-if="entities" class="entities__list">
        <li class="entities__item entities__item--team">
          <span class="entities__cell">#</span>
          <span class="entities__cell">Name</span>
          <span class="entities__cell">Players</span>
          <span class="entities__cell">Actions</span>
        </li>
        <li v-for="(entity, index) in entities" :key="entity.ID" class="entities__item entities__item--team">
          <span class="entities__cell">{{ index + 1 }}.</span>
          <span class="entities__cell">{{ entity.first_name }} {{ entity.last_name }}</span>
          <span class="entities__cell">0</span>
          <span class="entities__cell entities__cell--actions">
              <button type="button" class="entities__action" @click="edit(entity)">Edit</button>
              <button type="button" class="entities__action" @click="remove(entity.ID)">Remove</button>
            </span>
        </li>
      </ul>
      <p v-else>You don't have associated parents yet</p>
    </div>
  </div>

</template>

<style scoped>

</style>
