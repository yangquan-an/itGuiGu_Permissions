import { defineStore } from 'pinia'
import { loginType } from '../../api/user/type'
import { login } from '../../api/user/index'
import { ElMessage } from 'element-plus'
import router from '../../router'
import Route from '../../router/route'
// 用户小仓库
// 选项式API
let userStore = defineStore('user_',{
    // 仓库存储数据的地方
    state:() =>{
        return {
            token:'',
            constantRoute:Route
        }
    },
    // 异步 | 逻辑的地方
    actions:{
        // 处理用户登录的逻辑
        // 使用 async 处理的函数会返回一个 promise 对象,会包含三个状态 --
        async userLogin(data:loginType){
          let result:any =  await login(data);
          if(result.data.code == 200){
            ElMessage.success('登陆成功')
             // 登录成功 存储在localStorageSession
            localStorage.setItem("token",JSON.stringify(result.data.data.token))
            router.push('/home')
            return 'ok';
          }else{
            ElMessage.error('账号或密码错误')
            return Promise.reject(new Error(result.data.data.message))
          }
        }
    },
    // 计算属性
    getters:{

    }
      
})

export default userStore;

