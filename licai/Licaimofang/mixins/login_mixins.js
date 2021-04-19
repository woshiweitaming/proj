import { userLogin } from '@/apis/users.js'
import tips from '@/utils/tips.js'
import storage from '@/utils/storage.js'
const loginMixins = {
	methods: {
		async loginHandler(params){
			const { uname, pwd } = params
			if(uname.length=== 0) return tips.showToast(this.getLang('login_p4'))
			if(pwd.length=== 0) return tips.showToast(this.getLang('login_p5'))
			const res = await userLogin(params)
			const token = res.data.token
			storage.setLocalData('token', token)
			uni.reLaunch({
				url: '/pages/home/index'
			})
		}
	}
}

export default loginMixins