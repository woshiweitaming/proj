/**
 * 请求封装
 */

import axios from 'axios'
import router from '@/router'
import Tips from '@/utils/Tips'
import Storage from '@/utils/Storage'
import ApiConfig from '@/config/ApiConfig'

axios.defaults.withCredentials = true

const request = axios.create({
    baseURL: ApiConfig.getApiDomain(),
    timeout: 30000,
})

//请求拦截器
request.interceptors.request.use(
    confirm => {
        const token = Storage.getLocalData('token')
        const ucode = Storage.getLocalData('ucode')
        confirm.headers.token = token;
        // confirm.headers.ucode = ucode
        return confirm
    },
    error =>{
        return Promise.error(error); 
    }
)

// 响应拦截器
request.interceptors.response.use( 
    response => {
        if(response.status === 200){
            const res = response.data
            if(res.rpCode === '100003'){
                Tips.errorTips('登录超时，请重新登录')
                return router.push({path: '/login'})
            }
            return Promise.resolve(res);
        }else{
            return Promise.reject(response);
        }
    },
    error => {
        return Promise.reject(error.response);  
    }
)

export default request