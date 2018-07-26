<template>
  <div class="qui-nav nav-type-1">
    <a v-for="(item, index) in items" :key="index" :class="[commonClass,item.active ? activeClass : '']" v-on:click="navClickEvent(items,index)" >
      <span class="nav-txt">{{item.text}}</span>
    </a>
    <!--  
        ：class=XXX和class=XXX的区别在于不带冒号的是静态的字符串绑定，带冒号的是动态的变量绑定
        三元运算符：item.active?activeClass:''，当每个item中的active值为true时，绑定activeClass变量对应的类，如果为false，则为空
        每个tab绑定一个点击事件，当点击事件触发的时候，修改当前tab对应item的active值
    -->
  </div>
</template>

<script>
  export default {
    data:function(){
      return {
        commonClass:'nav-item',
        activeClass:'active',
        items:[
          {
            text: '首页',
            active : true
          },
          {
            text: '列表',
            active : false
          },
          {
            text: '关于',
            active : false
          },
          {
            text: '招聘',
            active : false
          }
        ]
      }
    },
    methods:{
      navClickEvent:function(items,index){
        /*默认切换类的动作*/
        items.forEach(function(el){
          el.active = false;
        });
        items[index].active = true;
        // /*开放用户自定义的接口*/
        this.$emit('famNavClickEvent',items,index);
      }
    }
  }
</script>
<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-nav.import.css';
</style>

