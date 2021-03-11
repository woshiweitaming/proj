<template>
	<view class="futures_class">
		<KChart />
		<TradeList />
		<TradeBtn />
	</view>
</template>

<script>
	/**
	 * 期货
	 */
	import KChart from '@/layouts/k1/k_chart.vue'
	import TradeBtn from '@/layouts/k1/trade_btn.vue'
	import TradeList from '@/layouts/k1/trade_list.vue'
	export default {
		name: 'Futrues',
		components: {
			KChart,
			TradeBtn,
			TradeList
		}
	}
</script>

<style scoped>
	.futures_class{
		height: 100%;
	}
</style>
