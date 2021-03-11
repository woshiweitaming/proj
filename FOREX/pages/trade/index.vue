<template>
	<view class="trade_class">
		<LiveData />
		<TradeMenu />
		<PriceList />
		<TradeMain />
		<view class="table_class">
			<!-- s -->
		</view>
	</view>
</template>

<script>
	/**
	 * 交易
	 */
	import CurrencyData from '../../layouts/k/currency_data.vue'
	import commonMixins from '@/mixins/common_mixins.js'
	import langMixins from '@/mixins/lang_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import LiveData from '@/layouts/trade/live_data.vue'
	import TradeMenu from '@/layouts/trade/trade_menu.vue'
	import PriceList from '@/layouts/trade/price_list.vue'
	import TradeMain from '@/layouts/trade/trade_main.vue'
	export default {
		name: 'Trade',
		mixins: [commonMixins, langMixins, websocketMixins],
		data(){
			return {
				id: ''
			}
		},
		components: {
			LiveData,
			TradeMenu,
			PriceList,
			TradeMain
		},
		onLoad(opt) {
			const currency = opt.currency
			const action = opt.action
			const id = opt.id
			this.id = id
			if(typeof currency === 'undefined' || currency === '' || typeof action === 'undefined' || action === '' || typeof id === 'undefined' || id === ''){
				this.$tips.showToast(this.getLangs('currencyError'))
				const that = this
				setTimeout(() => {
					that.back()
				}, 1000)
			}
			this.setTitle(currency.toUpperCase())
		},
		onShow(){
			//uni.closeSocket()
			//this.createWSData(this.id)
		},
		onHide() {
			//uni.closeSocket()
		}
	}
</script>
<style>
	page{
		background: #1c1d31
	}
</style>
<style scoped>
	.trade_class{
		padding: 20upx;
	}
</style>
