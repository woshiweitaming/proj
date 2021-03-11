<template>
	<view class="login">
		<view class="login_title">验证支付密码</view>
		<view class="tips">为了您的账户安全，请输入原支付密码确认身份</view>
		<view class="login_form">
			<view class="login_input_bar" @click="openKeyboard">
				<u-message-input :value="form.passwd" :breathe="false" mode="bottomLine" :disabled-keyboard="true" :maxlength="6"></u-message-input>
			</view>
			<view class="login_input_bar">
				<view class="change_action" @click="toPage">忘记支付密码？</view>
			</view>
			<view class="login_input_bar">
				<view :class="['buttons', getActive]">下一步</view>
			</view>
		</view>
		<u-keyboard ref="uKeyboard" @backspace="backspace" @change="valChange" mode="number" v-model="keyboardStatus"></u-keyboard>
	</view>
</template>

<script>
	import loginMixins from '@/mixins/login_mixins.js'
	export default {
		name: 'PayPassword',
		mixins: [loginMixins],
		data(){
			return {
				form: {
					passwd: ''
				},
				finishStatus: false,
				keyboardStatus: false
			}
		},
		methods: {
			openKeyboard(){
				this.keyboardStatus = true
			},
			valChange(value){
				if(this.form.passwd.length > 5){
					return false
				}
				this.form.passwd += value
			},
			backspace(){
				this.form.passwd = this.form.passwd.substring(0, this.form.passwd.length - 1)
			},
		},
		computed: {
			getActive(){
				if(this.form.passwd.length === 6){
					return 'on'
				}
				return 'un'
			},
		},
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
</style>
