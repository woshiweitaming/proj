<template>
	<view class="coin_pool_class">
		<CoinPoolInfo />
		<CoinPoolList />
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex'
	import appConfig from '@/config/appConfig.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getCoinPoolInfo } from '@/api/user'
	import CoinPoolInfo from '@/layouts/coin_pool/coin_pool_info.vue'
	import CoinPoolList from '@/layouts/coin_pool/coin_pool_list.vue'
	export default {
		name: 'CoinPool',
		mixins: [commonMixins, langsMixins],
		components: {
			CoinPoolInfo,
			CoinPoolList
		},
		methods: {
			async getCoinPoolInfoHandler(){
				const res = await getCoinPoolInfo()
				res.CoinInfo.estimateProfit = res.CoinInfo.estimateProfit == null ? 0 : res.CoinInfo.estimateProfit
				res.CoinInfo.orderNum = res.CoinInfo.orderNum == null ? 0 : res.CoinInfo.orderNum
				res.CoinInfo.totalMoney = res.CoinInfo.totalMoney == null ? 0 : res.CoinInfo.totalMoney
				res.CoinInfo.totalProfit = res.CoinInfo.totalProfit == null ? 0 : res.CoinInfo.totalProfit
				this.setCoinInfoData(res)
			},
			...mapMutations({
				setCoinInfoData: 'SET_COIN_INFO_DATA'
			})
		},
		onShow() {
			this.getCoinPoolInfoHandler()
			this.setTitle(this.getLangs('coinPool'))
		}
	}
</script>
<style scoped>
	.coin_pool_class{
		height: 100%;
		background: #323a5e;
		overflow: auto;
	}
</style>