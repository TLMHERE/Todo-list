<template>
  <div class="todo-item">
    <input type="checkbox" />
    <label>todo1</label>
    <button></button>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem'
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixin.styl'

  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px
    font-size: 24px

    &:hover
      button:after
        content: 'x'
        font-size: 24px
        color: $lightred

    &.completed
      label
        color: #d9d9d9
        text-decoration: line-through

    input
      width: 50px
      height: 30px
      text-align: center
      // appearance: none
      border: none
      outline: none

    label
      flex: 1
      transition: color 0.4s

    button
      width: 40px
      background-color: transparent
      appearance: none
      border: none
      outline: none
      sursor: pointer
</style>