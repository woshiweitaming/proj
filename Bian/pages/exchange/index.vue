<template>
	<view class="exchange_class" @tap="eventClick">
		<!--账户类型-->
		<view class="account_type">
			<view class="name">{{getLangs('accountType')}}</view>
			<view class="select">
				<view class="select_label" @tap="openDrop('account_drop')">
					<view class="select_name">{{getLangs('contract')}}</view>
				</view>
			</view>
		</view>
		<!--币种类型-->
		<view class="currency_type">
			<view class="currency">
				<view class="select" @tap.stop="stopClick">
					<view class="select_label" @tap="openDrop('currency_out')">
						<view class="select_name">{{getOutName}}</view>
						<text class="iconfont icon-unfold"></text>
					</view>
					<view class="select_drop" v-show="currency_out.show">
						<view class="selelct_drop_main" @tap.stop="stopClick">
							<view @tap="changeOutDrop('currency_out', index)"class="select_drop_label" v-for="(items, index) in currency_out.outList"  :key="index">{{items.name}}</view>
						</view>
					</view>
				</view>
			</view>
			<image src="../../static/images/exchange.png" class="icon"></image>
			<view class="currency">
				<view class="select" @tap.stop="stopClick">
					<view class="select_label" @tap="openDrop('currency_in')">
						<view class="select_name">{{getInName}}</view>
						<text class="iconfont icon-unfold"></text>
					</view>
					<view class="select_drop" v-show="currency_in.show">
						<view class="selelct_drop_main" @tap.stop="stopClick">
							<view @tap="changeInDrop('currency_in', index)"class="select_drop_label" v-for="(items, index) in currency_in.inList"  :key="index">{{items.name}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--交易数量-->
		<view class="num_class">
			<text class="exhange_num">{{getLangs('exchangeNum')}}</text>
			<view class="exchange_input">
				<view class="currency">{{getOutName}}</view>
				<view class="input_bar">
					<input type="number" class="input_main" v-model="num" :placeholder="getLangs('numEmptyTips')"/>
				</view>
				<view @tap="allChange" class="all">{{getLangs('all')}}</view>
			</view>
			<!--各账户余额-->
			<view class="leftmoney_bar">
				<view class="labels">
					<view class="name">{{getLangs('rate')}}</view>
					<view class="value">{{getRate}}</view>
				</view>
				<view class="labels">
					<view class="name">{{getLangs('avaliableUsdt')}}</view>
					<view class="value">{{getBalance}}</view>
				</view>
				<view class="labels">
					<view class="name">{{getLangs('avaliableBtc')}}</view>
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
	import { getExchangeRate, confirmExchange, getAllBalance } from '@/api/user.js'
	import { getProduct } from '@/api/public.js'
	let timer = null
	export default {
		name: 'Exchange',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				account: {
					accountList: ['contract'],
					active: 0,
					show: false
				},
				currency_out: {
					outList: [],
					active: 0,
					show: false
				},
				currency_in: {
					inList: [],
					active: 0,
					show: false
				},
				balanceList: [],
				num: ''
			 }
		},
		methods: {
			/**
			 * 打开下拉
			 */
			openDrop(ref){
				this.eventClick()
				if(ref == 'currency_out'){
					this.currency_out.show = !this.currency_out.show	
				}
				if(ref == 'currency_in'){
					this.currency_in.show = !this.currency_in.show	
				}
			},
			/**
			 * 切换转出账户
			 */
			changeOutDrop(ref, index){
				this.num = ''
				this.currency_out.active = index
				const name = this.currency_out.outList[this.currency_out.active].name
				if(name === 'USDT'){
					this.currency_in.active = 0
				}else{
					this.currency_in.active = this.currency_in.inList.length - 1
				}
				this.eventClick()
			},
			/**
			 * 切换转出账户
			 */
			changeInDrop(ref, index){
				this.num = ''
				this.currency_in.active = index
				const name = this.currency_in.inList[this.currency_in.active].name
				if(name === 'USDT'){
					this.currency_out.active = 0
				}else{
					this.currency_out.active = this.currency_out.outList.length - 1
				}
				this.eventClick()
			},
			/**
			 * 全部兑换
			 */
			allChange(){
				this.num = this.getBalance
			},
			/**
			 * 确认兑换
			 */
			async confirmExchangeHandler(){
				if(this.num === ''){
					return this.$tips.showToast(this.getLangs('numEmptyTips'))
				}
				let bid = 0
				if(this.currency_out.outList[this.currency_out.active].name == 'USDT'){
					bid = this.currency_in.inList[this.currency_in.active].id
				}
				if(this.currency_in.inList[this.currency_in.active].name == 'USDT'){
					bid = this.currency_out.outList[this.currency_out.active].id
				}
				const params = {
					type: 1,
					inOrOut: this.currency_out.outList[this.currency_out.active].name === 'USDT' ? 0 : 1,
					num: Number(this.num),
					btype: 0,
					bid: bid
				}
				const res = await confirmExchange(params)
				this.num = ''
				this.backTips(res)
			},
			stopClick(e){
				e.stopPropagation()
			},
			eventClick(){
				this.account.show = false
				this.currency_in.show = false
				this.currency_out.show = false
			},
			async getProductHandler(){
				const res = await getProduct()
				this.currency_in.inList = res.data
				this.currency_out.outList = res.data
				this.currency_in.inList.push({name: 'USDT', id: 999})
				this.currency_in.active = (this.currency_in.inList.length - 1)
			},
			async getAllBalanceHandler(){
				const res = await getAllBalance()
				this.balanceList = res.data
			},
			setTimer(){
				const that = this
				timer = setInterval(() => {
					that.getAllBalanceHandler()
				}, 1000)
			},
			clearTimer(){
				clearInterval(timer)
				timer = null
			}
		},
		computed: {
			getOutName(){
				if(this.currency_out.outList.length > 0){
					return this.currency_out.outList[this.currency_out.active].name
				}
				return ''
			},
			getInName(){
				if(this.currency_in.inList.length > 0){
					return this.currency_in.inList[this.currency_in.active].name
				}
				return ''
			},
			getRate(){
				if(!this.getWSData.length || this.currency_out.outList.length == 0 || this.currency_in.inList.length == 0) return 0
				const name = this.currency_out.outList[this.currency_out.active].name
				const name2 = this.currency_in.inList[this.currency_in.active].name
				if(name == 'USDT'){
					const close = this.getWSData.filter(res => res.name == name2)[0].close
					return (1/close).toFixed(7)
				}
				return this.getWSData.filter(res => res.name == name)[0].close
			},
			getAvail(){
				const res = (Number(this.num) * this.getRate)
				return res === 0 ? 1 : res.toFixed(6)
			},
			getBalance(){
				if(this.balanceList.length > 0 && this.currency_out.outList.length > 0){
					const name = this.currency_out.outList[this.currency_out.active].name
					return Number(this.balanceList[1][name].usable).toFixed(6)
				}
				return 0
			},
			...mapGetters({
				getWSData: 'getWSData',
			})
		},
		onShow() {
			this.setTitle(this.getLangs('exchange'))
			this.getProductHandler()
			this.getAllBalanceHandler()
			this.setTimer()
		},
	}
</script>

<style scoped>
	page{
		background-color: #f9f9f9;
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
		background: #fff;
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
		color: #333;
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
		color: #333;
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
		color: #333;
	}
	.num_class .exchange_input .input_bar{
		height: 100upx;
		font-size: 40upx;
		box-sizing: border-box;
		padding-left: 40upx;
		padding: 30upx 20px;
		color: #333;
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
	.select{
		background: #f9f9f9;
	}
</style>
