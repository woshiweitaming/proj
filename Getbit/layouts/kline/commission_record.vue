<template>
	<view class="commission_record">
		<view class="thead">
			<view class="hd">买盘</view>
			<view class="hd">数量(BTC)</view>
			<view class="hd">价格(USDT)</view>
			<view class="hd">数量(BTC)</view>
			<view class="hd">卖盘</view>
		</view>
		<view class="tbody" v-if="dataList.length > 0">
			<view class="labels" v-for="(curItem, index) in dataList" :key="index">
				<view class="hd index">{{index+1}}</view>
				<view class="hd">{{curItem[1].toFixed(6)}}</view>
				<view class="hd">
				    <text class="green">{{curItem[2].toFixed(3)}}</text>
					<text class="red">{{curItem[2].toFixed(3)}}</text>
				</view>
				<view class="hd">{{curItem[1].toFixed(6)}}</view>
				<view class="hd index">{{index+1}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CommissionRecord',
		props: {
			dataList: {
				type: Array,
				default: []
			}
		},
	}
</script>

<style scoped>
	.thead,
	.labels{
		display: flex;
		width: 100%;
	}
	.hd{
		font-size: 24upx;
		color: rgba(255,255,255,.6);
		line-height: 60upx;
	}
	.hd:nth-child(1),
	.hd:nth-child(5){
		width: 10%;
		text-align: center;
	}
	.hd:nth-child(2),
	.hd:nth-child(4){
		width: 20%;
		text-align: center;
	}
	.hd:nth-child(3){
		width: 40%;
		text-align: center;
	}
	.green{
		margin-right: 8upx;
	}
	.red{
		margin-left: 8upx;
	}
	.tbody .hd{
		line-height: 40upx;
	}
	.index{
		color: rgba(255,255,255,.2);
	}
</style>
