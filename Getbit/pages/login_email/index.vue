<template>
	<view class="login">
		<view class="login_hd" @click="toPage('/pages/reset/index?type=1')">忘记密码</view>
		<view class="login_title">邮箱登录</view>
		<view class="login_form">
			<view class="login_input_bar">
				<view class="login_input">
					<input v-model="form.username" type="text" class="input_bar" placeholder="请输入邮箱">
				</view>
			</view>
			<view class="login_input_bar">
				<view class="login_input">
					<input v-model="form.password" v-if="status" type="text" class="input_bar" placeholder="密码">
					<input v-model="form.password" v-else type="password" class="input_bar" placeholder="密码">
					<image class="eyes" @click="changeStatus" :src="getImgUrl"></image>
				</view>
			</view>
			<view class="login_input_bar">
				<view :class="['buttons', getActive]" @click="login">登录</view>
			</view>
			<view class="tips">
				<view class="block">还没有平台账号? <text class="tips_text" @click="toPage('/pages/email_register/index')">注册</text></view>
				<view class="block tips_text" @click="toPage('/pages/login_phone/index')">手机登录</view>
			</view>
		</view>
	</view>
</template>

<script>
	import loginMixins from '@/mixins/login_mixins.js'
	export default {
		name: 'LoginEmail',
		mixins: [loginMixins],
		data(){
			return {
				form: {
					username: '',
					password: ''
				},
			}
		},
	}
</script>

<style scoped>
</style>
