import request from '../../utils/request'
import { loginType,loginResponse } from './type'

export const login = (data:loginType) =>{ return request.post<any,loginResponse>('/user/login',data) }


export const info = () =>{ return request.get('/user/info') }
