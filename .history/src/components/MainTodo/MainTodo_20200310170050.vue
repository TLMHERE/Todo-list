<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="what to do?"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="(item,index) in todoData"
      :key="index"
      :todo="item"
      @del="handDeleteItem"
    ></todo-item>
  </div>
</template>

<script>
  import TodoItem from './coms/TodoItem.vue'
  let id = 0
  export default {
    name: 'MainTodo',
    data() {
      return {
        todoData: [],
        content: ''
      }
    },
    methods: {
      addTodo() {
        if (this.content === '') return
        this.todoData.unshift({
          id: id++,
          content: this.content,
          completed: false
        })

        this.content = ''
      }
    },
    components: {
      TodoItem
    }
  }
</script>

<style lang="stylus" scoped>
  .main-todo
    margin: 0 auto
    width: 600px
    background-color: #fff
    box-shadow: 0 0 5px #666

    .add-todo
      padding: 16px 16px 16px 36px
      width: 100%
      font-size: 24px
      font-weight: inhvert
      font-family: inhvert
      color: inherit
      border: none
      outline: none
      box-sizing: border-box
</style>