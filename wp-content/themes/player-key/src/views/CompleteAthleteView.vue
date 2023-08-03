<script>

import Loader from "../components/Loader.vue";
import ErrorList from "../components/ErrorList.vue";
import authApi from "../api/authentication.js";

export default {
  name: "CompleteParentView",
  components: {
    ErrorList,
    Loader,
  },
  data() {
    return {
      errors: [],
      isLoaderActive: true,
    };
  },
  methods: {
    async checkUser() {
      authApi.checkUser(localStorage.getItem('pki-auth')).then((response) => {
        if (response.data.success) {
          const user = response.data.data;
          if (user.ID === parseInt(this.$route.query.id)) {
            this.$store.commit('setAthleteForEdit', {
              token: this.$route.query.token,
              id: this.$route.query.id
            });
            this.$router.push({
              name: 'board-entity',
              params: {
                entity: 'athletes'
              },
            })
          } else {
            this.isLoaderActive = false;
            this.errors.push('There are not enough permissions to perform this action');
          }
        } else {
          this.$store.commit('setAthleteForEdit', {
            token: this.$route.query.token,
            id: this.$route.query.id
          });

          this.$router.push({
            name: 'sign-in',
          })
        }
      })
    }
  },
  mounted() {
    this.checkUser();
  },
  watch: {
    isLoaded(status) {
      if (status === true && this.$store.state.authentication.currentUser.ID === parseInt(this.$route.query.id)) {
        this.$store.commit('setAthleteForEdit', {
          token: this.$route.query.token,
          id: this.$route.query.id
        });
        this.$router.push({
          name: 'board-entity',
          params: {
            entity: 'athletes'
          },
        })
      } else if (status === true && this.$store.state.authentication.currentUser.ID !== this.$route.query.id) {
        this.isLoaderActive = false;
        this.errors.push('There are not enough permissions to perform this action');
      } else if (status === false) {
        console.log('status - ', status);
        this.$store.commit('setAthleteForEdit', {
          token: this.$route.query.token,
          id: this.$route.query.id
        });

        this.$router.push({
          name: 'sign-in',
        })
      }
    },
  }
}
</script>

<template>
  <Loader :class="{active: isLoaderActive}"/>
  <div class="wrapper wrapper--form">
    <ErrorList v-if="errors.length" :errors="errors"/>
  </div>
</template>

<style scoped>

</style>
