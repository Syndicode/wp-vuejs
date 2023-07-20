<script>
import Heading from "./Heading.vue";
import Loader from "./Loader.vue";
import FormItemText from "./FormItemText.vue";
import athletesApi from "../api/athletes.js";
import teamsApi from "../api/teams.js";
import parentsApi from "../api/parents.js";
import paymentsApi from "../api/payments.js";
import vSelect from 'vue-select';
import ErrorList from "./ErrorList.vue";
import FormItemFile from "./FormItemFile.vue";
import {Stripe} from "stripe";

export default {
  name: 'Athletes',
  components: {
    ErrorList,
    FormItemFile,
    FormItemText,
    Heading,
    Loader,
    vSelect,
  },
  data() {
    return {
      action: '',
      cost: 0,
      coupon: '',
      couponResponse: {
        success: null,
        message: null,
      },
      currentEntity: null,
      editAthleteId: null,
      entities: null,
      errors: [],
      filePreview: '',
      form: {
        headshotFileName: '',
        firstName: '',
        lastName: '',
        team: '',
        parent: '',
        birthday: '',
        currentGrade: '',
        cardFileName: '',
        certificateFileName: '',
        socialLink: '',
      },
      isLoading: false,
      isSubmitting: false,
      isLayoutVisible: false,
      isFormValid: false,
      parents: [],
      paidAthlete: null,
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
      this.form.headshotFileName = '';
      this.form.firstName = '';
      this.form.lastName = '';
      this.form.team = '';
      this.form.birthday = '';
      this.form.currentGrade = '';
      this.form.socialLink = '';

      if (this.$store.state.authentication.currentRole === 'coach') {
        this.form.parent = '';
      }

      if (this.$store.state.authentication.currentRole === 'parent') {
        this.form.cardFileName = '';
        this.form.certificateFileName = '';
      }
    },
    edit(entity) {
      this.action = 'Edit';
      this.isLayoutVisible = true;
      this.form.headshotFileName = entity.headshot_file_name;
      this.form.firstName = entity.first_name;
      this.form.lastName = entity.last_name;
      this.form.team = {label: entity.team.post_title, code: entity.team.ID};
      this.form.parent = {label: entity.parent_name, code: entity.parent.ID};
      this.form.cardFileName = entity.card_file_name;
      this.form.certificateFileName = entity.certificate_file_name;
      this.editAthleteId = entity.ID;

      let birthday = new Date(entity.birthday);
      this.form.birthday = `${birthday.getFullYear()}-${birthday.getMonth() < 10 ? '0' + (birthday.getMonth() + 1) : birthday.getMonth() + 1}-${birthday.getDate()}`;
      this.form.currentGrade = entity.current_grade;
      this.form.socialLink = entity.social_link;
    },
    async fetchData() {
      await athletesApi.getAthletes({
        token: this.$store.state.authentication.token,
        currentRole: this.$store.state.authentication.currentRole,
      }).then((response) => {
        if (response.data.success) {
          this.entities = response.data.data;
        } else {
          this.entities = [];
        }
      });
    },
    async formSubmit() {
      this.isSubmitting = true;

      const formData = new FormData();
      formData.append('entityType', 'athlete');
      formData.append('token', this.$store.state.authentication.token);
      formData.append('athleteId', this.editAthleteId);
      formData.append('currentRole', this.$store.state.authentication.currentRole);

      if (this.$store.state.authentication.currentRole === 'parent') {
        formData.append('card', this.form.card);
        formData.append('certificate', this.form.certificate);
      }


      if (this.form.headshotFileName) {
        formData.append('headshot', this.form.headshot);
      }

      for (let field in this.form) {
        formData.append(field, this.form[field]);
      }

      formData.set('team', this.form.team.code);
      formData.set('parent', this.form.parent.code);


      if (this.action === 'Add') {
        await athletesApi.createAthlete(formData).then(this.onFormSubmit);
      } else if (this.action === 'Edit') {
        await athletesApi.editAthlete(formData).then(this.onFormSubmit);
      }
    },
    async getCost() {
      await paymentsApi.getCost().then((response) => {
        if (response.data.success) {
          this.cost = parseFloat(response.data.data);
        }
      })
    },
    async getTeams() {
      await teamsApi.getTeams({
        token: this.$store.state.authentication.token,
        currentRole: this.$store.state.authentication.currentRole,
      }).then((response) => {
        if (response.data.success && response.data.data.length) {
          this.teams = response.data.data.map((team) => {
            return {
              label: team.title,
              code: team.ID
            };
          });
        } else {
          this.errors.push('No Team exists. You cannot add an athlete without a Team.')
        }
      });
    },
    async getParents() {
      await parentsApi.getParents({
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
          if (this.$store.state.authentication.currentRole === 'coach') {
            this.errors.push('No Parents exists. You cannot add an athlete without a Parents.')
          } else if (this.$store.state.authentication.currentRole === 'parent') {
            this.parents.push({
              label: this.$store.state.authentication.currentUser.display_name,
              code: this.$store.state.authentication.currentUser.ID
            })
          }
        }
      });
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
          'headshot',
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

      requiredFields[this.$store.state.authentication.currentRole].forEach((fieldName) => {
        if (this.form[fieldName] === '') {
          isFiled = false;
        }
      });

      return isFiled;
    },
    onFormSubmit(response) {
      if (response.data.success) {
        this.entities = response.data.data;
        this.form = {
          firstName: '',
          lastName: '',
          team: '',
          parent: this.$store.state.authentication.currentRole === 'coach' ? '' : this.form.parent,
          birthday: '',
          currentGrade: '',
          socialLink: '',
          headshotFileName: '',
          cardFileName: '',
          certificateFileName: '',
        }
        this.isLayoutVisible = false;
        this.isFormValid = false;
      } else {
        this.errors.push(response.data.data)
      }
      this.isSubmitting = false;
    },
    async remove(id) {
      this.isLoading = true;
      await athletesApi.removeAthlete({
        token: this.$store.state.authentication.token,
        athleteId: id,
      }).then((response) => {
        if (response.data.success) {
          this.entities = this.entities.filter((entity) => entity.ID !== id);
        }
        this.isLoading = false;
      });
    },
    async pay() {
      await paymentsApi.getPaymentToken({
        token: this.$store.state.authentication.token,
        athleteId: this.paidAthlete.ID,
      }).then(async (response) => {
        if (response.data.success) {
          const {payment_token, payment_id, secret_key} = response.data.data;
          const stripe = new Stripe(secret_key);
          const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: [
              {
                price_data: {
                  product_data: {
                    name: `${this.paidAthlete.first_name} ${this.paidAthlete.last_name}`,
                  },
                  unit_amount: this.cost * 100,
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
    },
    async setupPayment(entity) {
      this.action = 'Pay for an ';
      this.isLayoutVisible = true;
      this.paidAthlete = entity;
    },
    uploadCard(file) {
      this.form.card = file;
      this.form.cardFileName = file.name;
    },
    uploadCertificate(file) {
      this.form.certificate = file;
      this.form.certificateFileName = file.name;
    },
    uploadHeadshot(file) {
      this.form.headshot = file;
      this.form.headshotFileName = file.name;
    },
    async useCoupon() {
      this.isSubmitting = true;
      this.couponResponse.success = null;
      this.couponResponse.message = null;

      await paymentsApi.useCoupon({
        coupon: this.coupon,
        token: this.$store.state.authentication.token,
      }).then((response) => {
        if (response.data.success) {
          this.cost = response.data.data;
          this.couponResponse.success = true
          this.isSubmitting = false;
        } else {
          this.couponResponse.success = false;
          this.couponResponse.message = response.data.data;
          this.isSubmitting = false;
        }
      }).catch((result) => {
        this.couponResponse.success = false;
        this.couponResponse.message = result.response.data.data;
        this.isSubmitting = false;
      });
    },
    viewAthlete(slug) {
      this.$router.push({
        name: 'athlete',
        params: {
          slug: slug,
        },
      })
    }
  },
  mounted() {
    this.fetchData();

    if (this.$store.state.authentication.currentRole === 'parent') {
      this.form.parent = {
        label: this.$store.state.authentication.currentUser.display_name,
        code: this.$store.state.authentication.currentUser.ID
      }
    }

    if (this.$store.state.authentication.athleteToken !== null) {
      athletesApi.getAthleteBy({
        field: 'token',
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

    if (this.$route.query.cancellation_token && this.$route.query.cancellation_token === 'aB03Eckqbnwdfqwe233214mwAMomfMewe332' && this.$route.query.payment_id) {
      paymentsApi.cancelPayment({
        token: this.$store.state.authentication.token,
        cancellationToken: this.$route.query.cancellation_token,
        payment_id: this.$route.query.payment_id,
      }).then((response) => {
        if (response.data.success) {
          this.fetchData();
        }
      });
    }

    this.getTeams();
    this.getParents();
    this.getCost();
  }
}
</script>

<template>
  <Loader :class="{active: entities === null || isLoading}"/>
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
        <form v-if="teams.length > 0 && parents.length > 0 && (action === 'Edit' || action === 'Add')"
              @submit.prevent="formSubmit">
          <div class="form-item-file">
            <span class="form__label">Headshot <sup v-if="this.$store.state.authentication.currentRole === 'parent'">*</sup></span>
            <FormItemFile @file-updated="uploadHeadshot"
                          :input-id="`headshot`"
                          :file-title="`Headshot`"
                          :file-name="this.form.headshotFileName"
                          :required="this.$store.state.authentication.currentRole === 'parent'"/>
          </div>
          <FormItemText :name="`first-name`" :label="`First Name`" :input-type="`text`" :is-required="true"
                        v-model="form.firstName"/>
          <FormItemText :name="`last-name`" :label="`Last Name`" :input-type="`text`" :is-required="true"
                        v-model="form.lastName"/>
          <FormItemText :name="`birthday`" :label="`Birthday`" :input-type="`date`" :is-required="true"
                        v-model="form.birthday"/>
          <FormItemText :name="`current-grade`" :label="`Current grade`" :input-type="`text`" :is-required="false"
                        v-model="form.currentGrade"/>
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
                     :required="true" :disabled="this.$store.state.authentication.currentRole === 'parent'"/>
          </label>
          <div v-if="this.$store.state.authentication.currentRole === 'parent'" class="form-item-file">
            <span class="form__label">Report Card <sup>*</sup></span>
            <FormItemFile @file-updated="uploadCard"
                          :input-id="`report-card`"
                          :file-title="`Card`"
                          :file-name="this.form.cardFileName"
                          :required="true"/>
          </div>
          <div v-if="this.$store.state.authentication.currentRole === 'parent'" class="form-item-file">
            <span class="form__label">Birth certificate/ID <sup>*</sup></span>
            <FormItemFile @file-updated="uploadCertificate"
                          :input-id="`certificate`"
                          :file-title="`Certificate/ID`"
                          :file-name="this.form.certificateFileName"
                          :required="true"/>
          </div>
          <FormItemText :name="`social-link`" :label="`Social link`" :input-type="`text`" :is-required="false"
                        v-model="form.socialLink"/>
          <div class="form__actions">
            <button type="submit" class="button button--lime" :disabled="!isFormValid">Submit</button>
            <span v-if="!isFormValid"
                  class="form__actions-note">Please fill in all required <sup>(*)</sup> fields</span>
          </div>
        </form>
        <div v-if="action === 'Pay for an '" class="payment-info">
          <p class="payment-info__caption">Pay <strong>${{ cost }}</strong> through <img
              src="../assets/images/logo-stripe.svg"
              class="payment-info__stripe-logo" alt="Stripe"></p>
          <button class="button button--lime" @click="pay">Pay</button>
          <div class="payment-info__discount">
            <span class="payment-info__discount-note">Do you have a discount coupon?</span>
            <div class="payment-info__discount-form">
              <input type="text" v-model="coupon" class="payment-info__discount-input"
                     :class="{success: couponResponse.success, error: couponResponse.success === false}">
              <button class="button button--black payment-info__discount-cta" @click="useCoupon">Use coupon</button>
              <p v-if="couponResponse.success !== null" class="payment-info__discount-response"
                 :class="{success: couponResponse.success, error: !couponResponse.success}">
                {{ couponResponse.message || 'Discount successfully applied!' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper entities__wrapper">
      <div class="entities__actions">
        <button type="button" class="button button--lime" @click="isLayoutVisible = true; action = 'Add';">
          Add Athlete
        </button>
      </div>
      <div v-if="entities !== null && entities.length > 0" class="entities__list-holder">
        <ul class="entities__list">
          <li class="entities__item entities__item--athlete">
            <span class="entities__cell">#</span>
            <span class="entities__cell">Athlete</span>
            <span class="entities__cell">Team</span>
            <span class="entities__cell">Parent</span>
            <span class="entities__cell entities__cell--status">Verified Status</span>
            <span class="entities__cell entities__cell--status">Payment status</span>
            <span class="entities__cell">Actions</span>
          </li>
          <li v-for="(entity, index) in entities" :key="entity.ID" :id="entity.ID"
              class="entities__item entities__item--athlete" @click="viewAthlete(entity.slug)">
            <span class="entities__cell">{{ index + 1 }}.</span>
            <span class="entities__cell">{{ entity.first_name }} {{ entity.last_name }}</span>
            <span class="entities__cell">{{ entity.team.post_title }}</span>
            <span class="entities__cell">{{ entity.parent_name }}</span>
            <span class="entities__cell entities__cell-status"
                  :class="`entities__cell-status--${entity.status}`">{{ entity.status }}</span>
            <span class="entities__cell entities__cell-status"
                  :class="`entities__cell-status--${entity.payment_status}`">{{ entity.payment_status }}</span>
            <span class="entities__cell entities__cell--actions">
              <button v-if="entity.payment_status === 'unpaid' && entity.status === 'pending'" type="button"
                      class="entities__action" @click.stop="setupPayment(entity)">Pay</button>
              <button type="button" class="entities__action" @click.stop="edit(entity)">Edit</button>
              <button type="button" class="entities__action" @click.stop="remove(entity.ID)">Remove</button>
            </span>
          </li>
        </ul>
      </div>
      <p v-else-if="entities !== null && entities.length === 0">You don't have associated athletes yet</p>
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

.payment-info {
  padding-top: 20px;
  text-align: center;
}

.payment-info__stripe-logo {
  position: relative;
  top: 13px;
  display: inline-block;
  margin-left: 4px;
  width: 120px;
}

.payment-info__caption {
  margin: 0 0 28px;
  font-size: 20px;
}

.payment-info__discount {
  padding-top: 40px;
}

.payment-info__discount-note {
  font-size: 16px;
}

.payment-info__discount-form {
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 20px;
  margin: auto;
  padding-top: 12px;
}

.payment-info__discount-input {
  -webkit-appearance: none;
  flex-grow: 1;
  display: block;
  height: auto;
  margin: 0;
  padding: 8px 12px;
  box-sizing: border-box;
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  border: 1px solid #a8a8a8;
  outline: none;
  transition: border-color;
}

.payment-info__discount-input.success {
  background-color: rgba(26, 255, 0, 0.1);
}

.payment-info__discount-input.error {
  background-color: rgba(255, 0, 0, 0.1);
}

.payment-info__discount-cta {
  font-size: 13px;
  padding: 10px 12px;
}

.payment-info__discount-response {
  flex-shrink: 0;
  width: 100%;
  margin: 0;
  padding: 10px;
  font-size: 12px;
  text-align: left;
}

.payment-info__discount-response.success {
  color: #167700;
}

.payment-info__discount-response.error {
  color: #770000;
}
</style>
