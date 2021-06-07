<template>
  <div class="card-block" ref="card" @click="toggleFavorite(src)">
    <picture class="card-block__pic">
      <img class="card-block__img" :src="src" alt="">
    </picture>
    <button class="card-block__favorite" :class="{'card-block__favorite--remove':favorite}">{{favorite ? 'Remove favorite' : 'Add favorite'}}</button>
  </div>
</template>

<script>
export default {
  name: "CardBlock",
  props: {
    src: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleFavorite(val) {
      this.$store.dispatch('addFavorites', val);
    },
    checkFavorite(val) {
      return this.allFavorites.some(el => el === val);
    }
  },
  computed: {
    allFavorites() {
      return this.$store.state.dogs.favorites
    },
    favorite() {
      return this.checkFavorite(this.src);
    }
  }
}
</script>

<style lang="scss" scoped>
.card-block {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  &__favorite {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    cursor: pointer;
    border-color: transparent;
    background: #48ca78;
    color: #fff;
    font-weight: 500;
    padding: 12px 15px;
    border-radius: 5px;
    &--remove {
      background: #ca4848;
    }
  }
  &__pic {
    display: flex;
    height: 100%;
    width: 100%;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
