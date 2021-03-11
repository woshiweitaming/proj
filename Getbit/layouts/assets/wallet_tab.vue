<template>
	<view class="card">
		<view class="tabs">
			<u-tabs :list="menuList" gutter="160rpx" :is-scroll="false" :current="accountType" @change="change"></u-tabs>
		</view>
		<view class="balance">
			<view>钱包资产折合(USDT)</view>
			<view class="money_value">{{moneyStatus ? '****' : dollar.toFixed(6)}}</view>
			<view class="dollar">{{moneyStatus ? '****' : `${dollar.toFixed(6)}`}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'WalletTab',
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
			},
			accountType: {
				type: Number,
				default: 0
			}
		},
		data(){
			return {
				menuList: [{name: '钱包账户'}, {name: '合约账户'}],
			}
		},
		methods: {
			change(index){
				this.$emit('changeAccountType', index)
			}
		}
	}
</script>

<style scoped>
	.card{
		padding: 20upx;
	}
	.tabs{
		width: 50%;
	}
	.balance{
		width: 100%;
		padding-left: 20upx;
		margin-top: 20upx;
		color: #999;
	}
	.money_value{
		font-size: 48upx;
		color: #666;
		font-weight: bold;
		margin-top: 20upx;
	}
	.dollar{
		color: #999
	}
</style>
