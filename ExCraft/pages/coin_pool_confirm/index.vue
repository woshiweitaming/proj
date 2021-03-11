<template>
	<view class="coin_pool_confirm_class">
		<view class="coin_pool_hd">
			<view class="title">{{getLangs('confirmSubscription')}}</view>
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
						<view class="value">{{data.dayRate}}</view>
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
				<view class="name">{{getLangs('riseTime')}}</view>
				<view class="value">{{data.beginTime}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLangs('expirationTime')}}</view>
				<view class="value">{{data.expireTime}}</view>
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
			<view class="btn_labels">
				<view @tap="back" class="button">{{getLangs('cancel')}}</view>
			</view>
			<view class="btn_labels">
				<view @tap="payOrderHandler" class="button">{{getLangs('confirmSubscription')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Header from '@/layouts/common/header.vue'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import appConfig from '@/config/appConfig.js'
	import { payOrder } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	export default {
		name: 'CoinPoolConfirm',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				domain: appConfig.domain,
				fid: '',
				data: {
	                amount: 0,
	                expireTime: '',
	                orderNo: '',
	                logo: '',
	                dayRate: '',
	                estimateProfit: '',
	                beginTime: '',
			        period: ''
				}
			}
		},
		methods: {
			async payOrderHandler(){
				const params = {
					orderNo: this.data.orderNo
				}
				const res = await payOrder(params)
				this.backTips(res)
				if(validate.checkCode(res)){
					this.navigateTo('/pages/coin_pool_success/index', {fid: this.fid, title: 'subscriptionSuccessful', desc: 'getSubscriptionOrder'})
				}
			}
		},
		computed: {
			getDayRate(){
				return rate => {
					if(typeof rate == 'undefined') return 0
					const data = rate.split('~')
					return data[0] + '% ~ ' + data[1] + '%'
				}
			}
		},
		onLoad(opt){
			this.data = opt
			this.fid = opt.fid
		},
		onShow(){
			this.setTitle(this.getLangs('confirmSubscription'))
		}
	}
</script>

<style scoped>
	.coin_pool_confirm_class{
		height: 100%;
		background: #151936;
		background-size: 100% 100%;
	}
	.coin_pool_hd{
		background: #323a5e;
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
		background: #323a5e;
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
		color: #fff;
	}
	.card .hd .amount{
		font-size: 40upx;
		color: #fff;
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
		background: #323a5e;
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
		color: #fff;
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
	.bottom .btn_labels:first-child .button{
		background: #919eac;
		line-height: 80upx;
		color: #fff;
	}
	.bottom .btn_labels:last-child .button{
		background: #2351bd;
		line-height: 80upx;
		color: #fff;
	}
</style>
