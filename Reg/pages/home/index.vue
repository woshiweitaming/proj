<template>
	<view :class="['register_class unlogin_class', lang]">
		<view class="form_class">
			<view class="login_form_content">
				<view class="valid_class">
					<view class="select_valid_action">
						<view :class="['action', active === index ? 'on' : '' ]" v-for="(items, index) in validActionList" :key="index" @tap="changeValidAction(index)">
						  {{getLangs(items)}}
						  <view class="line"></view>
						</view>
					</view>
				</view>
				<!--手机组件-->
				<Phone ref="phone" v-if="active === 0" />
				<!--邮箱组件-->
				<Email ref="email" v-if="active === 1" />
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-mine"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" class="input_bar" :placeholder="getLangs('accountPlaceholder')" v-model="form.uname" />
						</view>
					</view>
				</view>
				<!-- <view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-barrage"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" class="input_bar" :placeholder="getLangs('nicknamePlaceholder')" v-model="form.nickName" />
						</view>
					</view>
				</view> -->
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-lock"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="password" class="input_bar" :placeholder="getLangs('passwordPlaceholder')" v-model="form.pwd" />
						</view>
					</view>
				</view>
			</view>
			<view class="button" @tap="registerHandler">{{getLangs('submit')}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 登录
	 */
	import appConfig from '@/config/appConfig.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import agentMixins from '@/mixins/agent_mixins.js'
	import loginMixins from '@/mixins/login_mixins.js'
	import validateMixins from '@/mixins/validate_mixins.js'
	import validate from '@/utils/validate.js'
	import Phone from '@/layouts/phone/phone.vue'
	import Email from '@/layouts/email/email.vue'
	import { userRegister } from '@/api/user.js' 
	import { getDownload } from '@/api/public.js'
	export default {
		name: 'Login',
		mixins: [commonMixins, langsMixins, agentMixins, validateMixins, loginMixins],
		data(){
			return {
				form: {
					uname: '',
					pwd: '',
					tid: ''
				},
				lang: ''
			}
		},
		components: {
			Phone,
			Email
		},
		methods: {
			/**
			 * 注册
			 */
			async registerHandler(){
				if(this.merge()){
					if(this.form.uname === ''){
						return this.$tips.showToast(this.getLangs('accountPlaceholder'))
					}
					// if(this.form.nickName === ''){
					// 	return this.$tips.showToast(this.getLangs('nicknamePlaceholder'))
					// }
					if(this.form.pwd === ''){
						return this.$tips.showToast(this.getLangs('passwordPlaceholder'))
					}
					const actionParams = this.merge()
					const params = Object.assign(actionParams, this.form)
					this.$tips.showLoading(this.getLangs('loadingText'))
					const res = await userRegister(params)
					this.$tips.hideLoading()
					//注册成功
					this.backTips(res)
					if(validate.checkCode(res)){
						const urlData = await getDownload()
						window.location.href = urlData.data.url
					}
				}
			},
			toLangStatus(lang){
				if(lang == 0){
					return 'cn'
				}
				if(lang == 1){
					return 'en'
				}
				if(lang == 2){
					return 'ja'
				}
				if(lang == 3){
					return 'ko'
				}
				if(lang == 4){
					return 'cns'
				}
				if(lang == 5){
					return 'vi'
				}
			}
		},
		onLoad(opt) {
		    this.form.tid = opt.tid
			this.lang = this.toLangStatus(opt.ens)
			this.$storage.setLocalData('lang', this.lang)
			this.setGlobalLang(this.lang)
		},
		onShow(){
			
		}
	}
</script>

<style scoped>
	.register_class{
		padding-top: 80% !important;
		height: 100%;
	}
	.register_class.en{
		background: url(../../static/images/eagle/en.jpg);
		background-size: 100% 100%;
	}
	.register_class.cn{
		background: url(../../static/images/eagle/cn.jpg);
		background-size: 100% 100%;
	}
	.register_class.cns{
		background: url(../../static/images/eagle/cns.jpg);
		background-size: 100% 100%;
	}
	.register_class.ja{
		background: url(../../static/images/eagle/ja.jpg);
		background-size: 100% 100%;
	}
	.register_class.ko{
		background: url(../../static/images/eagle/ko.jpg);
		background-size: 100% 100%;
	}
	.register_class.vi{
		background: url(../../static/images/eagle/vi.jpg);
		background-size: 100% 100%;
	}
</style>
