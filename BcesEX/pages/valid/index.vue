<template>
	<view class="valid_class">
		<view class="valid_title">
			<text class="title_text"><text @tap="backToPage('/pages/register/index')"  class="iconfont icon-undo back_arrow"></text>{{getLangs('validAccount')}}</text>
			<text class="sub_title_text">Validate Account</text>
		</view>
		<view class="select_valid_action">
			<view :class="['action', active === index ? 'on' : '' ]" v-for="(items, index) in validActionList" :key="index" @tap="changeValidAction(index)">{{items}}</view>
		</view>
		<view class="form_class">
			<view class="login_form_content">
				<!--手机组件-->
				<Phone ref="phone" v-if="active === 0" />
				<!--邮箱组件-->
				<Email ref="email" v-if="active === 1" />
			</view>
			<view class="button" @tap="registerHandler">{{getLangs('register')}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 账户验证
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import loginMixins from '@/mixins/login_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import validateMixins from '@/mixins/validate_mixins.js'
	import validate from '@/utils/validate.js'
	import { userRegister } from '@/api/user.js' 
	export default {
		name: 'Valid',
		mixins: [commonMixins, langsMixins, loginMixins, validateMixins],
		methods: {
			/**
			 * 注册
			 */
			async registerHandler(){
				if(this.merge()){
					const params = this.merge()
					this.$tips.showLoading(this.getLangs('loadingText'))
					const res = await userRegister(params)
					this.$tips.hideLoading()
					//注册成功
					this.backTips(res)
					if(validate.checkCode(res)){
						this.$tips.showToast(this.getLangs('success'))
						this.loginHandler(params)
					}
				}
			},
			//验证参数完整
			validParams(params){
				if(typeof params === 'undefined') return false
				if(!params.uname || params.uname === '') return false
				if(!params.nickName || params.nickName === '') return false
				if(!params.pwd || params.pwd === '') return false
				return true
 			}
		},
		onLoad(opt) {
			if(!this.validParams(opt)){
				this.$tips.showToast('您填写的信息不完整，请重新填写')
				setTimeout(() => {
					// #ifdef H5
					this.navigateTo('/pages/register/index')
					// #endif
					this.back()
				}, 1000)
			}else{
				this.baseParams = opt
			}
		}
	}
</script>

<style>
</style>
