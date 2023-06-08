<script>
import Heading from "./Heading.vue";
import Loader from "./Loader.vue";
import FormItemText from "./FormItemText.vue";
import entitiesApi from "../api/entities.js";
import paymentsApi from "../api/payments.js";
import vSelect from 'vue-select';
import ErrorList from "./ErrorList.vue";
import FormItemFile from "./FormItemFile.vue";
import {Stripe} from "stripe";

export default {
  name: "Athletes",
  components: {
    ErrorList,
    FormItemFile,
    FormItemText,
    Heading,
    Loader,
    vSelect,
  },
  props: {
    currentUserId: {
      type: Number,
    },
    currentRole: {
      type: Boolean,
    }
  },
  data() {
    return {
      action: '',
      editAthleteId: null,
      entities: null,
      errors: [],
      filePreview: '',
      form: {
        firstName: '',
        lastName: '',
        team: '',
        parent: '',
        birthday: '',
        cardFileName: '',
        certificateFileName: '',
      },
      isSubmitting: false,
      isLayoutVisible: false,
      isFormValid: false,
      parents: [],
      teams: [],
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
      this.form.firstName = '';
      this.form.lastName = '';
      this.form.team = '';
      this.form.birthday = '';

      if (this.currentRole === 'coach') {
        this.form.parent = '';
      }

      if (this.currentRole === 'parent') {
        this.form.cardFileName = '';
        this.form.certificateFileName = '';
      }
    },
    async fetchData() {
      await entitiesApi.getEntitles({
        entityType: 'athletes',
        token: this.$store.state.authentication.token,
        currentRole: this.currentRole,
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
        currentRole: this.currentRole,
      }).then((response) => {
        if (response.data.success && response.data.data.length) {
          this.teams = response.data.data.map((team) => {
            return {
              label: team.post_title,
              code: team.ID
            };
          });
        } else {
          this.errors.push('No Team exists. You cannot add an athlete without a Team.')
        }
      });
    },
    async getParents() {
      await entitiesApi.getEntitles({
        entityType: 'parents',
        token: this.$store.state.authentication.token,
      }).then((response) => {
        if (response.data.success && response.data.data.length) {
          this.parents = response.data.data.map((parent) => {
            return {
              label: `${parent.first_name} ${parent.last_name}`,
              code: parent.ID
            };
          });
        } else {
          if (this.currentRole === 'coach') {
            this.errors.push('No Parents exists. You cannot add an athlete without a Parents.')
          } else if (this.currentRole === 'parent') {
            this.parents.push({
              label: this.$store.state.authentication.currentUser.data.display_name,
              code: this.$store.state.authentication.currentUser.ID
            })
          }
        }
      });
    },
    async formSubmit() {
      this.isSubmitting = true;

      const formData = new FormData();
      formData.append('entityType', 'athlete');
      formData.append('token', this.$store.state.authentication.token);
      formData.append('athleteId', this.editAthleteId);
      formData.append('currentRole', this.currentRole);

      if (this.currentRole === 'parent') {
        formData.append('card', this.form.card);
        formData.append('certificate', this.form.certificate);
      }

      for (let field in this.form) {
        formData.append(field, this.form[field]);
      }

      formData.set('team', this.form.team.code);
      formData.set('parent', this.form.parent.code);


      if (this.action === 'Add') {
        await entitiesApi.createAthlete(formData).then((response) => {
          if (response.data.success) {
            this.entities = response.data.data;
            this.form = {
              firstName: '',
              lastName: '',
              team: '',
              parent: this.currentRole === 'coach' ? '' : this.form.parent,
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
        await entitiesApi.editAthlete(formData)
            .then((response) => {
              if (response.data.success) {
                this.entities = response.data.data;
                this.form = {
                  firstName: '',
                  lastName: '',
                  team: '',
                  parent: this.currentRole === 'coach' ? '' : this.form.parent,
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
      const requiredFields = {
        coach: [
          'firstName',
          'lastName',
          'team',
          'parent',
          'birthday',
        ],
        parent: [
          'firstName',
          'lastName',
          'team',
          'parent',
          'birthday',
          'cardFileName',
          'certificateFileName',
        ],
      }

      let isFiled = true;

      requiredFields[this.currentRole].forEach((fieldName) => {
        if (this.form[fieldName] === '') {
          isFiled = false;
        }
      });

      return isFiled;
    },
    edit(entity) {
      this.action = 'Edit';
      this.isLayoutVisible = true;
      this.form.firstName = entity.first_name;
      this.form.lastName = entity.last_name;
      this.form.team = {label: entity.team.post_title, code: entity.team.ID};
      this.form.parent = {label: entity.parent_name, code: entity.parent.ID};
      this.form.cardFileName = entity.card_file_name;
      this.form.certificateFileName = entity.certificate_file_name;
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
        if (response.data.success) {
          this.entities = this.entities.filter((entity) => entity.ID !== id)
        }
      });
    },
    uploadCard(file) {
      this.form.card = file;
      this.form.cardFileName = file.name;
    },
    uploadCertificate(file) {
      this.form.certificate = file;
      this.form.certificateFileName = file.name;
    },
    async pay(entity) {
      await paymentsApi.getPaymentToken({
        token: this.$store.state.authentication.token,
        athleteId: entity.ID,
      }).then(async (response) => {
        if (response.data.success) {
          const {payment_token, payment_id, secret_key, cost} = response.data.data;
          const stripe = new Stripe(secret_key);
          const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: [
              {
                price_data: {
                  product_data: {
                    name: `${entity.first_name} ${entity.last_name}`,
                  },
                  unit_amount: cost * 100,
                  currency: 'usd',
                },
                quantity: 1,
              },
            ],
            success_url: `${window.location.origin}${this.$route.path}/?token=${payment_token}&payment_id=${payment_id}`,
            cancel_url: `${window.location.origin}${this.$route.path}/?payment_id=${payment_id}&cancellation_token=aB03Eckqbnwdfqwe233214mwAMomfMewe332`,
          });

          window.location.href = session.url
        }
      });
    }
  },
  mounted() {
    if (this.currentRole === 'parent') {
      this.form.parent = {
        label: this.$store.state.authentication.currentUser.data.display_name,
        code: this.$store.state.authentication.currentUser.ID
      }
    }

    this.getTeams();
    this.getParents();

    if (this.$store.state.authentication.athleteToken !== null) {
      entitiesApi.getAthlete({
        token: this.$store.state.authentication.token,
        athlete_token: this.$store.state.authentication.athleteToken,
      }).then((response) => {
        if (response.data.success) {
          this.edit(response.data.data);
          this.$store.commit('resetAthleteForEdit');
        }
      });
    }

    if (this.$route.query.token && this.$route.query.payment_id) {
      paymentsApi.checkPayment({
        payment_token: this.$route.query.token,
        payment_id: this.$route.query.payment_id,
        token: this.$store.state.authentication.token,
      }).then((response) => {
        if (response.data.success) {
          this.fetchData();
        }
      })
    }

    this.fetchData();
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
        <form v-if="teams.length && parents.length" @submit.prevent="formSubmit">
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
                     :required="true" :disabled="currentRole === 'parent'"/>
          </label>
          <div v-if="currentRole === 'parent'" class="form-item-file">
            <span class="form__label">Report Card <sup>*</sup></span>
            <FormItemFile @file-updated="uploadCard"
                          :input-id="`report-card`"
                          :file-title="`Card`"
                          :file-name="this.form.cardFileName"
                          :required="true"/>
          </div>
          <div v-if="currentRole === 'parent'" class="form-item-file">
            <span class="form__label">Birth certificate/ID <sup>*</sup></span>
            <FormItemFile @file-updated="uploadCertificate"
                          :input-id="`certificate`"
                          :file-title="`Certificate/ID`"
                          :file-name="this.form.certificateFileName"
                          :required="true"/>
          </div>
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
          <span class="entities__cell entities__cell--status">Status</span>
          <span class="entities__cell">Actions</span>
        </li>
        <li v-for="(entity, index) in entities" :key="entity.ID" :id="entity.ID"
            class="entities__item entities__item--athlete">
          <span class="entities__cell">{{ index + 1 }}.</span>
          <span class="entities__cell">{{ entity.first_name }} {{ entity.last_name }}</span>
          <span class="entities__cell">{{ entity.team.post_title }}</span>
          <span class="entities__cell">{{ entity.parent_name }}</span>
          <span class="entities__cell entities__cell-status"
                :class="`entities__cell-status--${entity.status}`">{{ entity.status }}</span>
          <span class="entities__cell entities__cell--actions">

              <button v-if="entity.payment_status === 'unpaid' && entity.status === 'pending'" type="button"
                      class="entities__action" @click="pay(entity)">Pay</button>
              <button type="button" class="entities__action" @click="edit(entity)">Edit</button>
              <button type="button" class="entities__action" @click="remove(entity.ID)">Remove</button>
            </span>
        </li>
      </ul>
      <p v-else>You don't have associated athletes yet</p>
    </div>
  </div>
</template>

<style>
.form-item-file,
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
