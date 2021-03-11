<template>
	<view class="user_info">
		<view class="user_info_list">
			<view class="labels" @click="toPage('/pages/mofen/index')">
				<image src="/static/images/member/mofen.png" class="icon" mode="widthFix"></image>
				<view class="name">{{getLang('account_p3')}}</view>
				<view class="value">0</view>
				<image src="/static/images/icon/jiantou.png" class="arrow" mode="widthFix"></image>
			</view>
			<view class="labels" @click="toPage('/pages/redpack/index')">
				<image src="/static/images/member/red1.png" class="icon" mode="widthFix"></image>
				<view class="name">{{getLang('account_p4')}}</view>
				<view class="value">0{{getLang('account_p9')}}</view>
				<image src="/static/images/icon/jiantou.png" class="arrow" mode="widthFix"></image>
			</view>
			<view class="labels" @click="toPage('/pages/lessons/index')">
				<view class="name">{{getLang('account_p5')}}</view>
				<image src="/static/images/icon/jiantou.png" class="arrow" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'UserInfo',
		mixins: [langMixins],
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('mofen_p1')
			})
		}
	}
</script>

<style scoped>
	.user_info_list{
		display: flex;
		flex-direction: column;
		padding: 20upx;
	}
	.user_info_list .labels{
		width: 100%;
		padding: 20upx 20upx 20upx 80upx;
		margin-bottom: 20upx;
		background: #fff;
		position: relative;
		border-radius: 20upx;
	}
	.user_info_list .icon{
		width: 45upx;
		position: absolute;
		left: 20upx;
		top: 40upx;
	}
	.user_info_list .name{
		line-height: 80upx;
	}
	.user_info_list .arrow{
		width: 60upx;
		position: absolute;
		right: 0;
		top: 30upx;
	}
	.user_info_list .value{
		position: absolute;
		right: 80upx;
		top: 35upx;
		font-size: 36upx;
		font-weight: bold;
		color: #054692;
	}
</style>
