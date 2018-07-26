import Vue from 'vue'
import Router from 'vue-router'
// 引用页面模板->供路由使用
import index from '../pages/index.vue'
import pageQuiButton from '../pages/pageQuiButton.vue'
import pageQuiList from '../pages/pageQuiList.vue'
import pageQuiNav from '../pages/pageQuiNav.vue'

// 引入子路由
import Blog from '../pages/page.vue'
// 引入子路由页面
import page1 from '../pages/page1.vue'
import page2 from '../pages/page2.vue'

Vue.use(Router)//显式声明要用路由

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',  //name参数不重要，只是用来做识别
      //component: index  //这是普通写法
      component: resolve => require(['../pages/index'], resolve)  //异步按需加载组件，当路由被访问的时候才加载对应组件，提高首次访问速度
    },
    {
      path: '/btn',
      name: 'btn',
      //component: pageQuiButton
      component: resolve => require(['../pages/pageQuiButton'], resolve) 
    },
    {
      path: '/list',
      name: 'list',
      //component: pageQuiList
      component: resolve => require(['../pages/pageQuiList'], resolve) 
    },
    {
      path: '/nav',
      name: 'nav',
      //component: pageQuiNav
      component: resolve => require(['../pages/pageQuiNav'], resolve)
    },
    {
      path: '/page',
      name: 'page',
      //component: Blog,
      component: resolve => require(['../pages/page'], resolve),
      children: [//子路由
        {
          path: '/',
          //component: page1
          component: resolve => require(['../pages/page1'], resolve)
        },
        {
          path: 'page2',
          //component: page2
          component: resolve => require(['../pages/page2'], resolve)
        }
      ]
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      //component: QRcode
      component: resolve => require(['../pages/QRcode'], resolve)
    }
  ]
})
