<template>
	<view class="login">
		<view class="login_title">绑定手机</view>
		<view class="tips">为了您的账户安全，请绑定常用手机</view>
		<view class="login_form">
			<view class="login_input_bar">
				<view class="login_input">
					<input v-model="form.phone" type="text" class="input_bar" placeholder="请输入手机">
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
		name: 'Phone',
		data(){
			return {
				form: {
					phone: '',
				},
			}
		},
		computed: {
			getActive(){
				if(this.form.phone.length > 0){
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
