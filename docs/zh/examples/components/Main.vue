<script setup>

import { ref, onMounted } from "vue";


const codepen = ref(null);

onMounted(() => {
    console.log('Mounted');


})


</script>


<template>
    <div id="cnt">
         自定义组件页面   
    </div>
</template>

<style>


#cnt {
    height: calc(100vh - 64px);
    width: 100%;

    iframe {
        display: block;
        border: none;
        width: 100%;
        height: 100%;
    }
}
</style>
