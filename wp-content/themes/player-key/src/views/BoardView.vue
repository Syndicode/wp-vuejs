<script>
import BoardNavigation from "../components/BoardNavgation.vue";
import Teams from "../components/Teams.vue";
import Athletes from "../components/Athletes.vue";
import Parents from "../components/Parents.vue";
import Coaches from "../components/Coaches.vue";
import Board from "../components/Board.vue";

export default {
  components: {
    Board,
    Teams,
    BoardNavigation,
    Athletes,
    Parents,
    Coaches,
  },
  computed: {
    isLoaded() {
      return this.$store.state.authentication.isUserLoggedIn
    },
    currentRole() {
      return this.$store.state.authentication.currentRole
    },
  },
  // async beforeRouteUpdate(to, from) {
  //   this.currentEntity = to.params.entity;
  //   this.fetchData();
  // },
  data() {
    return {
      // isLoaded: this.$store.state.authentication.isUserLoggedIn,
      // currentRole: this.$store.state.authentication.currentRole,
      currentEntity: this.$route.params.entity,
      entities: null,
      entitiesScheme: {
        coach: [
          'teams',
          'parents',
          'athletes'
        ],
        admin: [
          'coaches',
          'teams',
          'parents',
          'athletes'
        ],
        parent: [
          'athletes'
        ],
      },
    }
  },
  // mounted() {
  //   this.
  // },
  methods: {
    // async fetchData() {
    //   this.entities = await entitiesApi.getEntitles({
    //     entityType: this.currentEntity,
    //     token: this.$store.state.authentication.token,
    //   })
    //   console.log(this.entities);
    // },
  },
}
</script>

<template>
  <div v-if="isLoaded" class="board">
    <BoardNavigation :entities="entitiesScheme[currentRole]"/>
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
    </div>
    <Board v-else/>
  </div>
</template>

<style scoped>

</style>
