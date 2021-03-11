<template>
	<view class="coin_pool_list_class">
		<view class="title">{{getLangs('strategicCampaignProducts')}}</view>
		<view class="coin_pool_data">
			<view class="labels" v-for="(items, index) in getCoinInfoData.financeList" :key="index"  @click="toPage(items.fid)">
				<view class="hd">
					<image class="img" :src="items.pro_logo"></image>
					<text class="name">{{items.pro_name}}</text>
					<view class="right">
						<view class="sy">
							<view class="value">{{getData(items.day_rate, items.pro_period).toFixed(1)}}</view>
							<view class="mark">%</view>
						</view>
						<view class="days">{{(Number(items.pro_period) > 30 ? 30 : items.pro_period) + getLangs('day') + getLangs('eyield')}}</view>
					</view>
				</view>
				<view class="fd">
					<view class="items">
						<view class="name">{{getLangs('singleLimit')}}</view>
						<view class="value">{{items.money_scope}}</view>
					</view>
					<view class="items">
						<view class="name">{{getLangs('dailyYield')}}</view>
						<view class="value">{{items.day_rate.split('~')[1]}}%</view>
					</view>
					<view class="items">
						<view class="name">{{getLangs('period')}}</view>
						<view class="value green">{{items.pro_period}}</view>
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
				this.navigateTo('/pages/coin_pool_buy/index?fid='+fid)
			},
			getData(day_rate, pro_period){
				const a1 = day_rate.split('~')[1]
				const a2 = Number(pro_period) > 30 ? 30 : Number(pro_period)
				const res = (Number(a1) > 30 ? 30 : Number(a1)) * a2
				return res
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
		position: relative;
		margin-bottom: 20upx;
		box-sizing: border-box;
		/* padding: 40upx; */
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
	.coin_pool_list_class .coin_pool_data .labels .sy{
		position: absolute;
		right: 30upx;
		top: 10upx;
		padding: 0;
		display: flex;
	}
	.coin_pool_list_class .coin_pool_data .labels .sy .value{
		font-size: 60upx;
		color: #04AD8F;
	}
	.coin_pool_list_class .coin_pool_data .labels .sy .mark{
		font-size: 24upx;
		line-height: 110upx;
	}
	.coin_pool_list_class .coin_pool_data .labels .hd{
		padding: 40upx;
		margin-bottom: 20upx;
	}
	.coin_pool_list_class .coin_pool_data .labels .fd{
		background: #efefef;
		border-radius: 0 0 20upx 20upx;
		font-size: 0;
	}
	.coin_pool_list_class .coin_pool_data .labels .fd .items:nth-child(1),
	.coin_pool_list_class .coin_pool_data .labels .fd .items:nth-child(2){
		width: 40%;
		display: inline-block;
		text-align: center;
	}
	.coin_pool_list_class .coin_pool_data .labels .fd .items:last-child{
		width: 20%;
		display: inline-block;
		text-align: center;
	}
	.coin_pool_list_class .coin_pool_data .labels .fd .items .name{
		font-size: 24upx;
		color: #333;
		font-weight: normal;
		line-height: 60upx;
		display: inline-block;
		padding-right: 5px;
		box-sizing: border-box;
	}
	.coin_pool_list_class .coin_pool_data .labels .fd .items .value{
		font-size: 24upx;
		color: #333;
		font-weight: normal;
		line-height: 60upx;
		display: inline-block;
	}
	.days{
		padding: 2px;
		border-radius: 5px;
		background: #efefef;
		position: absolute;
		top: 100upx;
		right: 30upx;
		font-size: 24upx;
		color: #90a2b0;
	}
</style>
