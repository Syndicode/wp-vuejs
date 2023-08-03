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
      isMainNavigationActive: false,
    };
  },
  watch: {
    $route() {
      this.isMainNavigationActive = false;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout', localStorage.getItem('pki-auth'))
          .then(response => {
            this.$router.push({name: 'sign-in'})
          });
    },
    toggleMainNavigation() {
      this.isMainNavigationActive = !this.isMainNavigationActive;
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
      <MainNavigation :is-active="isMainNavigationActive"/>
      <button class="hamburger hamburger--3dx" :class="{'is-active': isMainNavigationActive}" @click="toggleMainNavigation">
        <span class="hamburger-box"><span class="hamburger-inner"></span></span>
      </button>
      <div class="header__actions-holder" :class="{'header__actions-holder--active': isMainNavigationActive}">
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
            <span v-if="this.$store.state.notification.newNotifications"
                  class="header__notifications-counter">{{ this.$store.state.notification.newNotifications }}</span>
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
  padding: 12px 0;
  background-color: var(--fresh-lime);
}

.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo-holder {
  flex-shrink: 0;
  display: block;
  width: 100px;
}

.header__logo {
  display: block;
  width: 100%;
  height: auto;
}

.header__actions-holder {
  display: none;
  position: fixed;
  top: 112px;
  left: 0;
  z-index: 11;
  justify-content: center;
  width: 100%;
}

.header__actions-holder--active {
  display: flex;
}

.header__actions {
  display: flex;
  align-items: center;
  column-gap: 12px;
}

.hamburger {
  padding: 4px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  transform: scale(0.8);
}

.hamburger:hover {
  opacity: 0.7;
}

.hamburger.is-active:hover {
  opacity: 0.7;
}

.hamburger.is-active:deep(.hamburger-inner),
.hamburger.is-active:deep(.hamburger-inner::before),
.hamburger.is-active:deep(.hamburger-inner::after) {
  background-color: #000;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -10px;
}

.hamburger-inner::after {
  bottom: -10px;
}

.hamburger--3dx:deep(.hamburger-box) {
  perspective: 80px;
}

.hamburger--3dx:deep(.hamburger-inner) {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger--3dx:deep(.hamburger-inner::before),
.hamburger--3dx:deep(.hamburger-inner::after) {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger--3dx.is-active:deep(.hamburger-inner) {
  background-color: transparent !important;
  transform: rotateY(180deg);
}

.hamburger--3dx.is-active:deep(.hamburger-inner::before) {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}

.hamburger--3dx.is-active:deep(.hamburger-inner::after) {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}

@media (min-width: 1024px) {
  .header {
    padding: 16px 0;
  }

  .header__logo-holder {
    width: 120px;
  }

  .header__actions-holder {
    position: relative;
    top: auto;
    left: auto;
    width: auto;
    display: block;
    z-index: 1;
  }

  .header__actions {
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

  .hamburger {
    display: none;
  }
}
</style>
