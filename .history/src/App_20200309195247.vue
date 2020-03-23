<template>
  <div>
    <main-header></main-header>
  </div>
</template>

<script>
  import './assets/styles/global.styl'
  import MainHeader from './compoments/MainHeader.vue'
  export default {
    name: 'App',
    components: {
      MainHeader
    }
  }
</script>

<style lang = "stylus" scoped></style>