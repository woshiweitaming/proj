<template>
	<view :class="['k_line_class', `k${active}`]">
		<view class="k_tab">
			<view @tap="changeMenu(index)" :class="['k_tab_label', active === index ? 'on' : '']" v-for="(items, index) in menuList" :key="index">{{getLangs(items)}}</view>
		</view>
		<view class="scroll">
			<CurrencyData @callBack="callBack" />
			<view :class="['k_main', `k${active}`]">
				<Futures :key="1" v-if="active === 0" />
				<Contract :key="2" v-if="active === 1" />
				<Coin :key="3" v-if="active === 2" />
			</view>
		</view>
		<u-popup v-model="show" mode="left">
			<LeftCurrency @callBack="callBack" :key="getKey" :active="active" />
		</u-popup>
	</view>
</template>

<script>
	/**
	 * 币币和期货
	 */
	import { mapMutations,mapGetters } from 'vuex' 
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import Contract from '@/layouts/k1/contract.vue'
	import Futures from '@/layouts/k1/futures.vue'
	import CurrencyData from '@/layouts/k1/currency_data.vue'
	import LeftCurrency from '@/layouts/k1/left_currency.vue'
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
			},
			...mapGetters({
				getWSData: 'getWSData',
				getTimerStatus: 'getTimerStatus'
			})
		},
		methods: {
			/**
			 * 切换
			 */
			changeMenu(index){
				if(index === 2){
					const params = {
						currency: this.getCurrentCurrencyData.name,
						id: this.getCurrentCurrencyData.id,
						action: 'buy'
					}
					return this.navigateTo('/pages/futures_trade/index', params)
				}
				this.active = index
				this.$storage.setLocalData('curKActive', index)
				this.setCurrentTradeType(index)
			},
			callBack(data){
				this.show = !this.show
				this.key = new Date().getTime()
				// if(data == 'yes'){
				// 	// #ifdef H5
				// 	return location.reload()
				// 	// #endif
				// 	uni.redirectTo({
				// 		url: '/pages/k/index'
				// 	})
				// }
			},
			...mapMutations({
				setCurrentTradeType: 'SET_CURRENT_TRADE_TYPE',
				setTimerStatus: 'SET_TIMER_STATUS'
			})
		},
		components: {
			Contract,
			Futures,
			CurrencyData,
			LeftCurrency
		},
		onTabItemTap() {
		},
		onLoad() {
			uni.showLoading()
		},
		onShow() {
			uni.hideLoading()
			const active = this.$storage.getLocalData('curKActive')
			this.active = active == null || active == '' ? 0 : Number(active)
			this.setTimerStatus(true)
		},
		onHide() {
			this.setTimerStatus(false)
		}
	}
</script> 
<style>
	page{
		background: #1c1d31;
	}
</style>
<style scoped>
	.k_line_data{
	    background: #1c1d31
	}
	.k_line_class{
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;
		/* padding-top: var(--status-bar-height); */
	}
	.k1{
		padding-bottom: 0 !important;
		background: #1c1d31;
	}
	.k1 .k_tab {
		border: 1px solid rgba(255,255,255,.1);
		background: #1c1d31;
	}
	.k1 .k_tab .k_tab_label{
		color: #fff ;
	}
	.k_tab{
		max-width: 550upx;
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
		height: calc(100% - 80upx);
	}
	.k_tab .k_tab_label{
		width: 50%;
		text-align: center;
		line-height: 60upx;
		color: #fff;
	}
	.k_tab .k_tab_label.on{
		background: #007AFF;
		color: #fff;
		border-radius: 20upx;
	}
	/* .k_main{
		height: calc(100% - 340upx);
	    overflow: auto;
	} */
	.k_main{
		height: calc(100% - 340upx);
	    overflow: auto;
	}
</style> 