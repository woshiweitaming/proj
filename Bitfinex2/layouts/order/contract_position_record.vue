<template>
	<view class="commission_record_class">
		<view class="record_class">
			<view class="record_main common">
				<view class="no_data" v-if="dataList.length === 0">{{getLangs('noData')}}</view>
				<scroll-view class="scroll" :scroll-y="true" v-else>
					<view class="record_label" v-for="(items, index) in dataList" :key="index">
						<view class="label_title">
							<view class="label_name">
							   {{items.paytype == 0 ? getLangs('marketOrder') : getLangs('limitOrder')}}
							   <text class="ptitle">{{items.ptitle}} / USDT</text>
							   <text :class="['action', items.otype == 0 ? 'green' : 'red']">{{items.otype == 0 ? getLangs('tradep3') : getLangs('tradep4')}}</text>
							   <text class="status">{{getLangs('positioning')}}</text>
							</view>
						</view>
						<view class="labels_main_normal">
							<view class="labels_box">
								<view class="text">{{getLangs('quantity')}}</view>
								<view class="value">{{items.onumber}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('purchasePrice')}}</view>
								<view class="value">{{items.buyprice}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('closePrice')}}</view>
								<view class="value">{{items.nowPrice}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('profitAndLoss')}}</view>
								<view :class="['value', items.loss > 0 ? 'green' : 'red']">{{items.loss}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('lever')}}</view>
								<view class="value">{{items.unit}}X</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('loss')}}</view>
								<view class="value">{{items.endloss == 0 ? '-' : items.endloss}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('profit')}}</view>
								<view class="value">{{items.endprofit == 0 ? '-' : items.endprofit}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('margin')}}</view>
								<view class="value">{{items.price}}</view>
							</view>
						</view>
						<view class="labels_fd">
							<view class="labels">{{getLangs('orderNumber')}}:{{items.orderno}}</view>
							<view class="labels">{{getLangs('handlingFee')}}:{{items.fee}}</view>
							<view class="labels">{{getLangs('buytime')}}:{{items.buytime}}</view>
							<view @tap="closeContact(items.orderno)" class="cancel">{{getLangs('mClose')}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="mask" v-if="dialog">
					<view class="dialog_main">
						<view class="dialog_title"><image @tap="closeDialog" class="close" src="/static/images/icons/close.png"></image></view>
						<view class="record">
							<view class="labels">
								<view class="text">{{getLangs('orderNumber')}}：</view>
								<view class="value">{{orderDetails.orderno}}</view>
							</view>
							<view class="labels">
								<view class="text">{{getLangs('purchasePrice')}}：</view>
								<view class="value">{{orderDetails.buyprice}}</view>
							</view>
							<view class="labels">
								<view class="text">{{getLangs('price')}}：</view>
								<view class="value">{{orderDetails.price}}</view>
							</view>
							<view class="labels">
								<view class="text">{{getLangs('handlingFee')}}：</view>
								<view class="value">{{orderDetails.fee}}</view>
							</view>
							<view class="labels">
								<view class="text">{{getLangs('profit')}}：{{getLangs('max')}}[{{orderDetails.endprofit}}]</view>
								<view class="values">
									<u-number-box v-model="sprice"></u-number-box>
								</view>
							</view>
							<view class="labels">
								<view class="text">{{getLangs('quantity')}}：</view>
								<view class="value">{{orderDetails.onumber}}</view>
							</view>
							<view class="labels">
								<view class="text">{{getLangs('type')}}：</view>
								<view class="value">{{orderDetails.otype === 0 ? getLangs('buy') : getLangs('sell')}}</view>
							</view>
							<view class="labels">
								<view class="text">{{getLangs('time')}}：</view>
								<view class="value">{{orderDetails.buytime}}</view>
							</view>
							<view class="labels">
								<view class="text">{{getLangs('loss')}}：{{getLangs('min')}}[{{orderDetails.endloss}}]</view>
								<view class="values">
									<u-number-box v-model="eprice"></u-number-box>
								</view>
							</view>
						</view>
						<view class="btn_box">
							<view class="btns" @tap="submit(orderDetails.orderno)">{{getLangs('submit')}}</view>
						</view>
					</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 合约持仓记录
	 */
	import { mapGetters, mapMutations } from 'vuex'
	import ypNumberBox from "@/components/yp-number-box/yp-number-box.vue"
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import orderMixins from '@/mixins/order_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import { setEndProfit } from '@/api/user.js'
	import tips from '@/utils/tips.js'
	let timer = null
	export default {
		name: 'ContractPositionRecord',
		mixins: [commonMixins, langsMixins, orderMixins],
		data(){
			return {
				orderDetails: {},
				dialog: false,
				//止盈
				eprice: '',
				//止损
				sprice: '',
				//止盈
				eprice_o: '',
				//止损
				sprice_o: '',
				flag: 0
			}
		},
		methods: {
			setTimer(){
				timer = setInterval(() => {
					this.getEntrustOrderHandler({type: 1})
				}, 3000)
			},
			clearTimer(){
				clearInterval(timer)
				timer = null
			},
			async setting(data){
				this.orderDetails = data
				this.dialog = true
				this.flag = 0
			},
			async submit(orderNo){
				const params = {
					orderNo: orderNo,
					endprofit: Number(this.eprice),
					endloss: Number(this.sprice)
				}
				const res = await setEndProfit(params)
				if(res.rpCode == '000000'){
					tips.showToast(this.getLangs('success'))
					this.dialog = false
				}else{
					tips.showToast(this.getLangs('fail'))
				}
			},
			closeDialog(){
				this.dialog = false
			}
		},
		created(){
			this.getEntrustOrderHandler({type: 1})
			this.setTimer()
			this.$once('hook:destroyed', () => {
				this.clearTimer()
			})
		},
		computed: {
			getSprice(val){
				this.sprice = val
			},
			getEprice(val){
				this.eprice = val
			}
		},
		destroyed() {
			//this.clearTimer()
		}
	}
</script>

<style scoped>
	.commission_record_class{
	    height: calc(100% - 80upx);
	}
	.setting{
		position: absolute;
		right: 140upx;
		width: 50px;
		height: 30px;
		position: absolute;
		top: 5px;
		background: #04AD8F;
		line-height: 30px;
		color: #fff;
		text-align: center;
		font-size: 12px;
		-webkit-border-radius: 10px;
		border-radius: 10px;
	}
	.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 10;
		background: rgba(0,0,0,.8);
		top: 0;
		left: 0;
	}
	.mask .dialog_main{
		width: 90%;
		max-height: 80%;
		background: #fff;
		position: fixed;
		left: 50%;
		margin-top: 100px;
		margin-left: -45%;
		z-index: 11;
		border-radius: 4px;
	}
	.mask .dialog_title{
		height: 40px;
	}
	
	.mask .dialog_title .close{
		width: 15px;
		height: 15px;
		float: right;
		margin-right: 20px;
		margin-top: 20px;
	}
	.dialog_main{
		padding: 20upx;
	}
	.value,
	.text{
		text-align: left;
	}
	.btns{
		padding:  5px;
		background: #007AFF;
		width: 50%	;
		text-align: center;
		color: #fff;	
		margin: 40upx auto 0 auto;
		border-radius: 10upx;
	}
</style>
