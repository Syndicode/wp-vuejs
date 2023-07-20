<script>
import Heading from "./Heading.vue";
import authApi from "../api/authentication.js";
import FormItemText from "./FormItemText.vue";
import Loader from "./Loader.vue";
import formFields from "../views/data/formFields.js"
import ErrorList from "./ErrorList.vue";
import MessageList from "./MessageList.vue";
import RoleSwitcher from "./RoleSwitcher.vue";
import Notifications from "./Notifications.vue";

export default {
  name: 'Profile',
  components: {
    Notifications,
    ErrorList,
    FormItemText,
    Heading,
    Loader,
    MessageList,
    RoleSwitcher,
  },
  data() {
    const formData = {};
    formFields[this.$store.state.authentication.currentRole].forEach((section) => {
      section.fields.forEach((field) => {
        formData[field.model] = ''

        if (field.model === 'email') {
          field.note = `You can change your email, but your current login (${this.$store.state.authentication.currentUser.user_login}) will remain the same.`;
        }

        if (field.model === 'password') {
          field.note = `If you don't want to change your password, leave these fields blank.`;
        }
      });
    });

    formData.role = this.$store.state.authentication.currentRole;
    formData.multipleRoles = false;
    formData.roles = [];

    return {
      errors: [],
      entities: null,
      form: formData,
      formFields: formFields,
      isFormValid: false,
      isLayoutVisible: false,
      isSubmitting: false,
      isLoading: false,
      messages: [],
      user: this.$store.state.authentication.currentUser,
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
    checkPasswords() {
      if (this.form.password !== '') {
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
      }

      return true
    },
    closeLayout() {
      this.isLayoutVisible = false;
      this.errors = [];
    },
    isRequiredFieldsFiled() {
      const requiredFields = {
        coach: [
          'firstName',
          'lastName',
          'team',
          'parent',
          'birthday',
          'email',
        ],
        parent: [
          'firstName',
          'lastName',
          'email',
        ],
      }

      let isFiled = true;

      requiredFields[this.$store.state.authentication.currentRole].forEach((fieldName) => {
        if (this.form[fieldName] === '') {
          isFiled = false;
        }
      });

      // if (this.form.password !== '' && this.form.password !== this.form.passwordRepeat || (this.form.password === '' && this.form.passwordRepeat !== '')) {
      //   isFiled = false;
      // }

      if (this.form.multipleRoles && this.form.roles.length === 1) {
        isFiled = false;
      }

      return isFiled;
    },
    async formSubmit() {
      this.isSubmitting = true;
      this.errors = [];
      this.messages = [];

      if (this.checkPasswords()) {
        await authApi.editUser({
          token: this.$store.state.authentication.token,
          currentRole: this.$store.state.authentication.currentRole,
          form: this.form
        }).then((response) => {
          if (response.data.success) {
            this.$store.commit('editUserSuccess', response.data.data)
            this.messages.push('Your data has been updated successfully!');
            this.isLayoutVisible = false;
            this.fetchData();
          } else {
            this.errors.push(response.data.data)
          }
          this.isSubmitting = false;
        });
      } else {
        this.isSubmitting = false;
      }
    },
    async fetchData() {
      await authApi.getRoleStatistics({
        currentRole: this.$store.state.authentication.currentRole,
        token: this.$store.state.authentication.token,
      }).then((response) => {
        if (response.data.success) {
          this.entities = response.data.data
        }
        this.isLoading = false;
      });
    },
    setRoles(data) {
      this.form.multipleRoles = data.option;
      this.form.roles = data.checkedRoles;
    },
    setUserFormData() {
      this.form.firstName = this.user['first_name'];
      this.form.lastName = this.user['last_name'];
      this.form.email = this.user['email'];

      if (this.$store.state.authentication.currentRole === 'coach') {
        let birthday = new Date(this.user['birthday']);
        this.form.birthday = `${birthday.getFullYear()}-${birthday.getMonth() < 10 ? '0' + (birthday.getMonth() + 1) : birthday.getMonth() + 1}-${birthday.getDate()}`;
        this.form.address = this.user['address'];
        this.form.town = this.user['town'];
        this.form.state = this.user['state'];
        this.form.zipCode = this.user['zip_code'];
      }
    },
    changeRole() {
      this.isLoading = true;
      this.$store.dispatch('changeUserRole', {
        token: this.$store.state.authentication.token,
        role: this.$store.state.authentication.currentRole === 'coach' ? 'parent' : 'coach',
      }).then(() => {
        this.fetchData();
        this.$store.dispatch('getNotifications', {
          token: this.$store.state.authentication.token,
          currentRole: this.$store.state.authentication.currentRole,
        });
      });
    }
  },
  mounted() {
    this.fetchData();
    this.setUserFormData();
  }
}
</script>

<template>
  <Loader :class="{active: entities === null || isLoading}"/>
  <div class="board">
    <div class="wrapper board__wrapper">
      <ErrorList v-if="this.$store.state.authentication.validationErrors.length"
                 :errors="this.$store.state.authentication.validationErrors"/>
      <div class="entities__layout" :class="{active: isLayoutVisible}">
        <Loader :class="{active: isSubmitting}"/>
        <button class="entities__close-button" @click="closeLayout">
          <svg viewBox="0 0 50 50">
            <path
                d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
          </svg>
        </button>
        <div class="entities__layout-inner">
          <Heading :level="2">Edit personal data</Heading>
          <ErrorList v-if="errors.length" :errors="errors"/>
          <form @submit.prevent="formSubmit">
            <RoleSwitcher :initial-role="user.initial_role" :user-roles="user.roles" @changeOption="setRoles"/>
            <div v-for="(section, index) in formFields[this.$store.state.authentication.currentRole]"
                 class="form__fieldset">
              <Heading :level="3" :align="`left`" :class="`form__fieldset-title`">
                {{ `${index + 1}. ${section.title}` }}
              </Heading>
              <FormItemText v-for="formField in section.fields"
                            :name="formField.name"
                            :is-required="formField.isRequired && formField.type !== 'password'"
                            :label="formField.label"
                            :input-type="formField.type"
                            :css-modifier="formField.cssModifier ?? formField.cssModifier"
                            :note="formField.note"
                            v-model="form[formField.model]"/>
            </div>
            <div class="form__actions">
              <button type="submit" class="button button--lime" :disabled="!isFormValid">Submit</button>
              <span v-if="!isFormValid"
                    class="form__actions-note">Please fill in all required <sup>(*)</sup> fields</span>
            </div>
          </form>
        </div>
      </div>
      <MessageList v-if="messages.length > 0" :messages="messages" :type="`success`"/>
      <Heading :level="1">Board {{ test }}</Heading>
      <h2 class="board__account-name">{{ user.display_name }}
        <button class="board__account-edit" @click="() => {this.isLayoutVisible = true;}">Edit</button>
      </h2>
      <div v-if="Object.keys(this.$store.state.authentication.currentUser.roles).length > 1" class="board__roles-toggle"
           :class="{coach: this.$store.state.authentication.currentRole === 'coach', parent: this.$store.state.authentication.currentRole === 'parent'}"
           @click="changeRole">
        <span class="board__role"
              :class="{active: this.$store.state.authentication.currentRole === 'coach'}">Coach</span>
        <span class="board__role"
              :class="{active: this.$store.state.authentication.currentRole === 'parent'}">Parent</span>
      </div>
      <Notifications :type="`new`" v-if="this.$store.state.notification.newNotifications"/>
      <div class="board__entities">
        <div v-for="(entity, key) in entities" class="board__entity">
          <RouterLink :to="{name: 'board-entity', params: {
            entity: key,
        }}">
            <h3 class="board__entity-title">{{ key }}
              <span>{{ key }}</span></h3>
            <span class="board__entity-count">{{ entity }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board__account-name {
  position: relative;
  top: -60px;
  margin: 0 0 40px;
  text-align: center;
  font-size: 52px;
  font-weight: 900;
}

.board__entity {
  flex-shrink: 1;
  position: relative;
  width: 200px;
  margin: 0 auto 28px;
  height: 300px;
  padding: 24px 20px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: var(--fresh-lime);
  overflow: hidden;
}

.board__entity:deep(a) {
  color: inherit;
  text-decoration: none;
  transition: opacity 0.4s ease;
}

.board__entity:deep(a):hover {
  opacity: 0.7;
}

.board__entity-title {
  display: block;
  text-align: left;
  font-weight: 300;
  text-transform: uppercase;
}

.board__entity-title span {
  position: absolute;
  top: -8px;
  left: -6px;
  font-weight: 900;
  font-size: 72px;
  text-transform: uppercase;
  color: var(--rich-black);
  opacity: 0.05;
  transition: all 0.4s ease;
}

.board__entity-count {
  display: block;
  padding-top: 40px;
  font-size: 100px;
  font-weight: 900;
  text-align: center;
}

.board__account-edit {
  -webkit-appearance: none;
  position: relative;
  top: -32px;
  margin: 0;
  padding: 0 0 1px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 400;
  border: none;
  color: #5b5b5b;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 1px dashed #5b5b5b;;
  cursor: pointer;
}

.board__roles-toggle {
  position: relative;
  top: -72px;
  display: flex;
  width: 220px;
  margin: auto;
  padding: 10px 0;
  justify-content: center;
  border-radius: 50px;
  background-color: rgba(217, 217, 217, 0.4);
  cursor: pointer;
}

.board__roles-toggle::before {
  content: '';
  position: absolute;
  top: 0;
  display: block;
  width: 50%;
  height: 100%;
  border-radius: 50px;
  background-color: var(--rich-black);
  transition: all 0.4s ease;
}

.board__roles-toggle.coach::before {
  left: 0;
}

.board__roles-toggle.parent::before {
  left: 50%;
}

.board__role {
  position: relative;
  flex-shrink: 0;
  display: block;
  width: 50%;
  border-radius: 50px;
  text-align: center;
  font-size: 12px;
  color: #7a7a7a;
  text-transform: uppercase;
  transition: all 0.4s ease;
}

.board__role.active {
  color: #fff;
}

@media (min-width: 1024px) {
  .board__entities {
    display: flex;
    column-gap: 60px;
    justify-content: center;
  }

  .board__entity {
    margin: 0;
  }
}
</style>
