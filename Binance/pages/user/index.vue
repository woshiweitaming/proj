<template>
	<view :class="['user_class', createOSClass]">
		<view class="mine_bg"><image class="img" src="../../static/images/min.png"></image></view>
		<!-- <view class="setting" @tap="navigateTo('/pages/setting/index')"><image class="icon" src="../../static/images/setting_icon.png"></image></view> -->
		<view class="avatar_bar">
			<image src="../../static/images/user_avatar.png" class="avatar_icon"></image>
			<text class="nickname">{{getUserInfoData.ncikname}}</text>
			<!-- <view class="uid">ID: {{getUserInfoData.uid}}</view> -->
		</view>
		<view class="user_func">
			<view class="user_setting_class">
				<view class="labels">
					<text class="title">{{getLangs('accountInfo')}}</text>
					<view class="row">
						<image class="icon" src="/static/images/user_icons/userStatus.png"></image>
						<text class="text">{{getLangs('accountInfo')}}</text>
						<text class="text sub">{{getLangs('normal')}}</text>
					</view>
					<view class="row" @tap="toCertPage('/views/certification/index')">
						<image class="icon" src="/static/images/user_icons/edit.png"></image>
						<text class="text">{{getLangs('normal')}}</text>
						<text class="text sub">{{getCertText(type)}}</text>
					</view>
					<view class="row" @tap="navigateTo('/views/pwd/index')">
						<image class="icon" src="/static/images/user_icons/lock.png"></image>
						<text class="text">{{getLangs('updatePwd')}}</text>
					</view>
					<view class="row" @tap="navigateTo('/views/contact/index')">
						<image class="icon" src="/static/images/user_icons/copy.png"></image>
						<text class="text">{{getLangs('data')}}</text>
					</view>
					<view class="row" @tap="toPage('/views/nickname/index')">
						<image class="icon" src="/static/images/user_icons/name.png"></image>
						<text class="text">{{getLangs('nickname')}}</text>
					</view>
				</view>
				<view class="labels">
					<text class="title">{{getLangs('fund')}}</text>
					<view class="row" @tap="navigateTo('/views/recharge/index')">
						<image class="icon" src="/static/images/user_icons/wallet.png"></image>
						<text class="text">{{getLangs('recharge')}}</text>
					</view>
				</view>
				<view class="exit">
					<view class="btns" @tap="logout">{{getLangs('exit')}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 个人中心
	 */
	import { mapGetters, mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	export default {
		name: 'User',
		mixins: [commonMixins, langsMixins, userMixins],
		data(){
			return {
				funcList: [],
				type: 0,
			}
		},
		methods: {
			toPageHandler(path, att, type){
				if(typeof att === 'undefined'){
					return this.navigateTo(path)
				}
				this.toCertPage(path, type)
			},
			toCertPage(path, type){
				if(type == 0){
					if(this.getUserInfoData.attestation == 0){
						this.navigateTo(path)
					}
				}
				if(type == 1){
					if(this.getUserInfoData.attestation == 0){
						this.$tips.showToast(this.getLangs('toAdvancedCert'))
					}
					if(this.getUserInfoData.attestation == 1){
						this.navigateTo(path)
					}
				}
			}
		},
		computed: {
			getCertText(){
				return type => {
					if(this.getUserInfoData.attestation == 0){
						return this.getLangs('notCertified')
					}else{
						return this.getLangs('certified')
					}
				}
			},
			...mapGetters({
				getUserInfoData: 'getUserInfoData'
			})
		},
		onShow() {
			this.getUserInfoHandler()
		}
	}
</script>

<style scoped>
	.user_class{
		height: 100%;
		background: #f9f9f9;
		box-sizing: border-box;
		padding-top: calc(var(--status-bar-height) + 30upx);
	}
	.mine_bg{
		position: absolute;
		width: 100%;
		height: 602upx;
		top: 0;
		z-index: 1;
	}
	.mine_bg .img{
		width: 100%;
		height: 602upx;
	}
	.setting{
		width: 40upx;
		height: 40upx;
		position: fixed;
		right: 30upx;
		top: calc(var(--status-bar-height) + 30upx);
		z-index: 102;
	}
	.setting .icon{
		width: 40upx;
		height: 40upx;
	}
	.avatar_bar{
		width: 100%;
		margin-top: 100upx;
		position: relative;
		z-index: 100;
	}
	.avatar_bar .avatar_icon{
		display: flex;
		margin: auto;
		width: 140upx;
		height: 140upx;
	}
	.avatar_bar .nickname{
		display: block;
		font-size: 32upx;
		text-align: center;
		color: #fff;
		margin-top: 20upx;
		line-height: 60upx;
	}
	.avatar_bar .uid{
		border-radius: 20upx;
		background: #d5e7ff;
		width: 200upx;
		text-align: center;
		height: 40upx;
		line-height: 40upx;
		color: #588bf7;
		display: block;
		margin: auto;
	}
	.user_func{
		/* padding: 20upx 20upx 0 20upx; */
		position: relative;
		z-index: 101;
		background: #fff;
	}
	.user_func_list{
		/* border-radius: 20upx; */
		background: #fff;
		padding: 20upx;
	}
	.user_func_list .user_func_label{
		position: relative;
		padding: 10upx 0 10upx 70upx;
		color: #333;
	}
	.user_func_list .user_func_label .icon{
		width: 50upx;
		height: 50upx;
		position: absolute;
		left: 0;
	}
	.user_func_list .user_func_label .right_arrow{
		width: 40upx;
		height: 40upx;
		position: absolute;
		right: 0;
		top: 20upx;
	}
	.user_func_list .user_func_label .inner{
		border-bottom: 1px solid rgba(255,255,255,.05);
		padding-right: 20upx;
		padding-bottom: 20upx;
		line-height: 60upx;
	}
	.user_func_list .user_func_label:last-child .inner{
		border-bottom: none;
		padding-bottom: 20upx;
	}
	.user_func_list .user_func_label .cert_status{
		font-size: 26upx;
		position: absolute;
		right: 60upx;
		color: #333;
	}
	.user_setting_class{
		padding: 0 20px;
	}
	.user_setting_class .title{
		font-weight: bold;
		line-height: 80upx;
		color: #333333;
		display: block;
		font-size: 32upx
	}
	.user_setting_class .icon{
		width: 30px;
		height: 30px;
		display: block;
		margin: 10px auto;
	}
	.user_setting_class .row{
		width: 33.3333%;
		display: inline-block;
		text-align: center;
		padding: 10px 20px;
		vertical-align: top;
	}
	.user_setting_class .text{
		display: block;
		font-size: 26upx;
		text-align: center;
		color: #72899A;
	}
	.user_setting_class .text.sub{
		font-size: 24upx;
		line-height: 30px;
		color: #C0C0C0;
	}
	.user_setting_class .labels{
		border-bottom: 1px solid #eee;
	}
	.user_setting_class .exit{
		margin-top: 20px;
	}
	.user_setting_class .exit .btns{
		line-height: 35px;
		font-size: 28upx;
		display: block;
		margin-bottom: 20px;
	}
</style>
