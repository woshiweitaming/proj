<template>
	<view class="fund_card">
		<view class="currency">{{name}}</view>
		<view class="money">
			<view class="box">
				<view class="name">可用</view>
				<view class="value">{{usable.toFixed(6)}}</view>
			</view>
			<view class="box">
				<view class="name">冻结</view>
				<view class="value">{{freeze.toFixed(6)}}</view>
			</view>
		</view>
		<image src="../../static/images/icons/c2c/wallet2.png" class="wallet_bg" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		name: 'FundCard',
		data(){
			return {
				name: 'BTC',
				usable: 0,
				freeze: 0
			}
		},
		methods: {
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
	.currency{
		font-size: 60upx;
		color: #fff;
		position: absolute;
		left: 40upx;
		top: 40upx;
		font-weight: bolder;
		z-index: 1;
	}
	.money{
		width: 100%;
		display: flex;
		position: absolute;
		bottom: 60upx;
		z-index: 1;
		left: 40upx;
		right: 40upx;
	}
	.money .box{
		width: 50%;
	}
	.money .box .name{
		font-size: 24upx;
		color: #576d88
	}
	.money .box .value{
		font-weight: bold;
		color: #fff;
	}
</style>
