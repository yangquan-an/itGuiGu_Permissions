import notFound from '../views/404/index.vue'
import login from '../views/login/index.vue'


const constantRoute =  [
    {
        path:'/login',
        component: login,
        name:'登录',
        meta:{
            title:'登录',
            hidden:false,
            icon:'Promotion'
        }
    },
    {
        path:'/',
        component: import('../layout/index.vue'),
        name:'layout',
        meta:{
            title:'layout',
            hidden:false,
            icon:"Avatar"
        },
        redirect:'/home',
        children:[
            {
                path:'/home',
                component:import('../views/home/index.vue'),
                meta:{
                    title:'首页',
                    hidden:true,
                    icon:'HomeFilled'
                }
            }
        ]
    },
    {
        path:'/404',
        component:notFound,
        name:'404',
        meta:{
            title:'404',
            hidden:false,
            icon:'HomeFilled'
        },
    },
    {
        path:'/:pathMatch(.*)*',
        component:notFound,
        meta:{
            title:'任意路由',
            hidden:false,
            icon:'HomeFilled'
        },
    }
    
]


export default  constantRoute;