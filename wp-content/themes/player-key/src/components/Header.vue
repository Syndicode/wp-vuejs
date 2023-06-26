<script>
import ButtonLink from "./ButtonLink.vue";
import MainNavigation from "./MainNavigation.vue";

export default {
  components: {
    MainNavigation,
    ButtonLink,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout', localStorage.getItem('pki-auth'))
          .then(response => {
            this.$router.push({name: 'sign-in'})
          });
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
  }
}


</script>

<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <RouterLink :to="{name: 'home'}" :class="`header__logo-holder`">
        <img src="../assets/images/logo-player-key.svg" alt="Player Key ID" class="header__logo">
      </RouterLink>
      <MainNavigation/>
      <div class="header__actions">
        <div v-if="isLoaded && !this.$store.state.authentication.isUserLoggedIn" class="header__actions">
          <ButtonLink :href="{name: 'sign-in'}" :button-title="`Sign In`"
                      :button-style="`black`" :class="`header__cta`"/>
          <ButtonLink :href="{name: 'sign-up'}" :button-title="`Sign Up`" :button-style="`white`"
                      :class="`header__cta`"/>
        </div>
        <div v-else-if="isLoaded && this.$store.state.authentication.isUserLoggedIn" class="header__actions">
          <div class="header__cta-holder">
            <ButtonLink :href="{name: 'board'}" :button-title="`Board`"
                        :button-style="`black`" :class="`header__cta`"/>
            <span v-if="this.$store.state.notification.newNotifications" class="header__notifications-counter">{{ this.$store.state.notification.newNotifications }}</span>
          </div>
          <button @click="this.logout" class="header__action-logout">Logout</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: block;
  width: 100%;
  padding: 16px 0;
  background-color: var(--fresh-lime);
}

.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo-holder {
  display: block;
  width: 120px;
}

.header__logo {
  display: block;
  width: 100%;
  height: auto;
}

.header__actions {
  display: flex;
  align-items: center;
  column-gap: 12px;
  min-width: 192px;
}

.header__action-logout {
  -webkit-appearance: none;
  display: block;
  width: auto;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--rich-black);
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  line-height: 1;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 1px dashed var(--rich-black);
  cursor: pointer;
}

.header__cta-holder {
  position: relative;
}

.header__notifications-counter {
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  font-size: 14px;
  font-weight: 900;
  color: white;
  background-color: red;
  border-radius: 50%;
}
</style>
