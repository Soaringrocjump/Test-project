<template>
  <button class="qui-btn" v-on:click="sonBtnClickEvent">
    <slot name="icon"></slot>  <!--插槽内容-->
    <span>{{msg}}</span>
  </button>
</template>

<script>
  export default {
    props: {  //props是专门用来向外暴露组件的属性接口的
      msg: {
        default: '下载'
      }
    },
    methods: {
      sonBtnClickEvent: function(){
        alert('子组件默认弹框');  //只要父组件引用就会弹出
        this.$emit('btnClickEvent');  //$emit，也叫触发机制，父组件v-on设置监听方法，子组件$emit('父组件监听方法')触发,子组件不触发父组件也不会触发btnClickEvent这个事件
      }
    }
  }
</script>
<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';
</style>

