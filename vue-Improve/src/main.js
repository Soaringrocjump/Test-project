// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './Router'


//生命周期
// import lifeCycle from './lifeCycle.vue'
// new Vue({
//     el:'#app',
//     render: xx => xx(lifeCycle)
// })

//vuex
//import store from './store'
//import vuex from './vuex.vue'
// new Vue({
//     el:'#app',
//     store,
//     render: xx => xx(vuex)
// })
//根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到

//动画和过渡
// import transition from './transition'
// new Vue({
//     el: '#demo',
//     render: xxx => xxx(transition)
// })
// Vue.config.productionTip = false  //关闭生产模式下给出的提示

//init原始vue创建模板
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

// ./代表当前目录
//.vue结尾可省略
// new Vue({
//     el:'#app',
//     store,
//     vue1.0写法
//     components: { App },
//     template: '<App/>'
//     ||
//     vue2.0写法
//     render: xx => xx(vuex)
// })
