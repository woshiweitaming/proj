<template>
	<view class="currency">
		<image class="menu" src="/static/images/icons/trade/menu.png"></image>
		<text class="name">BTC/USDT</text>
		<image class="k" src="/static/images/icons/trade/k.png"></image>
	</view>
</template>

<script>
	export default {
		name: 'Currency'
	}
</script>

<style scoped>
	.currency{
		position: relative;
		padding: 0 20upx;
		height: 60upx;
	}
	.menu{
		width: 30upx;
		height: 30upx;
		vertical-align: center;
	}
	.name{
		font-size: 32upx;
		color: #14181F;
		font-weight: bold;
		margin-left: 20upx;
		display: inline-block;
		vertical-align: top;
		line-height: 30upx;
	}
	.ratio{
		background: #fde9eb;
		color: #dd6e7b;
		display: inline-block;
		font-size: 24upx;
		padding: 0 10upx;
		border-radius: 5px;
		vertical-align: top;
		margin-left: 10upx;
		font-weight: bold;
	}
	.k{
		width: 40upx;
		height: 40upx;
		position: absolute;
		right: 20upx;
		top: 0;
	}
</style>
