<script>
import wordpressApi from "../api/wordpress";
import Heading from "../components/Heading.vue";

export default {
  name: "PageView",
  components: {Heading},
  data() {
    return {
      title: '',
      content: ''
    };
  },
  watch: {
    '$route'() {
      this.fetchData();
    }
  },
  methods: {
    async fetchData() {
      await wordpressApi.getPageBy('slug', this.$route.params.slug).then((response) => {
        if (response && response.data.length) {
          const data = response.data[0];
          this.title = data.title.rendered;
          this.content = data.content.rendered;
        }
      })
    }
  },
  mounted() {
    this.fetchData();
  }
}

</script>

<template>
  <article class="article">
    <div class="wrapper article__wrapper">
      <Heading :class="`article__heading`">{{ title }}</Heading>
      <div v-html="content" class="article__content"></div>
    </div>
  </article>
</template>

<style scoped>
.article__wrapper {
  text-align: left;
}

.article__content:deep(a) {
  color: inherit;
}

@media (min-width: 1280px) {
  .article__wrapper {
    max-width: 900px;
  }
}
</style>
