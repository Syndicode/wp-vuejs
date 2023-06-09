<script>
export default {
    name: "Footer",
}
</script>

<template>
  <footer class="footer">
      <div class="wrapper footer__wrapper">
          <p class="footer__copyrights">Player Key ID - 2023 | All rights reserved</p>
        <router-link :to="{name: 'sign-up-role', params: {
          role: 'admin',
        }}">Sign Up for Administrators</router-link>
      </div>
  </footer>
</template>

<style scoped>
.footer {
    margin-top: auto;
    padding: 20px 0;
    font-size: 12px;
    text-align: center;
    color: var(--white);
    background-color: var(--rich-black);
}

.footer a {
  display: inline-block;
  color: var(--white);
}
</style>
