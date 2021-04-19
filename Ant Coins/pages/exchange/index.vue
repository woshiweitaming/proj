<template>
	<view class="exchange">
		<view class="account card">
			<view class="name">{{getLangs('accountType')}}</view>
			<view class="account_name" @click="show1 = true">
				<view class="txt">{{getLangs(getCurAccount.name)}}</view>
				<text class="iconfont icon-unfold"></text>
			</view>
		</view>
		<view class="coin card">
			<view class="box1">
				<view class="select" @click="show2 = true">
					<view class="txt">{{from}}</view>
					<text class="iconfont icon-unfold"></text>
				</view>
			</view>
			<view class="box2">
				<image src="../../static/images/exchange.png" class="icon" mode="widthFix"></image>
			</view>
			<view class="box1">
				<view class="select" @click="show3 = true">
					<view class="txt">{{to}}</view>
					<text class="iconfont icon-unfold"></text>
				</view>
			</view>
		</view>
		<view class="amount card">
			<view class="exhange_num">{{getLangs('exchangeNum')}}</view>
			<view class="input_box">
				<view class="currency">{{from}}</view>
				<view class="input_bars">
					<input type="number" class="input_main" v-model="form.num" :placeholder="getLangs('numEmptyTips')"/>
				</view>
				<view class="all" @click="all">{{getLangs('all')}}</view>
			</view>
			<view class="info_bar">
				<view class="labels">
					<view class="name">{{getLangs('rate')}}</view>
					<view class="value">{{getCurRate}}</view>
				</view>
				<view class="labels">
					<view class="name">{{getLangs('avaliableUsdt')}}{{from}}</view>
					<view class="value">{{getBalance}}</view>
				</view>
				<view class="labels">
					<view class="name">{{getLangs('avaliableBtc')}}{{to}}</view>
					<view class="value">{{getValid}}</view>
				</view>
			</view>
		</view>
		<view class="form_class">
			<button class="button" @tap="confirmExchangeHandler">{{getLangs('exchange')}}</button>
		</view>
		<u-popup v-model="show1" mode="bottom">
			<view class="title">{{getLangs('accountType')}}</view>
			<view class="account_labels" @click="selected(curItem.type)" v-for="(curItem, index) in accountList" :key="index">{{getLangs(curItem.name)}}</view>
		</u-popup>
		<u-popup v-model="show2" mode="bottom">
			<view class="account_labels" @click="selected1(curItem)" v-for="(curItem, index) in toList" :key="index">{{curItem}}</view>
		</u-popup>
		<u-popup v-model="show3" mode="bottom">
			<view class="account_labels" @click="selected2(curItem)" v-for="(curItem, index) in fromList" :key="index">{{curItem}}</view>
		</u-popup>
	</view>
