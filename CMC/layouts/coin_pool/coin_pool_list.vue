<template>
	<view class="coin_pool_list_class">
		<view class="title">{{getLangs('strategicCampaignProducts')}}</view>
		<view class="coin_pool_data">
			<view class="labels" v-for="(items, index) in getCoinInfoData.financeList" :key="index">
				<view class="hd">
					<image class="img" :src="items.pro_logo"></image>
					<text class="name">{{items.pro_name}}</text>
					<view class="btn" @tap="toPage(items.fid)">{{getLangs('goBuy')}}</view>
				</view>
				<view class="fd">
					<view class="items">
						<view class="name">{{getLangs('singleLimit')}}</view>
						<view class="value">{{toNum(items.money_scope)}}</view>
					</view>
					<view class="items">
						<view class="name">{{getLangs('dailyYield')}}</view>
						<view class="value">{{items.day_rate}}%</view>
					</view>
					<view class="items">
						<view class="name">{{getLangs('period')}}</view>
						<view class="value">{{items.pro_period}}{{getLangs('day')}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import appConfig from '@/config/appConfig.js'
	export default {
		name: 'CoinPoolInfo',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				domain: appConfig.domain
			}
		},
		methods: {
			toPage(fid){
				this.navigateTo('/pages/coin_pool_buy/index', {fid: fid})
			},
			toNum(data){
				const a = data.split('~')[0]
				const b = data.split('~')[1]
				return this.formatNumber(Number(a)) + '~' + this.formatNumber(Number(b))
			},
			formatNumber(num) {
			    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(0) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(0) + '0k' : num
			}
		},
		computed: {
			...mapGetters({
				getCoinInfoData: 'getCoinInfoData'
			})
		}
	}
</script>
<style scoped>
	.coin_pool_list_class{
		padding: 10upx;
	}
	.coin_pool_list_class .title{
		font-size: 32upx;
		font-weight: bold;
		color: #1f3f59;
		margin: 30upx 30upx 10upx 30upx;
	}
	.coin_pool_list_class .coin_pool_data{
		padding: 20upx;
	}
	.coin_pool_list_class .coin_pool_data .labels{
		position: relative;
		width: 100%;
		background: #fff;
		border-radius: 20upx;
		min-height: 250upx;
		margin-bottom: 20upx;
		position: relative;
		margin-bottom: 20upx;
		box-sizing: border-box;
		padding: 40upx 20upx;
	}
	.coin_pool_list_class .coin_pool_data .labels .img{
		width: 60upx;
		height: 60upx;
		margin-right: 5px;
	}
	.coin_pool_list_class .coin_pool_data .labels .name{
		vertical-align: top;
		font-size: 40upx;
		font-weight: bold;
		color: #1f3f59;
		display: inline-block;
	}
	.coin_pool_list_class .coin_pool_data .labels .btn{
		background: #007AFF;
		border-radius: 10upx;
		text-align: center;
		color: #fff;
		position: absolute;
		right: 30upx;
		top: 30upx;
		padding: 10upx;
	}
	.coin_pool_list_class .coin_pool_data .labels .fd{
		display: flex;
		font-size: 28upx
	}
	.coin_pool_list_class .coin_pool_data .labels .fd .items{
		width: 33.333%;
		text-align: center;
	}
	.coin_pool_list_class .coin_pool_data .labels .fd .items .name{
		font-size: 26upx;
		color: #90a2b0;
		font-weight: normal;
		display: block;
	}
	.coin_pool_list_class .coin_pool_data .labels .fd .items .value{
		font-size: 30upx;
		color: #2a64e4;
		font-weight: normal;
		line-height: 60upx;
		min-height: 60upx;
		display: block;
		word-wrap: break-word;
		word-break: normal;
	}
</style>
