<template>
	<view :class="['user_class', createOSClass]">
		<view class="mine_bg"><image class="img" src="../../static/images/min.png"></image></view>
		<view class="setting" @tap="navigateTo('/pages/setting/index')"><image class="icon" src="../../static/images/setting_icon.png"></image></view>
		<view class="avatar_bar">
			<image src="../../static/images/user_avatar.png" class="avatar_icon"></image>
			<text class="nickname">{{getUserInfoData.ncikname}}</text>
			<view class="uid">ID: {{getUserInfoData.uid}}</view>
		</view>
		<view class="user_func">
			<view class="user_func_list">
				<view @tap="toPageHandler(items.path, items.att, items.type)" class="user_func_label" v-for="(items, index) in funcList" :key="index">
					<image class="icon" :src="items.icon"></image>
					<view class="inner">
						<text class="name">{{getLangs(items.name)}}</text>
						<text class="cert_status" v-if="items.att">{{getCertText(items.type)}}</text>
						<image class="right_arrow" src="../../static/images/right_arrow.png"></image>
					</view>
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
				funcList: [
					{
						name: 'primaryCert',
						icon: '/static/images/u1.png',
						path: '/pages/certification/primary',
						type: 0,
						att: true
					},
					{
						name: 'advancedCert',
						icon: '/static/images/u2.png',
						path: '/pages/certification/advanced',
						type: 1,
						att: true
					},
					// {
					// 	name: 'sp1',
					// 	icon: '/static/images/u7.png',
					// 	path: '/pages/share/index',
					// },
					{
						name: 'bill',
						icon: '/static/images/u5.png',
						path: '/pages/consume_record/index',
					},
					{
						name: 'walletAddress',
						icon: '/static/images/u6.png',
						path: '/pages/wallet/index',
					},
					{
						name: 'onlineService',
						icon: '/static/images/u3.png',
						path: '/pages/kefu/index',
					},
					{
						name: 'helpCenter',
						icon: '/static/images/u4.png',
						path: '/pages/help/index',
					}
				]
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
					}
					if(this.getUserInfoData.attestation == 1){
						if(type === 0){
							return this.getUserInfoData.name
						}else{
							return this.getLangs('notCertified')
						}
					}
					if(this.getUserInfoData.attestation == 2){
						if(type === 0){
							return this.getUserInfoData.name
						}else{
							return this.getLangs('certified')
						}

					}
					if(this.getUserInfoData.attestation == 3){
						return this.getLangs('certing')
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
		padding: 20upx 20upx 0 20upx;
		position: relative;
		z-index: 101;
	}
	.user_func_list{
		border-radius: 20upx;
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
</style>
