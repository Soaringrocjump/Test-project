<template>
  <div class="inputBox">
    <h1>摄氏度转华氏度</h1>
    <My-input :value="cValue" type="c" msg="摄氏度" @transform="aaa"></My-input>
    <My-input :value="fValue" type="f" msg="华氏度" @transform="aaa"></My-input>
  </div>
</template>

<script>
    import Myinput from './input.vue';

    export default {
        data(){
            return{
                // type:'c',//f
                // value:0,//100
                cValue:'',
                fValue:''
            }
        },
        methods: {
            //华氏转摄氏
            toCelsius(fahrenheit) {
                return (fahrenheit - 32) * 5 / 9;
            },
            //摄氏转华氏
            toFahrenheit(celsius) {
                return (celsius * 9 / 5) + 32;
            },
            aaa(type,value){//子组件返回参数
                this.cValue = type === 'f' ? this.toCelsius(value) : value;
                this.fValue = type === 'c' ? this.toFahrenheit(value) : value;
            }
        },
        components:{
            'My-input': Myinput
        }
    }
</script>