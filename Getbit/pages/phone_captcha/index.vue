<template>
	<view class="login">
		<view class="login_title">短信验证码</view>
		<view class="tips">验证码已发送到您的手机 +{{getQh}} {{getPhone}}</view>
		<view class="login_form">
			<view class="login_input_bar" @click="openKeyboard">
				<u-message-input :value="form.code" :breathe="false" mode="bottomLine" :disabled-keyboard="true" :maxlength="4"></u-message-input>
			</view>
			<view class="login_input_bar">
				<view class="change_action" @click="handler">没有收到验证码？<text class="reset">重新发送</text></view>
			</view>
			<view class="login_input_bar">
				<view :class="['buttons', getActive]" @click="next">下一步</view>
			</view>
		</view>
		<u-keyboard ref="uKeyboard" @backspace="backspace" @change="valChange" mode="number" v-model="keyboardStatus"></u-keyboard>
		<view class="mask" v-if="show" @click="clickHandler">
			<view class="code_main">
				<view class="title">图片验证码</view>
				<view class="content">
					<view class="code">
						<input v-model="imgcode" @click="stop" class="input_bar" placeholder="请输入图片验证码">
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
				imgcode: '',
				finishStatus: false,
				keyboardStatus: false,
				opt: {},
				show: false,
				code_img: ''
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
			next(){
				if(this.form.code.length === 4){
					
				}
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
			async handler(){
				this.show = true
				this.getComVailimgHandler()
			},
			async getPhoneCodeHandler(){
				const params = {
					to: this.opt.phone,
					imgcode: this.imgcode,
					area: this.opt.qh
				}
				const res = await getPhoneCode(params)
				if(!res){
					this.showToast('发送成功')
				}
			},
			finish(){
				if(this.imgcode.length === 0){
					return this.showToast('请输入图片验证码')
				}
				this.show = false
				this.getPhoneCodeHandler()
			},
			async getComVailimgHandler(){
				const res = await getComVailimg()
				this.code_img = res.img
			},
		},
		computed: {
			getPhone(){
				return this.opt.phone
			},
			getQh(){
				return this.opt.qh
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
			this.imgcode = opt.imgcode
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
