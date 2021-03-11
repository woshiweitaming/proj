<template>
	<view :class="['main_class', createOSClass]">
		<view class="table_class">
			<view class="table_menu">
				<view @click="clickChangeMenu(index)" :class="['menu_label', menuIndex === index ? 'on' : '']" v-for="(items, index) in menuList" :key="index">
				   {{getLangs(items)}}
				   <view class="line"></view>
				</view>
			</view>
			<view :class="['table_main', createOSClass]">
				<!-- <view class="content" v-if="menuIndex === 0">
					<view class="record_menu futures_menu">
						<view @tap="changeFuturesType(index)" :class="['label', index === futures.active ? 'on' : '']" v-for="(items, index) in futures.menuList" :key="index">{{getLangs(items)}}</view>
					</view>
					<FuturesPositionRecord :keys="getKey" v-if="futures.active === 0" />
					<FuturesHistoryRecord v-if="futures.active === 1"  />
				</view>
				<view class="content" v-if="menuIndex === 1">
					<view class="record_menu contract_menu">
						<view @tap="changeContractType(index)" :class="['label', index === contract.active ? 'on' : '']" v-for="(items, index) in contract.menuList" :key="index">{{getLangs(items)}}</view>
					</view>
					<ContractCommissionRecord v-if="contract.active === 0"  />
					<ContractPositionRecord v-if="contract.active === 1"  />
					<ContractHistoryRecord v-if="contract.active === 2"  />
				</view> -->
				<view class="content">
					<CoinPositionRecord :keys="getKey" v-if="menuIndex === 0" />
					<CoinHistoryRecord v-if="menuIndex === 1"  />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import system from '@/utils/system.js'
	import FuturesPositionRecord from '@/layouts/order/futures_position_record.vue'
	import FuturesHistoryRecord from '@/layouts/order/futures_history_record.vue'
	import ContractCommissionRecord from '@/layouts/order/contract_commission_record.vue'
	import ContractHistoryRecord from '@/layouts/order/contract_history_record.vue'
	import ContractPositionRecord from '@/layouts/order/contract_position_record'
	import CoinPositionRecord from '@/layouts/order/coin_position_record.vue'
	import CoinHistoryRecord from '@/layouts/order/coin_history_record.vue'
	let timer = null
	export default {
		name: 'Fund',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				key: ''
			}
		},
		components: {
			// FuturesPositionRecord,
			// FuturesHistoryRecord,
			// ContractCommissionRecord,
			// ContractHistoryRecord,
			// ContractPositionRecord,
			CoinPositionRecord,
			CoinHistoryRecord,
		},
		data(){
			return {
				menuList: ['position', 'history'],
				menuIndex: 0,
				//期货
				futures: {
					menuList: ['position', 'history'],
					active: 0
				},
				//合约
				contract: {
					menuList: ['commission', 'position', 'history'],
					active: 0
				},
				//币币
				coin: {
					menuList: ['entrust', 'history'],
					active: 0
				},
				
			}
		},
		computed: {
			getKey(){
				return this.key
			}
		},
		methods: {
			//点击切换
			clickChangeMenu(index){
				this.menuIndex = index
				if(index == 0){
					this.contract.active = this.coin.active = 0
				}
				if(index == 1){
					this.futures.active = this.coin.active = 0
				}
				if(index == 2){
					this.futures.active = this.contract.active = 0
				}
			},
			//滑动切换
			changeMenuBar(e){
				this.menuIndex = e.detail.current
			},
			//切换期货类型
			changeFuturesType(index){
				this.futures.active = index
			},
			//切换合约类型
			changeContractType(index){
				this.contract.active = index
			},
			//切换合约类型
		    changeCoinType(index){
		    	this.coin.active = index
		    }
		},
		onLoad() {
			this.futures.active = 0
		},
		onShow(){
			this.setTitle(this.getLangs('order'))
			this.futures.active = 0
		},
	}
</script>

<style scoped>
	page{
		background: #f9f9f9;
	}
	.main_class{
		padding: 0;
		height: 100%;
	}
	.table_menu{
		width: 100%;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		background: #fff;
		margin-bottom: 40upx;
	}
	.record_menu{
		margin: auto;
		display: flex;
		margin-bottom: 20upx;
		padding: 0 20upx;
	}
	.record_menu .label{
		width: 50%;
		text-align: center;
		font-size: 28upx;
		line-height:  60upx;
		color: #333;
	}
	.record_menu .label.on{
		background: #2970e6;
		border-radius: 10upx;
		color: #fff;
	}
	.futures_menu,
	.contract_menu{
		width: 70%;
	}
	.table_main{
		height: calc(100% - 126upx);
	}
	.content{
		height: 100%;
	}
	.record_class{
		height: calc(100% - 80upx) !important;
		overflow: auto !important
	}
</style>
