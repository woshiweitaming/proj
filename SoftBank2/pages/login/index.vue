<template>
	<view class="login_class unlogin_class">
		<image src="../../static/images/logo.png" class="logo"></image>
	<!-- 	<Kefu location="left" /> -->
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
			<view class="w50" @click="toRegister">{{getLangs('register')}}</view>
			<view class="w50" @click="navigateTo('/pages/forget/index')">{{getLangs('forget')}}</view>
		</view>
		<view class="third_login">
			<view class="third_items" @click="thirdLoginHandler(items.type)" v-for="(items, index) in thirdLoginList"  :key="index">
				<image class="icon" :src="items.icon"></image>
				<view class="tips">腾讯授权，微信登录</view>
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
	import validate from '@/utils/validate.js'
	import { userThirdLogin } from '@/api/user.js'
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
						value: 'cns',
						name: '繁'
					},
					{
						value: 'ja',
						name: 'JPN'
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
			async thirdLoginHandler(type){
				//微信和QQ登录
				if(type === 1 || type === 2){
					const urlPath = window.location.protocol+"//"+window.location.host;
					// if(this.parentId !== undefined && this.parentId !== ''){
					// 	return window.location.href = `${appConfig.domain}/pub/getLoginUrl2?urlPath=${urlPath}&type=${type}&parentId=${this.parentId}`
					// }
					// return window.location.href = `${appConfig.domain}/pub/getLoginUrl2?urlPath=${urlPath}&type=${type}`
					let params = {
						type: type,
						urlPath: urlPath
					}
					if(this.parentId !== undefined && this.parentId !== ''){
						params.parentId = this.parentId
					}
					const res = await userThirdLogin(params)
					if(validate.checkCode(res)){
						window.location.href = res
					}else{
						this.backTips(res)
					}
				}
				//手机登录
				if(type === 3){
					return this.navigateTo('/pages/phone/index')
				}
			},
			changeInput(e){
				const value = e.detail.value
				this.form.uname = value.replace(/\s+/g, "");
			},
			toRegister(){
				// #ifdef H5
				let pages = getCurrentPages();
				let curPage = pages[pages.length-1];
				let curParam = curPage.options || curPage.$route.query;
				let url = curParam ? '/pages/register/index?'+this.formateObjToParamStr(curParam) : '/pages/register/index'
				return this.navigateTo(url)
				// #endif
				return this.navigateTo('/pages/register/index')
			},
			filter(str) { // 特殊字符转义
			  str += ''; // 隐式转换
			  str = str.replace(/%/g, '%25');
			  str = str.replace(/\+/g, '%2B');
			  str = str.replace(/ /g, '%20');
			  str = str.replace(/\//g, '%2F');
			  str = str.replace(/\?/g, '%3F');
			  str = str.replace(/&/g, '%26');
			  str = str.replace(/\=/g, '%3D');
			  str = str.replace(/#/g, '%23');
			  return str;
			},
			formateObjToParamStr(paramObj) {
			  const sdata = [];
			  for (let attr in paramObj) {
			    sdata.push(`${attr}=${this.filter(paramObj[attr])}`);
			  }
			  return sdata.join('&');
			}
		},
		computed: {
			thirdLoginList(){
				// #ifdef H5
				return appConfig.thirdLogin.h5
				// #endif 
				return appConfig.thirdLogin.app
			}
		},
		onLoad(opt) {
			this.parentId = opt.parentId
		}
	}
</script>

<style scoped>
	page{
		background: #ffffff;
	}
	.lang{
		position: fixed;
		top: calc(var(--status-bar-height) + 40upx);
		right: 40upx;
		width: 130upx;
		border-radius: 40upx;
		border: 1px solid #eee;
		display: flex;
		padding: 5upx;
	}
	.lang .lang_items{
		width: 80upx;
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
		border-bottom: 1px solid #eee;
		padding-bottom: 30upx;
	}
	.login_tips .w50{
		flex: 1;
		text-align: center;
		line-height: 80upx;
		font-size: 28upx;
		text-align: center;
		color: #333;
	}
	.logo{
		width: 500upx;
		height: 200upx;
		margin: 0 auto 40upx auto;
		display: block;
	}
	.form_label{
		border: 1px solid #eee;
	}
	.tips{
		color: #aaa;
		font-size: 26upx;
	}
</style>
