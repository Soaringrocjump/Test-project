<template>
  <div class="qui-list">
    <span class="list-tips">{{tipsText}}</span>
    <!--<qui-btn v-on:btnClickEvent="btnClickEvent" :msg=msg class="small"></qui-btn>-->
    <!--quiList本身是一个组件，而在这个组件里面，我们又引入了按钮组件quiButton，也就是组件内引用组件，实际上就是组件的嵌套-->
    <component :is="currentView" v-on:btnClickEvent="clickEvent" :msg=msg class="small"  keep-alive></component>
    <!--
      component标签是Vue自带的一个标签，可以把它当作一个容器，这个容器可以用来装按钮，也可以用来装箭头。决定这个容器装哪个组件的关键代码在于：is="currentView"，当currentView的值为qui-btn的时候，这个容器就是按钮组件，当它是qui-arrow的时候，就是箭头组件
      :msg=msg 这里冒号表示绑定的是一个变量msg，然后这个属性通过props暴露出去(本身在按钮中就暴露了msg给列表组件使用)
      keep-alive关键字保持这个组件在内存中是常驻的，由于动态组件可能需要动态切换，这样保持组件活跃可以减少组件变化时候的内存消耗。
    -->
  </div>
</template>

<script>
  import quiButton from '../components/quiButton.vue'
  import quiArrow from '../components/quiArrow.vue'
  export default{
    props:{
      msg: {
        default: '下载'
      },
      tipsText: {
        default: '默认的文案'
      },
      currentView:{
        default: 'qui-btn'
      },
      btnClickEvent: {/*方便每个子组件分配各自的触发事件*/
        type: Function,
        default: function () {
          alert(this.msg + '我是中间层事件');
        }
      }
    },
    components: {
      'qui-btn': quiButton,
      'qui-arrow': quiArrow
    },
    methods: {
      clickEvent: function () {
        this.btnClickEvent();
        this.$emit('grapaBtnClickEvent');
      }
    }
  }
</script>
<style scoped>
  .qui-list{
    padding: 10px 0;
    margin-left: 10px;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
    vertical-align: middle;
    display: flex;
    justify-content:center;
    align-items:Center;
    min-height: 30px;
  }
  .qui-list .qui-btn{
    float: right;
    margin-right: 10px;

  }
  .qui-list .list-tips{
    padding: 0 5px;
    color: #00A0D8;
    float: left;
    vertical-align: middle;
    flex:1;
    text-align: left;
    font-size: 14px;
  }
</style>

