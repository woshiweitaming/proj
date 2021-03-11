import appConfig from '@/config/appConfig.js'
import storage from '@/utils/storage.js'
import validate from '@/utils/validate.js'
let flag = 0
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
					resolve(res.data)
				}else{
					return uni.showToast({
						title: res.data.error,
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