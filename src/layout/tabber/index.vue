<template>
    <div class="tabber">
        <div class="tabber_left">
            <div class="left_icon">
                <el-icon>
                   <component is="Fold"></component>
                </el-icon>
            </div>
            <!-- 面包屑 -->
            <el-breadcrumb class="breadcrumb" separator-icon="ArrowRight">
                <template v-for="(item,index) in branchList" :key="index">
                    <el-breadcrumb-item class="breadcrumb_item" v-if="item.meta.hidden" :to="{ path: item.path }">
                        <el-icon>
                            <component :is="item.meta.icon"></component>
                        </el-icon>
                        <span>{{item.meta.title}}</span>
                </el-breadcrumb-item>
                </template>
               
            </el-breadcrumb>
        </div>
        <div class="tabber_right">
            <el-button type="default" icon="Refresh" @click="handlerRefresh" circle></el-button>
            <el-button type="default" icon="FullScreen" @click="fullScreen" circle></el-button>
            <el-button type="default" icon="Setting" circle></el-button>
            <img :src="avatar" style="width: 28px;height: 28px;border-radius: 50%;" alt="">
            <!-- 下拉菜单 -->
            <el-dropdown>
                <span class="el-dropdown-link">
                    <span>{{username}}</span>
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="outLogin">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router'
import tabber from '../../store/modules/tabber'
import router from '../../router';


let $route = useRoute()
let $tabber = tabber();
let branchList = computed(() =>{
    return $route.matched;
})

const handlerRefresh = () =>{
    $tabber.reloadStatus = !$tabber.reloadStatus
}
const fullScreen = () =>{
   let boo = document.fullscreenElement
   if(boo){
        document.exitFullscreen()
   }else{
        document.documentElement.requestFullscreen()
   }
}

const getStorage = (param:string) =>{
    return JSON.parse(localStorage.getItem(param) as string)
}

let username = ref(getStorage('username'))
let avatar = ref(getStorage('avatar'))
// 退出登录
let outLogin = () =>{
    localStorage.removeItem('token')
    router.replace({path:'/login',query:{redirect:$route.path}})
}

</script>


<style scoped lang="scss">
.tabber {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0px 20px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    background-color:rgb(247, 247, 247);

    .tabber_left {
        display: flex;
        align-items: center;

        .breadcrumb {
            margin-left: 20px;
        }
    }

    .tabber_right {
        display: flex;
        align-items: center;

        img {
            margin: 0px 10px;
        }
    }
}

.breadcrumb_item{
   .el-icon{
        position: relative;
        top:2px;
        left: -5px;
   }
}
</style>