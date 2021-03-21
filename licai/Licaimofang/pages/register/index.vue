<template>
	<view class="register">
		<view class="title">{{getLang('register_p1')}}</view>
		<view class="form">
			<view class="input_bar">
				<image src="/static/images/icon/phone.png" mode="widthFix" class="icon"></image>
				<input type="text" :placeholder="getLang('register_p2')" class="input" />
			</view>
			<u-radio-group  v-model="checked">
				<u-radio class="radio" label-size="12">{{getLang('register_p3')}}<text class="link">{{getLang('register_p4')}}</text></u-radio>
			</u-radio-group>
			<view class="btn_bar">
				<view class="btns">{{getLang('register_p5')}}</view>
			</view>
			<view class="tips">{{getLang('register_p6')}}<text class="link">{{getLang('register_p7')}}</text></view>
		</view>
		<ThirdLogin />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import ThirdLogin from '@/layouts/login/third_login.vue'
	export default {
		name: 'Login',
		mixins: [langMixins],
		components: {
			 ThirdLogin
		},
		data(){
			return {
				checked: ''
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
	}
	.icon{
		width: 50upx;
		position: absolute;
		left: 40upx;
		top: 15upx;
	}
	.input{
		line-height: 78upx;
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
	.tips{
		margin-top: 40upx;
		text-align: center;
	}
</style>
