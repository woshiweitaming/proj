<template>
	<view class="page custom">
		<Titlebar />
		<Headbar :active="active" @callback="callback" />
		<view class="inner">
			<TradeList :active="active" :dataList="dataList" />
		</view>
	</view>
</template>

<script>
	import Titlebar from '@/layouts/coin/titlebar.vue'
	import Headbar from '@/layouts/coin/headbar.vue'
	import TradeList from '@/layouts/coin/list.vue'
	import CommonMixins from '@/mixins/common_mixins.js'
	import { getTrans, getCoinList } from '@/apis/wallet.js'
	import storage from '@/utils/storage.js'
	export default {
		name: 'Coin',
		mixins: [CommonMixins],
		components: {
			Titlebar,
			Headbar,
			TradeList
		},
		data(){
			return {
				active: 0,
				dataList: [],
				coinList: []
			}
		},
		methods: {
			async getTransHanlder(){
				const uid = storage.getLocalData('token')
				const res = await getTrans({uid: uid, type: this.active })
				this.dataList = res
			},
			async getCoinListHandler(){
				const res = await getCoinList({trans: 1})
				this.coinList = res
			},
			callback(active){
				this.active = active
				this.getTransHanlder()
			}
		},
		onShow() {
			this.getTransHanlder()
			this.getCoinListHandler()
			uni.setNavigationBarTitle({
				title: '法币'
			})
		}
	}
</script>

<style scoped>
	.inner{
		height: calc(100% - 130upx);
		overflow: initial;
		padding-bottom: 0;
	}
</style>
