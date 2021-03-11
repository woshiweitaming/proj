<template>
	<view class="coin_pool_info_class">
		<view class="coin_pool_header">
			<view class="coin_pool_left">
				<view class="fund">{{getCoinInfoData.CoinInfo && getCoinInfoData.CoinInfo.totalMoney}}</view>
				<view class="desc">{{getLangs('fundingInCustody')}}(USDT)</view>
			</view>
			<view class="coin_pool_right">
				<view class="rules" @tap="navigateTo('/pages/coin_pool_rules/index')">{{getLangs('rules')}}</view>
				<view class="orders" @tap="navigateTo('/pages/coin_pool_record/index')">{{getLangs('managedOrder')}}</view>
			</view>
			<view class="coin_pool_bottom">
				<view class="box">
					<text class="value">{{getCoinInfoData.CoinInfo && getCoinInfoData.CoinInfo.estimateProfit}}</text>
					<text class="name">{{getLangs('todayEarnings')}}</text>
				</view>
				<view class="box line"></view>
				<view class="box">
					<text class="value">{{getCoinInfoData.CoinInfo && getCoinInfoData.CoinInfo.totalProfit}}</text>
					<text class="name">{{getLangs('cumulativeIncome')}}</text>
				</view>
				<view class="box line"></view>
				<view class="box">
					<text class="value">{{getCoinInfoData.CoinInfo && getCoinInfoData.CoinInfo.orderNum}}</text>
					<text class="name">{{getLangs('orderInCustody')}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex'
	import appConfig from '@/config/appConfig.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'CoinPoolInfo',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				fund: 0
			}
		},
		computed: {
			...mapGetters({
				getCoinInfoData: 'getCoinInfoData'
			})
		},
	}
</script>
<style scoped>
	.coin_pool_header{
		width: 100%;
		height: 593upx;
		position: relative;
		background: url(@/static/images/coin_header.png);
		background-size: 100% 100%;
		box-sizing: border-box;
		display: flex;
	}
	.coin_pool_header .coin_pool_left,
	.coin_pool_header .coin_pool_right{
		width: 50%;
		padding: 80upx 10upx 20upx 50upx;
		box-sizing: border-box;
	}
	.coin_pool_header .coin_pool_left .fund{
		font-size: 70upx;
		color: #fff;
		font-weight: bold;
	}
	.coin_pool_header .coin_pool_left .desc{
		display: inline-block;
		line-height: 60px;
		font-size: 28upx;
		color: #fff;
	}
	.coin_pool_header .coin_pool_bottom{
		width: 100%;
		height: 180upx;
		position: absolute;
		bottom: 0;
		left: 0;
		background: rgba(255,255,255,.1);
		display: flex;
	}
	.coin_pool_header .coin_pool_bottom .box{
		width: 33%;
		text-align: center;
		padding-top: 40upx;
	}
	.coin_pool_header .coin_pool_bottom .box .name,
	.coin_pool_header .coin_pool_bottom .box .value{
		display: block;
		line-height: 60upx;
	}
	.coin_pool_header .coin_pool_bottom .box .value{
		font-size: 36upx;
		color: #fff;
	}
	.coin_pool_header .coin_pool_bottom .box .name{
		color: #93c9ff;
		font-size: 26upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding: 0 10upx;
	}
	.coin_pool_header .coin_pool_bottom .box.line{
		width: 1px;
		height: 40upx;
		background: #fff;
		margin-top: 80upx;
	}
	.coin_pool_header .rules{
		padding: 10upx 20upx;
		position: absolute;
		right: 0;
		background: #04ad8f;
		border-radius: 30upx 0 0 30upx;
		font-size: 32upx;
		color: #fff;
	}
	.coin_pool_header .orders{
		padding: 10upx 20upx;
		position: absolute;
		right: 0;
		top: 180upx;
		background: rgba(255,255,255,.1);
		border-radius: 30upx 0 0 30upx;
		font-size: 32upx;
		color: #fff;
	}
</style>
