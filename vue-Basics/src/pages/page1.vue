//page-1.vue
<template>
  <div class="page1">
    <h2>这里是子路由默认页面</h2>  
    <a href="#/page/page2">去子路由页面2</a>
  </div>
</template>
<style scoped>
  .page1{
    width: 100%;
    height: 100px;
    background: #f5f5f5;
    text-align: center;
  }
  h2{text-align: center;}
  a{
    text-decoration: underline;
    color: #00a0d8;
    display: block;
    margin: 0 auto;
  }
</style>

