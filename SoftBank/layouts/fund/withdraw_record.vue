<template>
	<view class="table_class">
		<view class="withdraw_record_class">
<!-- 			<view class="table_hd">
				<view class="table_hd_label">}</view>
				<view class="table_hd_label">{{getLangs('quantity')}}</view>
				<view class="table_hd_label">{{getLangs('orderStatus')}}</view>
			</view> -->
			<view class="table_bd">
				<view class="no_data" v-if="tableList.length === 0">{{getLangs('noData')}}</view>
				<view v-else>
					<view class="table_bd_items" v-for="(items, index) in tableList" :key="index">
						<view class="table_bd_label">
							<view class="labels">{{items.orderno}}</view>
							<view class="labels">{{getLangs('orderNumber')}}</view>
						</view>
						<view class="table_bd_label">
							<view class="labels">{{items.dollar}}</view>
							<view class="labels">{{getLangs('quantity')}}</view>
					    </view>
						<view class="table_bd_label">{{toStatus(items.status)}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 提现记录
	 */
	import { getWithdrawal } from '@/api/record.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'WithdrawRecord',
		mixins: [langsMixins],
		data(){
			return {
				tableList: []
			}
		},
		methods: {
			async getWithdrawalHandler(){
				const res = await getWithdrawal()
				this.tableList = res.data
			},
			toStatus(status){
				if(status == 0){
					return this.getLangs('applying')
				}
				if(status == 1){
					return this.getLangs('pass')
				}
				if(status == 2){
					return this.getLangs('fail')
				}
			}
		},
		created() {
			this.getWithdrawalHandler()
		}
	}
</script>

<style scoped>
	.table_class{
		background: #20222c;
	}
	.table_bd_items{
		display: flex;
	}
	.table_bd_label{
		width: 50%;
	}
</style>
