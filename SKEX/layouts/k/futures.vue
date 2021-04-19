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
	import KChart from '@/layouts/k/k_chart.vue'
	import TradeBtn from '@/layouts/k/trade_btn.vue'
	import TradeList from '@/layouts/k/trade_list.vue'
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
