<template>
  <div id="app4">
      <h1>Vue2.0生命周期</h1>
      <p>TestDate:aaa={{aaa}}</p>
      <p>
          <Button @click="add">+</Button>
      </p>
  </div>
</template>

<script>
export default {
  name: "lifeCycle",
  data(){
      return {
          aaa: 2
      }
  },
  methods: {
      add(){
          this.aaa++
      }
  },
  //vue1.0
//   init: function(){  //初始化调用  环境验证 和组件校验
//     console.log('1-init')
//   },
//   created: function(){  //已完成了所有渲染
//     console.log('2-created')
//   },
//   beforeCompile: function(){  //编译之前开始调用
//     console.log('3-beforeCompile')
//   },
//   compiled:function(){  //已经显示出来了
//     console.log('4-compiled')
//   },
//   ready:function(){
//     console.log('5-ready')
//   },
//   attached:function(){
//     console.log('6-attached')
//   },
//   detached:function(){
//     console.log('7-detached')
//   },
//   beforeDestroy: function(){
//     console.log('8-beforeDestroy')
//   },
//   destroyed: function(){
//     console.log('9-destroyed')
//   },

//vue2.0
beforeCreate() {  //已经显示出来了
    console.log('1-beforeCreate 初始化之后')
},
created() {
    console.log('2-created 创建完成')
},
beforeMount() {
    console.log('3-beforeMount 挂载之前')
},
mounted() {
    console.log('4-mounted 挂载到DOM')
},
beforeUpdate() {
    console.log('5-beforeUpdate 数据更新前')
},
updated() {
    console.log('6-updated 被更新后')
},
//只有使用<keep-alive>里面的内容会留在内存里</keep-alive>时才会激活7、8项
activated() {
    console.log('7-activated')
},
deactivated() {
    console.log('8-deactivated')
},
beforeDestroy() {
    console.log('9-beforeDestroy 销毁之前')
},
destroyed() {
    console.log('10-destroyed 销毁之后')
},
watch: {
    "aaa":function(newdata,olddata){
        console.log(olddata + "更改为" + newdata)
    }
}

}
</script>

