<template>
	<view class="login">
		<view class="login_title">绑定邮箱</view>
		<view class="tips">为了您的账户安全，请绑定常用邮箱</view>
		<view class="login_form">
			<view class="login_input_bar">
				<view class="login_input">
					<input v-model="form.email" type="text" class="input_bar" placeholder="请输入邮箱">
				</view>
			</view>
			<view class="login_input_bar">
				<view :class="['buttons', getActive]">下一步</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Email',
		data(){
			return {
				form: {
					email: '',
				},
			}
		},
		computed: {
			getActive(){
				if(this.form.email.length > 0){
					return 'on'
				}
				return 'un'
			}
		}
	}
</script>

<style scoped>
	.login_form{
		margin-top: 80upx;
	}
</style>
