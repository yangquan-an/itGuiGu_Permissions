import router from './src/router/index'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"


router.beforeEach((to, from, next) => {
    document.title = '硅谷甄选' + '-' + to.meta.title;
    nprogress.start();
    // 首先判断用户是否登录
    let Token = localStorage.getItem('token')

    if(Token){
        // 登录
        if(to.path == '/login'){
            next('/')
        }else{
            next();
        }
    }else{
        if(to.path == '/login'){
            next()
        }else{
            next({ path: '/login', query: { redirect: to.path } })
        }
        // console.log($route)
        // 未登录
    }

})

router.afterEach((to,from) =>{
    nprogress.done()
})