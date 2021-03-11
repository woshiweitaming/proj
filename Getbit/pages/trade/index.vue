<template>
	<view class="page">
		<Currency @callback="callback" :active="active" />
		<view class="inner">
			<TradeMain @callback1="callback1" :type="type" :getData="getData" :getClose="getClose" />
			<Spacer />
			<Record :active="active" />
		</view>
	</view>
</template>

<script>
	import trade_mixins from '@/mixins/trade_mixins.js'
	import Currency from '@/layouts/trade/currency.vue'
	import TradeMain from '@/layouts/trade/trade_main.vue'
	import Record from '@/layouts/trade/record.vue'
	import Spacer from '@/components/spacer/spacer.vue'
	import storage from '@/utils/storage.js'
	export default {
		name: 'Trade',
		mixins: [trade_mixins],
		components: {
			Currency,
			TradeMain,
			Spacer,
			Record
		},
		data(){
			return {
				active: 0,
				type: 0
			}
		},
		methods: {
			callback(active){
				this.active = active
			},
			callback1(type){
				this.type = type
			}
		},
		onShow() {
			const type = storage.getLocalData('trade_type')
			this.type = type == '' || type == null  ? 0 : Number(type)
			uni.setNavigationBarTitle({
				title: '币币'
			})
		},
		onHide() {
			storage.setLocalData('trade_type', 0)
		}
	}
</script>

<style scoped>
	.inner{
		height: calc(100% - 60upx);
	}
</style>
