// 定义登录type
export interface loginType {
    password:string,
    username:string
}



export interface loginResponse {
    data:{
        code:number,
        data:{
            token:string
        }
    }
}