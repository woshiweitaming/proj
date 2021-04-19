<template>
	<view class="contract_class">
		<PriceList />
		<TradeMain />
		<!-- <EntrustOrder /> -->
	</view>
</template>

<script>
	/**
	 * 合约
	 */
	import PriceList from '@/layouts/trade/price_list.vue'
	import TradeMain from '@/layouts/trade/trade_main.vue'
	import EntrustOrder from '@/layouts/trade/entrust_order.vue'
	export default {
		name: 'Contract',
		components: {
			PriceList,
			TradeMain,
			EntrustOrder
		}
	}
</script>

<style scoped>
	.contract_class{
		padding: 20upx 0;
	}
</style>
