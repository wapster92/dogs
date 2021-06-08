<template>
  <div class="custom-select" tabindex="0" @keydown.enter="open = !open" @blur="open = false">
    <div class="custom-select__selected" :class="{ 'custom-select__selected--open': open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="custom-select__items" tabindex="1" :class="{ 'custom-select__items--hide': !open }">
      <div
        class="custom-select__wrap"
        v-for="(option, i) of options"
        tabindex="2"
        :key="i"
        @click="changeItem(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      selected: this.default ? this.default : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
  methods: {
    changeItem(option) {
      this.selected = option;
      this.open = false;
      this.$emit('input', option); // for v-model
      this.$emit('change', option);
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  height: 47px;
  line-height: 47px;
  &__selected {
    background-color: #e7e7e7;
    border-radius: 3px;
    border: 1px solid #ccc;
    color: #666666;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    &:after {
      position: absolute;
      content: "";
      top: 22px;
      right: 1em;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-color: #666666 transparent transparent transparent;
    }
    &--open {
      border: 1px solid #ccc;
      border-radius: 6px 6px 0 0;
    }
  }
  &__items {
    color: #666666;
    border-radius: 0 0 6px 6px;
    overflow: auto;
    max-height: 400px;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    position: absolute;
    background-color: #e7e7e7;
    left: 0;
    right: 0;
    z-index: 1;
    &--hide {
      display: none;
    }
  }
  &__wrap{
    color: #666666;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    &:hover {
      background-color: #ccc;
    }
  }
}
</style>

