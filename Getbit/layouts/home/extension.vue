<template>
	<view class="card">
		<view class="slogan">智能<text class="text">跟单</text> 即可上线<image class="right_arrow" src="../../static/images/icons/home/right_arrow.png"></image></view>
		<image mode="widthFix" src="../../static/images/icons/home/banner0.png" class="banner"></image>
	</view>
</template>

<script>
	export default {
		name: 'Extension'
	}
</script>

<style scoped>
	.card{
		padding: 0;
		position: relative;
	}
	.banner{
		width: 100%;
	}
	.slogan{
		position: absolute;
		left: 40upx;
		top: 40upx;
		z-index: 1;
		font-size: 34upx
	}
	.text{
		padding-right: 20upx;
		color: #007AFF;
	}
	.right_arrow{
		width: 30upx;
		height: 30upx;
		padding-left: 20upx;
	}
</style>
