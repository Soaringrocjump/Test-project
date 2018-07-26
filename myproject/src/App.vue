<template>
  <div id="app">
    <h1 class="page-title"><a href="#/">开发组件库</a></h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
}
</script>

<style scoped>/*scoped关键字表示这个样式是私有的*/
  @import './assets/css/App.css';
</style>
