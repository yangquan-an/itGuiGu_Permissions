<template>
    <div class="contrainer">
        <!-- 数据大屏展示内容区域 -->
        <div class="screen" ref="screen">
            <!-- 数据大屏顶部 -->
            <div class="top">
                <top />
            </div>
            <div class="bottom">
                <div class="left">
                    <youke />
                    <sex />
                    <age />
                </div>
                <div class="center">
                    <Map class="map" />
                    <Line class="line" />
                </div>
                <div class="right">
                    <hotScenic class="hotScenic" />
                    <Year class="year" />
                    <dataDetail class="dataDetail" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import top from './components/top/index.vue'
import youke from './components/youke/index.vue'
import sex from './components/sex/index.vue'
import age from './components/age/index.vue'
import Map from './components/map/index.vue'
import Line from './components/line/index.vue'
import hotScenic from './components/hotScenic/index.vue'
import dataDetail from './components/dataDetail/index.vue'
import Year from './components/year/index.vue'

let screen = ref()

onMounted(() =>{
    screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})

window.onresize = () =>{
    screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
// 因为是按照 1980 1080 设计，等比例去放大缩小，自适应
function getScale(w=1980,h=1080){
    let vw = window.innerWidth / w
    let vh = window.innerHeight / h
    return vw < vh ? vw : vh;
}


</script>

<style scoped lang="scss">
.contrainer {
    width: 100vw;
    height: 100vh;
    color: white;
    background-image: url('./images/bg.png');
    background-size: cover;
    font-size: 18px;
    .screen{
        position: fixed;
        width: 1920px;
        height: 1080px;
        transform-origin: left top;
        left: 50%;
        top: 50%;
        .top{
            width: 100%;
            height: 80px;
        }
        .bottom{
            width: 100%;
            height: 100%;
            display: flex;
            .left{
                flex: 1.3;
                height: 1000px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                color: white;
            }
            .center{
                flex: 2;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin: 20px;
                .map{
                    flex: 3;
                    margin-bottom: 30px;
                }
                .line{
                    flex: 1.5;
                }
            }
            .right{
                flex: 1.3;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .hotScenic{
                    flex: 1;
                }
                .year{
                    flex: 1;
                    margin: 20px 0px;
                }
                .dataDetail{
                    flex:1
                }
            }
        }
    }
}
</style>