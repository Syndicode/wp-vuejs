<script>
import BoardNavigation from "../components/BoardNavgation.vue";
import Teams from "../components/Teams.vue";
import Athletes from "../components/Athletes.vue";
import Parents from "../components/Parents.vue";
import Board from "../components/Board.vue";
import Payments from "../components/Payments.vue";
import Loader from "../components/Loader.vue";

export default {
  components: {
    Athletes,
    Board,
    BoardNavigation,
    Loader,
    Parents,
    Payments,
    Teams,
  },
  data() {
    return {
      currentEntity: this.$route.params.entity,
      entities: null,
      entitiesScheme: {
        coach: [
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
      isLoaded: this.$store.state.authentication.isUserLoggedIn,
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
    <BoardNavigation :entities="entitiesScheme[this.$store.state.authentication.currentRole]"/>
    <div v-if="entitiesScheme[this.$store.state.authentication.currentRole].includes(this.$route.params.entity)"
         class="board__view">
      <Teams v-if="this.$route.params.entity === 'teams'"/>
      <Athletes v-else-if="this.$route.params.entity === 'athletes'"/>
      <Parents v-else-if="this.$route.params.entity === 'parents'"/>
      <Payments v-else-if="this.$route.params.entity === 'payments'"/>
    </div>
    <Board v-else/>
  </div>
</template>
