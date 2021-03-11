<template>
	<view class="page">
		<view class="pool_redeem_confirm">
			<view class="logo">
				<image class="icon" :src="data.logo"></image>
				<view class="name">{{data.name}}</view>
			</view>
			<view class="pool_hd">
				<view class="pool_label">
					<view class="value">{{data.period}}</view>
					<view class="name">{{getLangs('period')}}({{getLangs('day')}})</view>
				</view>
				<view class="pool_label">
					<view class="value">{{data.amount}}</view>
					<view class="name">{{getLangs('poolp12')}}</view>
				</view>
				<view class="pool_label">
					<view class="value">{{data.diffDays}}</view>
					<view class="name">{{getLangs('pool51')}}({{getLangs('day')}})</view>
				</view>
				<view class="pool_label">
					<view class="value">{{data.min_redeem_day}}</view>
					<view class="name">{{getLangs('pool50')}}({{getLangs('day')}})</view>
				</view>
			</view>
			<view class="pool_bd">
				<view class="pool_label">
					<view class="name">{{getLangs('orderNumber')}}</view>
					<view class="value">{{data.orderNo}}</view>
				</view>
				<view class="pool_label">
					<view class="name">{{getLangs('lp')}}</view>
					<view class="value">{{data.punishAmount}} {{data.name}}</view>
				</view>
				<view class="pool_label">
					<view class="name">{{getLangs('pool52')}}(%)</view>
					<view class="value">{{data.punish_ratio}}</view>
				</view>
				<view class="pool_label">
					<view class="name">{{getLangs('orderTime')}}</view>
					<view class="value">{{data.createTime}}</view>
				</view>
			</view>
			<view class="bottom_button">
				<view @tap="refund" class="btn">{{getLangs('wantRedeem')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { refundMiningPoolOrderInfo, refundMiningPoolOrder } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	export default {
		name: 'PoolRedeem',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				orderNo: '',
				data: {}
			}
		},
		methods: {
			async getDetail(){
				const params = {
					orderNo: this.orderNo
				}
				const res = await refundMiningPoolOrderInfo(params)
				this.data = res.data
			},
			async refund(){
				const params = {orderNo: this.data.orderNo}
				const res = await refundMiningPoolOrder(params)
				this.backTips(res)
				if(validate.checkCode(res)){
					this.navigateTo('/pages/pool_success/index?type=0')
				}
			}
		},
		onLoad(opt){
			this.orderNo = opt.orderNo
		},
		onShow() {
			this.setTitle(this.getLangs('poolp39'))
			this.getDetail()
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
		overflow: auto;
	}
	.pool_redeem_confirm{
		padding: 20upx;
		background: #fff;
		border-top: 1px solid #eee;
	}
	.logo{
		display: flex;
		margin-bottom: 40upx;
	}
	.logo .icon{
		width: 50upx;
		height: 50upx;
	}
	.logo .name{
		vertical-align: top;
		margin-left: 20upx;
	}
	.pool_hd{
		display: flex;
		border-bottom: 1px solid #f9f9f9;
		padding-bottom: 40upx;
	}
	.pool_hd .pool_label{
		width: 25%;
	}
	.pool_hd .pool_label .value{
		color: #007AFF;
		font-weight: bold;
		text-align: center;
		font-size: 36upx
	}
	.pool_hd .pool_label .name{
		font-size: 24upx;
		text-align: center;
		color: #999
	}
	.pool_bd .pool_label{
		border-bottom: 1px solid #f9f9f9;
		height: 80upx;
		position: relative;
		padding-left: 160upx;
	}
	.pool_bd .pool_label .name{
		position: absolute;
		left: 0;
		line-height: 80upx;
		color: #666;
		font-size: 28upx
	}
	.pool_bd .pool_label .value{
		text-align: right;
		line-height: 80upx;
	}
	.bottom_button{
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 60upx;
		padding: 0 20upx;
		box-sizing: border-box;
	}
	.bottom_button .btn{
		background: #007AFF;
		line-height: 70upx;
		border-radius: 10upx;
		color: #fff;
		text-align: center;
		width: 100%;
	}
</style>
