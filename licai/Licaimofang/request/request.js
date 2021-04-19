import appConfig from '@/config/appConfig.js'
import storage from '@/utils/storage.js'
import validate from '@/utils/validate.js'
let unLoginCount = 0
const request = (params) => {	
	const token = storage.getLocalData('token')
	const header = {
		token: token,
		'Content-Type':'application/x-www-form-urlencoded'
	}
	return new Promise((resolve, reject) =>  {
		uni.request({
		    url: `${appConfig.domain}${params.url}`, 
			data: params.data,
			method: params.method,
		    header: header,
			timeout: 30000,
		    success: (res) => {
				if(res.statusCode === 200){
					if(res.data.rpCode === '000000'){
						return resolve(res.data)
					}
					if(res.data.rpCode === '100003'){
						unLoginCount++
						if(unLoginCount === 1){
							uni.showToast({
								title: res.data.rpMsg,
								icon: 'none'
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '/pages/login/index'
								})
							}, 1000)
						}
					}
					return uni.showToast({
						title: res.data.rpMsg,
						icon: 'none'
					})
				}else{
					return uni.showToast({
						title: res.data.rpMsg,
						icon: 'none'
					})
				}
		    },
			fail: (e) => {
				reject(e)
			}
		});
	})
}

export default request