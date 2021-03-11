<template>
	<view class="inner c2c">
		<FundCard />
		<CurrencyList />
	</view>
</template>

<script>
	import FundCard from '@/layouts/c2c/fund_card.vue'
	import CurrencyList from '@/layouts/c2c/currency_list.vue'
	export default {
		name: 'C2C',
		components: {
			FundCard,
			CurrencyList
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: 'C2C钱包'
			})
		}
	}
</script>

<style scoped>
</style>
