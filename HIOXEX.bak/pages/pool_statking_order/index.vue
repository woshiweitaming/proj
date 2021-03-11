<template>
	<view class="page">
		<view class="pool_statking_order_class">
			<view class="pool_record_class">
				<scroll-view style="height: 100%"  scroll-y="true" @scrolltolower="scrolltolower">
					<view class="pool_record_label" v-for="(items, index) in dataList" :key="index">
						<view class="labels">
							<view class="items">
								<image class="logo" :src="items.logo"></image>
								<text class="p">{{items.name}}</text>
								<text class="p">{{items.period == 0 ? getLangs('poolp48') : items.period + getLangs('day')}}</text>
							</view>
							<view class="items">
								<text :class="['status', 'status'+items.status]">{{getLangs(getStatus(items.status))}}</text>
								<u-button @tap="reedemed(items.orderNo)" size="mini" v-if="items.status == 0" type="primary" plain>{{getLangs('poolp23')}}</u-button>
							</view>
						</view>
						<view class="labels">
							<view class="labels_detail">
								<view class="labels_items">
									<view class="value">{{items.beginDate}}</view>
									<view class="text">{{getLangs('poolp31')}}</view>
								</view>
								<view class="labels_items">
									<view class="value">{{items.amount}}</view>
									<view class="text">{{getLangs('poolp32')}}</view>
								</view>
								<view class="labels_items">
									<view class="value">{{items.profit}}</view>
									<view class="text">{{getLangs('poolp33')}}</view>
								</view>
							</view>
						</view>
					</view>
					<view class="loading_more">{{lock ? getLangs('noMore') : getLangs('loadingMore')}}</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getMiningPoolOrderList, refundMiningPoolOrder } from '@/api/user.js'
	export default {
		name: 'PoolTrade',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				params: {
					pageSize: 10,
					pageNumber: 1
				},
				dataList: [],
				lock: false
			}
		},
		methods: {
			async getMiningPoolOrderListHandler(){
				const res = await getMiningPoolOrderList(this.params)
				//默认数据
				if(this.params.pageNumber === 1){
					this.dataList = res.data.list
					if(res.data.list.length < 10){
						this.showLoadingText = false
						this.lock = true
					}else{
						this.showLoadingText = false
						this.lock = false
					}
				}
				//下拉加载更多
				if(this.params.pageNumber > 1){
					//没有新的数据
					if(res.data.list.length === 0) {
						
						this.showLoadingText = false
						this.lock = true
					}else{
					    res.data.list.forEach((items, index) => {
					    	this.dataList.push(items)
					    })	
					}
				}
			},
			getStatus(status){
				const arr = ['poolp30', 'finish', 'redeemed','cancel']
				return arr[status]
			},
			async reedemed(orderNo){
				this.navigateTo('/pages/pool_redeem_confirm/index', {orderNo: orderNo})
			},
			scrolltolower(e){
				if(!this.lock){
					this.showLoadingText = true
					this.params.pageNumber++
					this.getMiningPoolOrderListHandler()
				}
			},
		},
		onShow() {
			this.setTitle(this.getLangs('poolp29'))
			this.getMiningPoolOrderListHandler()
		}
	}
</script>

<style scoped>
	page{
		background: #f9f9f9;
	}
	.page{
		height: 100%;
		background: #f9f9f9;
	}
	.pool_statking_order_class,
	.pool_record_class{
		height: 100%;
	}
	.pool_record_label{
		padding: 20upx;
		background: #fff;
		margin-top: 20upx;
	}
	.pool_record_label .labels{
		display: flex;
	}
	.pool_record_label .labels .items{
		width: 50%;
	}
	.pool_record_label .labels .items:last-child{
		text-align: right;
	}
	.pool_record_label .labels .items .logo{
		width: 50upx;
		height: 50upx;
		display: inline-block;
	}
	.pool_record_label .labels .items .p{
		display: inline-block;
		line-height: 50upx;
		vertical-align: top;
		margin-left: 5px;
		font-weight: bold;
	}
	.status{
		font-size: 24upx;
		display: inline-block;
		padding-right: 20upx;
		color: #19be6b;
	}
	.status0{
		color: #19be6b;
	}
	.status1{
		color: #007AFF
	}
	.status2{
		color: #3E39A8
	}
	.status3{
		color: #999;
	}
	.labels_detail{
		width: 100%;
		display: flex;
	}
	.labels_detail .labels_items{
		width: 33.333333%;
	}
	.labels_detail .labels_items .text,
	.labels_detail .labels_items .value{
		display: block;
		line-height: 50upx;
	}
	.labels_detail .labels_items .value{
		margin-top: 20upx;
		font-size: 24upx;
		font-weight: bold;
	}
	.labels_detail .labels_items .text{
		color: #aaa;
		font-size: 24upx
	}
	.scroll{
		height: 100%;
	}
</style>
