<template>
	<view class="dialog_class" v-if="show">
		<view class="dialog_main fadelogIn">
			<view class="dialog_title">
			   {{getLangs('setting')}}
			   <text class="iconfont icon-close close" @tap="close"></text>
			</view>
			<view class="dialog_content">
				<view class="labels">
					<view class="value">{{orderDetails.orderno}}</view>
					<view class="text">{{getLangs('orderNumber')}}</view>
				</view>
				<view class="labels">
					<view class="value">{{orderDetails.ptitle}}</view>
					<view class="text">{{getLangs('currency')}}</view>
				</view>
				<view class="labels">
					<view class="value">{{orderDetails.buyprice}}</view>
					<view class="text">{{getLangs('purchasePrice')}}</view>
				</view>
				<view class="labels">
					<view class="value">{{orderDetails.price}}</view>
					<view class="text">{{getLangs('price')}}</view>
				</view>
				<view class="labels">
					<view class="value">{{orderDetails.fee}}</view>
					<view class="text">{{getLangs('handlingFee')}}</view>
				</view>
				<view class="labels">
					<view class="value">{{orderDetails.onumber}}</view>
					<view class="text">{{getLangs('quantity')}}</view>
				</view>
				<view class="labels">
					<view class="value">{{orderDetails.otype === 0 ? getLangs('buy') : getLangs('sell')}}</view>
					<view class="text">{{getLangs('type')}}</view>
				</view>
				<view class="labels">
					<view class="value">{{orderDetails.buytime}}</view>
					<view class="text">{{getLangs('time')}}</view>
				</view>
				<view class="labels">
					<view class="value">
						<input type="digit" class="input_bar" v-model="endprofit" />
					</view>
					<view class="text">{{getLangs('profit')}}：{{getLangs('max')}}<text class="price">[{{attach.sprice}}]</text></view>
				</view>
				<view class="labels">
					<view class="value">
						<input type="digit" class="input_bar" v-model="endloss" />
					</view>
					<view class="text">{{getLangs('loss')}}：{{getLangs('min')}}<text class="price">[{{attach.eprice}}]</text></view>
				</view>
				<view class="full form_class">
					<view @tap="setEndProfitHandler" class="button">{{getLangs('submit')}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 设置弹窗
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { setEndProfit, getOrderDetails } from '@/api/record.js'
	import validate from '@/utils/validate.js'
	let timer = null
	export default {
		name: 'SettingDialog',
		props: ['orderNo', 'show'],
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				//止盈
				endprofit: '',
				//止损
				endloss: '',
				//详情数据
				orderDetails: {},
				//附加数据
				attach: {}
			}
		},
		methods: {
			/**
			 *  关闭弹窗
			 */
			close(){
				this.$emit('close')
			},
			/**
			 * 设置止盈止损
			 */
			async setEndProfitHandler(){
				const params = {
					orderNo: this.orderNo,
					endprofit: this.endprofit,
					endloss: this.endloss
				}
				const res = await setEndProfit(params)
				this.backTips(res)
				if(validate.checkCode(res)){
					this.close()
				}
			},
			/**
			 * 获取详情
			 */
			async getOrderDetailsHandler(){
				const params = {
					orderNo: this.orderNo
				}
				const res = await getOrderDetails(params)
				this.orderDetails = res.data
				this.attach = res.attach
			},
			/**
			 * 设置定时器
			 */
			setTimer(){
				timer = setInterval(() => {
					this.getOrderDetailsHandler()
				}, 2000)
			 },
			 /**
			  * 清除定时器
			  */
			clearTimer(){
			 	clearInterval(timer)
				timer = null
			}
		},
		computed: {
			getSprice(val){
				this.sprice = val
			},
			getEprice(val){
				this.eprice = val
			}
		},
		watch: {
			show(val){
				if(val){
					this.getOrderDetailsHandler()
					this.setTimer()
				}else{
					this.clearTimer()
				}
			}
		}
	}
</script>

<style scoped>
	.input_bar{
		border: 1px solid #eee;
		padding: 10upx;
		border-radius: 5px;
		margin-bottom: 10upx;
	}
	.full{
		width: 100%;
	}
	.price{
		color: #333;
		font-weight: bold;
		padding-left: 5px;
	}
</style>
