<template>
  <div>
    <h1 class="title">{{breed}}</h1>
    <div v-if="dogs.length > 0">
      <GridBlock :items="dogs"></GridBlock>
    </div>
    <NotElements v-else/>
  </div>
</template>

<script>
import GridBlock from '@/components/blocks/GridBlock'
import NotElements from "@/components/blocks/NotElements";
export default {
  name: "Breed",
  components: {
    GridBlock,
    NotElements,
  },
  data() {
    return {
      page: 1
    }
  },
  computed: {
    breed() {
      return this.$route.params.id
    },
    dogs() {
      return this.$store.state.dogs.breedDogs
    }
  },
  mounted() {

    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.page++
        this.$store.dispatch('addBreedDogs', this.page)
      }
    };
    this.$nextTick(function () {
      this.$router.beforeEach((to, from, next) => {
        if(to.name === 'Breed') {
          this.page = 1
          this.$store.dispatch('getAllBreedDogs', to.params.id).then(() => {
            this.$store.dispatch('addBreedDogs', this.page)
          })
        }
        next()
      })
    })
    this.$store.dispatch('getAllBreedDogs', this.$route.params.id).then(() => {
      this.$store.dispatch('addBreedDogs', this.page)
    })
  }
}
</script>

<style lang="scss" scoped>
.title {
  text-transform: capitalize;
}
</style>
