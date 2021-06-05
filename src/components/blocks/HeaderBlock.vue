<template>
  <header class="header">
    <div class="header__container container">
      <NavigationBlock :links="[{path: '/', label: 'Home'}, {path: 'favorites', label: 'Favorites'}]" />
      <CustomSelect :options="['go', 'python', 'rust', 'javascript']"
                    :default="''"
                    v-model="select"
                    class="header__select"
      />
    </div>
  </header>
</template>

<script>
import NavigationBlock from "@/components/blocks/NavigationBlock";
import CustomSelect from "@/components/UI/CustomSelect";

export default {
  name: "HeaderBlock",
  components: {
    NavigationBlock,
    CustomSelect
  },
  data() {
    return {
      select: null
    }
  }
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
