<template>
	<view class="join card">
		<view class="box" @click="toPage('/pages/my_follow_up/index')">
			<view class="label name">我的跟单</view>
			<view class="label value">查看跟单收益<image class="right_icon" src="../../static/images/icons/ai/enter.png"></image></view>
			<image src="../../static/images/icons/ai/my.png" class="icon"></image>
		</view>
		<view class="box" @click="toPage('/pages/apply_trader/index')">
			<view class="label name">成为交易员</view>
			<view class="label value">即可开启带单<image class="right_icon" src="../../static/images/icons/ai/enter.png"></image></view>
			<image src="../../static/images/icons/ai/join.png" class="icon"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Join',
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style scoped>
	.join{
		display: flex;
	}
	.join .box{
		width: 50%;
		position: relative;
		padding: 10upx 120upx 10upx 10upx;
	}
	.join .box .icon{
		width: 90upx;
		height: 90upx;
		position: absolute;
		right: 10upx;
		top: 0upx;
	}
	.join .box:last-child{
		padding-left: 20upx;
		border-left: 1px solid #f9f9f9
	}
	.join .name{
		font-weight: bold;
		color: #000000;
		font-size: 32upx
	}
	.join .value{
		font-size: 24upx;
		color: #007AFF;
	}
	.join .value .right_icon{
		font-size: 24upx;
		color: #007AFF;
		width: 15upx;
		height: 15upx;
		margin-left: 2px;
	}
</style>
