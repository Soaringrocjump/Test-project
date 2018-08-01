import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//组件生命周期
import lifeCycle from './lifeCycle'
const home = { template: '<div>home 内容</div>' }
const second = { template: '<div>second 内容</div>' }

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [
        {path:'/',component:home},
        {path:'/first',component:lifeCycle},
        {path:'/second',component:second}
    ]
})

new Vue({
    router,
    template: `
        <div id="app2">
            <h1>This is 组件生命周期</h1>
            <ul>
                <li><router-link to="/">/</router-link></li>
                <li><router-link to="/first">/first</router-link></li>
                <li><router-link to="/second">/second</router-link></li>
            </ul>
            <keep-alive>
            <router-view></router-view>
            </keep-alive>
        </div>
    `,
    //router-view容器外层加keep-alive后会被缓存 比如切换到first路由点击+号，改变aaa的值，切换到别的路由再回来first后aaa的值则是改变后的值，如果不加keep-alive切换回来aaa为初始值2
    beforeCreate() {  //已经显示出来了
        console.log('路由1-beforeCreate 初始化之后')
    },
    created() {
        console.log('路由2-created 创建完成')
    },
    beforeMount() {
        console.log('路由3-beforeMount 挂载之前')
    },
    mounted() {
        console.log('路由4-mounted 挂载到DOM')
    },
    beforeUpdate() {
        console.log('路由5-beforeUpdate 数据更新前')
    },
    updated() {
        console.log('路由6-updated 被更新后')
    },
    //只有使用<keep-alive>里面的内容会留在内存里</keep-alive>时才会激活7、8项
    activated() {
        console.log('7-activated')
    },
    deactivated() {
        console.log('8-deactivated')
    },
    beforeDestroy() {
        console.log('路由9-beforeDestroy 销毁之前')
    },
    destroyed() {
        console.log('路由10-destroyed 销毁之后')
    }
}).$mount("#app")

//第五次例子
// import Transition from './transition'
// const home = { 
//     template: `
//         <div>
//             <div>home</div>
//             <p>This is home {{$route.query.a}} </p>
//         </div>
//     `
// }
// const parent = { 
//     template: `
//         <div>
//             <div>parent</div>
//             <p>This is parent</p>
//         </div>
//     `
// }
// const hook = { 
//     template: '<div>钩子 内容</div>' ,
//     beforeRouteEnter:(to,from,next)=>{
//         console.log(to)
//         console.log(from)
//         next() //可以  next(false) 不可以   next()一定要写 不然不会进入路由,()内可以传入参数eg:path:'./'
//     },
//     beforeRouteEnteLeave:(to,from,next)=>{
//         console.log(to)
//         console.log(from)
//         next() //可以  next(false) 不可以   next()一定要写 不然不会进入路由,()内可以传入参数eg:path:'./'
//     }   

// }

