<template>
	<view>
		<view class="form_label">
			<view class="form_label_name"><text class="iconfont icon-mail"></text></view>
			<view class="form_label_main">
				<view class="form_input_bar">
					<input type="text" class="input_bar" :placeholder="getLangs('emailEmptyTips')" v-model="email" />
				</view>
			</view>
		</view>
		<view class="form_label">
			<view class="form_label_name"><text class="iconfont icon-barrage"></text></view>
			<view class="form_label_main">
				<view class="form_input_bar vcode">
					<input type="text" class="input_bar" :placeholder="getLangs('validCodePlaceholder')" v-model="vcode" />
					<view class="get_code" @click="getMessageCode">{{getVcodeText}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 邮箱组件
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import appConfig from '@/config/appConfig.js'
	import { sendEmail } from '@/api/public.js'
	import validate from '@/utils/validate.js'
	export default {
		name: 'Email',
		mixins: [langsMixins, commonMixins],
		data(){
			return {
				email: '',
				vcode: '',
				timer: null,
				countTimer: 60
			}
		},
		methods: {
			//获取验证码
			async getMessageCode(){
				if(this.countTimer !== appConfig.countTimer){
					return
				}
				if(this.email.length === 0){
					return this.$tips.showToast(this.getLangs('emailEmptyTips'))
				}
				const params = {
					email: this.email,
				}
				this.$tips.showLoading(this.getLangs('loadingText'))
				const res = await sendEmail(params)
				this.$tips.hideLoading()
				if(validate.checkCode(res)){
					this.countTimerHandler()
				}
				this.backTips(res)
			},
			//倒计时
			countTimerHandler(){
				this.countTimer--
				this.timer = setInterval(() => {
					this.countTimer--
					if(this.countTimer === 0){
						this.countTimer = appConfig.countTimer
						clearInterval(this.timer)
						this.timer = null
					}
				}, 1000)
			},
			//获取邮箱
			getEmail(){
				return this.email
			},
			//获取验证码
			getVcode(){
				return this.vcode
			},
		},
		computed: {
			//验证码文字
			getVcodeText(){
				return this.countTimer === appConfig.countTimer ? this.getLangs('getVerificationCode') :  `${this.countTimer}s`
			}
		}
	}
</script>

<style>
</style>
