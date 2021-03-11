import appConfig from '@/config/appConfig.js'
// import storage from '@/utils/storage.js'
// import validate from '@/utils/validate.js'
let lock = false
const request = (params) => {	
	const header = {
		'Content-Type':'application/x-www-form-urlencoded'
	}
	const url = params.data && params.data.rqType == 'contract' ? `${appConfig.contractDomain}${params.url}` : `${appConfig.domain}${params.url}`
	return new Promise((resolve, reject) =>  {
		uni.request({
		    url: url, 
			data: params.data,
			method: params.method,
		    header: header,
			timeout: 30000,
		    success: (res) => {
				if(res.statusCode === 200){
					const data = res.data
					//登陆超时
					if(data.code == 300 || data.code == 401){
						lock = true
						uni.showToast({
							title: '登陆超时',
							icon: 'none'
						})
						setTimeout(() => {
							uni.redirectTo({
								url: '/pages/login_phone/index'
							})
						}, 2000)
					}
					lock = false
					if(!lock){
						if(data.code == 0){
							return uni.showToast({
								title: data.msg,
								icon: 'none'
							})
						}
						resolve(data.return)
					}
				}else{
					return uni.showToast({
						title: 'error',
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