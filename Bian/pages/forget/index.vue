<template>
	<view class="login_class unlogin_class">
		<view class="form_class">
			<view class="select_valid_action">
				<view :class="['action', active === index ? 'on' : '' ]" v-for="(items, index) in validActionList" :key="index" @tap="changeValidAction(index)">{{getLangs(items)}}<view class="line"></view></view>
			</view>
			<view class="form_class">
				<view class="login_form_content">
					<!--手机组件-->
					<Phone ref="phone" v-if="active === 0" />
					<!--邮箱组件-->
					<Email ref="email" v-if="active === 1" />
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name"><text class="iconfont icon-lock"></text></view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<input type="password" class="input_bar" :placeholder="getLangs('passwordPlaceholder')" v-model="pwd" />
					</view>
				</view>
			</view>
			<view class="button" @tap="forgetHandler">{{getLangs('submit')}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 登录
	 */
	import appConfig from '@/config/appConfig.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import loginMixins from '@/mixins/login_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import validateMixins from '@/mixins/validate_mixins.js'
	import validate from '@/utils/validate.js'
	import system from '@/utils/system.js'
	import Phone from '@/layouts/phone/phone.vue'
	import Email from '@/layouts/email/email.vue'
	import { retrievePwd } from '@/api/user.js'
	export default {
		name: 'Forget', 
		mixins: [commonMixins, loginMixins, langsMixins, validateMixins],
		data(){
			return {
				pwd: ''
			}
		},
		components: {
			Phone,
			Email
		},
		methods: {
			/**
			 * 找回密码
			 */
			async forgetHandler(){
				if(this.merge()){
					if(this.pwd === ''){
						return this.$tips.showToast(this.getLangs('passwordEmptyTips'))
					}
					const params = Object.assign(this.merge(), {pwd: this.pwd})
					delete params.checkType
					delete params.verifyType
					this.$tips.showLoading(this.getLangs('loadingText'))
					const res = await retrievePwd(params)
					this.$tips.hideLoading()
					//找回密码
					this.backTips(res)
					if(validate.checkCode(res)){
						const loginParams = {
							uname: params.phone ? params.phone : params.email,
							pwd: params.pwd
						}
						this.loginHandler(loginParams)
					}
				}
			}
		},
		onLoad() {
			this.setTitle(this.getLangs('forget'))
		}
	}
</script>

<style scoped>
</style>
