<template>
	<view class="coin_exchange">
		<Card />
		<Goods :dataList="dataList"/>
		<u-divider v-if="page > 1" :height="80" bg-color="#f8fbfd" color="#999">{{getLang('common_p4')}}</u-divider>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Card from '@/layouts/coin_exchange/card.vue'
	import Goods from '@/layouts/coin_exchange/goods.vue'
	import { getShoppingList } from '@/apis/publics.js'
	export default {
		name: 'CoinExchange',
		mixins: [langMixins],
		components: {
			Card,
			Goods
		},
		data(){
			return {
				page: 1,
				dataList: [],
				info: {}
			}
		},
		methods: {
			async getShoppingListHandler(page){
				const res = await getShoppingList({num: page})
				uni.stopPullDownRefresh()
				this.info = res.data.info
				res.data.list.forEach((curItem, index) => {
					this.dataList.push(curItem)
				})
			}
		},
		onLoad(){
			uni.setNavigationBarTitle({
				title: this.getLang('shop_p1')
			})
		},
		onShow() {
			uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
			this.page = 1
			this.dataList = []
		    this.getShoppingListHandler(this.page)
		},
		onReachBottom(data){
			this.page++
			this.getShoppingListHandler(page)
		},
	}
</script>

<style scoped>
	page,
	.coin_exchange{
		height: 100%;
	}
</style>
