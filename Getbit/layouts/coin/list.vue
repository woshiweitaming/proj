<template>
	<view class="trade_list card">
		<view class="type">USDT</view>
		<view class="trade_main">
			<view class="trade_label" v-for="(curItem, index) in dataList" :key="index">
				<view class="label">
					<view class="box">
						<view class="tag">{{getTag(curItem.username)}}</view>
						<view class="text">{{curItem.username}}</view>
					</view>
					<view class="box">
						<view class="value">{{Number(curItem.totalnums).toFixed(0)}}</view>
						<view class="value">{{getRatio(curItem.nums, curItem.totalnums)}}%</view>
					</view>
				</view>
				<view class="label">
					<view class="box noflex">
						<view class="block">数量 {{Number(curItem.nums).toFixed(0)}} USDT</view>
						<view class="block">限额 ¥ {{Number(curItem.min).toFixed(0)}} - ¥ {{Number(curItem.max).toFixed(0)}}</view>
					</view>
					<view class="box">
						<view class="price">$<text class="price_value">{{Number(curItem.price).toFixed(2)}}</text></view>
					</view>
				</view>
				<view class="label">
					<view class="box">
						<view class="payment">
							<image class="img" :src="`/static/images/icons/payment/${curItem.pay_type}.png`"></image>
						</view>
					</view>
					<view class="box">
						<view class="buttons" @click="toPage(curItem)">{{active == 0 ? '购买' : '出售'}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import common_mixins from '@/mixins/common_mixins.js'
	export default {
		name: 'TradeList',
		props: ['active','dataList'],
		mixins: [common_mixins],
		computed: {
			getTag(){
				return name => {
					return name.substring(0,1)
				}
			},
			getRatio(){
				return (nums, totalnums) => {
					return ((Number(nums) / Number(totalnums))*100).toFixed(2)
				} 
			}
		},
		methods: {
			toPage(data){
				const params = this.getParams(data)
				uni.navigateTo({
					url: '/pages/trade_coin/index?'+params
				})
			},
		}
	}
</script>

<style scoped>
	.trade_list{
		height: 100%;
		padding: 20upx 20upx 0 20upx;
		box-sizing: border-box;
	}
	.trade_list .type{
		width: 80upx;	
		height: 60upx;
		border-bottom: 2px solid #3562f6;
	}
	.trade_main{
		height: calc(100% - 60upx);
		width: 100%;
		overflow: auto;
	}
	.trade_label{
		margin-top: 40upx;
	}
	.trade_label .label{
		padding: 20upx 0;
		display: flex;
	}
	.trade_label .label .box{
	     width: 50%;
		 display: flex;
		 font-size: 30upx;
		 position: relative;
	}
	.trade_label .label .box:last-child{
		justify-content: flex-end;
	}
	.trade_label .label .value{
		 color: #aaa;
		 text-align: right;
		 font-size: 28upx
	}
	.trade_label .label .value:first-child{
		padding-right: 10px;
		border-right: 1px solid #eee;
	}
	.trade_label .label .value:last-child{
		padding-left: 10px;
	}
	.trade_label .label .block{
		width: 100%;
		font-size: 24upx;
		color: #aaa;
	}
	.trade_label .label .block:last-child{
		margin-top: 5px;
	}
	.tag{
		border-radius: 50%;
		width: 40upx;
		height: 40upx;
		line-height: 40upx;
		background: #3562f6;
		text-align: center;
		color: #fff;
		margin-right: 5px;
		font-size: 24upx;
	}
	.noflex{
		display: initial !important;
	}
	.price{
		position: absolute;
		right: 0;
		bottom: 0;
		color: #3562f6;
		font-size: 24upx;
	}
	.price .price_value{
		font-size: 40upx;
		font-weight: bold;
	}
	.payment{
		margin-right: 20upx;
	}
	.payment .img{
		width: 50upx;
		height: 38upx;
	}
	.text{
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
	}
</style>
