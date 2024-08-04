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
        path:'/screen',
        component:import('../views/screen/index.vue'),
        name:'数据大屏',
        meta:{
            title:'数据大屏',
            hidden:true,
            icon:'platform'
        },
    },
    {
        path:'/acl',
        component:import('../layout/index.vue'),
        name:'Acl',
        meta:{
            title:'权限管理',
            hidden:true,
            icon:'Lock'
        },
        children:[
            {
                path:'/acl/user',
                name:'User',
                component:import('../views/acl/user/index.vue'),
                meta:{
                    title:'用户管理',
                    hidden:true,
                    icon:'User'
                }
            },
            {
                path:'/acl/role',
                name:'Role',
                component:import('../views/acl/role/index.vue'),
                meta:{
                    title:'角色管理',
                    hidden:true,
                    icon:'UserFilled'
                }
            },
            {
                path:'/acl/permission',
                name:'Permission',
                component:import('../views/acl/permission/index.vue'),
                meta:{
                    title:'用户管理',
                    hidden:true,
                    icon:'SetUp'
                }
            }
        ]
    },
    {
        path:'/product',
        component:import('../layout/index.vue'),
        name:'Product',
        meta: {
            title:'商品管理',
            icon:"Goods",
            hidden:true
        },
        children:[
            {
                path:'/product/trademark',
                component:import('../views/product/trademark/index.vue'),
                name:'Trademark',
                meta: {
                    title:'品牌管理',
                    icon:"ShoppingCartFull",
                    hidden:true
                }
            },
            {
                path:'/product/attr',
                component:import('../views/product/attr/index.vue'),
                name:'Attr',
                meta: {
                    title:'属性管理',
                    icon:"ChromeFilled",
                    hidden:true
                }
            },
            {
                path:'/product/sku',
                component:import('../views/product/sku/index.vue'),
                name:'Sku',
                meta: {
                    title:'Sku管理',
                    icon:"Calendar",
                    hidden:true
                }
            },
            {
                path:'/product/spu',
                component:import('../views/product/spu/index.vue'),
                name:'Spu',
                meta: {
                    title:'Spu管理',
                    icon:"Orange",
                    hidden:true
                }
            }
        ]
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