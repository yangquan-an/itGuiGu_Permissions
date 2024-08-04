<template>
    <template v-for="(item, index) in MenuList" :key="item.path">
        <el-menu-item v-if="!item.children && item.meta.hidden" :index="item.path">
            <template #title>
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
               {{ item.meta.title }}
            </template>
        </el-menu-item>
        <!-- 有子路由但是有且只有一个 这个规则专门处理首页的 -->
        <template v-if="item.children && item.children.length == 1">
            <el-menu-item :index="item.children[0].path" v-if="item.children[0].meta.hidden">
                <template #title>
                    <el-icon>
                        <component :is="item.children[0].meta.icon"></component>
                    </el-icon>
                    {{ item.children[0].meta.title }}
                </template>
            </el-menu-item>
        </template>
        <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
            <template #title>
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                {{ item.meta.title }}
            </template>
            <Menu :MenuList="item.children"></Menu>
        </el-sub-menu>
    </template>
</template>

<script setup lang="ts">

defineProps(['MenuList'])
</script>
<script lang="ts">
export default {
    name: 'Menu'
}
</script>
<style scoped lang="scss"></style>
