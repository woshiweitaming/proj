<template>
	<view class="futures_class">
		<KChart :opt="opt" />
		<TradeList />
		<TradeBtn :opt="opt" />
	</view>
</template>

<script>
	/**
	 * 期货
	 */
	import KChart from './k_chart.vue'
	import TradeBtn from './trade_btn.vue'
	import TradeList from './trade_list.vue'
	export default {
		name: 'Futrues',
		props: ['opt'],
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
