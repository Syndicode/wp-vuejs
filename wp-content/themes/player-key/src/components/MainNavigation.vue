<script>
import wordpressApi from "../api/wordpress.js"

export default {
  name: "MainNavigation",
  props: {
    isActive: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      navigationItems: [],
    };
  },
  methods: {
    async fetchData() {
      await wordpressApi.getNavMenu(2)
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
  <nav class="main-navigation" :class="{'main-navigation--active': isActive}">
    <ul class="main-navigation__list">
      <li v-for="navigationItem in navigationItems" :key="navigationItem.url" class="main-navigation__item">
        <RouterLink :to="{path: navigationItem.url}" class="main-navigation__link">{{
            navigationItem.title
          }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

.main-navigation {
  position: fixed;
  top: 82px;
  left: 0;
  z-index: 10;
  display: none;
  width: 100%;
  height: calc(100% - 82px);
  background-color: var(--fresh-lime);
}

.main-navigation--active {
  display: block;
}

.main-navigation__list {
  list-style-type: none;
  margin: 0;
  padding: 100px 0 0;
}

.main-navigation__item {
  margin-bottom: 28px;
  text-align: center;
}

.main-navigation__link {
  position: relative;
  color: var(--rich-black);
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
}


@media (min-width: 1024px) {
  .main-navigation {
    position: relative;
    top: auto;
    left: auto;
    display: block;
    width: auto;
    height: auto;
    margin-left: auto;
    margin-right: 40px;
  }

  .main-navigation__list {
    display: flex;
    align-items: center;
    column-gap: 20px;
    padding-top: 0;
  }

  .main-navigation__item {
    margin-bottom: 0;
    text-align: left;
  }

  .main-navigation__link {
    font-size: 17px;
    transition: opacity 0.3s ease;
  }

  .main-navigation__link:hover {
    opacity: 0.6;
  }

  .main-navigation__link.router-link-active {
    text-decoration: underline;
  }
}
</style>
