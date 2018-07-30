//index.vue
<template>
  <div id="pageQuiButton">
    <div class="mod-module mod-btn">
      <p class="btn-bar text-r">
        <qui-btn class="small bor"></qui-btn>
      </p>
      <p class="btn-bar text-r">
        <qui-btn msg="确定" class="small"></qui-btn>
      </p>
      <p class="btn-bar text-r">
        <qui-btn msg="下载" class="small icon">
          <img slot="icon" class="ico" src="http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png" />
          <!--slot="icon"对应组件中的name="icon"，渲染的时候，会将img整个替换掉组件中的对应name的<slot>标签。slot的翻译是插槽的意思，相当于把img这块内容插到一个名叫icon的插槽里面去-->
        </qui-btn>
      </p>
      <p class="btn-bar">
        <qui-btn msg="按钮可以改文案" class="large bor"></qui-btn>
      </p>
      <p class="btn-bar">
        <qui-btn msg="大的按钮" class="large icon bg">
          <img slot="icon" class="ico" src="http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png" />
        </qui-btn>
      </p>
      <p class="btn-bar bar-flex">
        <qui-btn msg="取消" class="middle icon bor"></qui-btn>
        <qui-btn msg="确定" class="middle icon bg"></qui-btn>
      </p>
      <p class="btn-bar bar-flex">
        <qui-btn class="middle icon"></qui-btn>
        <qui-btn class="middle" msg="原生点击" v-on:click.native="doTheClick"><!--原生的click而不是子组件的-->
          <img slot="icon" class="ico" src="http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png" />
        </qui-btn>
        <qui-btn v-on:btnClickEvent="famBtnClickEvent" msg="我可以点击" class="middle bg"></qui-btn><!--v-on:btnClickEvent这种做法叫做监听，父组件监听子组件的内置方法，触发这个事件需要子组件触发-->
      </p>
    </div>
  </div>
</template>

<script>
  import quiBtn from '../components/quiButton.vue'
  export default {
    name: 'pageQuiButton',
    components: {
      'qui-btn': quiBtn
    },
    methods: {
      famBtnClickEvent: function(){
        alert('我是父组件定义的弹框内容');
      },
      doTheClick: function(){
        alert('我是原生的click');
      }
    }
  }
</script>

<style scoped>
  .mod-module.mod-btn .bar-flex{
    display: -webkit-flex; /* Safari */
    display: flex;
  }
  .mod-module.mod-btn .btn-bar{
    padding:5px 12px;
    font-size: 0;
    text-align: center;
  }
  .mod-module.mod-btn .text-r{
    text-align: right;
  }
</style>
