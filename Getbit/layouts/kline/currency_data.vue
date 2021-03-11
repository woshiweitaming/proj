<template>
	<view class="currency_data">
		<view class="box">
			<view :class="['current_price',getRatio > 0 ? 'green' : 'red']">{{getClose}}</view>
			<view class="sub">
				<view class="cny">≈ ¥ 192223.31</view>
				<view :class="['ratio', getRatio > 0 ? 'green' : 'red']">{{getRatio > 0 ? `+${getRatio}` : getRatio}}</view>
			</view>
		</view>
		<view class="box">
			<view class="block">
				<view class="name">最高</view>
				<view class="value">{{result.high}}</view>
			</view>
			<view class="block">
				<view class="name">最低</view>
				<view class="value">{{result.low}}</view>
			</view>
			<view class="block">
				<view class="name">24H</view>
				<view class="value">{{(result.amount / 1000).toFixed(2)}}K</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getExcQuotation } from '@/apis/exc.js'
	export default {
		name: 'CurrencyData',
		props: {
			opt: {
				type: Object,
				default: {
					name: '',
					id: '',
					fromcid: ''
				}
			},
		},
		data(){
			return {
				result: {},
				timer: null
			}
		},
		methods: {
			async getExcQuotationHandler(id){
				const params = {
					excpairs: id
				}
				const res = await getExcQuotation(params)
				this.result = res
			},
			setTimer(){
				const that = this
				this.timer = setInterval(() => {
					that.getExcQuotationHandler(that.opt.id)
				}, 2000)
			},
			clearTimer(){
				clearInterval(this.timer)
				this.timer = null
			}
		},
		computed: {
			getClose(){
				return parseFloat(this.result.close).toFixed(6)
			},
			getRatio(){
				return ((this.result.close - this.result.open) / this.result.close * 100).toFixed(3)
			},
		},
		watch: {
			opt: {
				handler(val){
					this.getExcQuotationHandler(val.id)
					this.setTimer()
				},
				deep: true,
				immediate: true
			}
		},
		destroyed() {
			this.clearTimer()
		}
	}
</script>

<style scoped>
	.currency_data{
		display: flex;
		margin-top: 40upx;
	}
	.currency_data .box:first-child{
		width: 70%;
		padding-left: 20upx;
	}
	.currency_data .box:last-child{
		width: 30%;
		text-align: right;
	}
	.block{
		display: flex;
		padding-right: 20upx;
	}
	.block .name,
	.block .value{
		width: 50%;
		font-size: 24upx;
		line-height: 50upx;
	}
	.block .name{
		color: #485263;
		text-align: left;
	}
	.block .value{
		color: #fff;
	}
	.current_price{
		font-size: 50upx;
		font-weight: bold;
	}
	.sub{
		display: flex;
		margin-top: 30upx;
		font-size: 24upx
	}
	.cny{
		color: #485263;
		margin-right: 20upx;
	}
</style>
