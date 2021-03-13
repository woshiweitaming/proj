/**
 * 验证混入租价
 */
import Phone from '@/layouts/phone/phone.vue'
import Email from '@/layouts/email/email.vue'
const validateMixins = {
	data(){
		return {
			validActionList: ['phone', 'email'],
			active: 0,
			baseParams: {}
		}
	},
	components: {
		Phone,
		Email
	},
	methods: {
		/**
		 * 切换验证方式
		 */
		changeValidAction(index){
			this.active = index
		},
		/**
		 * 组合验证参数
		 */
		merge(){
			const verifyType = this.active === 0 ? 'sms' : 'email'
			let params = {}
			if(verifyType === 'sms'){
				if(this.getPhoneParams()){
					const _phoneParams = this.getPhoneParams()
					const phoneParams = {
						verifyType: verifyType,
						..._phoneParams
					}
					delete this.baseParams.email
					params = Object.assign(this.baseParams, phoneParams)
				}else{
					return false
				}
			}else if(verifyType === 'email'){
				if(this.getEmailParams()){
					const _emailParams = this.getEmailParams()
					const emailParams = {
						verifyType: verifyType,
						..._emailParams
					}
					delete this.baseParams.phone
					delete this.baseParams.qh
					params = Object.assign(this.baseParams, emailParams)
				}else{
					return false
				}
			}
			return params
		},
		/**
		 * 手机参数
		 */
		getPhoneParams(){
			const phone = this.$refs.phone.getPhone()
			const vcode = this.$refs.phone.getVcode()
			const qh = this.$refs.phone.getQh()
			// if(phone === ''){
			// 	this.$tips.showToast(this.getLangs('phoneEmptyTips'))
			// 	return false
			// }
			// if(vcode === ''){
			// 	this.$tips.showToast(this.getLangs('validCodeEmptyTips'))
			// 	return false
			// }
			const params = {
				phone: phone,
				// vcode: vcode,
				qh: 86
			}
			return params
		},
		/**
		 * 邮箱参数
		 */
		getEmailParams(){
			const email = this.$refs.email.getEmail()
		    const vcode = this.$refs.email.getVcode()
		    if(email === ''){
		    	this.$tips.showToast(this.getLangs('emailEmptyTips'))
		    	return false
		    }
		    // if(vcode === ''){
		    // 	this.$tips.showToast(this.getLangs('validCodeEmptyTips'))
		    // 	return false
		    // }
		    const emailParams = {
		    	email: email,
		    	// vcode: vcode,
		    }
			return emailParams
		}
	},
	created(){
		//this.validActionList = [this.getLangs('phone'), this.getLangs('email')]
	}
}

export default validateMixins