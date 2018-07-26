<template>
  <div class="qrcode-box">
      <div id="qrcode" ref="qrcode">

      </div>
  </div>
</template>

<script>
  import QRcode from 'qrcodejs2';
  export default {
    methods: {
      qrcode () {
        let qrcode = new QRCode('qrcode', {
          width: 200,
          height: 200, // 高度
          text: 'test' // 二维码内容
          // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
          // background: '#f0f'
          // foreground: '#ff0'
        })
        console.log(qrcode)
        console.log("进入qrcode")
      }
    },
    mounted () {
      this.qrcode()
    }

  }
</script>
<style scoped>
  .qrcode-box{
    width: 220px;
    height: 220px;
    background: #f5f5f5;
    padding: 10px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  #qrcode{
      width: 100%;
      height: 100%;
      background: #fff;
  }
</style>