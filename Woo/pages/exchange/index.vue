<template>
	<view class="exchange_class" @tap="eventClick">
		<!--账户类型-->
		<view class="account_type">
			<view class="name">{{getLangs('accountType')}}</view>
			<view class="select" @tap.stop="stopClick">
				<view class="select_label" @tap="openDrop('account_drop')">
					<view class="select_name">{{getLangs(account.accountList[account.active])}}</view>
					<text class="iconfont icon-unfold"></text>
				</view>
				<view class="select_drop" v-show="account.show">
					<view class="selelct_drop_main" @tap.stop="stopClick">
						<view @tap="changeAccountDrop('account_drop', index)"class="select_drop_label" v-for="(items, index) in account.accountList" :key="index">{{getLangs(items)}}</view>
					</view>
				</view>
			</view>
		</view>
		<!--币种类型-->
		<view class="currency_type">
			<view class="currency">
				<view class="select" @tap.stop="stopClick">
					<view class="select_label" @tap="openDrop('currency_out')">
						<view class="select_name">{{currency_out.outList[currency_out.active]}}</view>
						<text class="iconfont icon-unfold"></text>
					</view>
					<view class="select_drop" v-show="currency_out.show">
						<view class="selelct_drop_main" @tap.stop="stopClick">
							<view @tap="changeOutDrop('currency_out', index)"class="select_drop_label" v-for="(items, index) in currency_out.outList"  :key="index">{{items}}</view>
						</view>
					</view>
				</view>
			</view>
			<image src="../../static/images/exchange.png" class="icon"></image>
			<view class="currency">
				<view class="select" @tap.stop="stopClick">
					<view class="select_label" @tap="openDrop('currency_in')">
						<view class="select_name">{{currency_in.inList[currency_in.active]}}</view>
						<text class="iconfont icon-unfold"></text>
					</view>
					<view class="select_drop" v-show="currency_in.show">
						<view class="selelct_drop_main" @tap.stop="stopClick">
							<view @tap="changeInDrop('currency_in', index)"class="select_drop_label" v-for="(items, index) in currency_in.inList"  :key="index">{{items}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--交易数量-->
		<view class="num_class">
			<text class="exhange_num">{{getLangs('exchangeNum')}}</text>
			<view class="exchange_input">
				<view class="currency">{{currency_out.outList[currency_out.active]}}</view>
				<view class="input_bar">
					<input type="number" class="input_main" v-model="num" :placeholder="getLangs('numEmptyTips')"/>
				</view>
				<view @tap="allChange" class="all">{{getLangs('all')}}</view>
			</view>
			<!--各账户余额-->
			<view class="leftmoney_bar">
				<view class="labels">
					<view class="name">{{getLangs('rate')}}</view>
					<view class="value">{{getRateData}}</view>
				</view>
				<view class="labels">
					<view class="name">{{getLangs('avaliableUsdt')}}{{currency_out.outList[currency_out.active]}}</view>
					<view class="value">{{getBalance[0]}}</view>
				</view>
				<view class="labels">
					<view class="name">{{getLangs('avaliableBtc')}}{{currency_in.inList[currency_in.active]}}</view>
					<view class="value">{{getAvail}}</view>
				</view>
			</view>
		</view>
		<view class="form_class">
			<button class="button" @tap="confirmExchangeHandler">{{getLangs('exchange')}}</button>
		</view>
	</view>
</template>

<script>
	/**
	 * 兑换
	 */
	import { mapMutations, mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getExchangeRate, confirmExchange } from '@/api/user.js'
	let timer = null
	export default {
		name: 'Exchange',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				account: {
					accountList: ['futures', 'contract', 'coin'],
					active: 0,
					show: false
				},
				currency_out: {
					outList: ['BTC', 'ETH', 'USDT'],
					active: 2,
					show: false
				},
				currency_in: {
					inList: ['BTC', 'ETH', 'USDT'],
					active: 0,
					show: false
				},
				num: ''
			 }
		},
		methods: {
			/**
			 * 获取兑换汇率
			 */
			async getExchangeRateHandler(){
				const res = await getExchangeRate()
				this.setRate(res.data)
			},
			/**
			 * 打开下拉
			 */
			openDrop(ref){
				this.eventClick()
				if(ref == 'account_drop'){
					this.account.show = !this.account.show	
				}
				if(ref == 'currency_out'){
					this.currency_out.show = !this.currency_out.show	
				}
				if(ref == 'currency_in'){
					this.currency_in.show = !this.currency_in.show	
				}
			},
			/**
			 * 切换账户
			 */
			changeAccountDrop(ref, index){
				this.account.active = index
				this.eventClick()
			},
			/**
			 * 切换转出账户
			 */
			changeOutDrop(ref, index){
				this.currency_out.active = index
				if(this.currency_out.active === 0 || this.currency_out.active == 1){
					this.currency_in.active = 2
				}else{
					this.currency_in.active = 0
				}
				this.eventClick()
			},
			/**
			 * 切换转出账户
			 */
			changeInDrop(ref, index){
				this.currency_in.active = index
				if(this.currency_in.active === 0 || this.currency_in.active == 1){
					this.currency_out.active = 2
				}else{
					this.currency_out.active = 0
				}
				this.eventClick()
			},
			/**
			 * 全部兑换
			 */
			allChange(){
				this.num = this.getBalance[0]
			},
			/**
			 * 确认兑换
			 */
			async confirmExchangeHandler(){
				if(this.num === ''){
					return this.$tips.showToast(this.getLangs('numEmptyTips'))
				}
				let btype = 0
				if(this.currency_out.active === 2){
					btype = this.currency_in.active
				}
				if(this.currency_in.active === 2){
					btype = this.currency_out.active
				}
				const params = {
					type: this.account.active,
					inOrOut: this.currency_out.active === 2 ? 0 : 1,
					num: Number(this.num),
					btype: btype
				}
				const res = await confirmExchange(params)
				console.log(res)
				this.backTips(res)
			},
			/**
			 * 定时器
			 */
			setTimer(){
				timer = setInterval(() => {
					this.getExchangeRateHandler()
				},3000)
			},
			clearTimer(){
				clearInterval(timer)
				timer = null
			},
			stopClick(e){
				e.stopPropagation()
			},
			eventClick(){
				this.account.show = false
				this.currency_in.show = false
				this.currency_out.show = false
			},
			...mapMutations({
				setRate: 'SET_RATE'
			})
		},
		computed: {
			getRateData(){
				if(this.getRate){
					const btcRate = this.getRate.btcRate
					const ethRate =  this.getRate.ethRate
					if(this.currency_out.active === 0){
						return btcRate
					}
					if(this.currency_out.active === 1){
						return ethRate
					}
					if(this.currency_out.active === 2){
						return this.currency_in.active === 0 ? ((1/btcRate).toFixed(7)) : ((1/ethRate).toFixed(7))
					}
				}else{
					return 0
				}
			},
			getBalance(){
				if(this.getRate && this.getRate.balance){
					const leftmoney = this.getRate.balance
					const currentAccountData = leftmoney.filter(res => res.type === this.account.active)[0]
					const btc = currentAccountData.btc
					const eth = currentAccountData.eth
					const usdt = currentAccountData.usdt
					const arr = [btc, eth, usdt]
					return [arr[this.currency_out.active], arr[this.currency_in.active]]
				}else{
					return 0
				}
			},
			getAvail(){
				const res = (Number(this.num) * this.getRateData)
				return res === 0 ? 1 : res.toFixed(6)
			},
			...mapGetters({
				getRate: 'getRate'
			})
		},
		onShow() {
			this.setTitle(this.getLangs('exchange'))
			this.getExchangeRateHandler()
			this.setTimer()
		},
		onUnload() {
			this.clearTimer()
		}
	}
