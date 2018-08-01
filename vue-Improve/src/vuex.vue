<template>
  <div id="app3">
    <h1>Hello Vuex</h1>
    <!--<p>{{ $store.state.count }} - {{count}}</p>-->
    <!--<p>{{count}}</p>-->
    <p>{{ $store.state.a.count }} - {{count}} - {{ $store.state.b.count }}</p>
    <p>
        <button @click="$store.commit('plus',10)">+</button>
        <!--<button @click="$store.commit('minus')">-</button>-->
        <button @click="minus">-</button> <!--简写方法 mapMutations将store的mutations方法映射到了组件里 -->
    </p>
    <p>
        <button @click="jia">+ jia</button>
        <button @click="jian">- jian</button>
    </p>
  </div>
</template>

<script>
    import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
    export default{
        name:'app',
        // data(){
        //     return {
        //         count:0
        //     }
        // },
        computed: {
            // count(){
            //     return this.$store.state.count+1
            // }
            // 辅助函数mapXxx可以简化上面代码，但引用要前面加...
            // ...mapState({
            //     count: state => state.count+2
            // }),
            // ...mapState([
            //     "count"
            // ]),
            // ...mapGetters([
            //     "count"
            // ])
            count(){
                return this.$store.state.a.count+2
            }
        },    
        methods:{
            // ...mapMutations([
            //     "minus"
            // ])
            ...mapMutations([
                "plus",
                "minus"
            ]),
            ...mapActions([
                "jia"
            ]),//数组方式调用
            ...mapActions({
                jian:"jian"
            })//对象方式调用
        }
    }
</script>

<!--
$store.commit('plus',{a:10}) 建议以对象的形式传值，在mutations形参取值实参对象的属性eg： state.count+=n.a
辅助函数  引入辅助函数需要在辅助函数前加...
mapState,mapMutations 是vuex中的辅助函数  简写调用触发状态this.$store.state，两方法中可以直接更改state和mutations简写方法 见下面mapMutations 
mapState 辅助函数帮助我们在vue实例中生成计算属性
mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用

-->