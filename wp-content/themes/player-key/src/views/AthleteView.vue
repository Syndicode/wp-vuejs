<script>
import {jsPDF} from "jspdf";
import Heading from "../components/Heading.vue";
import athletesApi from "../api/athletes.js";
import Loader from "../components/Loader.vue";
import ErrorList from "../components/ErrorList.vue";

export default {
  name: 'AthleteView',
  components: {
    ErrorList,
    Loader,
    Heading
  },
  data() {
    return {
      athlete: null,
      errors: [],
    };
  },
  methods: {
    async downloadVerificationCard() {
      var doc = new jsPDF({
        unit: 'px',
        format: 'a4',
      });
      doc.addImage("/wp-content/themes/player-key/src/assets/images/logo-player-key.png", "JPEG", 140, 40, 187, 110);
      const athleteHtmlContent = document.querySelector('.athlete__content').cloneNode(true);
      athleteHtmlContent.querySelector('.heading').children[0].style.marginRight = '20px';
      athleteHtmlContent.querySelector('.athlete__data-row--report-card').style.display = 'none';
      athleteHtmlContent.querySelector('.athlete__data-row--certificate').style.display = 'none';
      doc.html(athleteHtmlContent.innerHTML, {
        callback: (doc) => {
          doc.save(`${this.athlete.first_name}_${this.athlete.last_name}.pdf`,);
        },
        x: 15,
        y: 190,
        width: 400,
        windowWidth: 760,
      });
    },
    async fetchData() {
      await athletesApi.getAthleteBy({
        field: 'slug',
        token: this.$store.state.authentication.token,
        slug: this.$route.params.slug
      }).then((response) => {
        if (response.data.success) {
          this.athlete = response.data.data;
        } else {
          this.errors.push(response.data.data)
        }
      });
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<template>
  <Loader :class="{active: athlete === null && errors.length === 0}"/>
  <div class="athlete">
    <div class="wrapper athlete__wrapper">
      <ErrorList v-if="errors.length" :errors="errors"/>
      <div v-if="athlete !== null" class="athlete__content-holder">
        <div class="athlete__content">
          <Heading><span>{{ athlete.first_name }}</span> <span>{{ athlete.last_name }}</span></Heading>
          <div class="athlete__data">
            <div class="athlete__data-row">
              <div class="athlete__data-indicator">Birthday</div>
              <div class="athlete__data-value">{{ athlete.birthday }}</div>
            </div>
            <div class="athlete__data-row">
              <div class="athlete__data-indicator">Parent</div>
              <div class="athlete__data-value">{{ athlete.parent_name }}</div>
            </div>
            <div class="athlete__data-row">
              <div class="athlete__data-indicator">Team</div>
              <div class="athlete__data-value">{{ athlete.team.post_title }}</div>
            </div>
            <div class="athlete__data-row">
              <div class="athlete__data-indicator">Coach</div>
              <div class="athlete__data-value">{{ athlete.coach_name }}</div>
            </div>
            <div class="athlete__data-row">
              <div class="athlete__data-indicator">Status</div>
              <div class="athlete__data-value">
              <span class="athlete__status" :class="`athlete__status--${athlete.status}`">{{
                  athlete.status || '-'
                }}</span>
              </div>
            </div>
            <div class="athlete__data-row">
              <div class="athlete__data-indicator">Payment status</div>
              <div class="athlete__data-value">
            <span class="athlete__status"
                  :class="`athlete__status--${athlete.payment_status}`">{{ athlete.payment_status || '-' }}</span>
              </div>
            </div>
            <div class="athlete__data-row athlete__data-row--report-card">
              <div class="athlete__data-indicator">Report card</div>
              <div class="athlete__data-value">
                <a v-if="athlete.card_file" :href="athlete.card_file.url" class="athlete__status-link" target="_blank">View
                  File</a>
              </div>
            </div>
            <div class="athlete__data-row athlete__data-row--certificate">
              <div class="athlete__data-indicator">Birth certificate/ID</div>
              <div class="athlete__data-value">
                <a v-if="athlete.certificate_file" :href="athlete.certificate_file.url" class="athlete__status-link"
                   target="_blank">View File</a>
              </div>
            </div>
          </div>
        </div>
        <button class="button button--lime athlete__cta"
                v-if="athlete.status === 'verified'"
                @click="downloadVerificationCard">Download verification card
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.athlete__data {
  width: 400px;
  margin: 0 auto 40px;
}

.athlete__data-row {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.athlete__data-row:last-child {
  border-bottom: none;
}

.athlete__data-indicator {
  flex-shrink: 0;
  width: 50%;
  padding: 4px 8px 4px 0;
  font-weight: 300;
  font-size: 16px;
  text-align: right;
}

.athlete__data-value {
  flex-shrink: 0;
  width: 50%;
  padding: 4px 0 4px 8px;
  font-weight: 700;
  border-left: 1px solid #ccc;
}

.athlete__status {
  display: block;
  width: 92px;
  padding: 6px 8px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  text-align: center !important;
  border-radius: 50px;
}

.athlete__status:first-letter {
  text-transform: uppercase;
}

.athlete__status--incomplete,
.athlete__status--unpaid {
  color: #000000;
  background-color: rgba(217, 217, 217, 0.3);
}

.athlete__status--pending {
  color: rgba(0, 25, 35, 0.8);
  background-color: rgba(200, 250, 0, 0.3);
}

.athlete__status--paid,
.athlete__status--verified {
  color: var(--rich-black);
  background-color: var(--fresh-lime);
}

.athlete__status--canceled,
.athlete__status--rejected {
  color: var(--white);
  background-color: var(--rich-black);
}

.athlete__status-link {
  color: var(--rich-black);
}

.athlete__cta {
  display: block;
  width: 280px;
  margin: auto;
}
</style>
