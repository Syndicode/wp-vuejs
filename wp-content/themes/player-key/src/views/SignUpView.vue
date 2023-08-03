<script>
import Heading from "../components/Heading.vue";

export default {
  name: "RegisterView",
  components: {
    Heading,
  },
  methods: {
    setChosenRole(roleTitle) {
      this.chosenRole = roleTitle;
    },
    goTo() {
      this.$router.push({
        name: 'sign-up-role',
        params: {
          role: this.chosenRole.toLowerCase(),
        }
      });
    }
  },
  data() {
    return {
      chosenRole: null,
      roles: [
        {
          title: 'Coach',
          benefits: [
            'Coach or Team Admin verifying athletes for a team or club',
          ]
        },
        {
          title: 'Parent',
          benefits: [
            'Parent verifying individual athlete',
          ]
        },
      ],
    };
  }
}
</script>

<template>
  <div class="wrapper">
    <Heading>Sign Up</Heading>
    <div class="register-roles">
      <p class="register-roles__caption">Please choose your <strong>role</strong>:</p>
      <div v-for="role in roles"
           @click="setChosenRole(role.title)"
           class="register-roles__item"
           :class="{'register-roles__item--active': role.title === chosenRole}">
        <span class="register-roles__item-role">{{ role.title }}</span>
        <Heading :level="3" :align="`left`" :class="`register-roles__item-heading`">
          {{ role.title }}
        </Heading>
        <ul class="register-roles__benefits">
          <li v-for="benefit in role.benefits" class="register-roles__benefit">{{ benefit }}</li>
        </ul>
      </div>
    </div>
    <div class="register-roles__links">
      <RouterLink :to="{name: 'sign-in'}">Already Registered?</RouterLink>
    </div>
    <div class="register-roles__actions">
      <button class="button button--lime"
              type="button"
              @click="goTo"
              :disabled="chosenRole === null">
        Continue
      </button>
    </div>
  </div>
</template>

<style>
.register-roles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 100px;
  margin-bottom: 40px;
}

.register-roles__caption {
  flex-shrink: 1;
  position: relative;
  top: -68px;
  display: block;
  width: 100%;
  margin: 0 0 40px;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
}

.register-roles__caption::after {
  content: '';
  position: absolute;
  top: 28px;
  left: calc(50% - 6px);
  display: block;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  border-right: 4px solid var(--fresh-lime);
  border-bottom: 4px solid var(--fresh-lime);
}


.register-roles__item {
  position: relative;
  padding: 40px 32px;
  box-sizing: border-box;
  /*border: 1px solid #ccc;*/
  cursor: pointer;
  transition: all 0.4s ease;
}

.register-roles__item-heading {
  transition: all 0.4s ease;
}

.register-roles__item-role {
  position: absolute;
  top: -20px;
  left: 0;
  font-weight: 900;
  font-size: 80px;
  text-transform: uppercase;
  color: var(--rich-black);
  opacity: 0.05;
  transition: all 0.4s ease;
}

.register-roles__item--active .register-roles__item-role {
  color: var(--rich-black);
  opacity: 0.9;
  transform: translateY(8px);
}

.register-roles__item--active .register-roles__item-heading {
  transform: translateY(24px);
  opacity: 0;
}

.register-roles__item--active .register-roles__benefits {
  color: var(--rich-black);
  transform: translateX(-20px);
}

.register-roles__benefits {
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #a2a2a2;
  transition: all 0.4s ease;
}

.register-roles__benefit {
  margin: 0 0 8px;
}

.register-roles__benefit:last-child {
  margin-bottom: 0;
}

.register-roles__actions {
  display: flex;
  justify-content: center;
}

.register-roles__links {
  width: 900px;
  margin: auto;
  text-align: right;
  font-size: 14px;
}

.register-roles__links a {
  color: var(--rich-black)
}
</style>
