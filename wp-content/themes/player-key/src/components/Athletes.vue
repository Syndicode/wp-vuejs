<script>
  import Heading from "./Heading.vue";
  import Loader from "./Loader.vue";
  import FormItem from "./FormItem.vue";
  import entitiesApi from "../api/entities.js";

  export default {
    name: "Athletes",
    components: {
      FormItem,
      Loader,
      Heading,
    },
    data() {
      return {
        isSubmitting: false,
        editAthleteId: null,
        action: '',
        isLayoutVisible: false,
        entities: null,
        isFormValid: false,
        form: {
          team: ''
        }
      };
    },
    methods: {
      async fetchData() {
        await entitiesApi.getEntitles({
          entityType: 'athletes',
          token: this.$store.state.authentication.token,
        }).then((response) => {
          if (response.data.success) {
            this.entities = response.data.data
          }
        });
      },
      closeLayout() {
        this.isLayoutVisible = false
      },
    },
    mounted() {
      this.fetchData()
    }
  }
</script>

<template>
  <Heading :level="1">Athletes</Heading>
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
        <Heading :level="2">{{ action }} Athlete</Heading>
        <form @submit.prevent="formSubmit">

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
        <button type="button" class="button button--lime" @click="isLayoutVisible = true; action = 'Create'">
          Add Athlete
        </button>
      </div>
      <ul v-if="entities" class="entities__list">
        <li class="entities__item entities__item--team">
          <span class="entities__cell">#</span>
          <span class="entities__cell">Athlete</span>
          <span class="entities__cell">Team</span>
          <span class="entities__cell">Actions</span>
        </li>
        <li v-for="(entity, index) in entities" :key="entity.ID" class="entities__item entities__item--team">
          <span class="entities__cell">{{ index + 1 }}.</span>
          <span class="entities__cell">{{ entity.post_title }}</span>
          <span class="entities__cell">{{ entity.team }}</span>
          <span class="entities__cell entities__cell--actions">
              <button type="button" class="entities__action" @click="edit(entity)">Edit</button>
              <button type="button" class="entities__action" @click="remove(entity.ID)">Remove</button>
            </span>
        </li>
      </ul>
      <p v-else>You haven't created any teams yet</p>
    </div>
  </div>
</template>

<style scoped>

</style>
