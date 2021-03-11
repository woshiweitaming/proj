<template>
	<view class="no_data">
		<image class="icon" mode="widthFix" src="../../static/images/icons/no_data.png"></image>
		<view class="text">{{text}}</view>
	</view>
</template>

<script>
	export default {
		name: 'NoData',
		props: {
			text: {
				type: String,
				default: '暂无记录'
			}
		}
	}
</script>

<style scoped>
	.no_data{
		text-align: center;
	}
	.icon{
		width: 20%;
	}
	.text{
		font-size: 28upx;
		color: #aaa;
		margin-top: 40upx;
	}
</style>
