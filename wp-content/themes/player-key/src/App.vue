<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header/>
  <main>
    <RouterView/>
  </main>
  <Footer/>
</template>


<style>
main {
  padding: 60px 0;
}

@media (min-width: 1024px) {
  main {
    padding: 80px 0;
  }
}

@media (min-width: 1280px) {
  main {
    padding: 100px 0;
  }
}
</style>
