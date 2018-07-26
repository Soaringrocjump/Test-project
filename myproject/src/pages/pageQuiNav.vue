//index.vue
<template>
  <div id="pageQuiNav">
    <qui-nav v-on:famNavClickEvent="dosth" v-on:click="tabContent"></qui-nav>
    <!--引用组件的时候，注册了一个事件，这个famNavClickEvent事件是之前我们在导航组件中绑定到按钮的click事件中的，然后我们给这个事件一个自定义的方法doSth，这种做法叫做监听，由引用方（暂且叫做父组件）监听子组件的内置方法；同时在子组件中，需要触发这个事件-->
    <div class="cont" v-for="cont in contents" :key="cont.index"  v-show="cont.bool">
        {{cont.text}}
    </div> 
    {{contents}}
  </div>
</template>

<script>
  import quiNav from '../components/quiNav.vue'
  export default {
    name: 'pageQuiNav',
    data: function(){
      return {
        contents: [
          {
            text: '内容1',
            bool: true
          },
          {
            text: '内容2',
            bool: false
          },
          {
            text: '内容3',
            bool: false
          },
          {
            text: '内容4',
            bool: false
          }
        ]
      }
    },
    components: {
      'qui-nav': quiNav
    },
    methods:{
      dosth:function(items,index){
        console.log(items[index].text + index);
        // this.contents.forEach(function(el){
        //   el.bool = false;
        // })
        // this.contexts[index].bool = true;
        // console.lo0g(this.contexts[index].text);
      },
      tabContent: function(el){
        this.contents.forEach(function(el){
          el.bool = false;
        })
        //this.contexts[el.index].bool = true
        console.log(el)
      }
    }
  }
</script>

<style scoped>
  .dispaly{display: block !important;}
  .cont{
    width: 100%;
    min-height: 200px;
    background: #f5f5f5;
  }
</style>
