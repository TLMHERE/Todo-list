<template>
  <div class="todo-info">
    <span class="total">1 item left</span>
    <div class="tabs">
      <a
        v-for="(item, index) in states"
        :key="index"
        :class="['btn', 'primary', 'border', state == item ? 'actived' : '']"
        @click="toggleState(item)"
      >{{ item }}</a>
    </div>
    <button class="btn info">Clear Completed</button>
    <span class="total">{{total}} item left</span>
  </div>
</template>

<script>
  export default {
    name: 'TodoInfo',
    data() {
      return {
        states: ['all', 'active', 'completed']
      }
    },
    props: {
      total: Number
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-info
    display: flex
    justify-content: space-between
    padding: 5px 10px
    font-weight: 400
    line-height: 30px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

    .total
      color: $red

    .tabs
      display: flex
      justify-content: space-between
      width: 200px

    .btn.primary.border
      primaryBorderBtn()

      &.actived
        primaryBtn()

    .btn.info
      infoBtn()
</style>