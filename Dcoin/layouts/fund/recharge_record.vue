<template>
	<view class="withdraw_record_class">
		<view class="table_hd">
			<view class="table_hd_label">{{getLangs('orderNumber')}}</view>
			<view class="table_hd_label">{{getLangs('nameText')}}</view>
			<view class="table_hd_label">{{getLangs('quantity')}}</view>
			<view class="table_hd_label">{{getLangs('status')}}</view>
			<view class="table_hd_label">{{getLangs('operation')}}</view>
		</view>
		<view class="table_bd">
			<view class="no_data" v-if="tableList.length === 0">{{getLangs('noData')}}</view>
			<view v-else>
				<view @tap.stop="onClick" class="table_bd_items" v-for="(items, index) in tableList" :key="index" @tap="toUploadHandler(items.status1, items.orderno, items.amount)">
					<view class="table_bd_label">{{items.orderno}}</view>
					<view class="table_bd_label">{{items.name}}</view>
					<view class="table_bd_label">{{items.amount}}</view>
					<view class="table_bd_label">{{checkStatus(items.status)}}</view>
					<view class="table_bd_label btns" @tap.stop="revokeHandler(items.status1, items.orderno)">{{items.status1 == 0 ? getLangs('revoke') : getLangs('finishText')}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 充值记录
	 */
	import { getPay, revokePay } from '@/api/record.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import validate from '@/utils/validate.js'
	export default {
		name: 'RecordRecord',
		mixins: [langsMixins, commonMixins],
		data(){
			return {
				tableList: []
			}
		},
		methods: {
			/**
			 * 获取充值订单
			 */
			async getPayHandler(){
				const res = await getPay()
				this.tableList = res.data
			},
			/**
			 * 跳转上传
			 */
			toUploadHandler(status, orderno, amount){
				if(status == 0){
					const params = {
						orderno: orderno,
						amount: amount
					}
					this.navigateTo('/pages/recharging/index', params)
				}
			},
			/**
			 * 撤销
			 */
			async revokeHandler(status, orderno){
				if(status === 0){
					const params = {
						orderno: orderno
					}
					const res = await revokePay(params)
					if(validate.checkCode(res)){
						this.getPayHandler()
					}
					this.backTips(res)
				}
			},
			onClick(e){
				e.stopPropagation()
			},
			checkStatus(status){
				if(status == 1){
					return this.getLangs('pending')
				}
				if(status == 2){
					return this.getLangs('success')
				}
				if(status == 3){
					return this.getLangs('refuse')
				}
				if(status == 4){
					return this.getLangs('timeout')
				}
			}
		},
		created(){
			this.getPayHandler()
		}
	}
</script>

<style>
</style>
