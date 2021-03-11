<template>
	<view class="record_class">
		<view class="record_main futures_record">
			<view class="no_data" v-if="dataList.length === 0">{{getLangs('noData')}}</view>
			<scroll-view class="scroll" :scroll-y="true" v-else>
				<view class="record_label" v-for="(items, index) in dataList" :key="index">
					<view class="label_title">
						<view class="label_name">
							 {{items.ptitle}} / USDT
							 <text class="date">{{items.buytime}}</text>
						</view>
					</view>
					<view class="labels_main">
						<view class="labels_box">
							<view class="text">{{getLangs('actionText')}}</view>
							<view :class="['value', items.otype == 0 ? 'green' : 'red' ]">{{items.otype == 0 ? getLangs('buy') : getLangs('sell')}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('purchaseQuantity')}}</view>
							<view class="value">{{items.price}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('purchasePrice')}}</view>
							<view class="value">{{items.buyprice}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('sellPrice')}}</view>
							<view class="value">{{items.sellprice}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('cutttime')}}</view>
							<view class="value">{{getCutttime(items.cutttime)}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('profitAndLoss')}}</view>
							<view :class="['value', items.loss > 0 ? 'green' : 'red']">{{items.loss > 0 ? ('+'+items.loss) : items.loss}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	/**
	 * 历史订单
	 */
	import { mapMutations, mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import orderMixins from '@/mixins/order_mixins.js'
	export default {
		name: 'HistoryRecord',
		mixins: [commonMixins, langsMixins, orderMixins],
		methods: {
			getCutttime(time){
				return Number(time) > 999 ? Number(time)/3600 + this.getLangs('hour') : time + this.getLangs('second')
			}
		},
		created() {
			this.getHistoryOrderHandler()
		}
	}
</script>

<style scoped>
	.date{
		font-size: 24upx;
		text-align: right;
		position: absolute;
		right: 20upx;
		color: #555555
	}
</style>
