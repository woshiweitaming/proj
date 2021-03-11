<template>
	<view class="k_line_class">
		<view class="scroll">
			<CurrencyData :opt="dataList" @callback1="callback1" />
			<view class="k_main">
				<Futures :opt="dataList"/>
			</view>
		</view>
		<u-popup v-model="show" mode="left">
			<LeftCurrency :key="getKey"  @callback="callback" />
		</u-popup>
	</view>
</template>

<script>
	/**
	 * 币币和期货
	 */
	import { mapMutations, mapGetters } from 'vuex' 
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import CurrencyData from '@/layouts/futrues/currency_data.vue'
	import Futures from '@/layouts/futrues/futures.vue'
	import Coin from '@/layouts/k/coin.vue'
	import Contract from '@/layouts/k/contract.vue'
	import LeftCurrency from '@/layouts/futrues/left_currency.vue'
	export default {
		name: 'K',
		mixins: [langsMixins, commonMixins, currencyMixins, websocketMixins],
		data(){
			return {
				show: false,
				dataList: {},
				key: '',
				id: ''
			}
		},
		computed: {
			getKey(){
				return this.key
			},
			...mapGetters({
				getWSData: 'getWSData'
			})
		},
		methods: {
			callback(data){
				this.id = data.id
				this.show = !this.show
				this.key = new Date().getTime()
			},
			callback1(data){
				this.show = !this.show
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
		watch: {
			getWSData(val){
				if(val.length > 0){
					if(this.id == ''){
						this.dataList = val[0]
					}else{
						this.dataList = val.filter(res => res.id == this.id)[0]
					}
				}
			}
		}
	}
</script> 
<style>
	page{
		background: #1c1d31;
	}
</style>
<style scoped>
	.k_line_class{
		height: calc(100% - 120upx);
		overflow: hidden;
		box-sizing: border-box
	}
	.k_tab{
		width: 300upx;
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
		height: 100%;
		overflow: hidden;
	}
	.k_tab .k_tab_label{
		width: 50%;
		text-align: center;
		line-height: 60upx;
		color: #fff;
	}
	.k_tab .k_tab_label.on{
		background: #4944B3;
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
