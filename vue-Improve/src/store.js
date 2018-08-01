import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count: 10
}
const mutations = {
    plus(state,n){
        state.count+=n
    },
    minus(state){
        state.count--
    }
}
const getters = {
    count:function(state){
        return state.count += 100
    }
}
const actions = {
    jia(context){
        context.commit('plus',5);
        setTimeout(()=>{
            context.commit('minus');
        },2000)
        console.log("我先被执行了")
    },
    jian(context){
        context.commit('minus')
    }
}
const moduleA = {
    state,
    mutations,
    getters,
    actions
}
const moduleB = {
    state:{
        count:99
    }
}

export default new Vuex.Store({
    // state,
    // mutations,
    // getters,
    // actions
    modules:{
        a:moduleA,
        b:moduleB
    }
})


// 每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：
// Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
// 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用
//vue2.0官方建议 computed里不要用箭头函数 确保this指向正确
// state 访问状态对象
// mutation 触发状态(同步)
// getter store里的计算属性
// action 类似于mutations，Action 提交的是 mutation，Action可以异步操作
// module 应用非常复杂时应用，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割
