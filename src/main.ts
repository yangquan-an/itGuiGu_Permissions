import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element 国际化配置
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'

// 引入 Mock
import './mock/user'

// 引入路由
import router from '../src/router/index'

let app = createApp(App)

import '../src/style/reset.scss'

// 引入注册全局组件的方法
import glodComponent from '../src/components/index.ts'
glodComponent.install(app)


// 鉴权文件
import '../permission.ts'

// 挂载 pinia
import pinia from './store/index.ts'
app.use(pinia)

// element 语言国际化
app.use(ElementPlus, {
  locale: zhCn,
})

app.use(router)

// Element-plus 挂载在 vue 实例中
app.use(ElementPlus).mount('#app')
