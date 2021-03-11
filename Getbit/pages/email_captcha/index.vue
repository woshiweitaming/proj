<template>
	<view class="login">
		<view class="login_title">邮箱验证码</view>
		<view class="tips">验证码已发送到您的邮箱 {{getEmail}}</view>
		<view class="login_form">
			<view class="login_input_bar" @click="openKeyboard">
				<u-message-input :value="form.code" :breathe="false" mode="bottomLine" :disabled-keyboard="true" :maxlength="4"></u-message-input>
			</view>
			<view class="login_input_bar">
				<view class="change_action" @click="handler">没有收到验证码？<text class="reset">重新发送{{getSeconds}}</text></view>
			</view>
			<view class="login_input_bar">
				<view :class="['buttons', getActive]" @click="next">下一步</view>
			</view>
		</view>
		<u-keyboard ref="uKeyboard" @backspace="backspace" @change="valChange" mode="number" v-model="keyboardStatus"></u-keyboard>
	</view>
</template>

<script>
	import { getPhoneCode, getComVailimg } from '@/apis/public.js'
	import loginMixins from '@/mixins/login_mixins.js'
	import common_mixins from '@/mixins/common_mixins.js'
	export default {
		name: 'Captcha',
		mixins: [common_mixins, loginMixins],
		data(){
			return {
				form: {
					code: ''
				},
				finishStatus: false,
				keyboardStatus: false,
				opt: {},
			}
		},
		methods: {
			openKeyboard(){
				this.keyboardStatus = true
			},
			valChange(value){
				if(this.form.code.length > 3){
					return false
				}
				this.form.code += value
			},
			backspace(){
				this.form.code = this.form.code.substring(0, this.form.code.length - 1)
			},
			async getEmailCodeHandler(){
				const params = {
					to: this.opt.email
				}
				const res = await getEmailCode(params)
				if(!res.return){
					this.showToast('发送成功')
				}
			},
		},
		computed: {
			getEmail(){
				return this.opt.email
			},
			getSeconds(){
				return ''
			},
			getActive(){
				if(this.form.code.length === 4){
					return 'on'
				}
				return 'un'
			},
		},
		onLoad(opt) {
			this.opt = opt
		}
	}
</script>

<style scoped>
	.login_form{
		margin-top: 80upx;
	}
	.change_action{
		line-height: 80upx;
		margin-bottom: 80upx;
		font-size: 24upx;
		color: #007AFF;
	}
	.reset{
		color: #007AFF;
	}
	.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background: rgba(0,0,0,.8);
		z-index: 1;
	}
	.mask .code_main{
		width: 80%;
		height: 500upx;
		position: fixed;
		top: 20%;
		left: 50%;
		margin-left: -40%;
		z-index: 2;
		border-radius: 20upx;
		background: #fff;
	}
	.mask .code_main .title,
	.mask .code_main .bottom{
		height: 120upx;
	}
	.mask .code_main .title{
		border-bottom: 1px solid #f9f9f9;
		text-align: center;
		line-height: 120upx;
		font-weight: bold;
	}
	.mask .code_main .bottom{
		border-top: 1px solid #f9f9f9;
		color: #007AFF;
		font-weight: bold;
		line-height: 120upx;
		text-align: center;
	}
	.mask .content{
		height: 260upx;
		padding: 40upx;
		box-sizing: border-box;
	}
	.mask .input_bar{
		border-bottom: 1px solid #007AFF;
		font-size: 28upx
	}
	.mask .img{
		margin-top: 40upx;
	}
	.mask .code_img{
		width: 40%;
	}
	.mask .change{
		color: #007AFF;
	}
</style>
