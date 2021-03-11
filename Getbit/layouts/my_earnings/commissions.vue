<template>
	<view class="commission">
		<view class="total">
			<view class="value">{{amount.toFixed(6)}}</view>
			<view class="name">总佣金(USDT)</view>
		</view>
		<view class="body">
			<view class="box">
				<view class="value">{{yestoday.toFixed(6)}}</view>
				<view class="name">昨日获得佣金(USDT)</view>
			</view>
			<view class="box">
				<view class="value">{{team}}</view>
				<view class="name">团队人数</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Commissions',
		data(){
			return {
				amount: 0,
				yestoday: 0,
				team: 0
			}
		}
	}
</script>

<style scoped>
	.total{
		text-align: center;
		padding-top: 80upx;
	}
	.total .value{
		font-size: 48upx
	}
	.value{
		font-size: 36upx;
		font-weight: bold;
		line-height: 80upx;
	}
	.name{
		color: #999
	}
	.body{
		display: flex;
		margin-top: 60upx;
		padding-top: 40upx;
		border-top: 1px solid #eee;
		margin-bottom: 40upx;
	}
	.body .box{
		text-align: center;
		width: 50%;
	}
	.body .box:first-child{
		border-right: 1px solid #eee;
	}
	.body .name{
		font-size: 28upx
	}
</style>
