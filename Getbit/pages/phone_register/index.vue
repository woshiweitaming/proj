<template>
	<view class="login">
		<view class="login_title">手机注册</view>
		<view class="tips">使用常用手机号进行注册，更便捷</view>
		<view class="login_form">
			<view class="login_input_bar">
				<view class="login_input qh">
					<view class="qh_bar" @click="toQhPage"><text class="qh_number">+{{getAre}}</text><image class="down_arrow" src="../../static/images/icons/down_arrow.png"></image></view>
					<input v-model="form.phone" type="number" pattern="\d*" class="input_bar" placeholder="请输入手机">
				</view>
			</view>
			<view class="text">注册代表同意<text class="link" @click="toWebPage"> 《本平台用户协议》</text></view>
			<view class="text link" @click="toPage('/pages/email_register/index')">邮箱注册</text></view>
			<view class="login_input_bar">
				<view :class="['buttons', getActive]" @click.native.stop="handler">下一步</view>
			</view>
			<view class="tips">
				<view class="block">已有账户? <text class="tips_text" @click.native.stop="toPage('/pages/login_phone/index')">登录</text></view>
			</view>
		</view>
		<view class="mask" v-if="show" @click="clickHandler">
			<view class="code_main">
				<view class="title">图片验证码</view>
				<view class="content">
					<view class="code">
						<input v-model="form.to" @click="stop" class="input_bar" placeholder="请输入图片验证码">
						<view class="img">
							<image mode="widthFix" class="code_img" :src="code_img"></image>
							<text class="change" @click.native.stop="getComVailimgHandler">换一张</text>
						</view>
					</view>
				</view>
				<view class="bottom" @click.native.stop="finish">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	import common_mixins from '@/mixins/common_mixins.js'
	import loginMixins from '@/mixins/login_mixins.js'
	import { getComVailimg, getEmailCode, getPhoneCode } from '@/apis/public.js'
	import appConfig from '@/config/appConfig.js'
	export default {
		name: 'PhoneRegister',
		mixins: [common_mixins, loginMixins],
		data(){
			return {
				form: {
					phone: '',
					to: ''
				},
				show: false,
				code_img: '',
				lock: false
			}
		},
		computed: {
			getActive(){
				if(this.form.phone.length > 0){
					return 'on'
				}
				return 'un'
			},
			...mapGetters({
				getAre: 'getAre'
			})
		},
		methods: {
			async handler(){
				if(this.form.phone.length > 0){
					this.show = true
					this.getComVailimgHandler()
				}
			},
			async getComVailimgHandler(){
				const res = await getComVailimg()
				this.code_img = res.img
			},
			finish(){
				if(this.form.to.length === 0){
					return this.showToast('请输入图片验证码')
				}
				this.show = false
				this.getPhoneCodeHandler()
			},
			clickHandler(){
				if(!this.lock){
					this.show = false
					this.lock = false
			    }
			},
			stop(){
				this.lock = true
			},
			async getPhoneCodeHandler(){
				const params = {
					to: this.form.phone,
					imgcode: this.form.to,
					area: this.getAre
				}
				const res = await getPhoneCode(params)
				// if(res.result != null){
				// 	uni.navigateTo({
				// 		url: '/pages/phone_captcha/index?qh='+params.qh+'&imgcode='+params.imgcode+'&phone='+params.phone
				// 	})
				// }
				uni.navigateTo({
					url: '/pages/phone_captcha/index?qh='+params.area+'&imgcode='+params.imgcode+'&phone='+params.to
				})
			},
			toWebPage(){
				uni.navigateTo({
					url: '/pages/web/index?url='+appConfig.webUrl
				})
			}
		},
	}
</script>

<style scoped>
	.login_form{
		margin-top: 80upx;
	}
	.text{
		line-height: 60upx;
		font-size: 24upx;
		color: #666;
	}
	.link{
		color: #007AFF;
		text-decoration: underline;
	}
	.buttons{
		margin-top: 80upx;
	}
	.block{
		text-align: left;
	}
	.input_bar{
		font-size: 28upx
	}
	.login_form{
		padding: 0;
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
