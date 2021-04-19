<template>
	<view class="register">
		<view class="title">{{getLang('login_p3')}}</view>
		<view class="form">
			<view class="input_bar">
				<image src="/static/images/icon/phone.png" mode="widthFix" class="icon"></image>
				<input type="text" v-model="form.uname" :placeholder="getLang('login_p4')" class="input" />
			</view>
			<view class="input_bar">
				<image src="/static/images/icon/pwdicon.png" mode="widthFix" class="icon"></image>
				<input type="password" v-model="form.pwd"  :placeholder="getLang('login_p5')" class="input" />
			</view>
			<view class="btn_bar">
				<view class="btns" @click="userLoginHandler">{{getLang('login_p6')}}</view>
			</view>
			<view class="flex">
				<view class="p" @click="toPage('/pages/phone_register/index')">{{getLang('login_p7')}}</view>
				<view class="p">{{getLang('login_p8')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import loginMixins from '@/mixins/login_mixins.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'Login',
		mixins: [langMixins, loginMixins],
		data(){
			return {
				checked: '',
				form: {
					uname: '',
					pwd: ''
				}
			}
		},
		methods: {
			async userLoginHandler(){
				if(this.form.uname.length === 0){
					return tips.showToast(this.getLang('login_p4'))
				}
				if(this.form.pwd.length === 0){
					return tips.showToast(this.getLang('login_p5'))
				}
				this.loginHandler(this.form)
			},
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: ''
			})
		}
	}
</script>

<style scoped>
	.register{
		padding: 40upx;
	}
	.title{
		text-align: center;
		line-height: 120upx;
		font-size: 40upx;
	}
	.input_bar{
		width: 100%;
		height: 80upx;
		background: #fff;
		border: 1px solid #eee;
		border-radius: 40upx;
		position: relative;
		padding-left: 120upx;
		margin-bottom: 40upx;
	}
	.icon{
		width: 50upx;
		position: absolute;
		left: 40upx;
		top: 15upx;
	}
	.input{
		line-height: 48upx;
		height: 78upx;
		font-size: 28upx;
		padding-left: 40upx;
		border-left: 1px solid #eee;
	}
	.radio{
		margin-top: 40upx;
	}
	.link{
		padding-left: 10upx;
		color: #007AFF;
	}
	.btn_bar{
		margin-top: 40upx;
	}
	.btns{
		border-radius: 40upx;
		text-align: center;
		line-height: 80upx;
		background: #007AFF;
		color: #fff;
		font-weight: bold;
	}
	.flex{
		display: flex;
		margin-top: 40upx;
		margin-bottom: 80upx;
	}
	.flex .p{
		width: 50%;
		font-size: 24upx;
		text-align: center;
		color: #007AFF;
	}
	.flex .p:first-child{
		border-right: 1px solid #007AFF;
	}
</style>
