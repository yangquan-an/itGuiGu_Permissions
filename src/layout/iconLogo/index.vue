<template>
    <div class="Logo" v-if="setting.Hidden">
        <img :src="setting.Icon" alt="">
        <p>{{setting.title}}</p>
    </div>
</template>

<script setup lang="ts">
import setting from '../../../setting.ts'


</script>

<style scoped lang="scss">
.Logo{
    height:50px;
    width:280px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    img{    

        height:40px;
        width:50px;
    }
    p{
        font-size: 20px;
        padding-left: 10px;
    }
}
</style>