import { createRouter,createWebHashHistory } from 'vue-router'
import { ElMessage } from 'element-plus'
import routes from './route'



let router = createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let fullPath = to.fullPath;
    if(!(fullPath.indexOf('login') > 0)){
        let token = localStorage.getItem('token')
        if(token){
            next()
            return;
        }
        router.replace('/login')
        return;
    }
    next()
})


export default router;