<template>
	<view class="withdrawals_record_class">
		<view class="tables">
		   <view class="table_hd">
			   <text class="hd left">{{getLangs('orderNumber')}}</text>
			   <text class="hd center">{{getLangs('quantity')}}</text>
			   <text class="hd right">{{getLangs('orderStatus')}}</text>
		   </view>
		   <view class="table_bd">
			    <view class="tr" v-for="(items, index) in dataList" :key="index">
					<text class="bd left">{{items.orderno}}</text>
					<text class="bd center">{{items.dollar}}</text>
					<text class="bd right">{{items.status}}</text>
				</view>
		   </view>
		</view>
	</view>
</template>

<script>
	import { getWithdrawal } from '../../api/record.js'
	import tips from '../../utils/tips.js'
	import langMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	export default {
		data(){
			return {
				dataList: []
			}
		},
		mixins: [commonMixins,langMixins],
		methods:{
			/**
			 * 获取提现记录
			 */
			async getWithdrawalHandler(){
				this.$tips.showLoading(this.getLangs('loadingText'))
				const res = await getWithdrawal()
				this.$tips.hideLoading()
				this.dataList = res.data
			}
		},
		created(){
			this.getWithdrawalHandler()
		}
	}
</script>

<style scoped>
	
	.tables{
		width: 100%;
		display: table;
	}
	.tables .table_hd,
	.tables .table_bd{
		width: 100%;
		display: table;
	}
	.tables .table_hd{
		border-bottom: 2px solid #eee;
	}
	.tables .table_bd{
		border-bottom: 1px solid #eee;
	}
	.tables .hd,
	.tables .bd{
		width: 33.3333333%;
		display: table-cell;
		font-size: 24upx;
		height: 70upx;
		line-height: 70upx;
		color: #72899A;
	}
	.tables .bd span{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.tables .tr{
		width: 100%;
		border-bottom: 1px solid #eee;
		display: table;
	}
	.tables .left{
		text-align: left !important;
		padding-left: 5px;
	}
	.tables .center{
		text-align: center!important;
	}
	.tables .right{
		text-align: right!important;
		padding-right: 5px;
	}
</style>
