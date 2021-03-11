<template>
	<view class="price_list_class">
		<view class="price_table">
			<view class="table_class">
				<view class="table_hd">
					<view class="table_hd_label">{{getLangs('buy')}}</view>
					<view class="table_hd_label">{{getLangs('latestPrice')}}</view>
					<view class="table_hd_label">{{getLangs('sell')}}</view>
				</view>
				<view class="table_bd">
					<view class="labels" v-for="(items, index) in getPriceList" :key="index">
				        <view class="table_bd_label">{{items[0]}}</view>
				    	<view class="table_bd_label red">{{items[1]}}</view>
				    	<view class="table_bd_label green">{{items[2]}}</view>
				    	<view class="table_bd_label">{{items[3]}}</view>
				    </view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 价格列表
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	export default {
		name: 'PriceList',
		mixins: [commonMixins, langsMixins, websocketMixins, currencyMixins],
		computed: {
			getPriceList(){
				if(typeof this.getCurrenctData == 'undefined') return []
				const buy = this.getCurrenctData.latestPrice && this.getCurrenctData.latestPrice.buy
				const sell = this.getCurrenctData.latestPrice && this.getCurrenctData.latestPrice.sell
				if(typeof buy === 'undefined' || typeof sell === 'undefined') return []
				const data = []
				buy.forEach((items, index) => {
					const arr = [
						items.amount,
						items.price,
						sell[index].price,
						sell[index].amount
					]
					data.push(arr)
				})
				return data
			}
		}
	}
</script>

<style scoped>
	.price_list_class{
	}
	.table_bd .labels{
		width: 100%;
		display: flex;
	}
	.table_bd_label:nth-child(2){
		text-align: right;
		padding-right: 10upx;
	}
	.table_bd_label:nth-child(3){
		text-align: left;
		padding-left: 10upx;
	}
	.table_bd_label{
		width: 25%;
		flex: 1;
		line-height: 40upx;
		text-align: left;
	}
	.table_hd{
		border-bottom: 2px solid rgba(255,255,255,.03);
		margin-bottom: 10upx;
	}
</style>
