<script>
export default {
  name: "MessageList",
  props: {
    type: {
      type: String,
      required: true,
      default: 'error'
    },
    messages: {
      type: Array,
      required: true,
    }
  }
}
</script>

<template>
  <ul class="message-list" :class="`message-list--${type}`">
    <li v-for="message in messages" class="error-list__item">
      <div v-html="message"></div>
    </li>
  </ul>
</template>

<style scoped>
.message-list {
  list-style-type: none;
  margin: 0 0 40px;
  padding: 20px;
}

.message-list--error {
  color: #770000;
  background-color: rgba(255, 0, 0, 0.1);
}

.message-list--success {
  color: #167700;
  background-color: rgba(26, 255, 0, 0.1);
}

.message-list__item {
  margin-bottom: 12px;
}

.message-list__item:last-child {
  margin-bottom: 0;
}
</style>
