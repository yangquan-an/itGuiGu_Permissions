<template>
    <div class="youke_contrainer">
        <div class="title">实时游客统计</div>
        <img src="../../images/dataScreen-title.png" alt="">
        <div class="right_title">
            可预约总量 <span> {{  sum_people }} </span> 人
        </div>
        <div class="row_people">
            <div>2</div>
            <div>1</div>
            <div>5</div>
            <div>9</div>
            <div>0</div>
            <div>8</div>
            <div>人</div>
        </div>
        <div class="echart_qiu" ref="echart_qiu">
            
        </div>
    </div>
</template>

<script setup lang="ts">
import {  onMounted, ref  } from 'vue'
import * as echarts from 'echarts'
// 水球图插件
import 'echarts-liquidfill'

let sum_people = ref(99999)
let echart_qiu = ref();

onMounted(() =>{
    let myEcharts = echarts.init(echart_qiu.value);
    console.log(myEcharts)
    myEcharts.setOption({
        series:{
            type:'liquidFill',
            data:[0.6,0.4,0.2],
            radius:'80%'
        }

    })
})
</script>


<style scoped lang="scss">
.youke_contrainer{
    width: 100%;
    height: 350px;
    background:url('../../images/dataScreen-main-lb.png') no-repeat;
    background-size: cover;
    font-size: 18px;
    .right_title{
        float:right;
        padding-right: 20px;
        span{
            color: #89ca78;
        }
    }
    .row_people{
        display: flex;
        justify-content: space-around;
        margin-top: 24px;
        height: 40px;
        div{
            background: linear-gradient(to bottom,#336cdc,#0a1a43,#204076);
            color: #29f7fb;
            border: 2px solid #3d70ba;
            width: 100%;
            text-align: center;
            line-height: 40px;
            height: 100%;
        }
    }
    .echart_qiu{
        height: 240px;
        box-sizing: border-box;
        padding: 0px 20px;
    }
}
</style>