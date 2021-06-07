<template>
  <div class="card-block">
    <picture class="card-block__pic">
      <img class="card-block__img" :src="src" alt="">
    </picture>
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
  }
}
</script>

<style lang="scss" scoped>
.card-block {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
