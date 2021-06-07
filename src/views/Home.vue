<template>
  <div class="home">
    <h1>Home</h1>
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
  name: 'Home',
  components: {
    GridBlock,
    NotElements,
  },
  data() {
    return {
      page: 1
    }
  },
  mounted() {
    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.page++
        this.$store.dispatch('getAllDogs', this.page)
      }
    };
    this.$store.dispatch('getAllDogs', this.page)
  },
  computed: {
    dogs() {
      return this.$store.state.dogs.allDogs
    }
  }
}
</script>
