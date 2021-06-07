<template>
  <div>
    <h1 class="title">{{breed}}</h1>
  </div>
</template>

<script>
export default {
  name: "Breed",
  computed: {
    breed() {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  text-transform: capitalize;
}
</style>
