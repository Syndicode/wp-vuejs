<script>

import Heading from "../components/Heading.vue";
import {jsPDF} from "jspdf";
import entitiesApi from "../api/entities.js";
import Loader from "../components/Loader.vue";

export default {
  name: 'TeamView',
  components: {
    Loader,
    Heading
  },
  data() {
    return {
      team: null,
      errors: [],
    };
  },
  methods: {
    async printOut() {
      var doc = new jsPDF({
        unit: 'px',
        format: 'a4',
      });
      doc.addImage("/wp-content/themes/player-key/src/assets/images/logo-player-key.png", "JPEG", 140, 40, 187, 110);
      doc.html(document.querySelector('.team__holder'), {
        callback: (doc) => {
          doc.save(this.team.title,);
        },
        x: 15,
        y: 190,
        width: 400,
        windowWidth: 760,
      });
    },
    async fetchData() {
      await entitiesApi.getTeamData({
        token: this.$store.state.authentication.token,
        slug: this.$route.params.slug
      }).then((response) => {
        if (response.data.success) {
          this.team = response.data.data;
        } else {
          this.errors.push(response.data.data)
        }
      });
    }
  },
  mounted() {
    this.fetchData();
  }
}

</script>

<template>
  <Loader :class="{active: team === null}"/>
  <div v-if="team !== null" class="team">
    <div class="wrapper team__wrapper">
      <div class="team__holder">
        <Heading>{{ team.title }}</Heading>
        <ul class="team__athletes" :class="{
        'team__athletes--1': team.athletes.length % 3 === 1,
        'team__athletes--2': team.athletes.length % 2 === 0,
        'team__athletes--3': team.athletes.length % 3 === 0,
      }">
          <li v-for="athlete in team.athletes" :key="athlete.ID" class="team__athlete">
            <RouterLink :to="{name: 'athlete', params: {
            slug: athlete.slug
          }}">
              <h3 class="team__athlete-name">{{ `${athlete.first_name} ${athlete.last_name}` }}</h3>
              <span class="team__athlete-birthday">{{ athlete.birthday }}</span>
              <span class="team__athlete-parent">{{ athlete.parent_name }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
      <button v-if="team.athletes.length > 0" @click="printOut" class="button button--lime team__printout">PrintOut</button>s
    </div>
  </div>
</template>

<style scoped>
.team__athletes {
  list-style-type: none;
  width: 900px;
  margin: 0 auto 40px;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.team__athletes--1:deep(.team__athlete):last-child {
  border-bottom: none;
}

.team__athletes--2:deep(.team__athlete):nth-last-child(-n+2) {
  border-bottom: none;
}

.team__athletes--3:deep(.team__athlete):nth-last-child(-n+3) {
  border-bottom: none;
}

.team__athlete {
  padding: 40px;
  box-sizing: border-box;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.team__athlete:nth-child(3n) {
  border-right: none;
}

.team__athlete:deep(a) {
  color: inherit;
  text-decoration: none;
}

.team__athlete-birthday {
  display: block;
}

.team__athlete-parent {
  display: block;
}

.team__printout {
  display: block;
  width: 140px;
  margin: auto;
}
</style>
