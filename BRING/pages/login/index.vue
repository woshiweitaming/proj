<template>
	<view class="login_class unlogin_class">
		<image src="../../static/images/login_logo.png" class="logo"></image>
		<Kefu location="left" />
		<view :class="['lang', createOSClass]">
			<view @tap="changeLang(items.value)" :class="['lang_items', items.value === getGlobalLang ? 'on' : '']" v-for="(items, index) in langList" :key="index">{{items.name}}</view>
		</view>
		<view class="form_class">
			<view class="login_form_content">
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-group"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" @blur="changeInput" class="input_bar" :placeholder="getLangs('accountPlaceholder')" v-model="form.uname" />
						</view>
					</view>
				</view>
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-lock"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="password" class="input_bar" :placeholder="getLangs('passwordPlaceholder')" v-model="form.pwd" />
						</view>
					</view>
				</view>
			</view>
			<view class="button" @click="toLoginHandler">{{getLangs('login')}}</view>
		</view>
		<view class="login_tips">
			<view class="w50" @click="navigateTo('/pages/register/index')">{{getLangs('register')}}</view>
			<view class="w50" @click="navigateTo('/pages/forget/index')">{{getLangs('forget')}}</view>
		</view>
		<view class="third_login">
			<view class="third_items" @click="thirdLoginHandler(items.type)" v-for="(items, index) in thirdLoginList"  :key="index">
				<image class="icon" :src="items.icon"></image>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 登录
	 */
	import appConfig from '@/config/appConfig.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import loginMixins from '@/mixins/login_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import agentMixins from '@/mixins/agent_mixins.js'
	import system from '@/utils/system.js'
	import Kefu from '@/layouts/kefu/kefu.vue'
	export default {
		name: 'Login',
		mixins: [commonMixins, loginMixins, langsMixins, agentMixins],
		components: {
			Kefu
		},
		data(){
			return {
				form: {
					uname: '',
					pwd: '',
					parentId: ''
				},
				langList: [
					{
						value: 'cn',
						name: '中'
					},
					{
						value: 'en',
						name: 'EN'
					},
				]
			}
		},
		methods: {
			/**
			 * 登录
			 */
			toLoginHandler(){
				this.loginHandler(this.form)
			},
			/**
			 * 第三方登录
			 */
			thirdLoginHandler(type){
				//微信和QQ登录
				if(type === 1 || type === 2){
					const urlPath = window.location.protocol+"//"+window.location.host;
					if(this.parentId !== undefined && this.parentId !== ''){
						return window.location.href = `${appConfig.domain}/pub/getLoginUrl?urlPath=${urlPath}&type=${type}&parentId=${this.parentId}`
					}
					return window.location.href = `${appConfig.domain}/pub/getLoginUrl?urlPath=${urlPath}&type=${type}`
				}
				//手机登录
				if(type === 3){
					return this.navigateTo('/pages/phone/index')
				}
			},
			changeInput(e){
				const value = e.detail.value
				this.form.uname = value.replace(/\s+/g, "");
			}
		},
		computed: {
			thirdLoginList(){
				// #ifdef H5
				return appConfig.thirdLogin.h5
				// #endif 
				return appConfig.thirdLogin.app
			}
		}
	}
</script>

<style scoped>
	page{
		background: #20222c;
	}
	.lang{
		position: fixed;
		top: calc(var(--status-bar-height) + 40upx);
		right: 40upx;
		width: 150upx;
		border-radius: 40upx;
		border: 1px solid rgba(255,255,255,.1);
		display: flex;
		padding: 5upx;
	}
	.lang .lang_items{
		width: 70upx;
		height: 60upx;
		text-align: center;	
		font-size: 28upx;
		line-height: 60upx;
		color: #666;
	}
	.lang .lang_items.on{
		background: #4944b3;
		color: #fff;
		border-radius: 50%;
	}
	.login_class{
		padding-top: 160upx;
	}
	.third_login{
		margin-top: 40upx;
		display: flex;
		padding-top: 30upx;
		/* border-top: 1px solid rgba(255,255,255,.1); */
	}
	.third_login .third_items{
		flex: 1;
		text-align: center;
	}
	.third_login .third_items .icon{
		width: 40px;
		height: 40px;
	}
	.login_tips {
		display: flex;
		margin-top: 30upx;
		border-bottom: 1px solid rgba(255,255,255,.1);
		padding-bottom: 30upx;
	}
	.login_tips .w50{
		flex: 1;
		text-align: center;
		line-height: 80upx;
		font-size: 28upx;
		text-align: center;
		color: #fff;
	}
	.logo{
		width: 300upx;
		height: 300upx;
		margin: 0 auto 80upx auto;
		display: block;
	}
</style>