</template>
<script>
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getExchangeRate, confirmExchange } from '@/api/user.js'
	import { getProductId } from '@/api/public.js'
	import commonMixins from '@/mixins/common_mixins.js'
	export default {
		name: 'Exchange',
		mixins: [langsMixins, commonMixins],
		data(){
			return {
				show1: false,
				show2: false,
				show3: false,
				btcRate: 0,
				ethRate: 0,
				douRate: 0,
				accountList: [],
				productList: [],
				accountType: {
					0: 'futures', 
					1: 'contract', 
					2: 'coin', 
					3: 'poolp6'
				},
				toList: ['USDT', 'BTC', 'ETH', 'DOU'] ,
				fromList: ['BTC', 'USDT', 'ETH', 'DOU'],
				form: {
					type: 0,
					inOrOut: 0,//转出usdt还是转入usdt
					num: '',
				},
				from: 'USDT',
				to: 'BTC',
				timer: null
			}
		},
		methods: {
			async getProductIdHandler(){
				const res = await getProductId()
				this.productList = res.data
			},
			async getExchangeRateHandler(){
				const res = await getExchangeRate()
				const that = this
				this.btcRate = res.data.btcRate
				this.ethRate = res.data.ethRate
				this.douRate = res.data.douRate
			    this.accountList = res.data.balance.map((d, index) => {
					d.name = that.accountType[d.type]
					return d
				})
			},
			selected(type){
				this.form.type = type
				this.form.num = ''
				this.show1 = false
			},
			selected1(curItem){
				this.from = curItem
				this.form.num = ''
				if(curItem === 'USDT'){
					this.to = 'BTC'
				}else{
					this.to = 'USDT'
				}
				this.show2 = false
			},
			selected2(curItem){
				this.to = curItem
				this.form.num = ''
				if(curItem === 'USDT'){
					this.from = 'BTC'
				}else{
					this.from = 'USDT'
				}
				this.show3 = false
			},
			setTimer(){
				this.timer = setInterval(() => {
					this.getExchangeRateHandler()
				}, 1000)
			},
			async confirmExchangeHandler(){
				if(this.form.num.length === 0){
					return this.$tips.showToast(this.getLangs('numEmptyTips'))
				}
				if(this.from === 'USDT'){
					this.form.inOrOut = 0
				}else{
					this.form.inOrOut = 1
				}
				if(this.from === 'USDT'){
					this.form.bid = (this.productList.filter(res => res.name == this.to)[0]).id
				}
				if(this.to === 'USDT'){
					this.form.bid = (this.productList.filter(res => res.name == this.from)[0]).id
				}
				const res = await confirmExchange(this.form)
				this.backTips(res)
			},
			all(){
				this.form.num = this.getBalance
			}
		},
		computed: {
			getCurAccount(){
				const res = this.accountList.filter(res => res.type == this.form.type)
				return res.length == 0 ? '' : res[0]
			},
			getBalance(){
				return this.getCurAccount[this.from.toLowerCase()]
			},
			getValid(){
				const res = (this.form.num * this.getCurRate)
				return res === 0 ? 1 : res.toFixed(6)
			},
			getCurRate(){
				if(this.from === 'BTC') return this.btcRate
				if(this.from === 'ETH') return this.ethRate
				if(this.from === 'DOU') return this.douRate
				if(this.from === 'USDT'){
					if(this.to === 'BTC'){
						return (1 / this.btcRate).toFixed(8)
					}
					if(this.to === 'ETH'){
						return (1 / this.ethRate).toFixed(8)
					}
					if(this.to === 'DOU'){
						return (1 / this.douRate).toFixed(8)
					}
				}
			}
		},
		onLoad() {
			this.getProductIdHandler()
			this.getExchangeRateHandler()
			this.setTimer()
		},
		onHide(){
			clearInterval(this.timer)
			this.timer = null
		}
	}
</script>
<style scoped>
	.exchange{
		padding: 20upx;
		color: #fff;
		height: 100%;
		background: #111;
	}
	.account{
		padding-left: 200upx !important;
	}
	.card{
		padding: 20upx;
		background: #20222c;
		border-radius: 20upx;
		position: relative;
		margin-bottom: 20upx;
	}
	.account .name{
		width: 200upx;
		position: absolute;
		left: 20upx;
		line-height: 80upx;
	}
	.account .account_name{
		padding: 20upx;
		background: rgba(255,255,255,.05);
		position: relative;
		border-radius: 20upx;
	}
	.iconfont{
		position: absolute;
		right: 20upx;
		top: 20upx;
	}
	
	.title{
		text-align: center;
		line-height: 80upx;
		position: relative;
		color: #aaa;
		font-weight: bold;
		background: rgba(0,0,0,.05);
	}
	.account_labels{
		text-align: center;
		line-height: 120upx;
		color: #333;
		border-bottom: 1px solid #f9f9f9;
	}
	.coin{
		display: flex;
	}
	.coin .iconfont{
		top: 0;
	}
	.coin .box1{
		width: 40%;
		position: relative;
	}
	.coin .box2{
		width: 20%;
		text-align: center;
	}
	.icon{
		width: 50upx;
		height: 50upx;
		padding-top: 10upx;
	}
	.exhange_num{
		font-size: 32upx;
		margin-bottom: 40upx;
	}
	.amount{
		margin-bottom: 40upx;
	}
	.amount .input_box{
		display: flex;
	}
	.amount .currency{
		width: 20%;
		text-align: left;
		font-size: 40upx
	}
	.amount .input_bars{
		width: 60%;
		color: #fff;
	}
	.amount .all{
		width: 20%;
		text-align: right;
		color: #007AFF;
	}
	.info_bar{
		width: 100%;
		display: flex;
		padding-top: 40upx;
	}
	.info_bar .labels{
		width: 33.3333%;
		font-size: 24upx;
		text-align: center;
		color: rgba(255,255,255,.4);
	}
	.info_bar .labels .name{
		line-height: 60upx;
	}
</style>
