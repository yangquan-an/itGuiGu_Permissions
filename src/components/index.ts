// 注册全局组件
import SvgIcon from './SvgIcon/index.vue'
// 全局挂载 icon 所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

let objAll = { SvgIcon }

export default {
    install(app){
        Object.keys(objAll).forEach(item =>{
            // 获取到 key 值 SvgIcon
            app.component(item,objAll[item])
        })
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
          }
    }
}