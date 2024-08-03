import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '../router';

let request = axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_API, // 获取不同开发模式下的 基础接口
    timeout:5000
})


// 添加请求拦截器
request.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    return response;
  }, function (error) {
    let code = error.response.status
    let messageInfo = ''

    if(code==400){
        messageInfo = '发出的请求有错误，服务器没有进行新建或修改数据的操作。'
    }else if(code == 404){
        messageInfo = '发出的请求针对的是不存在的记录，服务器没有进行操作。'
    }
    ElMessage.error({
        message:messageInfo,
        duration:2.5
    })
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default request