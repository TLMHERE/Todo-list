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

    label
      flex: 1
</style>