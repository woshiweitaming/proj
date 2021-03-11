<template>
	<view class="recharge_record_class">
		<view class="tables">
		   <view class="table_hd">
			   <text class="hd left">{{getLangs('orderNumber')}}</text>
			   <text class="hd center">{{getLangs('quantity')}}</text>
			   <text class="hd center">{{getLangs('orderStatus')}}</text>
			   <text class="hd right">{{getLangs('operation')}}</text>
		   </view>
		   <view class="table_bd">
			    <view class="tr" v-for="(items, index) in dataList" :key="index">
					<text class="bd left">{{items.orderno}}</text>
					<text class="bd center">{{items.amount}}</text>
					<text class="bd center" @tap="toPage(items.status1, items.orderno, items.name)">{{items.status}}</text>
					<text @tap="cancel(items.status1, items.orderno)" :class="['bd right',items.status1 === 0 ? 'blue' : '']">{{items.status1 === 0 ? getLangs('revoke') : getLangs('finish')}}</text>
				</view>
		   </view>
		</view>
	</view>
</template>

<script>
	import { getPay } from '../../api/record.js'
	import validate from '../../utils/validate.js'
	import tips from '../../utils/tips.js'
	import { revokePay } from '../../api/record.js'
	import langMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	export default {
		mixins: [commonMixins,langMixins],
		data(){
			return {
				dataList: []
			}
		},
		methods:{
			/**
			 * 获取提现记录
			 */
			async getPayHandler(){
				this.$tips.showLoading(this.getLangs('loadingText'))
				const res = await getPay()
				this.$tips.hideLoading()
				this.dataList = res.data
			},
			async cancel(status, orderno){
				if(status === 0){
					const res = await revokePay({orderno: orderno})
					this.backTips(res)
					if(validate.checkCode(res)){
						this.getPayHandler()
					}
				}
			},
			toPage(status, orderno, name){
				if(status === 0){
					this.navigateTo(`/views/recharging/index?orderno=${orderno}&&payname=${name}`)
				}
			}
		},
		created(){
			this.getPayHandler()
		}
	}
</script>

<style scoped>
	.tables .hd,
	.tables .bd{
		width: 25%;
	}
	
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
		width: 25%;
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
