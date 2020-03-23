<template>
  <div>
    <main-header></main-header>
    <main-todo></main-todo>
  </div>
</template>

<script>
  import './assets/styles/global.styl'
  import MainHeader from './components/MainHeader.vue'
  import MainTodo from './components/MainTodo/MainTodo.vue'

  export default {
    name: 'App',
    components: {
      MainHeader,
      MainTodo
    }
  }
</script>

<style lang = "stylus" scoped></style>