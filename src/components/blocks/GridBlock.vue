<template>
  <div class="grid-block">
    <div class="grid-block__item" v-for="item of items" :key="item">
      <CardBlock :src="item"/>
    </div>
  </div>
</template>

<script>
import CardBlock from "@/components/blocks/CardBlock";
export default {
  name: "GridBlock",
  components: {
    CardBlock
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-block {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  &__item {
    height: 300px;
  }
}
</style>
