<template>
	<view class="pow_trade_class">
		<view class="phd">
			<image :src="data.logo" class="logo"></image>
			<view class="name">{{data.mineMachineName}}</view>
			<view class="algorithm">{{data.algorithm}}</view>
			<view class="rate">{{data.mineRate}}{{data.unit}}</view>
		</view>
		<view class="info">
			<view class="title">{{getLangs('powp24')}}</view>
			<view class="labels">
				<view class="name">{{getLangs('powp7')}}</view>
				<view class="value">{{data.name}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLangs('powp21')}}(USDT)</view>
				<view class="value">{{data.mineMonthPrice}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLangs('powp23')}}(USDT)</view>
				<view class="value">{{data.minePrice}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLangs('powp26')}}</view>
				<view class="value">{{data.poolRate}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLangs('powp13')}}</view>
				<view class="value">{{data.rate}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLangs('powp18')}}</view>
				<view class="value">{{data.estimateDayEarn}} {{data.name}}</view>
			</view>
		</view>
		<view class="buy">
			<view class="menu">
				<u-subsection @change="change" :list="list" height="60" active-color="#437aea" inactive-color="#aaa" :current="0" mode="subsection"></u-subsection>
			</view>
			<view class="cart">
				<view class="name box">
					<view class="t">{{getLangs('powp27')}}</view>
				    {{data.mineMachineName}}
				</view>
				<view class="price box">
					<view class="t">{{getLangs('powp28')}}</view>
				    {{getTypePrice}}(USDT)
				</view>
				<view class="amount box">
					<view v-if="current === 0">
						<view class="t">{{getLangs('powp29')}}</view>
						<!-- <u-number-box input-width="160" v-model="monthNum" :min="1"></u-number-box> -->
						<view class="amount_list">
							<view @tap="changeMonth(items)" :class="['labels',monthNum === items ? 'on' : '']" v-for="(items, index) in showList" :key="index">{{items}}</view>
						</view>
					</view>
				</view>
				<view class="leftmoney box">
				    <view class="t">{{getLangs('powp30')}}(USDT)</view>
					{{balance}}
				</view>
			</view>
		</view>
		<view class="bottom_btns">
			<view class="labels">{{getLangs('powp31')}}：{{getPrice}}</view>
			<view class="labels"><view @tap="tradePow" class="btns">{{getCurMode}}{{getLangs('powp33')}}</view></view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import validate from '@/utils/validate.js'
	import { getMiningProcuteInfo, submitPowOrder } from '@/api/user.js'
	export default {
		name: 'PowTrade',
		mixins: [commonMixins, langsMixins],
		data(){	
			return {
				mpid: '',
				data: {},
				balance: 0,
				list: [],
				monthNum: 1,
				current: 0,
				show: false,
				showList: [1,3,8,12,24]
			}
		},
		methods: {
			async getMiningProcuteInfoHandler(){
				const params = {
					mpid: this.mpid
				}
				const res = await getMiningProcuteInfo(params)
				this.data = res.data
				this.balance = res.balance
			},
			change(val){
				this.current = val
			},
			async tradePow(){
				const params = {
					mpid: this.mpid,
					buyType: this.current,
					monthNum: this.current === 0 ? this.monthNum : undefined
				}
				const res = await submitPowOrder(params)
				if(validate.checkCode(res)){
					this.navigateTo('/pages/pow_success/index')
				}else{
					this.backTips(res)
				}
			},
			changeMonth(index){
				this.monthNum = index
			}
		},
		computed: {
			getCurMode(){
				return this.current === 0 ? this.getLangs('powp49') : this.getLangs('powp50')
			},
			getTypePrice(){
				return this.current === 0 ? this.data.mineMonthPrice : this.data.minePrice
			},
			getPrice(){
				const price = this.current === 0 ? this.monthNum * this.data.mineMonthPrice : this.data.minePrice
				return isNaN(price) ? 0 : price
			}
		},
		onLoad(opt) {	
			this.mpid = opt.mpid
		},
		onShow() {
			this.setTitle(this.getLangs('powp25'))
			this.getMiningProcuteInfoHandler()
			this.list = [this.getLangs('powp49'), this.getLangs('powp50')]
		}
	}
