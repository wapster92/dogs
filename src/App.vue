<template>
  <div id="app">
    <HeaderBlock />
    <main class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script>
import HeaderBlock from "@/components/blocks/HeaderBlock";
import 'normalize.css'

export default {
  name: 'App',
  components: {
    HeaderBlock
  },
  mounted() {
    this.$store.commit('getLocalStorage')
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}
.main {
  padding: 0 0 40px;
}
</style>
