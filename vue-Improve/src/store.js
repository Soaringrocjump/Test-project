import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// const state = {
//     count: 10
// }
// const mutations = {
//     plus(state){
//         state.count++
//     },
//     minus(state){
//         state.count--
//     }
// }

export default new Vuex.Store({
    state: {
        count: 10
    },
    mutations: {
        plus(state){
            state.count++
        },
        minus(state){
            state.count--
        }
    }
})