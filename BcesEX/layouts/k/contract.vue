<template>
	<view class="contract_class">
		<view class="trade_menu">
		     <view @tap="changeMenu(index)" :class="['menu_label', index === active ? 'on' : '']" v-for="(items, index) in menuList" :key="index">
			     <view class="inner">{{getLangs(items)}}</view>
			</view>
		</view>
		<view class="scroll_bar">
			<view class="contract" v-if="active == 0">
				<view class="contrace_labels">
					<TradeMain />
				</view>
				<view class="contrace_labels">
				    <PriceList />
				</view>
			</view>
			<view class="record_bar" v-if="active == 0">
				<view class="record_menu contract_menu">
					<view @tap="changeContractType(index)" :class="['label', index === contract.active ? 'on' : '']" v-for="(items, index) in contract.menuList" :key="index">{{getLangs(items)}}</view>
					<view class="all" @tap="navigateTo('/pages/contract_record/index')">{{getLangs('allText')}}</view>
				</view>
				<ContractCommissionRecord v-if="contract.active === 0"  />
				<ContractHistoryRecord v-if="contract.active === 1"  />
			</view>
			<view class="record_main_bar" v-else>
				<ContractPositionRecord />
			</view>
		</view>
		<!-- <EntrustOrder /> -->
	</view>
</template>

<script>
	/**
	 * 合约
	 */
	import { mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import { transaction } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	import Dropdown from '@/components/dropdown/index.vue'
	import PriceList from '@/layouts/trade/price_list.vue'
	import TradeMain from '@/layouts/trade/trade_main.vue'
	import ContractCommissionRecord from '@/layouts/order/contract_commission_record.vue'
	import ContractHistoryRecord from '@/layouts/order/contract_history_record.vue'
	import ContractPositionRecord from '@/layouts/order/contract_position_record'
	export default {
		name: 'Contract',
		mixins: [langsMixins, websocketMixins, commonMixins, currencyMixins],
		components: {
			PriceList,
			TradeMain,
			ContractCommissionRecord,
			ContractHistoryRecord,
			ContractPositionRecord,
		},
		data(){
			return {
				//菜单
				menuList: ['tradep5', 'position'],
				active: 0,
				contract: {
					menuList: ['commission', 'history'],
					active: 0
				},
			}
		},
		methods: {
			/**
			 * 切换交易模式
			 */
			changeMenu(index){
				this.active = index
			},
			//切换合约类型
			changeContractType(index){
				console.log(index)
				this.contract.active = index
			},
		}
	}
</script>

<style scoped>
	.contract{
		padding: 20upx 0;
		display: flex;
		margin-bottom: 20upx;
		background: #fff;
	}
	.contract_class{
		height: 100%;
		overflow: hidden;
	}
	.contrace_labels{
		flex: 1;
	}
	.trade_menu{
		text-align: center;
		border-bottom: 1px solid #eee;
		padding: 0;
		text-align: center;
		margin-top: 40upx;
		background: #fff;
	}
	.trade_menu .menu_label{
		width: 50%;
		font-size: 28upx;
		color: #333;
		line-height: 80upx;
		height: 80upx;
		text-align: center;
		display: inline-block;
	}
	.trade_menu .menu_label .inner{
		min-width: 160upx;
		display: inline-block;
		color: #333;
	}
	.trade_menu .menu_label.on .inner{
		color: #007AFF;
		font-weight: bold;
		border-bottom: 2px solid #007AFF;
	}
	.table_menu{
		width: 100%;
		border-bottom: 1px solid #111111;
		background: #20222c;
		margin-bottom: 40upx;
	}
	.record_menu{
		margin: auto;
		display: flex;
		margin-bottom: 20upx;
		padding: 20upx;
		position: relative;
		border-bottom: 1px solid #eee;
	}
	.record_menu .label{
		width: 30%;
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
	.all{
		position: absolute;
		right: 20upx;
		color: #fff;
		top: 25upx;
		font-weight: bold;
		color: #007AFF;
	}
	.record_bar{
		margin-top: 40upx;
		background: #fff;
	}
	.scroll_bar{
		height: calc(100% - 140upx);
		overflow: auto;
	}
</style>
