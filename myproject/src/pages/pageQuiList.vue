//index.vue
<template>
  <div id="pageQuiList">
    <qui-list v-on:grapaBtnClickEvent="test"></qui-list>
    <qui-list tipsText="自定义文案，默认右边是按钮" msg="弹层"></qui-list>
    <qui-list ref="child1" tipsText="最右边是箭头" currentView="qui-arrow"></qui-list>
    <!--
      只要给暴露出来的currentView指定一个值，就可以决定右侧是按钮还是箭头了
      ref的属性，这个属性代表组件集合，当页面中有很多组件的时候，可以通过几种方法来获取对应的某个组件的信息：
      console.log(this.$children[0].msg);//通过数组获取
      console.log(this.$refs.child1.msg);//通过对象集合获取
    -->
  </div>
</template>

<script>
  import quiList from '../components/quiList.vue'
  export default {
    name: 'pageQuiList',
    components: {
      'qui-list': quiList
    },
    methods:{
      test:function(){
        alert("我是外层自定义的方法");
      }
    },
    //下面是组件生命周期
    beforeCreate:function(){},//组件实例化之前
    created:function(){},//组件实例化了
    beforeMount:function(){},//组件写入dom结构之前
    mounted:function(){//组件写入dom结构了
      console.log(this.$el);
      console.log(this.$children);
      console.log(this.$refs);
      console.log(this.$refs.child1.msg);
    },
    beforeUpdate:function(){},//组件更新前
    updated:function(){},//组件更新比如修改了文案
    beforeDestroy:function(){},//组件销毁之前
    destroyed:function(){}//组件已经销毁
  }
</script>

<style scoped>

</style>
