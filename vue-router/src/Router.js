import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const home = { 
    template: `
        <div>
            <div>home</div>
            <p>This is home</p>
        </div>
    `
}
const parent = { 
    template: `
        <div>
            <div>parent</div>
            <p>This is parent</p>
        </div>
    `
}

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path:'/',component:home},
        {path: '/parent',component:parent}
    ]
})
//过渡动画
new Vue({
    router,
    data(){
        return{
            animate: 'fade'
        }
    },
    template: `
        <div id="app">
            <h1>This is transition</h1>
            <ul>
                <li><router-link to="/">/home-slideUp</router-link></li>
                <li><router-link to="/parent">/parent-slideDown</router-link></li>
            </ul>
            <transition :name="animate" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    `,
    watch: {
        '$route'(to,from){
            console.log(to)
            console.log(from)
            if(to.path == '/parent'){
                this.animate = 'slideDown';
                console.log("slideDown")
            }else{
                this.animate = 'slideUp';
                console.log("slideUp")
            }
        }
    }
}).$mount("#app")

//第四次例子
// const home = { template: '<div>home 内容</div>' }
// const first = { template: '<div>first 内容</div>' }
// const firstTemp = { 
//     template: `
//         <div class='firstTemp'>
//             <div>first 子组件</div>
//             <router-view></router-view>
//         </div>
//     `
// }
// const firstFirst = { template: '<div>first-first 内容 {{$route.params.id}}</div>' }
// const firstSecond = { template: '<div>first-second 内容 {{$route.params.id}}</div>' }
// const firstThird = { template: '<div>first-third 内容 {{$route.params.id}}</div>' }
// const second = { template: '<div>second 内容</div>' }

// const router = new VueRouter({
//     mode: 'history',
//     base: __dirname,
//     routes: [
//         {path:'/',component:home},
//         {
//             path: '/first',
//             component:firstTemp,
//             children:[
//                 {path: '/',component:first},
//                 {path: 'f-first',component:firstFirst},
//                 {path: 'f-second',component:firstSecond},
//                 {path: 'f-third',redirect:'f-first'}
//             ]
//         },
//         {path: '/second',component:second},
//         {path: '/second',component:second,alias:'/gogo'},
//         {path: '/aaa/:id',component:firstFirst},
//         {path: '/bbb/:id',redirect:'/aaa/:id'},
//         {
//             path: '/ccc/:id',
//             redirect: ({hash,params,query}) => {
//                 //const {hash,params,query} = ccc; //第二种写法，将上面({hash,params,query})替换为ccc
//                 if(params.id=='001'){
//                     return '/'
//                 }
//             }
//         }
//     ]
// })

// new Vue({
//     router,
//     template: `
//         <div>
//             <h1>重定向和别名</h1>
//             <ol>
//                 <li><router-link to="/">/</router-link></li>
//                 <li><router-link to="/first">/first</router-link></li>
//                 <ol>
//                     <li><router-link to="/first/f-first">f-first</router-link></li>
//                     <li><router-link to="/first/f-second">f-second</router-link></li>
//                     <li><router-link to="/first/f-third">f-third 重定向</router-link></li>
//                 </ol>
//                 <li><router-link to="/second">/second</router-link></li>
//                 <li><router-link to="/gogo">/gogo 别名</router-link></li>
//                 <li><router-link to="/aaa/123">/aaa</router-link></li>
//                 <li><router-link to="/bbb/456">/bbb 重定向</router-link></li>
//                 <li><router-link to="/ccc/001">/ccc 重定向</router-link></li>
//             </ol>
//             <router-view></router-view>
//         </div>
//     `
// }).$mount("#app")

//第三次例子
// const home = { template: '<div>home 内容</div>' }
// const users = {
//     template: `
//         <div>
//             <h1>Users</h1>
//             <router-view></router-view>
//         </div>
//     `
// }
// const user = {
//     template: `
//         <div>
//             {{ $route.params.username }} - 
//             {{ $route.query.aaa }}
//         </div>
//     `
// }
// const tag = { template: '<div>tag 内容</div>' }
// const append = { template: '<div>append 内容</div>' }

