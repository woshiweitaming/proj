<template>
	<view class="coin_pool_class">
		<view class="coin_main">
			<text class="title">{{datas.proName}}</text>
			<view class="section">
				<view class="labels">
					<image class="img_logo" :src="datas.logo"></image>
					<view class="get">{{getLangs('movingBricks')}}</view>
					<view class="currency">USDT</view>
				</view>
				<view class="labels right">
					<view class="get">{{getLangs('recent')}}(%)</view>
					<view class="value">{{datas.dayRate && datas.dayRate.split('~')[1]}}</view>
				</view>
			</view>
			<view class="buy_info">
			   <view class="card">
			   		<view class="labels">
			   			<text class="name">{{datas.period}}{{getLangs('day')}}</text>
			   			<text class="value">{{getLangs('financialCycle')}}</text>
			   		</view>
			   		<view class="labels line"></view>
			   		<view class="labels">
			   			<text class="name">{{datas.priceScope}}</text>
			   			<text class="value">{{getLangs('singleLimit')}}</text>
			   		</view>
			   	</view>
			 </view> 
			 <view class="coin_labels award">
			 	<view class="box">
			 		<view class="name">{{getLangs('dividendTime')}}</view>
			 		<view class="value">{{getLangs('daily')}}</view>
			 	</view>
			 	<view class="box">
			 		<view class="name">{{getLangs('ustodyFunds')}}</view>
			 		<view class="value">{{getLangs('returnDue')}}</view>
			 	</view>
			 	<view class="box">
			 		<view class="name">{{getLangs('earlyRedemption')}}</view>
			 		<view class="value">{{datas.defaultRate}}%</view>
			 	</view>
			</view>
			<view class="coin_labels">
			    <view class="box">
					<view class="name">{{getLangs('estimatedEarnings')}}(USDT)</view>
					<view class="value">{{datas.estimateProfit}}</view>
				</view>
				<view class="box">
					<view class="name">{{getLangs('availableAssets')}}</view>
					<view class="value">{{datas.balance}}</view>
				</view>
			</view>
			<view class="coin_labels intro">
				<view class="titles">
				    {{getLangs('productIntroduction')}}<image @tap="showDesc" class="down_arrow" src="../../static/images/down_arrow.png"></image>
				</view>
			    <view class="desc" v-if="show">
					<text>{{datas.introduce}}</text>
				</view>
			</view>
			<view class="coin_labels">
				<view class="titles">{{getLangs('escrowAmount')}}</view>
				<view class="inputs">
					<input type="text" class="input_bar" @input="checkInput" v-model="amount" :placeholder="getLangs('escrowAmountPlaceholder')" />
					<view class="usdt">USDT</view>
					<view class="all" @tap="all">{{getLangs('allText')}}</view>
				</view>
			</view>
		</view>
		<view class="bottom">
		    <view class="btn" @tap="submitOrderHandler">{{getLangs('subscribe')}}</view>
		</view>
		<!--弹窗-->
		<view class="error_dialog" v-if="errorTips">
			<view class="error_dialog_main">
				<view class="section1">
					<image class="img" src="../../static/images/error_img.png"></image>
				</view> 
				<view class="section2">
					<text class="tips1">{{getLangs('subscriptionFailed')}}</text>
					<text class="tips2">{{getLangs('subscriptionLimit')}}</text>
					<view class="btn" @tap="closeErrorDialog">{{getLangs('confirm')}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex'
	import appConfig from '@/config/appConfig.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import validate from '@/utils/validate.js'
	import { getFinProductInfo, submitOrder } from '@/api/user'
	export default {
		name: 'CoinPoolBuy',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				fid: '',
				domain: appConfig.domain,
				datas: {},
				show: false,
				amount: '',
				errorTips: false,
			}
		},
		methods: {
			showDesc(){
				this.show = !this.show
			},
			async getFinProductInfoHandler(){
				const params = {
					fid: this.fid
				}
				const res = await getFinProductInfo(params)
				this.datas = res.data
			},
			async submitOrderHandler(){
				if(this.amount === ''){
					return this.$tips.showToast(this.getLangs('escrowAmountPlaceholder'))
				}
				const range = this.datas.priceScope.split('~')
				if(Number(this.amount) < Number(range[0]) || Number(this.amount) > Number(range[1])){
					return this.errorTips = true
				}
				const params = {
					fid: this.fid,
					amount: this.amount
				}
				const res = await submitOrder(params)
				this.backTips(res)
				if(validate.checkCode(res)){
					const urlParams = Object.assign(res.data, {fid: this.fid})
					this.navigateTo('/pages/coin_pool_confirm/index', urlParams)
				}
			},
			all(){
				this.amount = this.datas.balance
			},
			closeErrorDialog(){
				this.errorTips = false
			},
			checkInput(e){
				setTimeout(() => {
					const regs = /^(\d+|\d+\.\d{0,4})$/;
					const val = e.detail.value
					if(regs.test(val)){
						this.amount = val
					}else{
						if(val.indexOf('.') > -1){
							const arr = val.split('.')
							const zs = arr[0]
							const xs = arr[1]
							if(xs.length > 4){
								this.amount = zs+'.'+xs.substring(0,4)
							}else{
								this.amount = zs+'.'+xs
							}
							this.amount = val.substring(0, val.length-1)
						}else{
							this.amount = ''
						}
					}
				},20)
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
		onLoad(opt) {
			this.fid = opt.fid
		},
		onShow() {
		    this.getFinProductInfoHandler()
			this.setTitle(this.getLangs('coinPool'))
		}
	}
</script>
<style scoped>
	.coin_pool_class{
		height: 100%;
		background: url(../../static/images/coin_pool_bg.png);
		background-size: 100% 1334upx;
		padding: 0 40upx 140upx 40upx;
		overflow: hidden;
	}
	.coin_main{
		height: 100%;
		box-sizing: border-box;
		overflow: auto
	}
	.coin_main .title{
		font-size: 50upx;
		color: #fff;
		font-weight: bold;
		margin-bottom: 40upx;
		display: block;
	}
	.coin_main .section{
		display: flex;
	}
	.coin_main .section .labels{
		width: 50%;
		box-sizing: border-box;
		padding-left: 100upx;
		position: relative;
	}
	.coin_main .section .labels .img_logo{
		width: 80upx;
		height: 80upx;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 10;
	}
	.coin_main .section .labels .get{
		color: #719af9;
		font-size: 24upx
	}
	.coin_main .section .labels .currency{
		font-size: 40upx;
		color: #fff;
		font-weight: bold;
	}
	.coin_main .section .labels.right{
		text-align: right;
		padding-left: 0;
	}
	.coin_main .section .labels .value{
		text-align: right;
		font-size: 32upx;
		font-weight: bold;
		color: #ffc600;
		margin-top: 10upx;
	}
	.coin_main .buy_info{
	    width: 100%;
	    margin: 0 auto;
	    margin-top: 95upx;
	    position: relative;
	    height: 28upx;
	    background-color: rgba(255,255,255,0.15);
		padding-top: 140upx;
	}
	.coin_main .buy_info .card{
	    width: 90%;
		height: 180upx;
	    padding: 30upx 30upx;
		position: absolute;
		left: 50%;
		margin-left: -45%;
		top: -75upx;
		background: #fff;
		display: flex;
	}
	.coin_main .buy_info .card .labels{
		width: 49%;
		text-align: center;
	}
	.coin_main .buy_info .card .labels .value,
	.coin_main .buy_info .card .labels .name{
		display: block;
		line-height: 60upx;
	}
	.coin_main .buy_info .card .labels .value{
		color: #90a2b0;
		font-size: 26upx;
		line-height: 60upx
	}
	.coin_main .buy_info .card .labels .name{
		font-size: 30upx;
		color: #1f3f59;
		font-weight: bold;
	}
	.coin_main .buy_info .card .labels.line{
	    height: 40upx;
	    background: #e7eaed;
	    width: 1px;
		margin-top: 30upx;
	}
	.coin_main .coin_labels{
		width: 100%;
		margin-top: 20upx;
		position: relative;
		padding: 20upx;
		background-color: rgba(255,255,255,0.15);
	}
	.coin_main .coin_labels.intro{
		padding: 0;
	}
	.coin_main .coin_labels{
		display: flex;
		flex-wrap: wrap;
	}
	.coin_main .coin_labels .box{
		flex: 1;
		text-align: center;
	}
	.coin_main .coin_labels .box .name{
		color: #bed2ff;
		margin-bottom: 20upx;
	}
	.coin_main .coin_labels .box .value{
		height: 60upx;
		line-height: 60upx;
		font-size: 34upx;
		color: #fff;
		font-weight: bold;
	}
	.coin_main .coin_labels.award .value{
		color: #ffc600;
		font-weight: bold;
		font-size: 30upx;
		line-height: 60upx
	}
	.coin_main .coin_labels .titles{
		font-size: 30upx;
		color: #fff;
		width: 100%;
		padding: 20upx;
		position: relative;
	}
	.coin_main .coin_labels .titles .down_arrow{
		width: 30upx;
		height: 30upx;
		position: absolute;
		right: 20upx;
		top: 20upx;
	}
	.coin_main .coin_labels .inputs{
		background: #fff;
		width: 100%;
		margin-top: 20upx;
		padding: 20upx;
		position: relative;
		padding-right: 160upx;
		height: 80upx;
	}
	.coin_main .coin_labels .inputs .usdt{
		position: absolute;
		right: 100upx;
		top: 25upx;
		font-size: 26upx
	}
	.coin_main .coin_labels .inputs .all{
		position: absolute;
		right: 15upx;
		top: 25upx;
		font-size: 26upx;
		color: #007AFF;
	}
	.bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 199;
		background: #fff;
		width: 100%;
		height: 130upx;
		padding: 20upx;
	}
	.bottom .btn{
		background: #2351bd;
		width: 100%;
		height: 90upx;
		text-align: center;
		border-radius: 10upx;
		line-height: 90upx;
		font-size: 34upx;
		font-weight: bold;
		background: #2351bd;
		margin: 0 auto;
		color: #fff;
	}
	.input_bar{
		font-size: 28upx
	}
	.desc{
		width: 100%;
		display: block;
		background: rgba(255,255,255,.1);
		padding: 20upx;
		font-size: 30upx;
		color: #fff;
	}
	.intro{
		padding: 0;
	}
</style>