<template>
  <header class="header">
    <div class="header__container container">
      <NavigationBlock :links="[{path: '/', label: 'Home'}, {path: '/favorites', label: 'Favorites'}]" />
      <CustomSelect :options="options"
                    :default="breed"
                    @change="breedChange"
                    class="header__select"
      />
    </div>
  </header>
</template>

<script>
import NavigationBlock from "@/components/blocks/NavigationBlock";
import CustomSelect from "@/components/UI/CustomSelect";
import axios from "axios";

export default {
  name: "HeaderBlock",
  components: {
    NavigationBlock,
    CustomSelect
  },
  data() {
    return {
      select: null,
      options: [],
    }
  },
  async mounted() {
    const result = await axios.get('https://dog.ceo/api/breeds/list/all')
    this.options = Object.keys(result.data.message)
  },
  methods: {
    breedChange(val) {
      this.$router.push(`/breed/${val}`)
    }
  },
  computed: {
    breed() {
      if (this.$route.name === "Breed") {
        return this.$route.params.id
      }
      return 'Change breed'
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 0;
  background: linear-gradient(0deg, rgba(206,214,214,1) 0%, rgba(254,254,254,1) 100%);
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__select {
    max-width: 400px;
  }
}
</style>
