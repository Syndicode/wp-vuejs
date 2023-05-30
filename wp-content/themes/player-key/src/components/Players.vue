<script>
  import Heading from "./Heading.vue";

  export default {
    name: "Players",
    components: {Heading},
    mounted() {
      console.log('Players mounted');
    }
  }
</script>

<template>
  <div class="wrapper">
    <Heading :level="1">Players</Heading>
    <ul class="entities-list">
      <li class="entities-list__item">

      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
