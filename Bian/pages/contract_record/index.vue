<template>
	<view :class="['main_class', createOSClass]">
		<view class="table_class">
			<view :class="['table_main']">
				<view class="content">
					<view class="record_menu contract_menu">
						<view @tap="changeContractType(index)" :class="['label', index === contract.active ? 'on' : '']" v-for="(items, index) in contract.menuList" :key="index">{{getLangs(items)}}</view>
					</view>
					<ContractCommissionRecord v-if="contract.active === 0"  />
					<ContractPositionRecord v-if="contract.active === 1"  />
					<ContractHistoryRecord v-if="contract.active === 2"  />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import ContractCommissionRecord from '@/layouts/order/contract_commission_record.vue'
	import ContractHistoryRecord from '@/layouts/order/contract_history_record.vue'
	import ContractPositionRecord from '@/layouts/order/contract_position_record'
	export default {
		name: 'FuturesRecord',
		mixins: [commonMixins, langsMixins],
		components: {
			ContractCommissionRecord,
			ContractHistoryRecord,
			ContractPositionRecord,
		},
		data(){
			return {
				//合约
				contract: {
					menuList: ['commission', 'position', 'history'],
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
			//切换期货类型
			changeContractType(index){
				this.contract.active = index
			},
		},
		onShow(){
			this.setTitle(this.getLangs('orderCenter'))
			this.contract.active = 0
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
	.table_class{
		padding-top: 40upx;
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
		height: 100%;
	}
	.content{
		height: 100%;
	}
	.record_class{
		height: calc(100% - 80upx) !important;
		overflow: auto !important
	}
</style>
