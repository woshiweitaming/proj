<template>
	<view class="coin_pool_record_class">
		<view class="coin_pool_hd">
			<view class="title">{{getLangs('wantRedeem')}}</view>
			<view class="card">
				<view class="hd">
					<image class="img" :src="data.logo"></image>
					<text class="name">{{getLangs('escrowAmount')}}</text>
					<text class="amount">{{data.amount}}</text>
				</view>
				<view class="fd">
					<view class="items">
						<view class="name">{{getLangs('estimatedEarnings')}}(USDT)</view>
						<view class="value">{{data.estimateProfit}}</view>
					</view>
					<view class="items">
						<view class="name">{{getLangs('dailyYield')}}(%)</view>
						<view class="value">{{data.day_rate}}</view>
					</view>
					<view class="items">
						<view class="name">{{getLangs('hostingTime')}}({{getLangs('day')}})</view>
						<view class="value">{{data.period}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="labels">
				<view class="name">{{getLangs('remainingDays')}}</view>
				<view class="value">{{data.expireDay}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLangs('pold')}}%</view>
				<view class="value">{{data.penaltyRate}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLangs('lp')}}(USDT)</view>
				<view class="value">{{data.penaltyMoney}}</view>
			</view>
		</view>
		<view class="list">
			<view class="labels">
				<view class="name">{{getLangs('orderNumber')}}</view>
				<view class="value">{{data.orderNo}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLangs('orderTime')}}</view>
				<view class="value">{{data.createTime}}</view>
			</view>
		</view>
		<view class="bottom">
			<view @tap="refundOrderHandler" class="button">{{getLangs('confirm')}}</view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import appConfig from '@/config/appConfig.js'
	import { getCoinPoolRefundOrderInfo, refundOrder } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	export default {
		name: 'CoinPoolRecord',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				domain: appConfig.domain,
				orderNo: '',
				data: {}
			}
		},
		methods: {
			async getCoinPoolRefundOrderInfoHandler(){
				const params = {
					orderNo: this.orderNo
				}
				const res = await getCoinPoolRefundOrderInfo(params)
				this.data = res.data
			},
			async refundOrderHandler(){
				const params = {
					orderNo: this.orderNo
				}
				const res = await refundOrder(params)
				this.backTips(res)
				if(validate.checkCode(res)){
					const urlParams =  {
						title: 'successfulRedemption', 
						desc: 'getSubscriptionOrder',
					}
					this.navigateTo('/pages/coin_pool_success/index', urlParams)
				}
			}
		},
		onLoad(opt) {
			this.orderNo = opt.orderNo
		},
		onShow() {
			this.setTitle(this.getLangs('wantRedeem'))
			this.getCoinPoolRefundOrderInfoHandler()
		}
	}
</script>

<style scoped>
	.coin_pool_record_class{
		background: #f9f9f9;
		height: 100%;
	}
	.coin_pool_hd{
		background: #2351bd;
		height: 400upx;
		padding: 20upx;
	}
	.title{
		font-size: 50upx;
		display: block;
		line-height: 100upx;
		color: #fff;
	}
	.card{
		border-radius: 20upx 20upx 0 0;
		background: #fff;
		width: 100%;
		height: 280upx;
		position: absolute;
		left: 0;
		top: 140upx;
		padding: 20upx;
	}
	.card .hd{
		position: relative;
		padding-left: 100upx;
	}
	.card .hd .img{
		width: 80upx;
		height: 80upx;
		position: absolute;
		left: 0;
	}
	.card .hd .name,
	.card .hd .amount{
		display: block;
	}
	.card .hd .name{
		font-size: 24upx;
		color: #1f3f59;
	}
	.card .hd .amount{
		font-size: 40upx;
		color: #1f3f59;
		font-weight: bold;
	}
	.card .fd{
		display: flex;
		padding-top: 40upx;
	}
	.card .fd .items{
		width: 33.3333%;
		text-align: center;
	}
	.card .fd .items .name{
		color: #90a2b0;
		font-size: 26upx;
		display: block;
		margin-bottom: 10upx;
	}
	.card .fd .items .value{
		color: #ff665e;
		font-size: 34upx
	}
	.list{
		margin-top: 40upx;
		margin-bottom: 20upx;
	}
	.list .labels{
		background: #fff;
		padding: 20upx;
		position: relative;
		text-align: right;
		height:80upx;
	}
	.list .labels .name{
		color: #8c9fad;
		position: absolute;
		left: 10px;
	}
	.list .labels .value{
		color: #14181f;
		font-size: 28upx;
		font-weight: bold;
	}
	.bottom{
		width: 100%;
		height: 120upx;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #f9f9f9;
		display: flex;
	}
	.bottom .btn_labels{
		padding: 20upx;
		text-align: center;
	}
	.bottom .btn_labels:first-child{
		width: 40%;
	}
	.bottom .btn_labels:last-child{
		width: 60%;
	}
	.bottom .button{
		background: #2351bd;
		line-height: 80upx;
		color: #fff;
		width: 90%;
		display: block;
		margin: auto;
		text-align: center;
	}
</style>
