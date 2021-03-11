<template>
	<view class="total_profit_class">
		<view class="current_lefmoney">
			<view class="total_data">
				<view class="data_items">
					<text :class="['price', getPositionRecordData.allLoss > 0 ? 'green' : 'red']">{{getPositionRecordData.allLoss}}</text>
					<text class="name">{{getLangs('totalProfitLoss')}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 持仓总盈亏
	 */
	import { mapGetters } from 'vuex'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'TotalProfit',
		mixins: [langsMixins],
		computed: {
			...mapGetters({
				getPositionRecordData: 'getPositionRecordData'
			})
		}
	}
</script>

<style scoped>
	.total_profit_class{
		border-bottom: 1px solid #eee;
	}
</style>
