<script>
import ButtonLink from "./ButtonLink.vue";
import MainNavigation from "./MainNavigation.vue";

export default {
  components: {
    MainNavigation,
    ButtonLink,
  },
  methods: {
    logout() {
      this.$store.dispatch('logout', localStorage.getItem('pki-auth'))
          .then(response => {
            this.$router.push({name: 'sign-in'})
          });
    }
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
        <div v-if="!this.$store.state.authentication.isUserLoggedIn" class="header__actions">
          <ButtonLink :href="{name: 'sign-in'}" :button-title="`Sign In`"
                      :button-style="`black`" :class="`header__cta`"/>
          <ButtonLink :href="{name: 'sign-up'}" :button-title="`Sign Up`" :button-style="`white`"
                      :class="`header__cta`"/>
        </div>
        <div v-else class="header__actions">
          <ButtonLink :href="{name: 'board'}" :button-title="`Board`"
                      :button-style="`black`" :class="`header__cta`"/>
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
</style>
