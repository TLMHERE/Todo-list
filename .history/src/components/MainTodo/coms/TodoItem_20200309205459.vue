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
  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px

    input
      width: 50px
      height: 30px
      text-align: center
      cleanDefaultStyle()

      &after
        content: url('~images/snake.png')

      &:cheched:after
        content: url('~images/02.jpg')

    label
      flex: 1

    button
      width: 40px
      background-color: transparent
      cleanDefaultStyle()
      cursor: pointer
</style>