<template>
  <div>
    <span>1 item let</span>
    <div>
      <a v-for="(item,index) in states" :key="index">{{item}}</a>
    </div>
    <button>Clear Completed</button>
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