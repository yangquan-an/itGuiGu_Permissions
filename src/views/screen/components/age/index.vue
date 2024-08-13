<template>
    <div class="age_contrainer">
        <div class="title">
            年龄比例
        </div>
        <img src="../../images/dataScreen-title.png" alt="">

        <div class="echarts" ref="age_echarts">

        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';
let age_echarts = ref()


onMounted(() => {
    let myEcharts = echarts.init(age_echarts.value)
    myEcharts.setOption({
        tooltip: {
            trigger: 'item'
        },
        legend: {
            right: 'right',
            top: 'center',
            padding: 30,
            textStyle: {
                fontSize: 18,
                color: 'white',
            }
        },

        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: '军事' },
                    { value: 735, name: '新闻' },
                    { value: 580, name: '直播' },
                    { value: 484, name: '娱乐' },
                    { value: 300, name: '财经' }
                ]
            }
        ]
    })
})

</script>

<style scoped lang="scss">
.age_contrainer {
    width: 100%;
    height: 310px;
    background: url('../../images/dataScreen-main-lc.png') no-repeat;
    background-size: cover;

    .echarts {
        height: 90%;
    }
}
</style>