<script>
export default {
  name: "BoardNavigation",
  props: {
    entities: {
      type: Array,
      required: true,
    }
  }
}
</script>

<template>
  <div class="board-navigation">
    <div class="wrapper">
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
