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
			let params = {}
			if(this.getPhoneParams()){
				const _phoneParams = this.getPhoneParams()
				const phoneParams = {
					verifyType: 'sms',
					..._phoneParams
				}
				params = phoneParams
			}else{
				return false
			}
			return params
		},
		/**
		 * 手机参数
		 */
		getPhoneParams(){
			const phone = this.$refs.phone.getPhone()
			// const vcode = this.$refs.phone.getVcode()
			const qh = this.$refs.phone.getQh()
			// if(phone.length == 0){
			// 	this.$tips.showToast(this.getLangs('phoneEmptyTips'))
			// 	return false
			// }
			// if(vcode.length == 0){
			// 	this.$tips.showToast(this.getLangs('validCodeEmptyTips'))
			// 	return false
			// }
			const params = {
				phone: phone,
				qh: qh
			}
			return params
		},
		/**
		 * 邮箱参数
		 */
		getEmailParams(){
			const email = this.$refs.email.getEmail()
		    const vcode = this.$refs.email.getVcode()
		    if(email.length == 0){
		    	this.$tips.showToast(this.getLangs('emailEmptyTips'))
		    	return false
		    }
		    if(vcode.length == 0){
		    	this.$tips.showToast(this.getLangs('validCodeEmptyTips'))
		    	return false
		    }
		    const emailParams = {
		    	email: email,
		    	vcode: vcode,
		    }
			return emailParams
		}
	},
	created(){
		//this.validActionList = [this.getLangs('phone'), this.getLangs('email')]
	}
}

export default validateMixins