</script>

<style scoped>
	page{
		background: #f9f9f9;
	}
	.pow_trade_class{
		height: 100%;
		padding-bottom: 140upx;
		border-top: 1px solid #f9f9f9;
		background: #f9f9f9;
	}
	.phd{
		padding: 20upx 20upx 20upx 120upx;
		position: relative;
		background: #ffffff;
	}
	.phd .logo{
		width: 80upx;
		height: 80upx;
		position: absolute;
		left: 20upx;
		top: 20upx;
	}
	.phd .name{
		font-size: 32upx;
	}
	.phd .algorithm{
		font-size: 26upx;
		color: #aaa;
	}
	.phd .rate{
		font-size: 36upx;
		position: absolute;
		right: 20upx;
		top: 30upx;
		font-weight: bold;
		color: #605cf0;
	}
	.info{
		background: #fff;
		margin-top: 20upx;
	}
	.info .title{
		line-height: 60upx;
		font-size: 28upx;
		padding: 0 20upx;
		border-bottom: 1px solid #f9f9f9;
		margin-bottom: 20upx;
	}
	.info .labels{
		position: relative;
		padding-left: 440upx;	
		padding-right: 20upx;
		height: 60upx;
	}
	.info .labels .name{
		width: 420upx;
		text-align: left;
		color: #AAAAAA;
		font-size: 24upx;
		position: absolute;
		left: 20upx;
		top: 0;
		line-height: 60upx
	}
	.info .labels .value{
		text-align: right;
		color: #333;
		font-size: 24upx;
		line-height: 60upx;
		font-weight: bold;
	}
	.buy{
		background: #fff;
		padding: 20upx;
		margin-top: 20upx;
	}
	/* .buy .menu{
		width: 50%;
	} */
	.buy .cart{
		padding: 40upx 20upx;
		margin-top: 20upx;
		border-radius: 60upx;
		position: relative;
		display: flex;
		flex-wrap: wrap;
		text-align: left;
	}
	.buy .cart .name{
		color: #14181F;
		font-size: 32upx;
		margin-bottom: 10upx;
		width: 50%;
	}
	.buy .cart .price{
		font-weight: bold;
		color: #007AFF;
		font-size: 32upx;
		margin-bottom: 10upx;
		flex: 1;
		width: 50%;
		text-align: right;
	}
	.buy .cart .amount{
		width: 50%;
		margin-top: 20upx;
	}
	.buy .cart .leftmoney{
		font-size: 32upx;
		width: 50%;
		margin-top: 20upx;
	}
	.buy .cart .box:nth-child(3){
		text-align: left;
	}
	.buy .cart .box:nth-child(4){
		text-align: right;
	}
	.buy .cart .t{
		color: #8191B3;
		font-size: 24upx;
		font-weight: normal;
	}
	.bottom_btns{
		width: 100%;
		height: 140upx;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 10000;
		background: #fff;
		box-shadow: -5upx -5upx 20upx 5upx rgba(0,0,0,.1);
		padding: 0 20upx;
		display: flex;
		font-size: 24upx
	}
	.bottom_btns .labels{
		flex: 1;
		text-align: center;
	}
	.bottom_btns .labels:first-child{
		text-align: left;
		line-height: 130upx;
		font-size: 28upx;
		font-weight: bold;
		flex: 1;
		color: #007AFF;
	}
	.bottom_btns .labels:last-child{
		text-align: right;
		flex: 2;
	}
	.bottom_btns .labels .btns{
		background: #007AFF;
		display: inline-block;
		line-height: 80upx;
		border-radius: 10upx;
		color: #fff;
		font-weight: bold;
		text-align: center;
		margin-top: 20upx;
		font-size: 28upx;
		padding: 0 20upx;
	}
	.amount_list{
		display: flex;
	}
	.amount .labels{
		flex: 1;
		margin-top: 10upx;
		text-align: center;
		color: #708090;
		border: 1px solid #fff;
	}
	.amount .labels.on{
		border: 1px solid #007AFF;
		color: #007AFF;
		text-align: center;
		border-radius: 10upx;
	}
</style>