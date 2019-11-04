// blog.vue
<template>
  <div class="blog">
    <h1>我是blog页面</h1>
    <div class="blog-btn">
        <a class="btn" href="/">点击调到子路由1</a>
        <a class="btn" href="/info">点击调到子路由2</a>
        <a class="btn">点击没用</a>
    </div>
  </div>
</template>

<style scoped>
    .blog-btn{
        display: flex;
        justify-content: space-around;
    }
    .btn{
        width: 200px;
        height: 60px;
        background: #ccc;
    }
</style>