<template>
    <div class="input">
        <span>{{msg}}</span>{{type}}
        <input type="text" v-model.number="input" @input="trigger" >
    </div>
</template>
<script>
    export default{
        props: ['msg','type','value'],
        data(){
            return{
                input:this.value  //避免直接操作props的值，因为每当父组件重新渲染时，该值就会被覆盖。建议本地设置一个变量将props的值赋给这个本地变量
            }
        },
        methods: {
            trigger(){
                this.$emit("transform",this.type,this.input)//触发父组件事件并返回参数
            }
        },
        watch:{//侦听value值变化并动态赋值给本地变量input
            value:function(){
                this.input = this.value
            }
        }
    }
</script>
