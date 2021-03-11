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
	import { mapGetters } from 'vuex'
	import KChart from '@/layouts/k1/k_chart.vue'
	import TradeBtn from '@/layouts/k1/trade_btn.vue'
	import TradeList from '@/layouts/k1/trade_list.vue'
	export default {
		name: 'Futrues',
		components: {
			KChart,
			TradeBtn,
			TradeList
		},
		computed: {
			...mapGetters({
				getTimerStatus: 'getTimerStatus'
			})
		},
		destroyed() {
			console.log('关闭了')
		}
	}
</script>

<style scoped>
	.futures_class{
		height: 100%;
		overflow: auto;
		padding-bottom: 130upx;
		box-sizing: border-box;
	}
</style>
