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

  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px

    &:hover
      button:after
        content: 'x'
        font-size: 24px
        color: $lightred

    input
      width: 50px
      height: 30px
      // appearance: none
      border: none
      outline: none

    label
      flex: 1

    button
      width: 40px
      background-color: transparent
      appearance: none
      border: none
      outline: none
</style>