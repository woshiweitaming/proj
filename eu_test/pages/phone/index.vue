<template>
	<view class="login_class unlogin_class">
		<view class="form_class">
			<view class="login_form_content">
				<Phone ref="phone" />
			</view>
			<view class="button" @click="PhoneLoginHandler">{{getLangs('submit')}}</view>
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
	import agentMixins from '@/mixins/agent_mixins.js'
	import validateMixins from '@/mixins/validate_mixins.js'
	import system from '@/utils/system.js'
	import validate from '@/utils/validate.js'
	export default {
		name: 'Forget', 
		mixins: [commonMixins, loginMixins, langsMixins, agentMixins, validateMixins],
		data(){
			return {
				form: {
					parentId: ''
				}
			}
		},
		methods: {
			/**
			 * 手机登录
			 */
			async PhoneLoginHandler(){
				if(this.merge()){
					const phoneParams = this.merge()
					const params = Object.assign(phoneParams, this.form)
					delete params.verifyType
					this.loginHandler(params)
				}
			}
		},
		onLoad() {
			this.setTitle(this.getLangs('phoneLogin'))
		}
	}
</script>

<style scoped>
</style>
