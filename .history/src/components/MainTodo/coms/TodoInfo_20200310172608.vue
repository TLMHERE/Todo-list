<template>
  <div class="todo-info">
    <span class="total">1 item let</span>
    <div class="tabs">
      <a v-for="(item,index) in states" :key="index">{{item}}</a>
    </div>
    <button class="clear">Clear Completed</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoInfo',
    data() {
      return {
        states: ['all', 'active', 'completed']
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'

  .todo-info
    display: flex
    justify-content: space-between
    padding: 5px 10px
    font-weight: 400
    line-height: 30px
    border-top: 1px solid rgba(0 0 0 0.1)

    .total
      color: $red

    .tabs
      display: flex
      justify-content: space-between
      width: 200px

      a
        padding: 0 10px
        border: 1px solid $lightred
        border-radius: 5px

        &.actived
          background-color: $lightred
          color: #fff

    .clear
      padding: 0 10px
      background-color: $green
      border-radius: 5px
      color: #fff
      appearance: none
      border: none
      outline: none
</style>