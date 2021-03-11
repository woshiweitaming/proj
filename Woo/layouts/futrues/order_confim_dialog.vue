<template>
	<view class="dialog_class" v-if="show">
		<view class="pop_class">
			<view class="pop_title">
				{{getCurrency}}
				<text class="iconfont icon-close close" @tap="close"></text>
			</view>
			<view class="pop_main">
				<view class="count_down">
					<!-- <el-progress :width="150" type="circle" :percentage="percentage" :show-text="false"></el-progress> -->
					<view v-if="countDown > 0">
					    <u-circle-progress :width="300" active-color="#2979ff" :percent="percentage" />
						<view class="info">
							<text class="count_time">{{getCountDown}}</text>
							<text class="name">{{getLangs('nowPrice')}}</text>
							<text :class="['price', opt.gain > 0 ? 'green' : 'red' ]">{{opt.close}}</text>
						</view>
					</view>
					<view v-else>
						<image class="loading" v-if="loading" src="/static/images/loading.gif"></image>
						<view v-else>
							<view :class="['prices',endDetails.loss >= 0 ? 'green' : 'red']">{{endDetails.loss}}</view>
							<view class="name">{{getLangs('finish')}}</view>
						</view>
					</view>
				</view>
				<view class="trade_order_info">
					<view class="label">
						<view class="name">{{getLangs('actionText')}}</view>
						<view :class="['value',getTradeParams.type == 0 ? 'green' : 'red']">{{getTradeParams.type == 0 ? getLangs('tradep1') : getLangs('tradep2')}}</view>
					</view>
					<view class="label">
						<view class="name">{{getLangs('number')}}</view>
						<view class="value">{{getTradeParams.num}}</view>
					</view>
					<view class="label">
						<view class="name">{{getLangs('strikePrice')}}</view>
						<view class="value">{{getTradeParams.price}}</view>
					</view>
					<view class="label" v-if="countDown > 0">
						<view class="name">{{getLangs('expectedEarnings')}}</view>
						<view :class="['value',getExpectedEarnings > 0 ? 'green' : 'red']">{{getExpectedEarnings}}</view>
					</view>
				</view>
			</view>
			<view class="pop_fd">
				<button @tap="close" class="button">{{getLangs('goOrder')}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 订单确认
	 */
	import { mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import { endDetails } from '@/api/user'
	let timer = null
	export default {
		name: 'OrderConfimDialog',
		mixins: [commonMixins, langsMixins, currencyMixins],
		props: ['show', 'opt'],
		data(){
			return {
				countDown: 0,
				percentage: 100,
				loading: true,
				endDetails: {}
			}
		},
		methods: {
			/**
			 * 关闭
			 */
			close(){
				this.$emit('close')
			},
			/**
			 * 启动倒计时
			 */
			startCountDown(){
				this.countDown = Number(this.getTradeParams.cutttime)
				timer = setInterval(() => {
					this.percentage = this.percentage - (this.percentage / this.countDown)
					this.countDown--
					if(this.countDown === 0){
						this.percentage = 100
						clearInterval(timer)
						timer = null
						this.loading = true
						this.endDetailsHander()
					}
				}, 1000)
			},
			async endDetailsHander(){
				const params = {
					orderNo: this.getTradeParams.orderno
				}
				setTimeout( async () => {
					const res = await endDetails(params)
					this.endDetails = res.data
					this.loading = false
				},2000)
			}
		},
		computed: {
			getCountDown(){
				const countDown = this.countDown
				if(this.countDown > 999){
					return (countDown / 3600).toFixed(0)
				}
				return this.countDown
			},
			getCurrency(){
				return this.getCurrentPageData('opt').currency
			},
			getExpectedEarnings(){
				const action = this.getTradeParams.type
				//当前价格
				const nowPrice = Number(this.opt.close)
				//执行价
				const price = Number(this.getTradeParams.price)
				//数量
				const nums = Number(this.getTradeParams.num)
				//收益率
				const rate = Number(this.getTradeParams.profit)/100
				if(action === 0){
					//买入
					if(nowPrice > price){
						return nums + (nums * rate)
					}else if(nowPrice == price){
						return 0
					}else{
						return -nums
					}
				}else{
					//卖出
					if(nowPrice > price){
						return -nums
					}else if(nowPrice == price){
						return 0
					}else{
						return nums + (nums * rate)
					}
				}
			},
			...mapGetters({
				getTradeParams: 'getTradeParams'
			})
		},
		watch: {
			show(val){
				clearInterval(timer)
				timer = null
				this.percentage = 100
				if(val){
					this.startCountDown()
				}
			}
		}
	}
</script>

<style scoped>
	.pop_class{
		height: 60%;
	}
	.count_down{
		width: 300upx;
		height: 300upx;
		text-align: center;
		position: relative;
		margin: 20upx auto;
	}
	.el-progress{
		width: 300upx;
		margin: auto;
	}
	.info{
		width: 300upx;
		height: 300upx;
		box-sizing: border-box;
		padding: 50upx;
		position: absolute;
		left: 0;
		top: 0;
	}
	.info .count_time{
		font-size: 80upx;
		display: block;
		text-align: center;
		line-height: 80upx;
		color: #007AFF
	}
	.info .name{
		font-size: 28upx;
		display: block;
		line-height: 60upx;
		color: #999;
	}
	.info .price{
		font-size: 40upx;
		display: block;
		line-height: 60upx;
	}
	.count_down .name{
		font-size: 24upx;
		color: #2C405A;
	}
	.count_down .prices 	{
		font-size: 70upx;
		color: #2C405A;
	}
	.loading{
		position: absolute;
		width: 600upx;
		height: 400upx;
		left: -50%;
		top: -100upx;
	}
</style>
