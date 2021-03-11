<template>
	<view class="inner">
		<view class="card">
			<view class="trade_main">
				<view class="trade_label">
					<view class="label">
						<view class="box">
							<view class="text">{{opt.username}}</view>
						</view>
						<view class="box">
							<view class="value">{{Number(opt.totalnums).toFixed(0)}}</view>
							<view class="value">{{getRatio(opt.nums, opt.totalnums).toFixed(2)}}%</view>
						</view>
					</view>
					<view class="label">
						<view class="box price_box">
							<text class="price_value">{{Number(opt.price).toFixed(6)}}</text>
						</view>
						<view class="box">
							<view class="payment">
								<image class="img" :src="`/static/images/icons/payment/${opt.pay_type}.png`"></image>
							</view>
						</view>
					</view>
					<view class="label">
						<text class="cny">单价(CNY)</text>
					</view>
				</view>
			</view>
		</view>
		<view class="inputs">
			<view class="name">{{opt.type == 1 ? '购买' : '出售'}}数量(USDT) <text class="use">可用余额：0.000000</text></view>
			<u-input class="input_bar" v-model="nums" placeholder=""></u-input>
			<text class="tips">交易限额 ¥ {{Number(opt.min).toFixed(6)}} - ¥ {{Number(opt.max).toFixed(6)}}</text>
		</view>
		<view class="inputs">
			<view class="name">所获金额</view>
			<view class="money">{{getMoney.toFixed(6)}}</view>
			<view class="unit">CNY</view>
		</view>
		<view :class="['buttons', getActive]" @click="sellHandler">确认{{opt.type == 1 ? '购买' : '出售'}}</view>
		<view class="tips_main">
			<view class="ptitle">交易说明</view>
			<view class="p">1、订单有效期15分钟，请及时付款并点击「我已付款」按钮</view>
			<view class="p">2、在支付时请备注平台提供的付款参考号</view>
			<view class="p">3、币由系统锁定，请安心下单</view>
		</view>
		<u-popup v-model="show" mode="bottom" length="600rpx">
			<view class="bottom_popup">
				<view class="title">输入相关密码</view>
				<view class="inputs">
					<view class="name">支付密码</view>
					<u-input class="input_bar" type="password" :password-icon="passwordIcon" v-model="params.deal_psw" placeholder=""></u-input>
				</view>
				<view class="change_action">忘记支付密码?</view>
				<view :class="['buttons', getActive]" @click="sellHandler">确定</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import { getOrder } from '@/apis/wallet.js'
	import storage from '@/utils/storage.js'
	export default {
		name: 'TradeList',
		data(){
			return {
				data: {},
				params: {
					uid: '',
					deal_psw: '',
					cid: '',
					nums: '',
					type: '',
					pay_type: '',
					payvoucher: ''
				},
				nums: '',
				opt: {},
				show: false,
				passwordIcon: true
			}
		},
		computed: {
			getTag(){
				return name => {
					return name.substring(0,1)
				}
			},
			getRatio(){
				return (nums, totalnums) => {
					return ((Number(nums) / Number(totalnums))*100)
				} 
			},
			getMoney(){
				const res = ((Number(this.opt.nums) / Number(this.opt.totalnums))*100) * Number(this.nums)
				return isNaN(res) ? 0 : res
			},
			getActive(){
				if(Number(this.nums) >= Number(this.opt.min) && Number(this.nums) <= Number(this.opt.max)){
					return 'on'
				}
				return 'un'
			}
		},
		methods: {
			async sellHandler(){
				if(this.getActive == 'on'){
					this.show = true
				}
			}
		},
		onLoad(opt) {
			this.opt = opt
			uni.setNavigationBarTitle({
				title: opt.type == 1 ? '购买USDT' : '出售USDT'
			})
		}
	}
</script>

<style scoped>
	.trade_list{
		height: 100%;
		padding: 20upx 20upx 0 20upx;
	}
	.trade_list .type{
		width: 80upx;	
		height: 60upx;
		border-bottom: 2px solid #3562f6;
	}
	.trade_main{
		height: calc(100% - 60upx);
		width: 100%;
	}
	.trade_label .label{
		padding: 10upx 0;
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
	.price_value{
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
	.price_box{
		text-align: left;
	}
	.cny{
		font-size: 26upx;
		color: #aaa;
	}
	.inputs{
		margin-top: 40upx;
		position: relative;
	}
	.inputs .name{
		position: relative;
		margin-bottom: 20upx;
	}
	.inputs .use{
		position: absolute;
		right: 0;
		font-size: 24upx;
		color: #666;
	}
	.input_bar{
		background: #fff;
		padding-left: 20upx !important;
		border-radius: 10upx;
	}
	.tips{
		line-height: 60upx;
		color: #999;
		font-size: 24upx
	}
	.money{
		font-size: 36upx;
		font-weight: bold;
		border-bottom: 1px solid #eee;
		line-height: 80upx;
	}
	.unit{
		position: absolute;
		right: 0;
		bottom: 20upx;
	}
	.buttons{
		margin-top: 60upx;
	}
	.tips_main{
		margin-top: 40upx;
	}
	.tips_main .ptitle{
		font-size: 28upx;
		color: #333;
		margin-bottom: 20upx;
	}
	.tips_main .p{
		color: #aaa;
		font-size: 24upx;
	}
	.bottom_popup{
		padding: 20upx;
	}
	.bottom_popup .title{
		line-height: 80upx;
		font-weight: bold;
		font-size: 32upx
	}
	.bottom_popup .input_bar{
		border-bottom: 1px solid #eee;
		border-radius: 0;
	}
	.change_action{
		line-height: 80upx;
		margin-bottom: 80upx;
		font-size: 24upx;
		color: #007AFF;
	}
	.text{
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
	}
</style>
