import axios from 'axios'
import router from '@/router'
import appConfig from '@/config/appConfig'
const request = axios.create({
    baseURL: appConfig.domain,
    // withCredentials: true, 
    timeout: 10000,
})

//请求队列
let requestList = []

//未登录请求次数
let unLoginNums = 0

//请求拦截器
request.interceptors.request.use(
    confirm => {
        const token = ''
        confirm.headers.token = token;
        requestList.push(confirm)
        return confirm
    },
    error =>{
        return Promise.error(error); 
    }
)

// 响应拦截器
request.interceptors.response.use( 
    response => {
        //处理队列请求
        if(response.status === 200){
            const res = response.data
            if(res.rpCode === '100003'){
                unLoginNums++
                if(unLoginNums === 1){
                    return router.push({path: '/login'})
                }
            }
        }else{
            return Promise.reject(response);
        }
    },
    error => {
        return Promise.reject(error.response);  
    }
)

export default request