<template>
	<view class="register_class unlogin_class">
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
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-mine"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" @blur="changeInputUname"  class="input_bar" :placeholder="getLangs('accountPlaceholder')" v-model="form.uname" />
						</view>
					</view>
				</view>
				<!-- <view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-barrage"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" @blur="changeInputNickname" class="input_bar" :placeholder="getLangs('nicknamePlaceholder')" v-model="form.nickName" />
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
				<view class="form_label" v-if="isShowParent">
					<view class="form_label_name"><text class="iconfont icon-headlines"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" @input="changeInputParentid" class="input_bar" :placeholder="getLangs('recommendationCodePlaceholder')" v-model="form.parentId" />
						</view>
					</view>
				</view>
				<!--手机组件-->
				<Phone ref="phone" v-if="active === 0" />
				<!--邮箱组件-->
				<Email ref="email" v-if="active === 1" />
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
	export default {
		name: 'Login',
		mixins: [commonMixins, langsMixins, agentMixins, validateMixins, loginMixins],
		data(){
			return {
				form: {
					uname: '',
					// nickName: '',
					pwd: '',
					parentId: ''
				}
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
						//this.$tips.showToast(this.getLangs('success'))
						const loginParams = {
							uname: this.form.uname,
							pwd: this.form.pwd
						}
						this.loginHandler(loginParams)
					}
				}
			},
			changeInputUname(e){
				const value = e.detail.value
				this.form.uname = value.replace(/\s+/g, "");
			},
			changeInputNickname(e){
				const value = e.detail.value
				this.form.nickName = value.replace(/\s+/g, "");
			},
			changeInputParentid(e){
				setTimeout(() => {
					const value = e.detail.value
					const regs = /^([0]|[1-9][0-9]*)$/
					if(regs.test(value)){
						this.form.parentId = value
					}else{
						this.form.parentId = ''
					}
				}, 50)
			}
		},
		onLoad() {
			this.setTitle(this.getLangs('register'))
		}
	}
</script>

<style scoped>
	.register_class{
		padding-top: 20upx !important;
	}
</style>
