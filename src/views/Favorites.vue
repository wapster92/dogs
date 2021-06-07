<template>
  <div>
    <h1>Favorites</h1>
    <div v-if="dogs.length > 0">
      <GridBlock :items="dogs"></GridBlock>
    </div>
    <NotElements v-else/>
  </div>
</template>

<script>
import GridBlock from "@/components/blocks/GridBlock";
import NotElements from "@/components/blocks/NotElements";

export default {
  name: "Favorites",
  components: {
    GridBlock,
    NotElements
  },
  data() {
    return {
      page: 1
    }
  },
  computed: {
    dogs() {
      return this.$store.state.dogs.favorites;
    }
  },
}
</script>

<style scoped>

</style>
