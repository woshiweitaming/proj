import axios from 'axios'
import router from '@/router'
import appConfig from '@/config/appConfig'
import storage from '@/utils/storage'
import validate from '@/utils/validate'
import tips from '@/utils/tips'
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
        const token = storage.getLocalData('token')
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
            return validate.checkCode(res, () => {
                return Promise.resolve(res);
            }, (msg, isToLogin) => {
                if(isToLogin){
                    unLoginNums++
                    if(unLoginNums === 1){
                        tips.errorTips('登录超时，请重新登录')
                        return router.push({path: '/login'})
                    }
                }else{
                    //tips.errorTips(msg)
                    return Promise.resolve(res);
                }
            })
        }else{
            return Promise.reject(response);
        }
    },
    error => {
        return Promise.reject(error.response);  
    }
)

export default request