import { defineStore } from 'pinia'

let tabber = defineStore('tabber',{
    state: () => {
        return{
            // 定义刷新的状态
            reloadStatus:false
        }
    }
})


export default tabber