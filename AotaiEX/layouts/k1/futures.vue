<template>
	<view class="futures_class">
		<KChart />
		<TradeBtn />
	</view>
</template>

<script>
	/**
	 * 期货
	 */
	import KChart from '@/layouts/k/k_chart.vue'
	import TradeBtn from '@/layouts/k/trade_btn.vue'
	export default {
		name: 'Futrues',
		components: {
			KChart,
			TradeBtn
		}
	}
</script>

<style scoped>
	.futures_class{
		height: 100%;
	}
</style>
