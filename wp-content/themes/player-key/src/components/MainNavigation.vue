<script>
export default {
    name: "MainNavigation",
    data() {
        return {
            navigationItems: [
                {
                    title: 'About',
                    url: '/about',
                },
                {
                    title: 'FAQ',
                    url: '/faq',
                },
                {
                    title: 'TOS',
                    url: '/tos',
                },
                {
                    title: 'Privacy Policy',
                    url: '/privacy-policy',
                },
            ]
        };
    }
}
</script>

<template>
    <nav class="main-navigation">
        <ul class="main-navigation__list">
          <li v-for="navigationItem in navigationItems" :key="navigationItem.url">
              <a :href="navigationItem.url" class="main-navigation__link">
                  {{ navigationItem.title }}
              </a>
          </li>
        </ul>
    </nav>
</template>

<style scoped>
.main-navigation {
    display: block;
    margin-left: auto;
    margin-right: 40px;
}

.main-navigation__list {
    list-style-type: none;
    display: flex;
    align-items: center;
    column-gap: 20px;
    margin: 0;
    padding: 0;
}

.main-navigation__link {
    position: relative;
    color: var(--rich-black);
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.3s ease;
}

.main-navigation__link:hover {
    opacity: 0.6;
}
</style>
