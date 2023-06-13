<script>
import FooterNavigation from "./FooterNaviagtion.vue";

export default {
  name: "Footer",
  components: {FooterNavigation},
}
</script>

<template>
  <footer class="footer">
    <div class="wrapper footer__wrapper">
      <p class="footer__copyrights">Player Key ID - 2023 | All rights reserved</p>
      <FooterNavigation/>
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
</style>
