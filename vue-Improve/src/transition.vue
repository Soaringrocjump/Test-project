<template>
    <div>
        <button v-on:click="show = !show">show/hide text</button>
        <transition name="fade">
            <p v-if="show">Hello World</p>
        </transition>
    </div>
</template>

<script>
    export default{
        name: 'demo',
        data(){
            return {
                show: true
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active,.fade-leave-active{
        transition: opacity 1s;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
</style>
