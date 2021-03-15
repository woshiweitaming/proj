<template>
	<view class="fund_card_class">
		<view class="top">
			<view class="name">{{getLangs('poolp3')}}</view>
			<view class="amount">{{getTotalAmount}} USDT</view>
			<view class="yield_class">
				<view class="btns" @tap="navigateTo('/pages/pool_yield/index')">{{getLangs('poolp2')}}</view>
			</view>
		</view>
		<view class="bottom">
			<view class="labels">
				<view class="name">{{getLangs('poolp4')}}</view>
				<view class="amount">{{yesterdayProfit == null ? 0 : yesterdayProfit}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLangs('poolp5')}}</view>
				<view class="amount">{{totalProfit == null ? 0 : totalProfit}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import { getMiningPoolProfitTotal, getMiningPoolBillListr } from '@/api/user.js'
	export default {
		name: 'PoolFund',
		props: ['show'],
		mixins: [commonMixins, langsMixins,userMixins],
		data(){
			return {
				totalProfit: 0,
				yesterdayProfit: 0,
				timer: null
			}
		},
		methods: {
			async getMiningPoolProfitTotalHandler(){
				const res = await getMiningPoolProfitTotal()
				this.totalProfit = res.data.totalProfit
				this.yesterdayProfit = res.data.yesterdayProfit
			},
			setTimer(){
				this.timer = setInterval(() => {
					this.getUserLeftmoneyHandler()
				}, 2000)
			},
			clearTimer(){
				clearInterval(this.timer)
				this.timer = null
			}
		},
		computed: {
			getTotalAmount(){
				const data = this.getAccountBanlance
				if(data.length === 0) return 0
				let total = 0
				for(let key in data[3]){
					const items = data[3][key]
					if(items.convert){
						total += Number(items.convert)	
					}
				}
				return total.toFixed(4)
			},
			...mapGetters({
				getAccountBanlance: 'getAccountBanlance'
			})
		},
		created(){
			this.getUserLeftmoneyHandler()
			this.setTimer()
			this.$once('hook:destroyed', () => {
				this.clearTimer()
			})
		},
		watch: {
			show: {
				handler(val){
					this.getMiningPoolProfitTotalHandler()
				},
				deep: true,
				immediate: true
			}
		}
	}
</script>

<style scoped>
	.fund_card_class{
		background: #323457
	}
	.fund_card_class .top{
		padding: 40upx 20upx 0 20upx;
		position: relative;
	}
	.fund_card_class .name{
		color: #aaa;
		margin-bottom: 10upx;	
		font-size: 24upx
	}
	.fund_card_class .amount{
		color: #fff;
		font-size: 46upx;
		margin-bottom: 20upx;
	}
	.fund_card_class .bottom{
		border-top: 1px solid rgba(255,255,255,.1);
		padding: 0 20upx;
		display: flex;
		padding-top: 20upx;
	}
	.fund_card_class .bottom .labels{
		width: 50%;
	}
	.fund_card_class .bottom .labels .amount{
		font-size: 28upx
	}
	.btns{
		position: absolute;
		color: #fff;
		font-size: 24upx;
		right: 10px;
		top: 40%;
		padding: 10upx 20upx;
		border: 1px solid rgba(255,255,255,.3);
		border-radius: 10upx;
		color: rgba(255,255,255,.8);
		background: rgba(255,255,255,.1);
	}
</style>
