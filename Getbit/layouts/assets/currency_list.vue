<template>
	<view class="currency_list">
		<view class="labels" v-for="(curItem, index) in dataList" :key="index">
			<view class="currency">{{curItem.coinname}}</view>
			<view class="amount">
				<view class="items">
					<view class="text">可用</view>
					<view class="value">{{Number(curItem.total).toFixed(6)}}</view>
				</view>
				<view class="items">
					<view class="text">冻结</view>
					<view class="value">{{Number(curItem.frozen).toFixed(6)}}</view>
				</view>
				<view class="items">
					<view class="text">折合(USDT)</view>
					<view class="value">{{Number(curItem.dollariteam).toFixed(6)}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import storage from '@/utils/storage.js'
	export default {
		name: 'CurrencyList',
		props: {
			moneyStatus: {
				type: Boolean,
				default: false
			},
			accountType: {
				type: Number,
				default: 0
			},
			dataList: {
				type: Array,
				default: []
			}
		}, 
	}
</script>

<style scoped>
	.currency_list{
		width: 100%;
	}
	.currency_list .labels{
		margin-bottom: 20upx;
	}
	.currency_list .currency{
		width: 100%;
		color: #007AFF;
		font-weight: bold;
		font-size: 32upx;
		line-height: 80upx;
	}
	.currency_list .amount{
		display: flex;
		width: 100%;
	}
	.currency_list .amount .items{
		width: 33.333%;
	}
	.currency_list .amount .items .text{
		color: #999;
	}
	.currency_list .amount .items .value{
		color: #333;
		font-weight: bold;
	}
	.currency_list .amount .items:nth-child(2){
		text-align: center;
	}
	.currency_list .amount .items:last-child{
		text-align: right
	}
</style>
