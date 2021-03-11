<template>
	<view class="trade_main_class">
		<view class="trade_menu">
			<view @tap="changeMenu(index)" :class="['menu_label', index === active ? 'on' : '']" v-for="(items, index) in menuList" :key="index">{{getLangs(items)}}</view>
		</view>
		<view class="trade_action">
			<view @tap="changeAction(index)" :class="['action_label', action === index ? items.cls + ' on' : '']" v-for="(items, index) in actionList" :key="index">{{getLangs(items.name)}}</view>
		</view>
		<view class="trade_form">
			<view class="trade_form_label">
				<view class="trade_inner">
					<text class="sub">| {{getLangs('lever')}}</text>
					<input type="number" :disabled="true"  @tap="dropshow = true"  class="input_bar" :placeholder="getLangs('leverEmptyTips')" v-model="form.unit"/>
					<Dropdown v-show="dropshow" :list="dropList" @select="selectDrop" @close="dropshow = false" />
				</view>
			</view>
			<view class="trade_form_label">
				<view class="trade_inner">
					<text class="sub">| {{getLangs('entrust')}}</text>
					<input type="text" :disabled="true" v-if="active === 0" class="input_bar" :placeholder="getLangs('entrustEmptyTips')" v-model="getCurrenctData && getCurrenctData.close"/>
					<input type="number" v-if="active === 1" class="input_bar" :placeholder="getLangs('entrustEmptyTips')" v-model="form.appointprice"/>
				</view>
			</view>
			<!-- <view class="trade_form_label">
				<view class="trade_inner">
					<text class="sub">| {{getLangs('price')}}</text>
					<input :disabled="true" type="text" class="input_bar" :placeholder="getLangs('price')" v-model="getWSData.close" />
				</view>
			</view> -->
			<view class="trade_form_label">
				<view class="trade_inner">
				    <text class="sub">| {{getLangs('lot')}}</text>
				    <input type="text" class="input_bar" :placeholder="getLangs('lot')" v-model="form.num" />
				</view>
			</view>
			<view class="trade_form_label">
				<view class="trade_inner">
				    <text class="sub">| {{getLangs('profit')}}</text>
				    <input type="text" class="input_bar" :placeholder="getProfit" v-model="form.endprofit" />
				</view>
			</view>
			<view class="trade_form_label">
				<view class="trade_inner">
			    	<text class="sub">| {{getLangs('loss')}}</text>
				    <input type="text" class="input_bar" :placeholder="getLoss" v-model="form.endloss" />
				</view>
			</view>
		</view>
		<view class="trade_fee">
			<!-- <text class="trade_fee_label">{{getLangs('fee')}}: {{getCurrenctData && getCurrenctData.attach && getCurrenctData.attach.fee}}</text> -->
			<text class="trade_fee_label price">{{getLangs('deposit')}}: {{getDepoit}}</text>
			<!-- <text class="trade_fee_label price">{{getPrice}}</text> -->
		</view>
		<view @tap="trade" :class="['trade_btn', getClass]">{{action == 0 ? getLangs('tradep3') : getLangs('tradep4')}}</view>
	</view>
</template>

