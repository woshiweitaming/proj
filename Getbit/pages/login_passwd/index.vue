<template>
	<view class="login">
		<view class="login_title">验证密码</view>
		<view class="tips">为了您的账户安全，请输入原登录密码确认身份</view>
		<view class="login_form">
			<view class="login_input_bar">
				<view class="login_input">
					<input v-model="form.passwd" v-if="status" type="text" class="input_bar" placeholder="密码">
					<input v-model="form.passwd" v-else type="password" class="input_bar" placeholder="密码">
					<image class="eyes" @click="changeStatus" :src="getImgUrl"></image>
				</view>
			</view>
			<view class="login_input_bar">
				<view class="change_action">忘记密码</view>
			</view>
			<view class="login_input_bar">
				<view :class="['buttons', getActive]">下一步</view>
			</view>
		</view>
	</view>
</template>

<script>
	import loginMixins from '@/mixins/login_mixins.js'
	export default {
		name: 'LoginPassword',
		mixins: [loginMixins],
		data(){
			return {
				form: {
					passwd: ''
				},
				status: 0
			}
		},
		computed: {
			getActive(){
				if(this.form.passwd.length > 0){
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
