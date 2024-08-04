<template>
    <div class="layout_contrainer">
        <!-- 左侧菜单 -->
        <div class="layout_aside">
            <IconLogo> </IconLogo>
            <el-scrollbar class="scrollbar">
                <el-menu router  background-color="#001529" text-color="white" :default-active="useRoute().path">
                    <LeftManu :MenuList />
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 头部菜单 -->
        <div class="layout_header">
            <tabber />
        </div>
        <div class="layout_main">
            <router-view v-slot="{ Component }">
                <transition name="fade">
                    <keep-alive>
                        <component :is="Component" :key="useRoute().path" v-if="life_com" />
                    </keep-alive>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
import IconLogo from './iconLogo/index.vue'
import LeftManu from './leftMenu/index.vue'
import userInfo from '../store/modules/user'
import tabber from './tabber/index.vue'
import { useRoute } from 'vue-router'
import tabberStore from '../store/modules/tabber'
import { nextTick, ref,watch } from 'vue';
let userinfo = userInfo();
let MenuList = ref(userinfo.constantRoute)
let $tabberStore = tabberStore();

let life_com = ref(true)
watch(()=>$tabberStore.reloadStatus,()=>{
    // 当刷新按钮被触发的时候，重新加载组件，先卸载，再加载
    life_com.value = false
    // 当页面 DOM 更新完毕再加载组件
    nextTick(() =>{
        life_com.value = true
    })
})



</script>

<style lang="scss" scoped>
.layout_contrainer {
    width: 100%;
    height: 100vh;

    .layout_aside {
        width: 280px;
        height: 100%;
        background: #001529;
    }
    
    .layout_header {
        height: 50px;
        width: calc(100% - 280px);
        position: absolute;
        left: 280px;
        top: 0px;
    }

    .layout_main {
        position: absolute;
        left: 280px;
        top: 50px;
        height: calc(100vh - 50px);
        width: calc(100% - 280px);
        // background: black;
        overflow: auto;
        box-sizing: border-box;
        padding: 20px;
    }
}

.scrollbar {
    height: calc(100vh - 50px);
}




</style>