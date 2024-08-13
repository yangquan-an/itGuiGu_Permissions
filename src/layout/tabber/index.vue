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
                <template v-for="(item, index) in branchList" :key="index">
                    <el-breadcrumb-item class="breadcrumb_item" v-if="item.meta.hidden" :to="{ path: item.path }">
                        <el-icon>
                            <component :is="item.meta.icon"></component>
                        </el-icon>
                        <span>{{ item.meta.title }}</span>
                    </el-breadcrumb-item>
                </template>

            </el-breadcrumb>
        </div>
        <div class="tabber_right">
            <el-button type="default" icon="Refresh" @click="handlerRefresh" circle></el-button>
            <el-button type="default" icon="FullScreen" @click="fullScreen" circle></el-button>

            <el-popover title="主题设置" placeholder="bottom" :width="300" trigger="hover">
                <el-form>
                   <el-form-item label="主题颜色">
                    <el-color-picker v-model="color" teleported />
                   </el-form-item>
                   <el-form-item label="暗黑模式">
                    <el-switch
                        v-model="dark"
                        size="large"
                        inline-prompt
                        @change="changeDark"
                        :active-action-icon="Hide"
                        :inactive-action-icon="View"
                    />
                    </el-form-item>
                </el-form>
                <template #reference>
                    <el-button type="default" icon="Setting" circle></el-button>
                </template>
            </el-popover>

            <img :src="avatar" style="width: 28px;height: 28px;border-radius: 50%;" alt="">
            <!-- 下拉菜单 -->
            <el-dropdown>
                <span class="el-dropdown-link">
                    <span>{{ username }}</span>
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
import { Hide, View } from '@element-plus/icons-vue'
let dark = ref(false)
const color = ref('rgba(19, 206, 102, 0.8)')
let $route = useRoute()
let $tabber = tabber();
let branchList = computed(() => {
    return $route.matched;
})

const handlerRefresh = () => {
    $tabber.reloadStatus = !$tabber.reloadStatus
}
const fullScreen = () => {
    let boo = document.fullscreenElement
    if (boo) {
        document.exitFullscreen()
    } else {
        document.documentElement.requestFullscreen()
    }
}

const getStorage = (param: string) => {
    return JSON.parse(localStorage.getItem(param) as string)
}

let username = ref(getStorage('username'))
let avatar = ref(getStorage('avatar'))
// 退出登录
let outLogin = () => {
    localStorage.removeItem('token')
    router.replace({ path: '/login', query: { redirect: $route.path } })
}

let changeDark = ()=>{
    let html = document.documentElement;
    dark.value ? html.className = 'dark' : html.className = ''
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

.breadcrumb_item {
    .el-icon {
        position: relative;
        top: 2px;
        left: -5px;
    }
}
</style>