<template>
	<view class="user_func_class">
		<view class="user_func_label" @tap="toCertPage('/pages/certification/primary', 0)">
			<view class="icon">
				<text class="iconfont icon-order"></text>
			</view>
			<text class="name">{{getLangs('primaryCert')}}</text>
			<text class="sub">{{getCertText(0)}}</text>
			<text class="desc">{{getLangs('certDesc')}}</text>
		</view>
		<view class="user_func_label" @tap="toCertPage('/pages/certification/advanced', 1)">
			<view class="icon">
				<text class="iconfont icon-barrage"></text>
			</view>
			<text class="name">{{getLangs('advancedCert')}}</text> 
			<text class="sub">{{getCertText(1)}}</text>
			<text class="desc">{{getLangs('advancedCertDesc')}}</text>
		</view>
		<view class="user_func_label" @tap="navigateTo('/pages/pwd/index')">
			<view class="icon">
				<text class="iconfont icon-lock"></text>
			</view>
			<text class="name">{{getLangs('password')}}</text>
			<text class="desc">{{getLangs('pwdDesc')}}</text>
		</view>
		<view class="user_func_label" @tap="navigateTo('/pages/information/index')">
			<view class="icon">
				<text class="iconfont icon-addpeople"></text>
			</view>
			<text class="name">{{getLangs('information')}}</text>
			<text class="desc">{{getLangs('infoDesc')}}</text>
		</view>
		<view class="user_func_label" @tap="navigateTo('/pages/nickname/index')">
			<view class="icon">
				<text class="iconfont icon-addressbook"></text>
			</view>
			<text class="name">{{getLangs('nickname')}}</text>
			<text class="desc">{{getLangs('nicknameDesc')}}</text>
		</view>
		<view class="user_func_label" @tap="navigateTo('/pages/setting/index')">
			<view class="icon">
				<text class="iconfont icon-setup"></text>
			</view>
			<text class="name">{{getLangs('setting')}}</text>
			<text class="desc">{{getLangs('settingDesc')}}</text>
		</view>
	</view>
</template>

<script>
	/**
	 * 用户功能区
	 */
	import { mapGetters, mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'UserFunc',
		mixins: [commonMixins, langsMixins],
		methods: {
			toCertPage(path, type){
				if(type == 0){
					if(this.getUserInfoData.attestation === 0){
						this.navigateTo(path)
					}
				}
				if(type == 1){
					if(this.getUserInfoData.attestation === 0){
						this.$tips.showToast(this.getLangs('toAdvancedCert'))
					}
					if(this.getUserInfoData.attestation === 1){
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
							return this.getLangs('certified')
						}else{
							return this.getLangs('notCertified')
						}
					}
					if(this.getUserInfoData.attestation == 2){
						return this.getLangs('certified')
					}
					if(this.getUserInfoData.attestation == 3){
						return this.getLangs('certing')
					}
				}
			},
			...mapGetters({
				getUserInfoData: 'getUserInfoData'
			})
		}
	}
</script>

<style scoped>
	.user_func_class{
		display: flex;
		padding-top: 80upx;
		flex-wrap: wrap;
	}
	.user_func_class .user_func_label{
		width: 50%;
		box-sizing: border-box;
		padding-left: 90upx;
		position: relative;
		text-align: left;
		margin-bottom: 60upx;
		padding-right: 20upx;
	}
	.user_func_class .user_func_label .icon{
		width: 80upx;
		position: absolute;
		top: 0;
		left: 0;
		font-size: 90upx;
		color: #fff;
		line-height: 90upx;
	}
	.user_func_class .user_func_label .icon .iconfont{
		font-size: 80upx
	}
	.user_func_class .user_func_label .name{
		font-size: 32upx;
		display: block;
		margin-top: 10upx;
	}
	.user_func_class .user_func_label .desc{
		font-size: 24upx;
		color: #fff;
		display: flex;
	}
	.sub{
		font-size: 24upx;
		color: #fff;
		display: inline-block;
		background: #18c6a7;
		padding: 3upx 5upx;
		border-radius: 5upx;
	}
</style>
