<template>
	<view class="coin_exchange">
		<Bg />
		<Card />
		<Goods />
	</view>
</template>

<script>
	import Bg from '@/layouts/coin_exchange/bg.vue'
	import Card from '@/layouts/coin_exchange/card.vue'
	import Goods from '@/layouts/coin_exchange/goods.vue'
	export default {
		name: 'CoinExchange',
		components: {
			Bg,
			Card,
			Goods
		},
		onLoad(){
		    // uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
		    setTimeout(() => {
		        uni.stopPullDownRefresh();
		    }, 1000);
		}
	}
</script>

<style scoped>
	page,
	.coin_exchange{
		height: 100%;
	}
</style>
