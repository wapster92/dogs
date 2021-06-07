<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item" v-for="link of links" :key="link.label">
        <router-link class="navigation__link" :to="link.path">{{ link.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavigationBlock",
  props: {
    links: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  &__list {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    display: inline-block;
    padding: 10px 15px;
    background: transparent;
    transition: background-color .3s, color .3s;
    text-transform: uppercase;
    text-decoration: none;
    color: #a2a2a2;
    font-weight: 600;
    border-radius: 3px;
    &.router-link-exact-active {
      background: #a9e067;
      color: #fff;
    }
    &:hover, &:focus {
      background: #a9e067;
      color: #fff;
    }
  }
}
</style>