// const router = new VueRouter({
//     mode: 'history',
//     base: __dirname,
//     routes: [
//         {
//             path:'/',
//             name:'home',
//             component:home
//         },
//         {
//             path: '/users',
//             component:users,
//             children: [
//                 {
//                     path: ':username',
//                     name: 'user',
//                     component: user
//                 }
//             ]
//         },
//         {
//             path:'/tag',
//             name:'tag',
//             component:tag
//         },
//         {
//             path:'/append',
//             name:'append',
//             component:append
//         }
//     ]
// })
//路由嵌套 | $route属性tag/append/exact
// new Vue({
//     router,
//     template: `
//         <div>
//             <h1>query</h1>
//             <ol>
//                 <li><router-link to="/">/</router-link></li>
//                 <li><router-link to="/first">/first</router-link></li>
//                     <ol>
//                         <li>
//                             <router-link :to="{path:'/users/jump',query:{aaa:'bbb'}}">jump</router-link>
//                         </li>
//                     </ol>
//                 <router-link tag="li" to="/tag">/tag</router-link>// tag="li"属性等于router-link外层加一个li标签
//                 <li><router-link to="append" append>/append</router-link></li>//点击会无限追加append路径，这里to里不加/
//                 <li><router-link to="append" exact>/append</router-link></li>//严谨模式 构建大型项目注意用这个  防止路由跑偏
//             </ol>
//             <router-view></router-view>
//         </div>
//     `
// }).$mount("#app")

// 第二次例子
// const router = new VueRouter({
//     mode: 'history',
//     base: __dirname,
//     routes: [
//         {path:'/'},
//         {path: '/params/:aaa/:bbb'},
//         {path: '/param-regex/:id(\\d+)'},
//         {path: '/param-regex2/:id(\\w+)'}//()内是正则绑定
//     ]
// })

// new Vue({
//     router,
//     template: `
//         <div>
//             <h1>路由传参</h1>
//             <ul>
//                 <li><router-link to="/">/</router-link></li>
//                 <li><router-link to="/params/111/222">/params/111/222</router-link></li>
//                 <li><router-link to="/param-regex/222">/params-regex/222</router-link></li>
//                 <li><router-link to="/param-regex2/aaa">/params-regex2/aaa</router-link></li>
//             </ul>
//             <p>show</p>
//             <pre><code>
//                 {{ JSON.stringify($route.params.aaa) }}
//                 {{ JSON.stringify($route,null,2) }}
//             </code></pre>
//         </div>
//     `
// }).$mount("#app")

// 第一次例子
// const first = { template: '<div>first 内容</div>' }
// const second = { template: '<div>second 内容</div>' }
// const home = { template: '<div>home 内容</div>' }
// const leftTemp = { template: '<div>left 内容</div>' }
// const rightTemp = { template: '<div>right 内容</div>' }
// const firstSon1 = { template: '<div>firstSon1 内容 {{ $route.params.id }}</div>' }
// const firstSon2 = { template: '<div>firstSon2 内容 {{ $route.params.id }}</div>' }
// const sonTemplate = {
//     template: `
//         <div class="sonTemplate">
//             <h1>子组件</h1>
//             <router-view class="sonView"></router-view>
//         </div>
//     `
// }

// const router = new VueRouter({
//     mode: 'history',
//     base: __dirname,
//     routes: [
//         {
//             path:'/',
//             name:'home',
//             components:{
//                 default: home,
//                 left: leftTemp,
//                 right: rightTemp
//             }
//         },
//         {
//             path:'/first',
//             component:sonTemplate,
//             children: [
//                 {
//                     path: '/',
//                     name:'first',
//                     component:first
//                 },
//                 {
//                     path: 'firstSon1',
//                     name:'firstSon1',
//                     component:firstSon1
//                 },
//                 {
//                     path: 'firstSon2',
//                     name:'firstSon2',
//                     component:firstSon2
//                 },
//             ]
//         },
//         {
//             path:'/second',
//             name:'second',
//             components:{
//                 default: second,
//                 left: left,
//                 right: right
//             }
//         }
//     ]
// })
//路由传参/命名视图
// new Vue({
//     router,
//     template: `
//         <div id="r">
//             <h1>导航</h1>
//             <p>{{ $route.name }}</p>
//             <ol>
//                 <li><router-link to="/">/</router-link></li>
//                 <li><router-link to="/first">first</router-link></li>
//                 <ol>
//                     <li><router-link :to="{name:'firstSon1',params:{id:11}}">firstSon1</router-link></li>路由传参
//                     <li><router-link :to="{name:'firstSon2',params:{id:12}}">firstSon2</router-link></li>路由传参
//                 </ol>
//                 <li><router-link to="/second">second</router-link></li>

