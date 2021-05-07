<template>
	<view class="contact_commission_class">
		<view class="record_class">
			<view class="record_main common">
				<view class="no_data" v-if="dataList.length === 0">{{getLangs('noData')}}</view>
				<scroll-view class="scroll" :scroll-y="true" v-else>
					<view class="record_label" v-for="(items, index) in dataList" :key="index">
						<view class="label_title">
							<view class="label_name">
							   {{items.paytype == 0 ? getLangs('marketOrder') : getLangs('limitOrder')}}
							   <text class="ptitle">{{items.ptitle}} / USDT</text>
							   <text :class="['action', items.otype == 0 ? 'green' : 'color']">{{items.otype == 0 ? getLangs('tradep3') : getLangs('tradep4')}}</text>
							   <text class="status">{{getLangs('commission')}}</text>
							</view>
						</view>
						<view class="labels_main_normal">
							<view class="labels_box">
								<view class="text">{{getLangs('quantity')}}</view>
								<view class="value">{{items.onumber}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('purchasePrice')}}</view>
								<view class="value">{{items.buyprice}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('latestPrice')}}</view>
								<view class="value">{{items.nowPrice}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('profitAndLoss')}}</view>
								<view :class="['value', items.loss > 0 ? 'green' : 'red']">{{items.loss}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('lever')}}</view>
								<view class="value">{{items.unit}}X</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('loss')}}</view>
								<view class="value">{{items.endloss == 0 ? '-' : items.endloss}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('profit')}}</view>
								<view class="value">{{items.endprofit == 0 ? '-' : items.endprofit}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('margin')}}</view>
								<view class="value">{{items.price}}</view>
							</view>
						</view>
						<view class="labels_fd">
							<view class="labels">{{getLangs('orderNumber')}}:{{items.orderno}}</view>
							<view class="labels">{{getLangs('handlingFee')}}:{{items.fee}}</view>
							<view class="labels">{{getLangs('buytime')}}:{{items.buytime}}</view>
							<view @tap="closeCommission(items.orderno)" class="cancel">{{getLangs('revokeEntrust')}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>	
	</view>
</template>

<script>
	/**
	 * 合约委托记录
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import orderMixins from '@/mixins/order_mixins.js'
	let timer = null
	export default {
		name: 'ContractCommissionRecord',
		mixins: [commonMixins, langsMixins, orderMixins],
		data(){
			return {
				dataList: []
			}
		},
		methods: {
			setTimer(){
				timer = setInterval(() => {
					this.getEntrustOrderHandler({type: 0})
				}, 1000)
			},
			clearTimer(){
				clearInterval(timer)
				timer = null
			}
		},
		created(){
			this.getEntrustOrderHandler({type: 0})
			this.setTimer()
			this.$once('hook:destroyed', () => {
				this.clearTimer()
			})
		},
		destroyed() {
			//this.clearTimer()
		}
	}
</script>

<style scoped>
	.contact_commission_class{
	    height: calc(100% - 80upx);
	}
</style>
