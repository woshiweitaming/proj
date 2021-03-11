import { mapMutations, mapGetters } from 'vuex'
import { getUserLeftmoney, userCertInfo, getUserInfo, getBalance1 } from '@/api/user.js'
import validate from '@/utils/validate.js'
const userMixins = {
	methods: {
		data(){
			return {
				timer: null
			}
		},
		/**
		 * 获取用户余额
		 */
		async getUserLeftmoneyHandler(){
			const res = await getBalance1()
			if(validate.checkCode(res)){
				this.setLeftmoney(res)
				// this.setAccountBanlance(res.data)
				// this.setCny(res.allCNY)
				// const data = res.data.filter(d => {
				// 	if(d.type == 2){
				// 		return d
				// 	}
				// })
				// this.setLeftmoney(data[0].usdt)
				// this.setAccountBanlance(res.data)
			}
		},
		/**
		 * 获取实名认证信息
		 */
		async checkCertInfoHandler(){
			const res = await userCertInfo()
			if(validate.checkCode(res)){
				this.setCertInfo(res.data)
			}
		},
		/**
		 * 获取用户信息
		 */
		async getUserInfoHandler(){
			const res = await getUserInfo()
			if(validate.checkCode(res)){
				this.setUserInfoData(res.data)
			}
		},
		//设置定时器
		setTimer(){
			if(this.timer !== null){
				this.clearTimer()
			}
			this.timer = setInterval(() => {
				this.getUserLeftmoneyHandler()
			}, 2000)
		},
		//取消定时器
		clearTimer(){
			clearInterval(this.timer)
			this.timer = null
		},
		...mapMutations({
			setLeftmoney: 'SET_LEFTMONEY',
			setCertInfo: 'SET_CERT_INFO',
			setUserInfoData: 'SET_USER_INFO_DATA',
			setAccountBanlance: 'SET_ACCOUNT_BANLANCE',
			setCny: 'SET_CNY'
		})
	},
	computed: {
		...mapGetters({
			getLeftmoney: 'getLeftmoney',
			getCertinfo: 'getCertInfo',
			getUserInfoData: 'getUserInfoData',
			getCny: 'getCny',
			getAccountBanlance: 'getAccountBanlance'
		})
	},
	onShow(){
		// this.clearTimer()
		// this.getUserLeftmoneyHandler()
		// this.setTimer()
		// this.$once('hook:beforeDestroy', () => {            
		//     this.clearTimer()                              
		// })
		// this.$once('hook:onUnload', () => {
		//     this.clearTimer()                              
		// })
	},
	onUnload(){
		//this.clearTimer()
	},
	created() {
		// this.clearTimer()
		// this.getUserLeftmoneyHandler()
		// this.setTimer()
	},
	destroyed(){
		this.clearTimer()
	}
}

export default userMixins