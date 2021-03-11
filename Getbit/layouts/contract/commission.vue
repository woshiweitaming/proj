<template>
	<view class="commission">
		<view class="title">当前委托<text class="more" @click="toPage">历史委托 ></text></view>
	</view>
</template>

<script>
	export default {
		name: 'Commission',
		methods: {
			toPage(){
				uni.navigateTo({
					url: '/pages/commission_history/index'
				})
			}
		}
	}
</script>

<style scoped>
	.commission{
		padding: 20upx;
	}
	.commission .title{
		color: #111111;
		font-weight: bold;
		position: relative;
	}
	.more{
		position: absolute;
		font-size: 24upx;
		color: #aaa;
		right: 10upx;
		z-index: 1;
	}
</style>
