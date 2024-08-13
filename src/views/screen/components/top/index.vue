<template>
    <div class="box">
        <div class="left">
            <span @click="returnHome">首页</span>
        </div>
        <div class="center">
            智慧旅游可视化大数据平台
        </div>
        <div class="right">
            <span>统计报告</span>
            <div class="time">当前时间: {{ nowTime }}</div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { dayjs } from 'element-plus';
import { ref,onBeforeUnmount} from 'vue'
import { useRouter } from 'vue-router'
let $router = useRouter();

let returnHome = () => $router.push('/')

let nowTime = ref(dayjs(new Date()).format("YYYY-MM-DD HH-mm-ss"))

let timeRef = ref()

timeRef.value = setInterval(() =>{
    nowTime.value = dayjs(new Date()).format("YYYY-MM-DD HH-mm-ss")
},1000)

// 组件销毁之前清除定时器
onBeforeUnmount(() =>{
    if(timeRef.value)clearInterval(timeRef.value)
})

</script>

<style scoped lang="scss">
.box{
    width: 100%;
    height: 100%;
    display: flex;
    color: #29fcff;
    font-size: 18px;
    .left {
        flex: 1.5;
        background: url('../../images/dataScreen-header-left-bg.png') no-repeat;
        background-size: cover;
        height: 42px;
        display: flex;
        justify-content: right;
        span{
            display: block;
            width: 130px;
            height: 42px;
            line-height: 42px;
            text-align: center;
            background-image: url('../../images/dataScreen-header-btn-bg-l.png');
            background-size: color;
            background-repeat: no-repeat;
        }
    }
    .center{
        flex: 2;
        height: 100%;
        background: url('../../images/dataScreen-header-center-bg.png') no-repeat;
        background-size: 100% 100%;
        font-size: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .right{
        flex:1.5;
        height: 42px;
        background: url('../../images/dataScreen-header-left-bg.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .time{
            margin-right: 30px;
        }
        span{
            display: block;
            width: 130px;
            height: 42px;
            line-height: 42px;
            text-align: center;
            background-image: url('../../images/dataScreen-header-btn-bg-r.png');
            background-size: color;
            background-repeat: no-repeat;
        }
    }
}
</style>