// const router = new VueRouter({
//     mode: 'hash',
//     base: __dirname,
//     routes: [
//         {path:'/',component:home},
//         {path:'/parent',component:parent},
//         {path:'/transition',component:Transition},
//         {
//             path:'/hook',
//             component:hook,
//             beforeEnter:(to,from,next)=>{
//                 console.log(to)
//                 console.log(from)
//                 next() //可以  next(false) 不可以   next()一定要写 不然不会进入路由,()内可以传入参数eg:path:'./'
//             }
//         }
//     ]
// })
// //过渡动画与路由钩子
// new Vue({
//     router,
//     data(){
//         return{
//             animate: 'fade'
//         }
//     },
//     template: `
//         <div id="app">
//             <h1>This is transition</h1>
//             <ul>
//                 <li><router-link to="/">/home-slideUp</router-link></li>
//                 <li><router-link to="/parent">/parent-slideDown</router-link></li>
//                 <li><router-link to="/transition">/transition</router-link></li>
//                 <li><router-link to="/hook">/钩子</router-link></li>
//             </ul>
//             <button @click="backHome">返回Home</button>
//             <button @click="query">queryHome</button>
//             <transition :name="animate" mode="out-in">
//                 <router-view></router-view>
//             </transition>
//         </div>
//     `,
//     watch: {
//         '$route'(to,from){
//             console.log(to)
//             console.log(from)
//             if(to.path == '/parent'){
//                 this.animate = 'slideDown';
//                 console.log("slideDown")
//             }else if(to.path == '/'){
//                 this.animate = 'slideUp';
//                 console.log("slideUp")
//             }else{
//                 this.animate = 'fade';
//                 console.log("fade")
//             }
//         }
//     },
//     methods: {
//         backHome(){
//             router.push({path:'/'})
//         },
//         query(){
//             router.push({path:'/',query:{a:1,b:2}})
//         }
//     }
// }).$mount("#app")

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
// const page404 = {
//     template: `
//         <div><h1>error:404</h1></div>
//     `
// }

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
//         },
//         {path: '*',component:page404}   //404路由一定要放到最下面
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
//                     <li><router-link to="/first/f-third">f-third 重定向至f-first</router-link></li>
//                 </ol>
//                 <li><router-link to="/second">/second</router-link></li>
//                 <li><router-link to="/gogo">/gogo 别名second</router-link></li>
//                 <li><router-link to="/aaa/123">/aaa 用的f-first模板</router-link></li>
//                 <li><router-link to="/bbb/456">/bbb 重定向至aaa</router-link></li>
//                 <li><router-link to="/ccc/001">/ccc 重定向home</router-link></li>
//                 <li><router-link to="/suibian">/不存在页面</router-link></li>
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
// new router 的mode属性和base属性
// mode: 'history/hash'  属性为hash时，url为localhost:8080/#/page×× | 属性为history时，url为localhost:8080/page××
// base: __dirname  表示基于当前路径 
//:to里 name和params一起用；path和query一起用  语法 :to="{path:'../',params:{id:1,value:'abc'}}"
//编程式导航 
//<router-link :to="...">、router.push(...)和router.replace(...)用法差不多  
//eg: <router-link :to="{path:'../',params:{id:1,value:'abc'}}"></router-link> | router.push({path:'../',params:{id:1,value:'abc'}) | router.replace({path:'../',params:{id:1,value:'abc'})
//区别  router-link和router.push两个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。   router.replace不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
//操作 History  router.go(n)  该方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。
//路由传参  routes里一个路由里path内容前加冒号 则被绑定，eg： path: '/first/:userid'。值由router-link/push/replace传入。 eg: <router-link :to='/first/123'></router-link>
//route和component里的子路由和子模版大于一个时需使用routes和components
//路由可嵌套，在父路由模板底部加子路由容器<router-view></router-view>即可
//命名路由  即给路由添加name。 eg: name: 'user'  导航时可以使用name：'aaa'连接到对应路由上
//命名视图
// 当底部有多个路由容器时，设置第一个以后的容器name属性
// <router-view></router-view>
// <router-view name='a'></router-view>
// <router-view name='b'></router-view>
// 在路由表routes里
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
// //404页面
// 当路由访问不存在的页面时，需设置一个路由404页面
// {path: '*',component:page404}
// 此路由要放在路由表匹配最下面，因为路由自上而下匹配的，当所有路径都匹配不到时匹配此页面
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
//路由钩子  可以在模板里写也可以在路由表里写
// 模板里写
// {
//     template: ***,
//     beforeRouteEnter:(to,from,next)=>{
//         console.log(to)
//         console.log(from)
//         next()
//     },
//     beforeRouteEnteLeave:(to,from,next)=>{
//         next()
//     } 
// }
// 路由表里写
// {
//     path:'*',
//     component: **,
//     beforeEnter:(to,from,next)=>{
//         next() 
//     }
// }
// 注意：模板中写before和Enter之间加Route | 钩子里面一定要加next(),不然不会进入路由，（）内可以传入参数 eg:next({path:'*'})
