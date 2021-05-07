<template>
	<view class="k_line_class">
		<view class="k_tab">
			<view @tap="changeMenu(index)" :class="['k_tab_label', active === index ? 'on' : '']" v-for="(items, index) in menuList" :key="index">{{getLangs(items)}}</view>
		</view>
		<view class="scroll">
			<CurrencyData @callBack="callBack" />
			<view class="k_main">
				<Futures :key="1" v-if="active === 0" />
				<Contract :key="2" v-if="active === 1" />
				<Coin :key="3" v-if="active === 2" />
			</view>
		</view>
		<u-popup v-model="show" mode="left">
			<LeftCurrency :key="getKey" :active="active" />
		</u-popup>
	</view>
</template>

<script>
	/**
	 * 币币和期货
	 */
	import { mapMutations } from 'vuex' 
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import CurrencyData from '@/layouts/k/currency_data.vue'
	import Futures from '@/layouts/k/futures.vue'
	import Coin from '@/layouts/k/coin.vue'
	import Contract from '@/layouts/k/contract.vue'
	import LeftCurrency from '@/layouts/k/left_currency.vue'
	export default {
		name: 'K',
		mixins: [langsMixins, commonMixins, currencyMixins, websocketMixins],
		data(){
			return {
				menuList: ['futuresText', 'contractText', 'coinText'],
				active: 0,
				show: false,
				opt: {},
				key: ''
			}
		},
		computed: {
			getKey(){
				return this.key
			}
		},
		methods: {
			/**
			 * 切换
			 */
			changeMenu(index){
				if(index === 2){
					const params = {
						currency: this.opt.currency,
						id: this.opt.id,
						action: 'buy'
					}
					return this.navigateTo('/pages/futures_trade/index',params)
				}
				this.active = index
				this.setCurrentTradeType(index)
				//  #ifdef APP-PLUS
				if(index === 1){
					const wv = plus.webview.getWebviewById('custom-webview')
					if(wv !== null){
						wv.close()
					}
				}
				// #endif
			},
			callBack(data){
				this.show = !this.show
				this.key = new Date().getTime()
			},
			...mapMutations({
				setCurrentTradeType: 'SET_CURRENT_TRADE_TYPE'
			})
		},
		components: {
			CurrencyData,
			Futures,
			Contract,
			LeftCurrency,
			Coin,
		},
		onLoad(opt) {
		    const currency = opt.currency
			this.id = opt.id
			if(typeof currency === 'undefined' || currency === '' || typeof this.id === 'undefined' || this.id === ''){
				this.$tips.showToast(this.getLangs('currencyError'))
				const that = this
				setTimeout(() => {
					that.back()
				}, 1000)
			}
			this.opt = opt
			this.active = opt.type == 1 ? 1 : 0
			this.setTitle(currency.toUpperCase())
			//this.createKlineChart(this.id)
		},
		onShow() {
			//uni.closeSocket()
			//this.createWSData(this.id)
		},
		onUnload() {
			//uni.closeSocket()
		},
		onNavigationBarButtonTap() {
			this.navigateTo('/pages/white_paper/index', this.opt)
		},
		// watch: {
		// 	show(val){
		// 		if(!val){
		// 			uni.closeSocket()
		// 			this.createWSData(this.id)
		// 		}
		// 	}
		// }
	}
</script> 
<style>
	page{
		background: #1c1d31;
	}
</style>
<style scoped>
	.k_line_class{
		height: 100%;
		padding-bottom: 150upx;  
		overflow: hidden;
		box-sizing: border-box
	}
	.k_tab{
		width: 450upx;
		display: flex;
		margin: 20upx auto 0 auto;
		border-radius: 20upx;
		border: 1px solid rgba(255,255,255,.1);
		padding: 5upx;
		font-size: 28upx;
		text-align: center;
		background: rgba(255,255,255,.05)
	}
	.scroll{
		height: calc(100% - 120upx);
		overflow: hidden;
	}
	.k_tab .k_tab_label{
		width: 33.3333%;
		text-align: center;
		line-height: 60upx;
		color: #fff;
	}
	.k_tab .k_tab_label.on{
		background: #343a5e;
		color: #fff;
		border-radius: 20upx;
	}
	/* .k_main{
		height: calc(100% - 340upx);
	    overflow: auto;
	} */
	.k_main{
		height: calc(100% - 380upx);
	    overflow: auto;
	}
</style> 
