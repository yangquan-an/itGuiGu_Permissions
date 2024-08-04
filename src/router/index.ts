import { createRouter,createWebHashHistory } from 'vue-router'
import routes from './route'



let router = createRouter({
    history:createWebHashHistory(),
    routes
})


export default router;