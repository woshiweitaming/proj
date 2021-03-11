<template>
	<view class="record_class">
		<view class="record_main">
			<view class="no_data" v-if="dataList.length === 0">{{getLangs('noData')}}</view>
			<scroll-view class="scroll" :scroll-y="true" v-else>
				<view class="record_label" v-for="(items, index) in dataList" :key="index">
					<view class="label_title">
						<view class="label_name"><text :class="['action',items.otype == 0 ? 'green' : 'red']">{{items.otype == 0 ? getLangs('buy') : getLangs('sell')}}</text>{{items.ptitle}} / USDT</text></view>
					</view>
					<view class="labels_main">
						<view class="labels_box">
							<view class="text">{{getLangs('timeText')}}</view>
							<view class="value">{{toTime(items.buytime)}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('commissionPrice')}}(USDT)</view>
							<view class="value">{{Number(items.buyprice).toFixed(4)}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('commissionNums')}}({{items.ptitle}})</view>
							<view class="value">{{Number(items.onumber).toFixed(4)}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('totalPrice')}}(USDT)</view>
							<view class="value">{{Number(items.price).toFixed(4)}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('tradeAvg')}}(USDT)</view>
							<view class="value">{{Number(items.avgprice).toFixed(4)}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('tradeNums')}}({{items.ptitle}})</view>
							<view class="value">{{Number(items.snumber).toFixed(4)}}</view>
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
		created() {
			this.getCoinHandler(1)
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
	.value{
		color: #081723 !important
	}
</style>
