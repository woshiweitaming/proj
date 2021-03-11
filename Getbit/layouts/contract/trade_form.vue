<template>
	<view class="trade_form">
		<view class="input_bar select_bar">
			<view class="name">杠杆1X</view>
			<image src="../../static/images/icons/select_arrow_down.png" class="arrow_down"></image>
		</view>
		<view class="sub">1张 = 0.0001 USDT</view>
		<view class="input_bar">
			<input class="input" v-model="form.price" type="text" placeholder="价格">
			<view class="text blue">对手价</view>
		</view>
		<view class="desc">
			<view class="item">最高价格</view>
			<view class="item">最低价格 {{form.low.toFixed(4)}}</view>
		</view>
		<view class="input_bar">
			<input class="input" v-model="form.num" type="text" placeholder="数量">
			<view class="text blue">张</view>
		</view>
		<view class="desc">
			<view class="item">可开多一张</view>
			<view class="item">可开空一张</view>
		</view>
		<view class="desc trade_price">
			<view class="item">交易额</view>
			<view class="item">-</view>
		</view>
		<view class="btns">
			<view class="buttons button0">买入开多<text class="sub">看涨</text></view>
			<view class="buttons button1">卖出开空<text class="sub">看跌</text></view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'TradeForm',
		data(){
			return {
				form: {
					price: '',
					num: '',
					low: 0
				}
			}
		}
	}
</script>

<style scoped>
	.trade_form{
		padding: 0 20upx;
	}
	.input_bar{
		border: 1px solid #eee;
		border-radius: 5px;
		margin-bottom: 10upx;
		position: relative;
	}
	.input_bar .input{
		padding: 0 20upx 0 10upx;
		line-height: 80upx;
		font-size: 28upx
	}
	.input_bar .text{
		position: absolute;
		right: 20upx;
		top: 0;
		line-height: 80upx;
		font-weight: bold;
	}
	.input_bar .blue{
		color: #007AFF;
	}
	.select_bar{
		padding: 5upx 20upx;
		margin-top: 20upx;
	}
	.select_bar .name{
		font-weight: bold;
		color: #333;
	}
	.sub{
		line-height: 40upx;
		color: #aaa;
		font-size: 24upx;
		margin-bottom: 20upx;
	}
	.arrow_down{
		width: 30upx;
		height: 30upx;
		position: absolute;
		right: 10upx;
		top: 10upx;
	}
	.desc{
		display: flex;
		margin-bottom: 20upx;
	}
	.desc .item{
		width: 50%;
		font-size: 24upx;
		color: #aaa;
	}
	.desc .item:last-child{
		text-align: right;
	}
	.trade_price{
		font-size: 28upx;
		margin-top: 30upx;
	}
	.trade_price .item:last-child{
		color: #111;
	}
	.buttons{
		position: relative;
	}
	.buttons:first-child{
		margin-bottom: 40upx;
	}
	.sub{
		color: rgba(255,255,255,.6);
		position: absolute;
		right: 20upx;
		top: 15upx;
	}
</style>