//             </ol>
//             <router-view class="view"></router-view>
//             <router-view class="view" name="left" style="width:50%;height:100px;background:#ff6600;float:left;"></router-view>
//             <router-view class="view" name="right" style="width:50%;height:100px;background:#ff0000;float:left;"></router-view>
//         </div>
//     `
// }).$mount("#app")


//笔记
//:to里 name和params一起用；path和query一起用  语法 :to="{path:'../',params:{id:1,value:'abc'}}"
//编程式导航 
//<router-link :to="...">、router.push(...)和router.replace(...)用法差不多  
//eg: <router-link :to="{path:'../',params:{id:1,value:'abc'}}"></router-link> | router.push({path:'../',params:{id:1,value:'abc'}) | router.replace({path:'../',params:{id:1,value:'abc'})
//区别  router-link和router.push两个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。   router.replace不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
//router.go(n)  该方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。
//路由传参  routes里一个路由里path内容前加冒号 则被绑定，eg： path: '/first/:userid'。值由router-link/push/replace传入。 eg: <router-link :to='/first/123'></router-link>
//route和component里的子路由和子模版大于一个时需使用routes和components
//路由可嵌套，在父路由模板底部加子路由容器<router-view></router-view>即可
//命名路由  即给路由添加name。 eg: name: 'user'  导航时可以使用name：'aaa'连接到对应路由上
//命名视图
// 当底部有多个路由容器时，设置第一个以后的容器name属性
// <router-view></router-view>
// <router-view name='a'></router-view>
// <router-view name='b'></router-view>
// 在路由表toutes里
// components: {
//     default: 默认使用的模板,
//     a: 自定义模板1,
//     b: 自定义模板2
// }
// 这里注意 component加s，因为有多个模板
//绝对路径与相对路径
//routes: [
//         {
//             path:'/home'
//         },
//         {
//             path:'/first',
//             children: [
//                 {
//                     path: '/'
//                 },
//                 {
//                     path: 'firstSon1'
//                 }
//             ]
//         }
// //]
// 主路由是绝对路径需要加/，子路由是相对路径不需要/，如果加了就会连接到主路由上
//重定向 redirect
// routes: [
//     {   path: '/a', 
//         redirect: '/b' | redirect: { name: 'foo' } | redirect: to => {
//                                                         // 方法接收 目标路由 作为参数
//                                                         // return 重定向的 字符串路径/路径对象
//                                                      }} 
//     }
// ]
// 重定向目标可以是路径，命名和方法，以上三种方法都可以，注意方法里最后要return
// 别名 alias  
// /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
// routes: [
//     { path: '/a', component: A, alias: '/b' }
// ]
// Vue.js devtools Chrome插件 vue调试工具 访问网址要翻墙 其他安装方法自行百度
// 网址： https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
//过渡动画
//<transition name="fade" mode="out-in">
//     <router-view></router-view>
// </transition>
// 路由切换应用过渡，过渡名叫fade，模式是out-in(先出后进)
//             Enter                      Leave
//    opacity:0——————>opacity:1  opacity:1——————>opacity:0
//        |               |          |               |
//     v-enter       v-enter-to   v-leave       v-leave-to
//    |_______________________|  |_______________________|
//               |                           |
//        v-enter-active               v-leave-active
//css中用name名替换上面的V
// 监听路由应用不同切换
//  watch:{
//     '$route'(to,from){
//         判断to的来源动态设置transition绑定的name的值
//     }
//  }