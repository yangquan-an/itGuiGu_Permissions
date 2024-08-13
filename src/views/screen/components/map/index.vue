<template>
    <div class="mapContrainer" ref="map">
    </div>
</template>


<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue';
// 引入中国地图数据
import chinaJson from './china.json'

let map = ref()

// 注册地图
echarts.registerMap('china', chinaJson as any)
onMounted(() => {
    let myEcharts = echarts.init(map.value)
    myEcharts.setOption({
        // 地图组件
        geo: {
            map: 'china', // 注册的地图 key
            roam: true, // 鼠标缩放效果
            // left:0,//地图位置调整
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            label: {
                show: true, // 文字是否展示
                color: 'white',
                fontSize: 14
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#2a498a' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#1595e9' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                opacity: .8 // 透明度
            },
            // 地图高亮
            emphasis: {
                itemStyle: {
                    areaColor: "#2d5fc4",
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                },
                label: {
                    color: 'white',
                    fontSize: 20
                }
            }
        },
        // 布局位置
        grid: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
        },
        series: [
            {
                type: 'lines', // 航线系列
                data: [
                    {
                        coords: [
                            [116.405285, 39.904989],
                            [87.617733, 43.792818]
                        ],
                        // 统一的样式设置
                        lineStyle: {
                            color: '#0f234f',
                            width: 3
                        },

                    },
                    {
                        coords: [
                            [112.982279, 28.19409],
                            [91.132212, 29.660361]
                        ],
                        // 统一的样式设置
                        lineStyle: {
                            color: '#e2a24f',
                            width: 3
                        },

                    }
                ],
                // 特效设置
                effect: {
                    show: true,
                    symbolSize:25,
                    symbol:'triangle',
                    
                }
            }
        ]
    })
})

</script>


<style scoped lang="scss">
.mapContrainer {
    width: 100%;
}
</style>