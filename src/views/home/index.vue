<template>
    <div class="contrainer">
        <el-card class="card">
            <el-button type="default">哈哈哈</el-button>
            <h1>用户名：{{ UserInfo.username }}</h1>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'


let UserInfo = ref({
    avatar: '',
    username: ''
});

onMounted(() => {
    UserInfo.value.avatar = JSON.parse(localStorage.getItem('avatar') as string)
    UserInfo.value.username = JSON.parse(localStorage.getItem('username') as string)
})

</script>

<style scoped lang="scss">
.contrainer {
    color: black;
    .card {
        h1 {
            font-size: 27px;
        }
    }

}
</style>