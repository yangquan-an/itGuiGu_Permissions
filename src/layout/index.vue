<template>
    <div class="layout_contrainer">
        <!-- 左侧菜单 -->
        <div class="layout_aside">
            <IconLogo> </IconLogo>
            <el-scrollbar class="scrollbar">
                <el-menu router background-color="#001529" text-color="white" :default-active="nowPath">
                    <LeftManu :MenuList />
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 头部菜单 -->
        <div class="layout_header">

        </div>
        <div class="layout_main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
import IconLogo from './iconLogo/index.vue'
import LeftManu from './leftMenu/index.vue'
import userInfo from '../store/modules/user'
import { useRoute } from 'vue-router'
import { ref } from 'vue';
let userinfo = userInfo();
let MenuList = ref(userinfo.constantRoute)
let nowPath = ref(useRoute().fullPath)


</script>

<style lang="scss" scoped>
.layout_contrainer {
    width: 100%;
    height: 100vh;
    background: red;

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
        background: gray;
    }

    .layout_main {
        position: absolute;
        left: 280px;
        top: 50px;
        height: calc(100vh - 50px);
        width: calc(100% - 280px);
        background: black;
        overflow: auto;
        box-sizing: border-box;
        padding: 20px;
    }
}

.scrollbar {
    height: calc(100vh - 50px);
}
</style>