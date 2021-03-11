<template>
	<view class="history_record_detail_class">
		<view class="labels">
			<view class="box">
			   <view class="text">{{getLangs('productName')}}</view>
			   <view class="value">{{orderDetails.ptitle}}</view>
			</view>
		</view>
		<view class="labels">
			<view class="box">
			  <view class="text">{{getLangs('purchasePrice')}}</view>
			  <view class="value">{{orderDetails.buyprice}}</view>
			</view>
		</view>
		<view class="labels">
			<view class="box">
			  <view class="text">{{getLangs('price')}}</view>
			  <view class="value">{{orderDetails.sellprice}}</view>
			</view>
		</view>
		<view class="labels">
			<view class="box">
			  <view class="text">{{getLangs('rechargeAmount')}}</view>
			  <view class="value">{{orderDetails.price}}</view>
			</view>
		</view>
		<view class="labels">
			<view class="box">
			  <view class="text">{{getLangs('handlingFee')}}：</view>
			  <view class="value">{{orderDetails.fee}}</view>
			</view>
		</view>
		<view class="labels">
			<view class="box">
			  <view class="text">{{getLangs('profitAndLoss')}}</view>
			  <view :class="['value', orderDetails.loss > 0 ? 'green' : 'red']">{{orderDetails.loss}}</view>
			</view>
		</view>
		<view class="labels">
			<view class="box">
			  <view class="text">{{getLangs('loss')}}</view>
			  <view class="value">{{orderDetails.endprofit}}</view>
			</view>
		</view>
		<view class="labels">
			<view class="box">
			  <view class="text">{{getLangs('profit')}}</view>
			  <view class="value">{{orderDetails.endprofit}}</view>
			</view>
		</view>
		<view class="labels">
			<view class="box">
			  <view class="text">{{getLangs('quantity')}}</view>
			  <view class="value">{{orderDetails.onumber}}</view>
			</view>
		</view>
		<view class="labels">
			<view class="box">
			  <view class="text">{{getLangs('tradeType')}}</view>
			  <view class="value">{{orderDetails.otype === 0 ? getLangs('buy') : getLangs('sell')}}</view>
			</view>
		</view>
		<view class="labels full">
			<view class="box">
			    <view class="text">{{getLangs('orderNumber')}}</view>
			    <view class="value">{{orderDetails.orderno}}</view>
			</view>
		</view>
		<view class="labels full">
			<view class="box">
			  <view class="text">{{getLangs('buytime')}}</view>
			  <view class="value">{{orderDetails.buytime}}</view>
			</view>
		</view>
		<view class="labels full">
			<view class="box">
			  <view class="text">{{getLangs('selltime')}}</view>
			  <view class="value">{{orderDetails.selltime}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 历史订单详情
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getHisOrderDetails } from '@/api/record.js'
	export default {
		name: 'HistoryRecordDetail',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				orderDetails: {}
			}
		},
		methods: {
			/**
			 * 获取历史详情
			 */
			async getHistoryOrderDetailHandler(orderNo){
				const params = {
					orderNo: orderNo
				}
				const res = await getHisOrderDetails(params)
				this.orderDetails = res.data
			}
		},
		onLoad(opt) {
			this.getHistoryOrderDetailHandler(opt.orderNo)
			this.setTitle(this.getLangs('historicalOrder'))
		}
	}
</script>

<style scoped>
	page{
		background-color: #f9f9f9;
	}
	.history_record_detail_class{
		padding: 20upx;
		display: flex;
		flex-wrap: wrap;
	}
	.history_record_detail_class .labels{
		width: 50%;
		box-sizing: border-box;
		padding: 10upx;
	}
	.history_record_detail_class .labels.full{
		width: 100%;
	}
	.history_record_detail_class .labels .box{
		padding: 20upx;
		border-radius: 30upx;
		background: #fff;
		border: 1px solid #eee;
	}
	.history_record_detail_class .labels .box .text{
		font-size: 28upx;
		color: #8191b3
	}
	.history_record_detail_class .labels .box .value{
		font-size: 32upx;
		color: #000;
	}
</style>
