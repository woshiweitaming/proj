<template>
	<view class="balance">
		<view class="hd">总资产折合 (USDT)</view>
		<view :class="['eyes', moneyStatus ? 'eyes1' : 'eyes0']" @click="toggleMoneyStatus"></view>
		<view class="money">
			<view class="money_value">{{moneyStatus ? '****' : dollar.toFixed(6)}}</view>
			<view class="dollar">{{moneyStatus ? '****' : `${dollar.toFixed(6)}`}}</view>
		</view>
		<view class="btns">
			<view class="button_label" @click="toPage(curItem.path)" v-for="(curItem, index) in buttons" :key="index">
				<view class="button">{{curItem.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Balance',
		props: {
			moneyStatus: {
				type: Boolean,
				default: false
			},
			balance: {
				type: Number,
				default: 0
			},
			dollar: {
				type: Number,
				default: 0
			}
		},
		data(){
			return {
				buttons: [{
					name: '充币',
					path: '/pages/recharge/index'
				}, {
					name: '提币',
					path: '/pages/withdrawal/index'
				},{
					name: '划转',
					path: '/pages/transfer/index'
				}]
			}
		},
		methods: {
			toggleMoneyStatus(){
				this.$emit('toggleMoneyStatus')
			},
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style scoped>
	.balance{
		background: #2545ea;
		padding: 40upx 40upx 0 40upx;
		height: 360upx;
		position: relative;
		color: #fff;
	}
	.eyes{
		width: 40upx;
		height: 25upx;
		position: absolute;
		right: 40upx;
		top: 40upx;
	}
	.eyes.eyes0{
		background: url(../../static/images/icons/assets/eyes.png);
		background-size: 40upx 25upx;
	}
	.eyes.eyes1{
		background: url(../../static/images/icons/assets/eyes1.png);
		background-size: 40upx 25upx;
	}
	.hd{
		margin-bottom:40upx;
	}
	.money_value{
		font-size: 48upx;
		color: #fff;
		font-weight: bold;
	}
	.dollar{
		color: rgba(255,255,255,.5)
	}
	.btns{
		width: 100%;
		display: flex;
		justify-content: space-between;
		position: absolute;
		bottom: 20upx;
		left: 0
	}
	.btns .button_label{
		width: 33%;
		box-sizing: border-box;
		padding: 20upx;
		text-align: center;
	}
	.btns .button_label .button{
		border-radius: 20upx;
		line-height: 50upx;
		background: rgba(255,255,255,.05);
		border: 1px solid rgba(255,255,255,.3);
	}
</style>