<script>
	/**
	 * 交易单
	 */
	import { mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import { transaction } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	import EntrustOrder from '@/layouts/trade/entrust_order.vue'
	import Dropdown from '@/components/dropdown/index.vue'
	export default {
		name: 'TradeMain',
		mixins: [langsMixins, websocketMixins, commonMixins, currencyMixins],
		data(){
			return {
				//菜单
				menuList: ['marketOrder', 'limitOrder'],
				active: 0,
				//交易
				actionList: [
					{
						name: 'tradep3',
						action: 'buy',
						cls: 'green_box'
					},
					{
						name: 'tradep4',
						action: 'sell',
						cls: 'red_box'
					}
				],
				action: 0,
				//交易参数
				form: {
					appointprice: '',
					unit: 10,
					num: '',
					endprofit: '',
					endloss: '',
				},
				//下拉
				dropshow: false,
				dropList: [{name: '10X',value: 10},{name: '50X',value: 50},{name: '80X',value: 80},{name: '100X', value: 100},{name: '150X',value: 150},{name: '200X',value: 200}]
			}
		},
		components: {
			EntrustOrder,
			Dropdown
		},
		methods: {
			/**
			 * 交易
			 */
			async trade(){
				if(this.form.unit === ''){
					return this.$tips.showModel(this.getLangs('sysTips'),this.getLangs('leverEmptyTips'), '', this.getLangs('confirm'), (btn) => {}, false)
				}
				if(this.active === 0){
					this.form.appointprice = this.getCurrenctData.close
				}else{			
					if(this.form.appointprice === ''){
						return this.$tips.showModel(this.getLangs('sysTips'),this.getLangs('entrustEmptyTips'), '', this.getLangs('confirm'), (btn) => {}, false)
					}
				}
				if(this.form.num === ''){
					return this.$tips.showModel(this.getLangs('sysTips'),this.getLangs('numEmptyTips'), '', this.getLangs('confirm'), (btn) => {}, false)
				}
				const extraParams = {
					id: this.getCurrentPageData('opt').id,
					type: this.action,
					paytype: this.active
				}
				const params = Object.assign(this.form, extraParams)
				const res = await transaction(params)
				if(validate.checkCode(res)){
					
				}
				this.backTips(res)
			},
			/**
			 * 切换交易模式
			 */
			changeMenu(index){
				this.active = index
				this.form.appointprice = ''
			},
			/**
			 * 切换交易方向
			 */
			changeAction(index){
				this.action = index
			},
			/**
			 * 下拉选择
			 */
			selectDrop(e){
				this.form.unit = e
				this.dropshow = false
			}
		},
		computed: {
			//计算价格
			getPrice(){
				if(typeof this.getCurrenctData == 'undefined') return 0
				return (this.form.num * this.getUnit * this.getCurrenctData.close * this.getRatio).toFixed(2)
			},
			//计算价格
			getDepoit(){
				// return (this.num * this.getUnit * this.getWSData.close * this.getRatio).toFixed(2)
				return (this.form.num * 250)
			},
			//止盈
			getProfit(){
				if(typeof this.getCurrenctData == 'undefined') return ''
				//买入
				if(this.action === 0){
					return `${this.getLangs('min')} ${this.getCurrenctData.attach && this.getCurrenctData.attach.sprice0}`
				}else{
					return `${this.getLangs('max')} ${this.getCurrenctData.attach && this.getCurrenctData.attach.sprice1}`
				}
			},
			//止损
			getLoss(){
				if(typeof this.getCurrenctData == 'undefined') return ''
				//买入
				if(this.action === 0){
					return `${this.getLangs('max')} ${this.getCurrenctData.attach && this.getCurrenctData.attach.eprice1}`
				}else{
					return `${this.getLangs('min')} ${this.getCurrenctData.attach && this.getCurrenctData.attach.eprice0}`
				}
			},
			//手续费
			getFee(){
				if(this.getCurrenctData.attach){
				   return this.getCurrenctData.attach.fee
				}
				return 0
			},
			//单位
			getUnit(){
				if(this.getCurrenctData.attach){
					return this.getCurrenctData.attach.unit
				}
				return 0
			},
			//跌幅
			getRatio(){
				if(this.getCurrenctData.attach){
					return !this.getCurrenctData.attach.ratio ? 0 : this.getCurrenctData.attach.ratio
				}
				return 0
			},
			getClass(){
				return this.action == 0 ? 'green_box' : 'red_box'
			},
			...mapGetters({
				getTradeAction: 'getTradeAction'
			})
		}
	}
</script>

<style scoped>
	.trade_main_class{
		margin-top: 20upx;
		padding-top: 20upx;
		padding-left: 20upx;
		padding-right: 20upx;
		border-top: 1px solid rgba(255,255,255,.05);
	}
	.trade_form{
		width: 100%;
		font-size: 0;
	}
	.trade_form .trade_form_label{
		width: 50%;
		position: relative;
		padding: 0 20upx;
		display: inline-block;
		box-sizing: border-box;
		margin-bottom: 20upx;
		vertical-align: top;
	}
	.trade_form .trade_inner{
		background: #1e2533;
		padding-right: 80upx;
		position: relative;
	}
	.trade_form .trade_form_label .input_bar{
		color: #fff;
		width: 100%;
		font-size: 26upx;
		border-radius: 10upx;
		padding: 20upx;
		overflow: hidden;
	}
	.trade_form .trade_form_label .sub{
		font-size: 26upx;
		line-height: 60upx;
		color: rgba(255,255,255,.5);
		position: absolute;
		right: 10upx;
		top: 8upx;
	}
	.trade_fee{
		display: flex;
		padding: 20upx;
	}
	.trade_fee_label{
		flex: 1;
		width: 50%;
		font-size: 28upx;
		color: #57627c;
	}
	.trade_fee_label.price{
		text-align: right;
	}
	.trade_btn{
		text-align: center;
		line-height: 80upx;
		border-radius: 20upx;
		margin-top: 20upx;
		font-size: 30upx;
		margin-bottom: 20upx;
		color: #fff;
		width: 100%;
		position: fixed;
		bottom: 50upx;
		width: 80%;
		left: 50%;
		margin-left: -40%;
	}
	.trade_menu{
		display: flex;
		text-align: center;
		border-bottom: 1px solid rgba(255,255,255,.05);
		margin-bottom: 20upx;
	}
	.trade_menu .menu_label{
		width: 50%;
		font-size: 28upx;
		color: #fff;
		line-height: 80upx;
		color: rgba(255,255,255,.7);
	}
	.trade_menu .menu_label.on{
		color: #fff;
		border-bottom: 2px solid #5d56ec;
	}
	.trade_action{
		width: 80%;
		display: flex;
		margin: 20upx auto;
		text-align: center;
	}
	.trade_action .action_label{
		text-align: center;
		line-height: 60upx;
		width: 50%;
		color: #aaa;
		font-size: 28upx;
		margin: 0 10upx;
		border-radius: 20upx;
		color: #fff;
	}
	.trade_action .action_label.on{
		color: #fff;
	}
	.trade_action .action_label.on.on0{
		background: #27c173
	}
	.trade_action .action_label.on.on1{
		background: #c12d3b;
	}
</style>
