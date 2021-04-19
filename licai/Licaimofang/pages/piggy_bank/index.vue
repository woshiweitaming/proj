<template>
	<view class="piggy_bank">
		<view class="topbg"></view>
		<view class="balance">
			<view class="name">{{getLang('piggy_bank_p2')}}{{getLang('piggy_bank_p3')}}</view>
			<view class="value">{{result.rlb_balance}}</view>
		</view>
		<view class="card">
			<view class="info">
				<view class="labels">
					<view class="name">{{getLang('piggy_bank_p4')}}{{getLang('piggy_bank_p3')}}</view>
					<view :class="['value', profit(1)]">{{result.amount}}</view>
				</view>
				<view class="labels">
					<view class="name">{{getLang('piggy_bank_p5')}}{{getLang('piggy_bank_p3')}}</view>
					<view class="value">{{result.rlbratio}}</view>
				</view>
				<view class="labels">
					<view class="name">{{getLang('piggy_bank_p6')}}(%)</view>
					<view :class="['value', profit(1)]">{{result.total_amount}}</view>
				</view>
			</view>
			<view class="btns">
				<view class="btn" @click="toPage('/pages/transfer/index?type=0')">{{getLang('piggy_bank_p7')}}</view>
				<view class="btn border" @click="toPage('/pages/transfer/index?type=1')">{{getLang('piggy_bank_p8')}}</view>
			</view>
		</view>
		<view class="card">
			<rich-text class="rich" :nodes="getLang('piggy_bank_p9')"></rich-text>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { getRlbDetails } from '@/apis/users.js'
	export default {
		name: 'PiggyBank',
		mixins: [langMixins],
		data(){
			return {
				result: {
					amount: 0,
					rlbratio: 0,
					total_amount: 0,
					rlb_balance: 0,
				}
			}
		},
		methods: {
			async getRlbDetailsHandler(){
				const res = await getRlbDetails()
				this.result = res.data
			},
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		},
		computed: {
			profit(){
				return (value) => {
					return value > 0 ? 'green' : 'red'
				}
			}
		},
		onLoad() {
			this.getRlbDetailsHandler()
			uni.setNavigationBarTitle({
				title: this.getLang('piggy_bank_p1')
			})
		},
	}
</script>

<style scoped>
	.topbg{
		width: 100%;
		height: 250upx;
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
		min-height: 200upx;
		padding: 40upx;
		border-radius: 40upx;
		background: #fff;
		position: relative;
		z-index: 1;
		margin: 20upx auto;
		box-shadow: 0 0 20upx 0 rgba(0,0,0, .1);
	}
	.info{
		display: flex;
	}
	.info .labels{
		width: 33.333%;
		text-align: center;
	}
	.info .labels .name{
		color: #999;
		font-size: 24upx
	}
	.info .labels .value{
		font-size: 32upx;
		font-weight: bold;
		color: #2979FF;
	}
	.red{
		color: #DD4A68 !important;
	}
	.green{
		color: #20ae2a !important;;
	}
	.btns{
		margin-top: 40upx;
	}
	.btns .btn{
		line-height: 80upx;
		height: 80upx;
		border-radius: 40px;
		background: #007AFF;
		text-align: center;
		color: #fff;
		margin-bottom: 20upx;
		font-size: 28upx
	}
	.btns .border{
		border: 1px solid #007AFF;
		color: #007AFF;
		background: none;
		box-sizing: border-box;
	}
	.rich{
		font-size: 24upx;
	}
</style>
