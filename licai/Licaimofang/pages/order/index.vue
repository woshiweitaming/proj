<template>
	<view class="piggy_bank">
		<view class="topbg"></view>
		<view class="balance">
			<view class="name">{{getLang('order_p3')}}{{getLang('order_p12')}}</view>
			<view class="value">{{details.balance}}</view>
			<view class="block">
				<view class="labels">
					<view class="value">{{details.investment}}</view>
					<view class="name">{{getLang('order_p4')}}{{getLang('order_p12')}}</view>
				</view>
				<view class="labels">
					<view class="value">{{details.profit}}</view>
					<view class="name">{{getLang('order_p5')}}{{getLang('order_p12')}}</view>
				</view>
			</view>
		</view>
		<view class="card">
			<view class="info">
				<view class="labels">
					<view class="name">{{getLang('order_p6')}}</view>
					<view class="value">{{details.min_amount}}{{getLang('order_p12')}}</view>
				</view>
				<view class="labels">
					<view class="name">{{getLang('order_p7')}}</view>
					<view class="value">{{details.total_amount}}{{getLang('order_p12')}}</view>
				</view>
				<view class="labels">
					<view class="name">{{getLang('order_p8')}}</view>
					<view class="value">{{details.is_repeat}}</view>
				</view>
			</view>
		</view>
		<view class="card">
			<view class="info info2">
				<view class="labels">
					<view class="name">{{getLang('order_p9')}}</view>
					<view class="value value2">
						<u-number-box input-width="180" :step="100" v-model="amount" @change="valChange"></u-number-box>
					</view>
				</view>
				<view class="labels">
					<view class="name">{{getLang('order_p10')}}</view>
					<view class="value">
						<input type="password" v-model="zjPwd" :placeholder="getLang('order_p11')" class="input_bar" />
					</view>
				</view>
			</view>
		</view>
		<view class="order">
			<u-button type="primary" @click="prucharseHandler" class="btns">{{getLang('order_p13')}}</u-button>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { purchase, getProjectDetails } from '@/apis/users.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'Order',
		mixins: [langMixins],
		data(){
			return {
				opt: {},
				amount: 0,
				zjPwd: '',
				details: {
					balance: 0,
					is_repeat: 0,
					total_amount: 0,
					min_amount: 0,
					investment: 0,
					max_amount: 0,
					profit: 0
				}
			}
		},
		methods: {
			valChange(){
				
			},
			async prucharseHandler(){
				if(this.amount.length === 0 || this.amount == 0){
					return tips.showToast(this.getLang('order_p14'))
				}
				if(this.zjPwd.length === 0){
					return tips.showToast(this.getLang('order_p15'))
				}
				const params = {pid: this.opt.pid, amount: this.amount, zjPwd: this.zjPwd}
				const res = await purchase(params)
				uni.navigateTo({
					url: '/pages/success/index'
				})
			},
			async getProjectDetailsHandler(){
				const res = await getProjectDetails({pid: this.opt.pid})
				this.details = res.data
			}
		},
		computed: {
		},
		onLoad(opt) {
			this.opt = opt
			this.getProjectDetailsHandler()
			uni.setNavigationBarTitle({
				title: this.getLang('order_p1')
			})
		},
	}
</script>

<style scoped>
	.topbg{
		width: 100%;
		height: 500upx;
		background: #007AFF;
		position: fixed;
		z-index: 0;
	}
	.balance{
		position: relative;
		z-index: 1;
		text-align: center;
		padding-top: 40upx;
		color: rgba(255,255,255,.5);
	}
	.balance .value{
		font-weight: bold;
		color: #fff;
		font-size: 50upx
	}
	.card{
		width: 90%;
		padding: 20upx 40upx;
		border-radius: 40upx;
		background: #fff;
		position: relative;
		z-index: 1;
		margin: 20upx auto;
		box-shadow: 0 0 20upx 0 rgba(0,0,0, .1);
	}
	.info .labels{
		width: 100%;
		text-align: center;
		display: flex;
		border-bottom: 1px solid #eee;
	}
	.info .labels:last-child{
		border-bottom: none
	}
	.info .labels .name,
	.info .labels .value{
		width: 50%;
		text-align: left;
		line-height: 100upx;
	}
	.info .labels .value{
		text-align: right;
	}
	.block{
		display: flex;
	}
	.block .labels{
		width: 50%;
		text-align: center;
	}
	.input_bar{
		font-size: 28upx;
		margin-top: 20upx;
		line-height: 60upx;
		height: 60upx;
	}
	.value2{
		display: flex;
		position: relative;
	}
	.value2 .button{
		width: 40upx;
		height: 40upx;
		border-radius: 50%;
		text-align: center;
		line-height: 36upx;
		border-radius: 50%;
		background: #0077FF;
		color: #fff;
	}
	.value2 .text{
		width: 100%;
		padding-right: 80upx;
	}
	.value .button{
		position: absolute;
		top: 30upx;
		right: 0;
	}
	.order{
		padding: 40upx;
	}
	.btns{
		border-radius: 40upx;
	}
</style>
