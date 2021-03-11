import validate from '@/utils/validate.js'
import { userLogin } from '@/api/user.js'
const loginMixins = {
	methods: {
		/**
		 * 登录
		 */
		async loginHandler(params){
			if(params.uname.length == 0){
				return this.$tips.showToast(this.getLangs('accountPlaceholder'))
			}
			if(params.pwd.length == 0){
				return this.$tips.showToast(this.getLangs('passwordPlaceholder'))
			}
			this.$tips.showLoading(this.getLangs('loadingText'))
			const res = await userLogin(params)
			this.$tips.hideLoading()
			//登录成功
			if(validate.checkCode(res)){
				this.$storage.setLocalData('token', res.data.token)
				this.$storage.setLocalData('nickname', res.data.ncikname)
				this.$tips.showToast(this.getLangs('success'))
				setTimeout(() => {
					this.reLaunch('/pages/home/index')
				}, 1000)
			}else{
				this.backTips(res)
			}
		},
	}
}

export default loginMixins