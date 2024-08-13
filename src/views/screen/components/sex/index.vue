<template>
    <div class="sex_contrainer">
        <div class="title">
            男女比例
        </div>
        <img src="../../images/dataScreen-title.png" alt="">
        <div class="people_head">
            <div class="sex_man">
                <img src="../../images/man.png" alt="">
            </div>
            <div class="sex_woman">
                <img src="../../images/woman.png" alt="">
            </div>
        </div>

        <div class="echarts_title">
            <div>男:58%</div>
            <div>女:42%</div>
        </div>
        <div class="echarts" ref="sex_echarts">

        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted,ref } from 'vue';
import * as echarts from 'echarts'


let sex_echarts = ref()

onMounted(() =>{
   let mycharts =  echarts.init(sex_echarts.value)
    mycharts.setOption({
    //组件标题
    title: {
      text: '男女比例',//主标题
      textStyle: {//主标题颜色
        color: 'skyblue'
      },
      left: '40%'
    },
    //x|y
    xAxis: {
      show: false,
      min: 0,
      max: 100
    },
    yAxis: {
      show: false,
      type: 'category'
    },
    series: [
      {
        type: 'bar',
        data: [58],
        barWidth: 20,
        z: 100,
        itemStyle: {
          color: 'skyblue',
          borderRadius: 20
        }
      }
      ,
      {
        type: 'bar',
        data: [100],
        barWidth: 20,
        //调整女士柱条位置
        barGap: '-100%',
        itemStyle: {
          color: 'pink',
          borderRadius: 20
        }
      }
    ],
    grid: {
      left: 20,
      top: 0,
      right: 20,
      bottom: 0
    }
  });
})

</script>


<style scoped lang="scss">
.sex_contrainer{
    font-size: 18px;
    width: 100%;
    height: 310px;
    background: url('../../images/dataScreen-main-lb.png') no-repeat;
    background-size: cover;
    .people_head{
        margin-top: 30px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        .sex_man{
            margin-right: 30px;
            background: url('../../images/man-bg.png') no-repeat;
            background-size: cover;
            width: 130px;
            height: 130px;
            text-align: center;
            img{
                margin-top: 40px;
            }
        }
        .sex_woman{
            background: url('../../images/woman-bg.png') no-repeat;
            background-size: cover;
            width: 130px;
            height: 130px;
            text-align: center;
            img{
                margin-top: 40px;
            }
        }
    }
    .echarts{
        height: 100px;
    }
    .echarts_title{
        display: flex;
        box-sizing: border-box;
        padding: 0px 20px;
        justify-content: space-between;
    }
}
</style>