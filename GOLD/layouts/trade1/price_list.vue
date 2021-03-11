<template>
	<view class="price_list_class">
		<view class="price_table">
			<view class="table_class">
				<view class="table_hd">
					<view class="table_hd_label">{{getLangs('price')}}</view>
					<view class="table_hd_label">{{getLangs('quantity')}}</view>
				</view>
				<view class="table_bd f">
					<view class="labels" v-for="(items, index) in getPriceList[0]" :key="index">
				        <view class="table_bd_label red">{{items.price}}</view>
				        <view class="table_bd_label">{{items.amount}}</view>
				    </view>
				</view>
				<view class="datas">
					<view :class="['live_label close', getClass(getCurrentCurrencyData && getCurrentCurrencyData.gain)]">{{getCurrentCurrencyData && getCurrentCurrencyData.close}}</view>
				</view>
				<view class="table_bd s">
					<view class="labels" v-for="(items, index) in getPriceList[1]" :key="index">
				        <view class="table_bd_label green">{{items.price}}</view>
						<view class="table_bd_label">{{items.amount}}</view>
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
				const buy = this.getCurrentCurrencyData && this.getCurrentCurrencyData.latestPrice.buy
				const sell = this.getCurrentCurrencyData && this.getCurrentCurrencyData.latestPrice.sell
				if(typeof buy === 'undefined' || typeof sell === 'undefined') return []
				const data = [buy, sell]
				return data
			}
		}
	}
</script>

<style scoped>
	.price_list_class{
		padding-right: 10upx;
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
		line-height: 60upx;
		text-align: left;
	}
	.table_hd{
		border-bottom: 2px solid rgba(255,255,255,.03);
		margin-bottom: 10upx;
	}
	.table_bd.f{
		border-bottom: 1px solid rgba(255,255,255,.1);
	}
	.table_bd.s{
		border-top: 1px solid rgba(255,255,255,.1);
	}
	.datas{
		margin-top: 30upx;
		padding-left: 20upx;
		margin-bottom: 20upx;
	}
</style>
