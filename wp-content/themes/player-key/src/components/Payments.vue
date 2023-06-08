<script>
import Heading from "./Heading.vue";
import paymentsApi from "../api/payments.js";

export default {
  components: {
    Heading,
  },
  props: {
    currentUserId: {
      type: Number,
    },
    currentRole: {
      type: Boolean,
    }
  },
  data() {
    return {
      entities: null,
    };
  },
  methods: {
    async fetchData() {
      await paymentsApi.getPayments({
        token: this.$store.state.authentication.token,
        currentRole: this.currentRole,
      }).then((response) => {
        if (response.data.success) {
          this.entities = response.data.data
        }
      });
    },
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<template>
  <Heading :level="1">Payments</Heading>
  <div class="entities">
    <div class="wrapper entities__wrapper">
      <ul v-if="entities" class="entities__list">
        <li class="entities__item entities__item--payment">
          <span class="entities__cell">#</span>
          <span class="entities__cell">Payment ID</span>
          <span class="entities__cell">Athlete</span>
          <span class="entities__cell">DateTime</span>
          <span class="entities__cell">Status</span>
        </li>
        <li v-for="(entity, index) in entities" :key="entity.ID" class="entities__item entities__item--payment">
          <span class="entities__cell">{{ index + 1 }}.</span>
          <span class="entities__cell">{{ entity.ID }}</span>
          <span class="entities__cell">{{ entity.athlete }}</span>
          <span class="entities__cell">{{ entity.date }}</span>
          <span class="entities__cell entities__payment-status" :class="`entities__payment-status--${entity.status}`">{{ entity.status }}</span>
        </li>
      </ul>
      <p v-else>You haven't created any payments yet</p>
    </div>
  </div>
</template>

<style>

</style>
