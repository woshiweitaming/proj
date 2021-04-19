<template>
	<view class="register">
		<view class="form">
			<view class="input_bar validate_code">
				<view class="qh" @click="openQh"><view class="qh_txt">+{{form.qh}}  {{country}}<u-icon class="arrow" name="arrow-down"></u-icon></view></view>
				<input type="text" v-model="form.phone" :placeholder="getLang('register_p2')" class="input" />
			</view>
			<view class="input_bar code">
				<input type="text" v-model="form.vcode" :placeholder="getLang('register_p8')" class="input" />
				<view class="send" @click="getPhoneCode">{{getCodeTxt}}</view>
			</view>
			<view class="input_bar">
				<input type="password" v-model="form.pwd" :placeholder="getLang('register_p9')" class="input" />
			</view>
			<view class="btn_bar">
				<view class="btns" @click="userUpdPhoneHandler">{{getLang('update_phone_p2')}}</view>
			</view>
		</view>
		<!--Area Code Modal-->
		<u-popup v-model="areaCode.show" mode="bottom" length="60%" :safe-area-inset-bottom="true" :closeable="true">
			<Qh @callback="callback" />
		</u-popup>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import loginMixins from '@/mixins/login_mixins.js'
	import validateCodeMixins from '@/mixins/validate_code.js'
	import prefixSorted from '@/datas/prefixSorted.js'
	import tips from '@/utils/tips.js'
	import Qh from '@/layouts/phone_register/qh.vue'
	import { updPhone } from '@/apis/users.js'
	export default {
		name: 'UpdatePhone',
		mixins: [langMixins, loginMixins, validateCodeMixins],
		components: {
			Qh
		},
		data(){
			return {
				checked: '',
				form: {
					qh: 86,
					phone: '',
					vcode: ''
				},
				areaCode: {
					show: false
				},
			}
		},
		methods: {
			async userUpdPhoneHandler(){
				if(this.form.phone.length === 0){
					return tips.showToast(this.getLang('register_p2'))
				}
				if(this.form.vcode.length === 0){
					return tips.showToast(this.getLang('register_p8'))
				}
				const res = await updPhone(this.form)
			},
			toPage(path){
				uni.navigateTo({
					url: path,
				});
			},
			//area code
			openQh(){
				this.areaCode.show = true
			},
			callback(qh){
				this.form.qh = qh
				this.areaCode.show = false
			},
		},
		computed: {
			country(){
				return prefixSorted.filter(res => res.prefix == this.form.qh)[0][this.getCurLang]
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('update_phone_p1')
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
		display: flex;
	}
	.title .name,
	.title .link{
		width: 50%;
		text-align: left;
	}
	.title .name{
		font-weight: bold;
	}
	.title .link{
		text-align: right;
		color: #aaa;
		font-size: 28upx;
	}
	.input_bar{
		width: 100%;
		height: 80upx;
		background: #fff;
		border: 1px solid #eee;
		border-radius: 40upx;
		position: relative;
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
	.validate_code{
		padding-left: 220upx;
	}
	.validate_code .input{
		border-left: 1px solid #eee;
	}
	.send{
		font-size: 24upx;
		position: absolute;
		right: 0;
		top: 0;
		color: #007AFF;
		right: 40upx;
		top: 20upx;
	}
	.qh{
		width: 220upx;
		position: absolute;
		padding-left: 20upx;
		left: 0;
		top: 20upx;
		z-index: 10;
	}
	.qh_txt{
		width: 200upx;
		padding-right: 20px;
		position: relative;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap; 
	}
	.arrow{
		position: absolute;
		right: 5px;
		top: 5upx;
	}
	.wrap{
		padding: 20upx 60upx;
	}
</style>
