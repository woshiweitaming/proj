<template>
	<view :class="['record_class', cls]">
		<view class="record_main">
			<view class="no_data" v-if="dataList.length === 0">{{getLangs('noData')}}</view>
			<scroll-view class="scroll" :scroll-y="true" v-else>
				<view class="record_label" v-for="(items, index) in dataList" :key="index">
					<view class="label_title">
						<view class="label_name">
							 <text :class="['action',items.otype == 0 ? 'green' : 'red']">{{items.otype == 0 ? getLangs('buy') : getLangs('sell')}}</text>{{items.ptitle}} / USDT</text>
							 <text class="status" @tap="revokeBbHandler(items.orderno)">{{getLangs('revokeEntrust')}}</text>
						</view>
					</view>
					<view class="labels_main">
						<view class="labels_box">
							<view class="text">{{getLangs('timeText')}}</view>
							<view class="value">{{toTime(items.buytime)}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('commissionPrice')}}(USDT)</view>
							<view class="value">{{Number(items.buyprice).toFixed(4)}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('commissionNums')}}({{items.ptitle}})</view>
							<view class="value">{{Number(items.onumber).toFixed(4)}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('totalPrice')}}(USDT)</view>
							<view class="value">{{Number(items.price).toFixed(4)}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('tradeAvg')}}(USDT)</view>
							<view class="value">{{Number(items.avgprice).toFixed(4)}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('tradeNums')}}({{items.ptitle}})</view>
							<view class="value">{{Number(items.snumber).toFixed(4)}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	/**
	 * 期货持仓列表
	 */
	import { mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js' 
	import orderMixins from '@/mixins/order_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	let timer = null
	export default {
		name: 'FuturesPositionRecord',
		props: ['cls'],
		mixins: [commonMixins, langsMixins, orderMixins, websocketMixins],
		data(){
			return {
				countDownList: {}
			}
		},
		computed: {
			...mapGetters({
				getTimerStatus2: 'getTimerStatus2'
			})
		},
		methods: {
			setTimer(){
				timer = setInterval(() => {
					this.getCoinHandler(0)
				}, 5000)
			},
			clearTimer(){
				clearInterval(timer)
				timer = null
			}
		},
		created(){
			this.$once('hook:destroyed', () => {
				this.clearTimer()
			})
		},
		watch: {
			getTimerStatus2:{
				handler(val){
					if(val){
						this.getCoinHandler(0)
						this.setTimer()
					}else{
						this.clearTimer()
					}
				},
				deep: true,
				immediate: true,
			}
		},
	}
</script>

<style scoped>
	.date{
		font-size: 24upx;
		text-align: right;
		position: absolute;
		right: 20upx;
		color: #555555
	}
	.label_fd{
		background: #fff !important;
	}
	.label_fd .time{
		font-size: 30upx
	}
	.status{
		width: 160upx !important;
		background: none !important;
		border: 1px solid #f66464;
		color: #f66464 !important;
	}
	.scroll{
		overflow: auto;
	}
	.ft .record_label{
		border: none !important;
	}
	.value{
		color: #081723 !important
	}
</style>
