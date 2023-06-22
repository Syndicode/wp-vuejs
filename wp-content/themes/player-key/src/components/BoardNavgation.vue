<script>
export default {
  name: "BoardNavigation",
  props: {
    entities: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
  <div class="board-navigation">
    <div class="wrapper board-navigation__wrapper">
      <div class="board-navigation__user">
        {{ this.$store.state.authentication.currentUser.display_name }}
        <span class="board-navigation__user-role">{{ this.$store.state.authentication.currentRole }}</span>
      </div>
      <ul class="board-navigation__list">
        <li v-for="entity in entities" class="board-navigation__item">
          <RouterLink :to="{name: 'board-entity', params: {entity: entity}}" :class="`board-navigation__link`">{{ entity }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.board-navigation {
  position: relative;
  top: -100px;
  background-color: var(--rich-black);
}

.board-navigation__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.board-navigation__user {
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
}

.board-navigation__user-role {
  position: absolute;
  top: -28px;
  left: 90%;
  text-transform: uppercase;
  font-size: 64px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.2);
}

.board-navigation__list {
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  column-gap: 20px;
  margin: 0;
  padding: 12px 0;
}

.board-navigation__link {
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 300;
}

.board-navigation__link.router-link-active {
  font-weight: 700;
}
</style>
