<script>
import BoardNavigation from "../components/BoardNavgation.vue";
import Teams from "../components/Teams.vue";
import Athletes from "../components/Athletes.vue";
import Parents from "../components/Parents.vue";
import Coaches from "../components/Coaches.vue";
import Board from "../components/Board.vue";
import Payments from "../components/Payments.vue";
import Loader from "../components/Loader.vue";

export default {
  components: {
    Loader,
    Payments,
    Board,
    Teams,
    BoardNavigation,
    Athletes,
    Parents,
    Coaches,
  },
  data() {
    return {
      isLoaded: this.$store.state.authentication.isUserLoggedIn,
      currentRole: this.$store.state.authentication.currentRole,
      currentEntity: this.$route.params.entity,
      entities: null,
      entitiesScheme: {
        coach: [
          'teams',
          'parents',
          'athletes',
          'payments',
        ],
        administrator: [
          'teams',
          'parents',
          'athletes',
          'payments',
        ],
        parent: [
          'athletes',
          'payments',
        ],
      },
    }
  },
  mounted() {
    if (!this.$store.state.authentication.isUserLoggedIn) {
      this.$router.push({name: 'sign-in'});
    }
  },
}
</script>

<template>
  <Loader :class="{active: !this.$store.state.authentication.isUserLoggedIn}"/>
  <div v-if="this.$store.state.authentication.isUserLoggedIn" class="board">
    <BoardNavigation :user="this.$store.state.authentication.currentUser" :entities="entitiesScheme[currentRole]"/>
    <div v-if="entitiesScheme[currentRole].includes(this.$route.params.entity)" class="board__view">
      <Teams v-if="this.$route.params.entity === 'teams'"
             :user-id="this.$store.state.authentication.currentUserId"
             :current-role="currentRole"/>
      <Athletes v-else-if="this.$route.params.entity === 'athletes'"
                :current-user-id="this.$store.state.authentication.currentUserId"
                :current-role="currentRole"/>
      <Parents v-else-if="this.$route.params.entity === 'parents'"
               :user-id="this.$store.state.authentication.currentUserId"
               :current-role="currentRole"/>
      <Coaches v-else-if="this.$route.params.entity === 'coaches'"
               :user-id="this.$store.state.authentication.currentUserId"
               :current-role="currentRole"/>
      <Payments v-else-if="this.$route.params.entity === 'payments'"
                :user-id="this.$store.state.authentication.currentUserId"
                :current-role="currentRole"/>
    </div>
    <Board v-else
           :user="this.$store.state.authentication.currentUser"
           :current-role="currentRole"/>
  </div>
</template>

<style scoped>

</style>
