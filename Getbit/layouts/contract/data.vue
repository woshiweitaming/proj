<template>
	<view class="data">
		<view class="label">
			<view class="box">
				<view class="value">{{balance.toFixed(6)}}</view>
				<view class="name">账户总权益(USDT)</view>
			</view>
			<view class="box">
				<view class="value">{{balance.toFixed(6)}}</view>
				<view class="name">浮动盈亏(USDT)</view>
			</view>
			<view class="box">
				<view class="value">{{balance.toFixed(2)}}</view>
				<view class="name">风险率(USDT)</view>
			</view>
		</view>
		<view class="label">
			<view class="info">
				<text class="sub">可用余额：</text>{{usable.toFixed(6)}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Data',
		data(){
			return {
				balance: 0,
				ratio: 0,
				risk: 0,
				usable: 0
			}
		}
	}
</script>

<style scoped>
	.data{
		display: flex;
		flex-direction: column;
		padding-top: 20upx;
	}
	.data .label{
		display: flex;
	}
	.data .label .box{
		width: 33.3333%;
		padding: 20upx;
		font-size: 24upx;
		color: #aaa;
	}
	.data .label .box:nth-child(2){
		text-align: center;
	}
	.data .label .box:nth-child(3){
		text-align: right
	}
	.data .label .box .value{
		font-size: 28upx;
		color: #333;
	}
	.info{
		width: 100%;
		padding: 10upx;
		background: #edf0fe;
		font-size: 24upx
	}
	.data .label:last-child{
		width: 100%;
		padding: 10px;
	}
	.sub{
		color: #aaa;
	}
</style>
