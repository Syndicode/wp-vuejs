<script setup>
import Logo from '../assets/images/logo-player-key.svg'
import ButtonLink from "../components/ButtonLink.vue";
</script>

<template>
  <div class="home">
    <div class="home__content-holder">
      <img :src="Logo" alt="Player Key ID" class="home__logo">
      <div class="home__content-actions">
        <ButtonLink :href="{name: 'sign-in'}" :button-title="`Sign In`"
                             :button-style="`black`" :class="`header__cta`"/>
        <ButtonLink :href="{name: 'sign-up'}" :button-title="`Sign Up`" :button-style="`lime`"
                    :class="`header__cta`"/>

      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}
.home__logo {
  width: 300px;
}

.home__content-actions {
  display: flex;
  column-gap: 20px;
  padding-top: 20px;
}
</style>
