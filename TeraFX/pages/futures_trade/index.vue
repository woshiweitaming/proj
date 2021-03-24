<template>
	<view class="futures_trade_class" @tap="eventClick">
		<view class="futures_section">
			<view class="futures_currency">
			   {{currency}}
			   <text :class="['gain', getCurrenctData && getCurrenctData.gain > 0 ? 'red' : 'green']">{{getCurrenctData && getCurrenctData.gain > 0 ? getCurrenctData && getCurrenctData.gain : `${getCurrenctData && getCurrenctData.gain}`}}%</text>
			  <!-- <view class="position_record">
				   <text class="iconfont icon-barrage"></text>
				   <text>{{getLangs('allRecord')}}</text>
			   </view> -->
			</view>
			<view class="futures_main">
				<!--交易-->
				<view class="futures_data">
					<view class="futures_menu">
						<view @tap="changeTradeAction(index)" :class="['menu_label', active === index ? `on${active}`: '']" v-for="(items, index) in menuList" :key="index">{{getLangs(items)}}</view>
					</view>
					<view class="futures_form">
						<view class="form_class">
							<view class="select" @tap.stop="stopClick">
								<view class="select_label">
									<view class="select_name" @tap="openDrop">{{getLangs(typeList[form.paytype])}}</view>
									<text class="iconfont icon-unfold"></text>
								</view>
								<view class="select_drop" v-if="typeStatus">
									<view class="selelct_drop_main" @tap.stop="stopClick">
										<view @tap="selectDrop(index)" class="select_drop_label" v-for="(items, index) in typeList" :key="index">{{getLangs(items)}}</view>
									</view>
								</view>
							</view>
							<view class="form_label" v-if="form.paytype === 1">
								<view class="form_label_main">
									<view class="form_input_bar">
										<!-- <input v-if="form.paytype === 0" type="number" class="input_bar" v-model="getCurrenctData && getCurrenctData.close.toFixed(6)" :disabled="true" /> -->
										<input type="number" class="input_bar" :placeholder="getLangs('price')" v-model="form.appointprice" />
									</view>
								</view>
							</view>
							<view class="form_label">
								<view class="form_label_main">
									<view class="form_input_bar">
										<!-- <input v-if="per === ''" type="number" class="input_bar" :placeholder="getLangs('numEmptyTips')" v-model="form.num" /> -->
										<input type="number" class="input_bar" :placeholder="getLangs('numEmptyTips')" v-model="form.num" />
									</view>
								</view>
								<view class="currency">{{currency}}</view>
							</view>
						</view>
					</view>
					<view class="leftmoney">
						<view class="name">{{getLangs('available')}}</view>
						<view class="value">{{getCurrencLeftmoney.toFixed(4)}} {{this.active === 0 ? 'USDT' : currency}}</view>
					</view>
					<view class="futures_info">
						<view class="per">
							<view @tap="changePer(items)" :class="['per_items', items === per ? 'on' : '']" v-for="(items, index) in perList" :key="index">{{items}}%</view>
						</view>
						<!-- <text class="left_bar">{{getLangs('handlingFee')}}：{{getFee}}</text>
						<text class="right_bar">{{getPrice}}</text> -->
					</view>
					<view class="futures_info">
						<text class="left_bar">{{getLangs('tradeprice')}}(USDT）≈ {{getPrice.toFixed(2)}}</text>
					</view>
					<view class="labels_box">
						<text @tap="trade" :class="['buttons',  `on on${active}`]">{{active === 0 ? getLangs('buy') : getLangs('sell')}}</text>
					</view>
				</view>
				<!--最新价-->
				<view class="futures_price">
					<view class="price_class">
						<view class="tables">
						   <view class="table_hd">
							   <text class="hd left">{{getLangs('latestPrice')}}</text>
							   <text class="hd right">{{getLangs('quantity')}}</text>
						   </view>
						   <view class="table_bd">
							   <view class="tr" v-for="(items, index) in getCurrenctData && getCurrenctData.latestPrice && getCurrenctData && getCurrenctData.latestPrice['buy']" :key="index+20">
							   	<text @tap="selectPrice(items.price)" class="bd green left">{{items.price}}</text>
							   	<text class="bd right">{{items.amount}}</text>
							   </view>
							   <view class="sell"></view>
							   <view class="tr" v-for="(items, index) in getCurrenctData && getCurrenctData.latestPrice && getCurrenctData.latestPrice['sell']" :key="index+10">
							   	<text @tap="selectPrice(items.price)" class="bd red left">{{items.price}}</text>
							   	<text class="bd right">{{items.amount}}</text>
							   </view>
						   </view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="futures_section">
			<view class="futures_record">
				<view class="futures_title">
				    {{getLangs('commissionRecord')}}
					<view @tap="toPage" class="white_paper_icon">{{getLangs('introduce')}}</view>
				</view>
				<view class="record_content">
					<coinPositionRecord  />
				</view>
			</view>
		</view>
		<Loading v-if="loading" />
	</view> 
</template>

<script>
	/**
	 * 期货交易
	 */
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import coinPositionRecord from '@/layouts/order/coin_position_record.vue'
	import { spotTrading } from '@/api/user.js'
	import { getAccountBalance } from '@/api/public.js'
	import Loading from '@/layouts/common/loading.vue'
	export default {
		name: 'FuturesTrade',
		mixins: [langsMixins, commonMixins, websocketMixins, userMixins, currencyMixins],
		components: {
			coinPositionRecord,
			Loading
		},
		data(){
			return {
				active: 0,
				currency: '',
				id: '',
				menuList: ['buy', 'sell'],
				typeList: ['marketOrder', 'limitOrder'],
				typeStatus: false,
				accountLefmoney: {},
				//百分比
				perList: [25,50,75,100],
				per: '',
				form: {
					paytype: 0,
					appointprice: '',
					num: '',
				},
				loading: false
			}
		},
		methods: {
			/**
			 * 切换买卖状态
			 */
			changeTradeAction(index){
				this.active = index
			},
			/**
			 * 打开下拉
			 */
			openDrop(){
				this.typeStatus = !this.typeStatus
			},
			/**
			 * 选择交易类型
			 */
			selectDrop(index){
				this.form.paytype = index
				this.typeStatus = false
			},
			/**
			 * 选择价格
			 */
			selectPrice(price){
				this.form.appointprice = price
			},
			/**
			 * 切换百分比
			 */
			changePer(per){
				this.per = per
				this.form.num = this.getNum.toFixed(6)
			},
			/**
			 * 切换价格
			 */
			priceHandler(index){
				if(index === 0){
					this.form.appointprice = this.getCurrenctData.close
				}else{
					this.form.appointprice = ''
				}
			},
			/**
			 * 获取当前账户余额
			 */
			async getCurrentAccountHandler(){
				const pid = this.getCurrenctData.id
				const params = {
					pid: pid,
					type: 2
				}
				const res = await getAccountBalance(params)
				this.accountLefmoney = res.data
			},
			/**
			 * 跳转白皮书
			 */
			toPage(){
				const opt = this.getCurrentPageData('opt')
				this.navigateTo('/pages/white_paper/index', opt)
			},
			stopClick(e){
				e.stopPropagation()
			},
			eventClick(){
				this.typeStatus = false
			},
			async trade(){
				const id = this.id
				const num = this.form.num
				const type = this.active
				const paytype = this.form.paytype
				const appointprice = paytype == 0 ? this.getCurrenctData.close : this.form.appointprice
				if(appointprice === ''){
					return this.$tips.showToast(this.getLangs('purchaseQuantity'))
				}
				if(num.length === 0){
					return this.$tips.showToast(this.getLangs('numEmptyTips'))
				}
				const params = {
					id: id,
					num: num,
					type: type,
					paytype: paytype,
					appointprice: appointprice,
					ratio: this.per === 25 || this.per == 50 ||this.per == 75 || this.per == 100 ? this.per : 1
					
				}
				this.loading = true
				const res = await spotTrading(params)
				this.loading = false
				this.getCurrentAccountHandler()
				this.backTips(res)
			}
		},
		computed: {
			getCurrentPrice(){
				let price = 0
				//限价委托
				if(this.form.paytype === 0){
					price = Number(this.getCurrenctData && this.getCurrenctData.close)
				}
				//市价委托
				if(this.form.paytype === 1){
					price = Number(this.form.appointprice)
				}
				return price
			},
			getPrice(){
				let num = this.form.num
				let price = this.getCurrentPrice
				
				// if(this.per === ''){
				// 	num = this.form.num
				// }else{
				// 	num = this.getNum
				// }
				// console.log(price, num)
				if(num === '') return 0
				return Number(num) * Number(price)
			},
			getNum(){
				const usdt = Number(this.getCurrencLeftmoney)
				const num =  Number(this.form.num)
				const per = this.per / 100
				let price = this.getCurrentPrice
				//买入
				if(this.active === 0){
					return 1 / price * usdt * per
				}
				//卖出
				if(this.active === 1){
					return usdt * per
				}
			},
			getFee(){
				return this.getCurrenctData &&  this.getCurrenctData.attach && this.getCurrenctData.attach.fee
			},
			getCurrencLeftmoney(){
				if(JSON.stringify(this.accountLefmoney) === '{}'){
					return 0
				}
				return this.active === 0 ? Number(this.accountLefmoney['usdt']) : Number(this.accountLefmoney[this.currency.toLowerCase()])
				// if(this.getAccountBanlance && this.getAccountBanlance.length){
				// 	const leftmoney = this.getAccountBanlance.filter(res => res.type == 0)[0]
				// 	if(this.active === 0){
				// 		return Number(leftmoney['USDT'].usable)
				// 	}else{
				// 		return Number(leftmoney[this.currency].usable)
				// 	}
				// }
				// return 0
			}
		},
		onLoad(opt) {
			const currency = opt.currency
			this.currency = currency
			this.id = opt.id
			if(typeof currency === 'undefined' || currency === '' || typeof this.id === 'undefined' || this.id === ''){
				this.$tips.showToast(this.getLangs('currencyError'))
				const that = this
				setTimeout(() => {
					that.back()
				}, 1000)
			}
			this.active = opt.type == 1 ? 1 : 0
			this.setTitle(currency.toUpperCase())
		},
		onShow() {
			//uni.closeSocket()
			this.active = this.getCurrentPageData('opt').action === 'buy' ? 0 : 1
			//this.createWSData(this.id)
			//this.getProductDataHandler()
			//this.getCurrentAccountHandler()
		},
		onUnload() {
			//uni.closeSocket()
		},
		watch: {
			getCurrenctData(val){
				if(val){
					this.getCurrentAccountHandler()
				}
			},
			'form.num'(val){
				const usdt = Number(this.getCurrencLeftmoney)
				const num =  Number(val)
				let price = this.getCurrentPrice
				let per = 0
				//买入
				if(this.active === 0){
					per = num / (1 / price * usdt) 
				}
				//卖出
				if(this.active === 1){
					per =  num / usdt
				}	
				this.per = Math.round(per * 100)
			}
		}
	}
</script>

<style scoped>
	page{
		border-top: 1px solid rgba(255,255,255,.1);
		background: #151936
	}
	.futures_trade_class{
		overflow: hidden;
	}
	.futures_title{
		position: relative;
	}
	.white_paper_icon{
		position: absolute;
		top: 0;
		right: 0;
		color: #aaa;
	}
	.white_paper_icon .iconfont{
		font-size: 38upx
	}
	.futures_trade_class{
		height: 100%;
	}
	.futures_section{
		background: #151936;
		margin-bottom: 20upx;
		padding: 20upx
	}
	.futures_section:last-child{
		height: calc(100% - 810upx);
	}
	.futures_record{
		height: 100%;
	}
	.futures_currency{
		font-size: 40upx;
		font-weight: bold;
		position: relative;
		color: #fff;
	}
	.futures_currency .gain{
		font-size: 30upx;
		font-weight: bold;
		padding-left: 40upx;
	}
	.futures_currency .position_record{
		position: absolute;
		right: 0;
		color: #657497;
		top: 10upx;
		font-size: 28upx;
		font-weight: normal
	}
	.futures_main{
		display: flex;
		padding-top: 20upx;
	}
	.futures_main .futures_data{
		flex: 1;
		padding-right: 20upx;
	}
	.futures_main .futures_price{
		flex: 1;
	}
	.futures_main .futures_menu{
		display: flex;
		background: rgba(255,255,255,.05);
		border-radius: 20upx;
		color: #fff;
	}
	.futures_main .futures_menu .menu_label{
		flex: 1;
		text-align: center;
		line-height: 70upx;
		border-radius: 20upx;
	}
	.futures_main .futures_menu .menu_label.on1{
		font-size: 30upx
	}
	.form_label{
		padding-left: 20upx;
		padding-right: 110upx;
		margin-bottom: 10upx;
		border-radius: 10upx;
		position: relative;
	}
	.form_label .currency{
		position: absolute;
		right: 20upx;
		top: 20upx;
		color: #999;
	}
	.select{
		background: #fff;
		border: 1px solid #eee;
		z-index: 100;
		margin-top: 20upx;
		border-radius: 10upx;
	}
	.select_drop{
		background: #f9f9f9;
	}
	.select .select_label .iconfont{
		right: -20upx;
	}
	.futures_info{
		display: flex;
		padding-top: 10upx;
	}
	.futures_info .left_bar,
	.futures_info .right_bar{
		flex: 1;
		font-size: 24upx;
		color: #888;
	}
	.futures_info .right_bar{
		text-align: right;
	}
	.left_bar,
	.right_bar{
		width: 50%;
		line-height: 60upx;
		font-size: 26upx;
		color: #797d91;
		display: inline-block;
	}
	.left_bar{
		text-align:left;
	}
	.right_bar{
		text-align:right;
	}
	.table_hd{
		display: flex;
		margin-bottom: 20upx;
		border-bottom: 1px solid rgba(255,255,255,.1);
		line-height: 80upx;
	}
	.table_hd .left,
	.table_hd .right{
		flex: 1;
		color: #aaa;
		font-size: 24upx
	}
	.table_hd .right{
		text-align: right
	}
	.table_bd .tr{
		display: flex;
		line-height: 50upx;
	}
	.table_bd  .left,
	.table_bd  .right{
		flex: 1;
		font-size: 24upx
	}
	.table_bd  .left{
		font-size: 28upx
	}
	.table_bd .right{
		text-align: right;
		color: #555;
	}
	.sell{
		padding-top: 60upx;
	}
	.buttons{
		margin-top: 20px;
		display: block;
		height: 70upx;
		text-align: center;
		color: #fff;
		font-size: 30upx;
		line-height: 70upx;
		border-radius: 10upx;
	}
	.futures_title{
		font-size: 32upx;
		color: #aaa;
		font-weight: bold;
		margin-bottom: 20upx;
	}
	.futures_info .per{
		display: flex;
		width: 100%;
	}
	.futures_info .per .per_items{
		flex: 1;
		font-size: 26upx;
		text-align: center;
		line-height: 40upx;
		margin: 0 4upx;
		border-radius: 10upx;
		color: #aaa;
	}
	.futures_info .per .per_items.on{
		color: #fff;
		border: 1px solid #007AFF;
		background: #007AFF;
	}
	.leftmoney{
		display: flex;
		width: 100%;
		margin-top: 20upx;
	}
	.leftmoney .name,
	.leftmoney .value{
		line-height: 40upx;
		font-size: 24upx
	}
	.leftmoney .name{
		width: 80upx;
		text-align: left;
		color: #666;
	}
	.leftmoney .value{
		text-align: right;
		width: calc(100% - 90upx);
		color: #fff;
	}
	.record_content{
		height: calc(100% - 60upx);
		overflow: auto;
	}
	.select_name{
		color: #081723;
	}
</style>
