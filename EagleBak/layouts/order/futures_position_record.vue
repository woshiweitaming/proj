<template>
	<view class="record_class">
		<view class="record_main futures_record">
			<view class="no_data" v-if="dataList.length === 0">{{getLangs('noData')}}</view>
			<scroll-view class="scroll" :scroll-y="true" v-else>
				<view class="record_label" v-for="(items, index) in dataList" :key="index">
					<view class="label_title">
						<view class="label_name">
							 {{items.ptitle}} / USDT
							 <text class="date">{{items.buytime}}</text>
						</view>
					</view>
					<view class="labels_main">
						<view class="labels_box">
							<view class="text">{{getLangs('actionText')}}</view>
							<view :class="['value', items.otype == 0 ? 'green' : 'red' ]">{{items.otype == 0 ? getLangs('tradep1') : getLangs('tradep2')}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('purchaseQuantity')}}</view>
							<view class="value">{{items.price}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('purchasePrice')}}</view>
							<view class="value">{{items.buyprice}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('latestPrice')}}</view>
							<view class="value">{{getClose(items.ptitle)}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('cutttime')}}</view>
							<view class="value">{{getCutttime(items.cutttime)}}</view>
						</view>
						<view class="labels_box">
							<view class="text">{{getLangs('expectedEarnings')}}</view>
							<view :class="['value', items.loss > 0 ? 'green' : 'red']">{{items.loss > 0 ? '+'+items.loss : items.loss}}</view>
						</view>
					</view>
					<view class="count_down_bar">
						{{getLangs('countDown')}}:
						{{toCountDownText(items.stime)}}
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
	import { mapMutations, mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js' 
	import orderMixins from '@/mixins/order_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import Utils from '@/utils/Utils.js'
	let timer = null
	let timer2 = null
	export default {
		name: 'FuturesPositionRecord',
		mixins: [commonMixins, langsMixins, orderMixins, websocketMixins, currencyMixins],
		props: ['keys'],
		data(){
			return {
				countDownList: {},
				timer: null,
				timer2: null
			}
		},
		methods: {
			getCutttime(time){
				return Number(time) > 999 ? Number(time)/3600 + this.getLangs('hour') : time + this.getLangs('second')
			},
			setTimer(){
				this.timer = setInterval(() => {
					for(let key in this.dataList){
						this.dataList[key].stime--
						if(this.dataList[key].stime === 0){
							this.init()
						}
					}
				}, 1000)
			},
			setTimer2(){
				this.timer2 = setInterval(() => {
					this.getFuturesPositionHandler(0)
				}, 5000)
			},
			clearTimer(){
				clearInterval(this.timer)
				clearInterval(this.timer2)
				this.timer = null
				this.timer2 = null
			},
			init(){
				this.clearTimer()
				this.getFuturesPositionHandler(0)
				this.setTimer()
				this.setTimer2()
				this.$once('hook:destroyed', () => {
					this.clearTimer()
				})
			},
			toCountDownText(value){
				if(value < 999) return value
				var theTime = parseInt(value);// 秒
				var theTime1 = 0;// 分
				var theTime2 = 0;// 小时
				// alert(theTime);
				if(theTime > 60) {
				    theTime1 = parseInt(theTime/60);
				    theTime = parseInt(theTime%60);
				    // alert(theTime1+"-"+theTime);
				    if(theTime1 > 60) {
				        theTime2 = parseInt(theTime1/60);
				        theTime1 = parseInt(theTime1%60);
				    }
				}
				var result = ""+(parseInt(theTime) > 9 ? parseInt(theTime) : '0'+parseInt(theTime))+"秒";
				if(theTime1 > 0) {
				    result = ""+parseInt(theTime1)+"分"+result;
				}
				if(theTime2 > 0) {
				    result = ""+parseInt(theTime2)+"小时"+result;
				}
				return result;
			}
		},
		computed: {
			getClose(){
				return name => {
					if(!this.getWSData.length) return 0
					const data = this.getWSData.filter(res => res.name == name)[0]
					return data.close
				}
			}
		},
		destroyed() {
			this.clearTimer()
		},
		created() {
			this.init()
			console.log('..')
		}
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
	.futures_record .count_down_bar{
		border-top: 1px solid rgba(255,255,255,.1);
	}
</style>
