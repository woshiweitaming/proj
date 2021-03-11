<template>
	<view class="login">
		<view class="login_title">找回密码</view>
		<view class="tips">{{getText}}</view>
		<view class="login_form">
			<view class="login_input_bar">
				<view class="login_input qh" v-if="type == 0">
					<view class="qh_bar"><text class="qh_number">+95</text><image class="down_arrow" src="../../static/images/icons/down_arrow.png"></image></view>
					<input v-model="form.phone" type="text" class="input_bar" placeholder="请输入手机号">
				</view>
			</view>
			<view class="login_input_bar" v-if="type == 1">
				<view class="login_input">
					<input v-model="form.email" type="text" class="input_bar" placeholder="请输入邮箱">
				</view>
			</view>
			<view class="login_input_bar">
				<view class="change_action" @click="changeAction">{{getActionText}}</view>
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
		name: 'Reset',
		mixins: [loginMixins],
		data(){
			return {
				form: {
					phone: '',
					email: ''
				},
				type: 0
			}
		},
		computed: {
			getActive(){
				if(this.type == 0){
					if(this.form.phone.length > 0){
						return 'on'
					}
				}
				if(this.type == 1){
					if(this.form.phone.length > 0){
						return 'on'
					}
				}
				return 'un'
			},
			getText(){
				return this.type == 0 ? '请输入您注册的手机号' : '请输入您注册的邮箱'
			},
			getActionText(){
				return this.type == 0 ? '邮箱找回' : '手机找回'
			}
		},
		methods: {
			changeAction(){
				this.type = this.type == 0 ? 1 : 0
			}
		},
		onLoad(opt) {
			this.type = opt.type
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
</style>
