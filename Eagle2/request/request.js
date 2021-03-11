import appConfig from '@/config/appConfig.js'
import storage from '@/utils/storage.js'
import validate from '@/utils/validate.js'
let flag = 0
const request = (params) => {	
	const token = storage.getLocalData('token')
	const pages = getCurrentPages()
	const page = pages[pages.length - 1]
	const route = pages.length === 0 ? '' : page.route
	const lang = storage.getLocalData('lang')
	let ens = 1
	switch (lang) {
		case 'cn' :
		    ens = 0
			break;
		case 'en' :
		    ens = 1
			break;
		case 'ja' :
		    ens = 2
			break;
		case 'ko' :
		    ens = 3
			break;
		case 'cns' :
		    ens = 4
			break;
		case 'vi' :
		    ens = 5
			break;
	}
	const header = {
		token: token,
		ens: ens,
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
					if(validate.checkAuthCode(res.data)){
						if(route == 'pages/login/index' || route == 'pages/register/index' || route == 'pages/valid/index' || route == 'pages/forget/index' ){
							return
						}
						uni.redirectTo({
							url: '/pages/login/index'
						})
					}else{
						resolve(res.data)
					}
				}else{
					return uni.showToast({
						title: res.data.error,
						icon: 'none'
					})
				}
		    },
			fail: (e) => {
				reject(e)
				// flag++
				// var reg = /^[+-]?(\d){1,}0$/;
				// if(flag === 1 || reg.test(flag)){
				// 	uni.showToast({
				// 		title: 'error',
				// 		icon: 'none'
				// 	})
				// 	uni.hideLoading()
				// 	reject(e)
				// }
			}
		});
	})
}

export default request