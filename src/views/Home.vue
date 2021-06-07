<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="dogs.length > 0">
      <GridBlock :items="dogs"></GridBlock>
    </div>
  </div>
</template>

<script>
import GridBlock from "@/components/blocks/GridBlock";

export default {
  name: 'Home',
  components: {
    GridBlock
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
        console.log('start')
        this.page++
        this.$store.dispatch('getAllDogs', this.page)
      }
    };
    this.$store.dispatch('getAllDogs', this.page)
  },
  computed: {
    dogs() {
      return this.$store.state.allDogs.items
    }
  }
}
</script>
