<template>
    <div>
        <h1>this is app</h1>
        <input type="text">
        <button>添加</button>
        <ul>
            <li v-for = "(item,index) of todoData" :key = "index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import "./assets/styles/global.styl"
export default {
    name:'App',
    data() {
        return {
            todoData:["todo1","todo2","todo3"]
        }
    },
}
</script>

<style lang = "stylus" scoped>
li:nth-of-type(odd)
    color:blue
</style>