</script>

<style scoped>
	page{
		background-color: #111;
	}
	.exchange_class{
		padding: 20upx;
		height: 100%;
	}
	.account_type,
	.currency_type,
	.num_class{
		padding: 20upx 20upx 20upx 200upx;
		border-radius: 20upx;
		background: #20222c;
		margin-bottom: 20upx;
		box-sizing: border-box;
		padding-left: 200upx;
		position: relative;
	}
	.account_type{
		z-index: 10;
	}
	.account_type .name{
		width: 160upx;
		text-align: left;
		font-size: 32upx;
		color: #aaa;
		line-height: 80upx;
		position: absolute;
		left: 10px;
		top: 10px;
	}
	.currency_type{
		padding-left: 20upx;
		display: flex;
		justify-content: space-between;
		z-index: 9;
	}
	.num_class{
		padding-left: 20px;
	}
	.currency_type .icon{
		width: 46upx;
		height: 46upx;
		position: absolute;
		left: 50%;
		margin-left: -23upx;
		top: 50%;
		margin-top: -23upx;
	}
	.currency_type .currency{
		width: 40%;
	}
	.num_class .exhange_num{
		line-height: 80upx;
		font-size: 32upx;
		color: #90a2b0;
	}
	.num_class .exchange_input{
		line-height: 100upx;
		font-size: 50upx;
		padding: 0 160upx 0 160upx;
		border-bottom: 1px solid rgba(255,255,255,.1)
	}
	.num_class .exchange_input .currency{
		line-height: 100upx;
		font-size: 50upx;
		position: absolute;
		left: 40upx;
		color: #fff;
	}
	.num_class .exchange_input .input_bar{
		height: 100upx;
		font-size: 40upx;
		box-sizing: border-box;
		padding-left: 40upx;
		padding: 30upx 20px;
		color: #fff;
	}
	.num_class .all{
		position: absolute;
		right: 20px;
		color: #007AFF;
		font-size: 28upx;
		top: 100upx;
	}
	.num_class .leftmoney_bar{
		display: flex;
	}
	.num_class .leftmoney_bar .labels{
		width: 33.3333%;
		text-align: center;
	}
	.num_class .leftmoney_bar .name{
		display: block;
		line-height: 80upx;
		font-size: 24upx;
		color: #90a2b0;
	}
	.num_class .leftmoney_bar .value{
		display: block;
		font-size: 24upx;
		color: #90a2b0;
	}
</style>
