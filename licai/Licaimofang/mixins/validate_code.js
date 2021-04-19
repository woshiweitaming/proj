import tips from '@/utils/tips.js'
import { sendSms, sendEmail } from '@/apis/users.js'
import { getShearCaptch } from '@/apis/publics.js'
//验证码
const validateCodeMixins = {
	data(){
		return {
			sendStatus: false,
			count: 60,
			timer: null,
			rand: ''
		}
	},
	methods: {
		async getImageValidate(){
			if(this.form.phone.length === 0){
				return tips.showToast(this.getLang('register_p2'))
			}
			this.rand = Math.random()
			const res = await getShearCaptch({rand: this.rand})
			this.imageValidate.show = true
		},
		async getPhoneCode(){
			if(!this.sendStatus){
				if(this.form.phone.length === 0){
					return tips.showToast(this.getLang('register_p2'))
				}
				tips.showLoading(this.getLang('common_p1'))
				//发送请求
				const params = {
					phone: this.form.phone,
					qh: this.form.qh,
					code: '',
					rand: this.rand
				}
				const res = await sendSms(params)
				tips.hideLoading()
				this.sendStatus = true
				this.startCountDown()
			}
		},
		async getEmailCode(){
			if(this.form.email.length === 0){
				return tips.showToast(this.getLang('register_p15'))
			}
			if(!this.sendStatus){
				//发送请求
				const params = {
					email: this.form.email
				}
				const res = await sendEmail(params)
				tips.hideLoading()
				this.sendStatus = true
				this.startCountDown()
			}
		},
		startCountDown(){
			const that = this
			this.timer = setInterval(() => {
				that.count--
				if(that.count === 0){
					that.sendStatus = true
					that.count = 60
					clearInterval(that.timer)
					that.timer = null
				}
			}, 1000)
		}
	},
	computed: {	
		getCodeTxt(){
			return this.sendStatus ? `${this.count}s` : this.getLang('register_p11')
		}
	}
}

export default validateCodeMixins