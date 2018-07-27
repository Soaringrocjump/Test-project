<template>
  <div id="app3">
    <h1>Hello Vuex</h1>
    <!--<p>{{ $store.state.count }} - {{count}}</p>-->
    <p>{{count}}</p>
    <p>
        <button @click="$store.commit('plus')">+</button>
        <button @click="$store.commit('minus')">-</button>
    </p>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default{
        name:'app',
        // data(){
        //     return {
        //         count:0
        //     }
        // },
        computed:{
            count(){
                return this.$store.state.count+1
            }
        }
        //vuex的mapState方法简化上面代码
        // computed: mapState(
        //     {
        //         count: state => state.count+2
        //     }
        //     // ["count"]
        // )
    }
</script>