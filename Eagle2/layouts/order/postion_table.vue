<template>
	<view :class="['position_record_class', theme]">
		<text class="postion_title" v-if="showTitle">{{getLangs('positionOrder')}}</text>
		<view class="table_hd">			
			<view class="table_hd_label">{{getLangs('Variety')}}</view>
			<view class="table_hd_label">{{getLangs('purchasePrice')}}</view>
			<view class="table_hd_label">{{getLangs('latestPrice')}}</view>
			<view class="table_hd_label">{{getLangs('profit')}}</view>
			<view class="table_hd_label btns_box">{{getLangs('operation')}}</view>
		</view>
		<view class="table_bd">
			<view class="no_data" v-if="getPositionRecordData.data && getPositionRecordData.data.length === 0">{{getLangs('noData')}}</view>
			<view v-else>
				<view class="table_bd_items" v-for="(items, index) in getPositionRecordData.data" :key="index">
					<view class="table_bd_label">{{items.ptitle}}</view>
					<view class="table_bd_label">{{items.buyprice}}</view>
					<view class="table_bd_label">{{items.nowPrice}}</view>
					<view class="table_bd_label">{{items.loss.toFixed(4)}}</view>
					<view class="table_bd_label btns">
						<text class="btn" @tap="showSettingDialog(items.orderno)">{{getLangs('setting')}}</text>
						<text class="btn" @tap="position(items.orderno)">{{getLangs('close')}}</text>
					</view>
				</view>
			</view>
		</view>
		<SettingDialog :show="isShowSettingDialog" @close="closeSettingDialog" :orderNo="orderNo"/>
	</view>
</template>

<script>
	/**
	 * 持仓列表
	 */
	import { mapMutations, mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js' 
	import { closePosition } from '@/api/user.js'
	import { getBonds } from '@/api/record.js'
	import SettingDialog from '@/layouts/dialog/setting_dialog.vue'
	let timer = null
	let timer2 = null
	export default {
		name: 'PositionRecord',
		props: ['showTitle', 'theme'],
		mixins: [langsMixins, commonMixins],
		data(){
			return {
				isShowSettingDialog: false,
				orderDetails: {},
				attach: {},
				orderNo: ''
			}
		},
		components: {
			SettingDialog
		},
		computed: {
			...mapGetters({
				getPositionRecordData: 'getPositionRecordData'
			})
		},
		methods: {
			/**
			 * 持仓列表
			 */
			async getBondsHandler(){
				const res = await getBonds()
				this.setPositionRecordData(res)
			},
			/**
			 * 平仓
			 */
			async position(orderNo){
				const params = {
					orderNo: orderNo
				}
				this.$tips.showModel(this.getLangs('sysTips'), this.getLangs('confirmClose'), this.getLangs('cancel'), this.getLangs('confirm'), async (btn) => {
					if(btn.confirm){
						const res = await closePosition(params)
						this.backTips(res)
						this.getBondsHandler()
					}
				})
			},
			/**
			 * 设置弹窗
			 */
			async showSettingDialog(orderNo){
				this.orderNo = orderNo
				this.isShowSettingDialog = true
			},
			/**
			 * 关闭弹窗
			 */
			closeSettingDialog(){
				this.isShowSettingDialog = false
			},
			/**
			 * 获取详情
			 */
			async getOrderDetailsHandler(orderNo){
				const params = {
					orderNo: orderNo
				}
				const res = await getOrderDetails(params)
				this.orderDetails = res.data
				this.attach = res.attach
			},
			setTimer(){
				if(timer !== null){
					this.clearTimer()
				}
				timer = setInterval(() => {
					this.getBondsHandler()
				}, 3000)
			},
			clearTimer(){
				clearInterval(timer)
				timer = null
			},
			...mapMutations({
				setPositionRecordData: 'SET_POSITION_RECORD_DATA'
			})
		},
		created(){
			this.getBondsHandler()
			this.setTimer()
		},
		destroyed() {
			this.clearTimer()
		}
	}
</script>

<style scoped>
	.postion_title{
		display: flex;
		line-height: 80upx;
		font-size: 32upx;
		color: #fff;
	}
	.btn{
		padding: 0 4upx;
	}
	.btns,
	.btns_box{
		width: 240upx;
		flex: 2;
	}
	.dark .table_hd{
		border-bottom: 2px solid rgba(255,255,255,.03);
		margin-bottom: 10upx;
	}
</style>
