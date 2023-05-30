<script>
export default {
  name: "ErrorList",
  props: {
    errors: {
      type: Array,
      required: true,
    }
  }
}
</script>

<template>
  <ul class="error-list">
    <li v-for="error in errors" class="error-list__item">
      {{ error }}
    </li>
  </ul>
</template>

<style scoped>
  .error-list {
    list-style-type: none;
    margin: 0 0 40px;
    padding: 20px;
    color: #770000;
    background-color: rgba(255, 0, 0, 0.1);
  }

  .error-list__item {
    margin-bottom: 12px;
  }

  .error-list__item:last-child {
    margin-bottom: 0;
  }
</style>
