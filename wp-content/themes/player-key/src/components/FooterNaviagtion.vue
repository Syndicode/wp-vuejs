<script>
import wordpressApi from "../api/wordpress.js"

export default {
  name: "FooterNavigation",
  data() {
    return {
      navigationItems: [],
    };
  },
  methods: {
    async fetchData() {
      await wordpressApi.getNavMenu(3)
          .then((response) => {
            if (response.data.success) {
              this.navigationItems = response.data.data;
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
  <nav class="footer-navigation">
    <ul class="footer-navigation__list">
      <li v-for="navigationItem in navigationItems" :key="navigationItem.url">
        <RouterLink :to="{path: navigationItem.url}" class="footer-navigation__link">{{ navigationItem.title }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.footer-navigation {
  display: block;
}

.footer-navigation__list {
  list-style-type: none;
  display: flex;
  justify-content: center;
  column-gap: 20px;
  margin: 0;
  padding: 0;
}

.footer-navigation__link {
  color: var(--white);
  font-size: 12px;
}
</style>
