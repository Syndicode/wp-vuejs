<script>
import Heading from "./Heading.vue";
import Loader from "./Loader.vue";
import FormItemText from "./FormItemText.vue";
import entitiesApi from "../api/entities.js";
import vSelect from 'vue-select';
import ErrorList from "./ErrorList.vue";

export default {
  name: "Athletes",
  components: {
    ErrorList,
    FormItemText,
    Loader,
    Heading,
    vSelect,
  },
  data() {
    return {
      errors: [],
      teams: [],
      parents: [],
      isSubmitting: false,
      editAthleteId: null,
      action: '',
      isLayoutVisible: false,
      entities: null,
      isFormValid: false,
      form: {
        firstName: '',
        lastName: '',
        team: '',
        parent: '',
        birthday: '2021-08-12',
      }
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
    async getTeams() {
      await entitiesApi.getEntitles({
        entityType: 'teams',
        token: this.$store.state.authentication.token,
      }).then((response) => {
        if (response.data.success) {
          this.teams = response.data.data.map((team) => {
            return {
              label: team.post_title,
              code: team.ID
            };
          });
        }
      });
    },
    async getParents() {
      await entitiesApi.getEntitles({
        entityType: 'parents',
        token: this.$store.state.authentication.token,
      }).then((response) => {
        if (response.data.success) {
          this.parents = response.data.data.map((parent) => {
            return {
              label: `${parent.first_name} ${parent.last_name}`,
              code: parent.ID
            };
          });
        }
      });
    },
    closeLayout() {
      this.isLayoutVisible = false
    },
    async formSubmit() {
      this.isSubmitting = true;
      if (this.action === 'Add') {
        await entitiesApi.createEntity({
          entityType: 'athlete',
          token: this.$store.state.authentication.token,
          form: this.form,
        }).then((response) => {
          if (response.data.success) {
            this.entities = response.data.data;
            this.form = {
              firstName: '',
              lastName: '',
              team: '',
              parent: '',
              birthday: '',
            }
            this.isLayoutVisible = false;
            this.isFormValid = false;
          } else {
            this.errors.push(response.data.data)
          }
          this.isSubmitting = false;
        });
      } else if (this.action === 'Edit') {
        console.log(this.form.birthday);
        await entitiesApi.editEntity({
          entityType: 'athlete',
          token: this.$store.state.authentication.token,
          athleteId: this.editAthleteId,
          form: this.form,
        }).then((response) => {
          if (response.data.success) {
            this.entities = response.data.data;
            this.form = {
              firstName: '',
              lastName: '',
              team: '',
              parent: '',
              birthday: '',
            }
            this.isLayoutVisible = false;
            this.isFormValid = false;
          } else {
            this.errors.push(response.data.data)
          }
          this.isSubmitting = false;
        });
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
    edit(entity) {
      this.action = 'Edit';
      this.isLayoutVisible = true;
      this.form.firstName = entity.first_name;
      this.form.lastName = entity.last_name;
      this.form.team = {label: entity.team.post_title, code: entity.team.ID};
      this.form.parent = {label: entity.parent_name, code: entity.parent.ID};
      this.editAthleteId = entity.ID;

      let birthday = new Date(entity.birthday);
      this.form.birthday = `${birthday.getFullYear()}-${birthday.getMonth() < 10 ? '0' + (birthday.getMonth() + 1) : birthday.getMonth() + 1}-${birthday.getDate()}`;
    },
    async remove(id) {
      await entitiesApi.removeEntity({
        entityType: 'athlete',
        token: this.$store.state.authentication.token,
        athleteId: id,
      }).then((response) => {
        console.log(response);
        if (response.data.success) {
          this.entities = this.entities.filter((entity) => entity.ID !== id)
        }
      });
    },
  },
  mounted() {
    this.fetchData();
    this.getTeams();
    this.getParents();
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
        <ErrorList v-if="errors.length" :errors="errors"/>
        <form @submit.prevent="formSubmit">
          <FormItemText :name="`first-name`" :label="`First Name`" :input-type="`text`" :is-required="true"
                        v-model="form.firstName"/>
          <FormItemText :name="`last-name`" :label="`Last Name`" :input-type="`text`" :is-required="true"
                        v-model="form.lastName"/>
          <FormItemText :name="`birthday`" :label="`Birthday`" :input-type="`date`" :is-required="true"
                        v-model="form.birthday"/>
          <label class="form-item-select">
            <span class="form__label">Team <sup>*</sup></span>
            <vSelect :options="teams"
                     v-model="form.team"
                     :class="`form-item-select__field`"
                     :required="true"/>
          </label>
          <label class="form-item-select">
            <span class="form__label">Parent <sup>*</sup></span>
            <vSelect :options="parents"
                     v-model="form.parent"
                     :class="`form-item-select__field`"
                     :required="true"/>
          </label>
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
          Add Athlete
        </button>
      </div>
      <ul v-if="entities" class="entities__list">
        <li class="entities__item entities__item--athlete">
          <span class="entities__cell">#</span>
          <span class="entities__cell">Athlete</span>
          <span class="entities__cell">Team</span>
          <span class="entities__cell">Parent</span>
          <span class="entities__cell">Verified status</span>
          <span class="entities__cell">Actions</span>
        </li>
        <li v-for="(entity, index) in entities" :key="entity.ID" class="entities__item entities__item--athlete">
          <span class="entities__cell">{{ index + 1 }}.</span>
          <span class="entities__cell">{{ entity.first_name }} {{ entity.last_name }}</span>
          <span class="entities__cell">{{ entity.team.post_title }}</span>
          <span class="entities__cell">{{ entity.parent_name }}</span>
          <span class="entities__cell"></span>
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

<style>
.form-item-select {
  display: block;
  margin-bottom: 20px;
}

.form-item-select .vs__dropdown-toggle {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  border: 1px solid #a8a8a8;
  border-radius: 0;
}

.form-item-select .vs__search {
  line-height: 2;
}
</style>