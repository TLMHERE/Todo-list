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
  @import '~styles/mixins.styl'

  .todo-item
    display: flex
    padding: 10px
    border-top: 1px solid rgba(0, 0, 0, 0.1)
    font-size: 24px
    justify-content: space-between

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
      cleanDefaultStyle()

    &:after
      content: url('~/images/todolist/unChecked.svg')

    &:checked:after
      content: url('~/images/todolist/Checked.svg')

    label
      flex: 1
      transition: color 0.4s

    button
      width: 40px
      background-color: transparent
      cleanDefaultStyle()
      cursor: pointer
</style>