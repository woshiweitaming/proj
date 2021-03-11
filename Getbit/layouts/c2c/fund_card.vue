<template>
	<view class="fund_card">
		<view class="title">总资产折合<text @click="changeHide" :class="['eye', hidden ? 'eye1' : 'eye0']"></text></view>
		<view class="money">{{hidden ? '****' : leftmoney.toFixed(2)}}</view>
		<image src="../../static/images/icons/c2c/wallet.png" class="wallet_bg" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		name: 'FundCard',
		data(){
			return {
				hidden: false,
				leftmoney: 0
			}
		},
		methods: {
			changeHide(){
				this.hidden = !this.hidden
			}
		}
	}
</script>

<style scoped>
	.fund_card{
		position: relative;
	}
	.wallet_bg{
		width: 100%;
	}
	.title{
		width: 100%;
		position: absolute;
		left: 40upx;
		top: 40upx;
		color: #fff;
		z-index: 1;
		font-size: 32upx
	}
	.name{
		position: relative;
	}
	.eye{
		width: 40upx;
		height: 30upx;
		display: inline-block;
		margin-left: 20upx;
	}
	.eye.eye0{
		background: url(../../static/images/icons/c2c/5.png);
		background-size: 40upx 30upx;
	}
	.eye.eye1{
		background: url(../../static/images/icons/c2c/6.png);
		background-size: 40upx 30upx;
	}
	.money{
		font-size: 60upx;
		color: #fff;
		position: absolute;
		left: 40upx;
		bottom: 80upx;
		font-weight: bolder;
		z-index: 1;
	}
</style>
