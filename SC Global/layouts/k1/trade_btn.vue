<template>
	<view :class="['trade_btn_class', createOSClass]">
		<view class="btns_label" v-for="(curItem, index) in btns" :key="index">
			<view @tap="tradeHandler(curItem.action)" :class="['btns_items', curItem.cls]">{{getLangs(curItem.name)}}</view>
			<!-- <view @tap="tradeHandler(curItem.action)" :class="['btns_items', curItem.cls]">{{getLangs(curItem.name)}}</view> -->
		</view>
		<TradeDialog ref="tradeDialog" :show="showTradeDialogStatus" :datas="data" @close="closeTradeDialog" />
		<OrderConfirmDialog :show="showOrderConfirmDialogStatus" :data="data" @close="closeOrderConfirmDialog" />
	</view>
</template>

<script>
	/**
	 * 交易按钮
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import TradeDialog from '@/layouts/dialog1/trade_dialog.vue'
	import OrderConfirmDialog from '@/layouts/dialog1/order_confim_dialog.vue'
	import currencyMixins from '@/mixins/currency_mixins.js'
	export default {
		name: 'TradeBtn',
		mixins: [commonMixins, langsMixins, currencyMixins],
		components: {
			TradeDialog,
			OrderConfirmDialog
		},
		data(){
			return {
				btns: [
					{
						name: 'tradep1',
						action: 'buy',
						cls: 'green_box'
					},
					{
						name: 'tradep2',
						action: 'sell',
						cls: 'red_box'
					}
				],
				showTradeDialogStatus: false,
				showOrderConfirmDialogStatus: false,
				action: '',
				data: {}
			}
		},
		methods: {
			/**
			 * 买卖事件
			 * @param {string} action 买卖类型
			 */
			tradeHandler(action){
				// const params = {
				// 	currency: this.getCurrentPageData('opt').currency,
				// 	id: this.getCurrentPageData('opt').id,
				// 	action: action
				// }
				this.action = action
				this.openTradeDialog()
			},
			/**
			 *  关闭交易弹窗
			 */
			closeTradeDialog(status, data){
				this.showTradeDialogStatus = false
				if(status){
					const params = this.$refs.tradeDialog.getData()
					const data = Object.assign(params, this.data)
					this.data = data
					this.openOrderConfirmDialog()
				}
			},
			/**
			 * 打开交易弹窗
			 */
			openTradeDialog(){
				this.data = {
					currency: this.getCurrentCurrencyData.name,
					action: this.action
				}
				this.showTradeDialogStatus = true
			},
			/**
			 * 关闭订单确认弹窗
			 */
			closeOrderConfirmDialog(status){
				this.showOrderConfirmDialogStatus = false
			},
			/**
			 * 打开订单确认弹窗
			 */
			openOrderConfirmDialog(){
				this.showOrderConfirmDialogStatus = true
			}
		},
	}
</script>

<style scoped>
	.trade_btn_class{
		width: 100%;
		position: fixed;
		display: flex;
		background: #1c1d31;
		z-index: 10;
		bottom: 100upx;
	}
	.trade_btn_class .btns_label{
		flex: 1;
		padding: 20upx;
	}
	.trade_btn_class .btns_items{
		text-align: center;
		line-height: 80upx;
		border-radius: 20upx;
		font-size: 30upx;
		color: #fff;
	}
	.trade_btn_class.app{
		bottom: 0;
	}
</style>
