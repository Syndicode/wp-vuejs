<script>
import Heading from "./Heading.vue";
import {object} from "../../../../../wp-includes/js/dist/redux-routine.js";
import entitiesApi from "../api/entities.js";

export default {
  name: "Profile",
  components: {
    Heading
  },
  props: {
    user: {
      type: Object,
      required: 1,
    },
    currentRole: {
      type: String,
      required: 1,
    },
  },
  data() {
    return {
      entities: [],
    };
  },
  methods: {
    async fetchData() {
      await entitiesApi.getRoleStatistics({
        token: this.$store.state.authentication.token,
      }).then((response) => {
        if (response.data.success) {
          this.entities = response.data.data
        }
      });
    },
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<template>
  <div class="board">
    <div class="wrapper board__wrapper">
      <Heading :level="1">Board</Heading>
      <h2 class="board__account-name">{{ user.data.display_name }}</h2>
      <div class="board__entities">
        <!--        <div class="board__entity">-->
        <!--          <h3 class="board__entity-title">Notifications-->
        <!--            <span>Notifications</span>-->
        <!--          </h3>-->
        <!--          <span class="board__entity-count">1</span>-->
        <!--        </div>-->
        <div v-for="(entity, key) in entities" class="board__entity">
          <h3 class="board__entity-title">{{ key }}
            <span>{{ key }}</span></h3>
          <span class="board__entity-count">{{ entity }}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.board__account-name {
  position: relative;
  top: -60px;
  margin: 0 0 40px;
  text-align: center;
  font-size: 52px;
  font-weight: 900;
}

.board__entities {
  display: flex;
  column-gap: 60px;
  justify-content: center;
}

.board__entity {
  flex-shrink: 1;
  position: relative;
  width: 200px;
  height: 300px;
  padding: 24px 20px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: var(--fresh-lime);
  overflow: hidden;
}

.board__entity-title {
  display: block;
  text-align: left;
  font-weight: 300;
  text-transform: uppercase;
}

.board__entity-title span {
  position: absolute;
  top: -8px;
  left: -6px;
  font-weight: 900;
  font-size: 72px;
  text-transform: uppercase;
  color: var(--rich-black);
  opacity: 0.05;
  transition: all 0.4s ease;
}

.board__entity-count {
  display: block;
  padding-top: 40px;
  font-size: 100px;
  font-weight: 900;
  text-align: center;
}
</style>
