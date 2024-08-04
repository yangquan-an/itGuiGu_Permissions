import router from './src/router/index'

import nprogress from 'nprogress'

import "nprogress/nprogress.css"

router.beforeEach((to, from, next) => {

    nprogress.start();

    let fullPath = to.fullPath;
    if(!(fullPath.indexOf('login') > 0)){
        let token = localStorage.getItem('token')
        if(token){
            next()
        }
        router.replace('/login')
    }
    next()
})

router.afterEach((to,from) =>{
    nprogress.done()
    
})