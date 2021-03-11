<template>
	<view class="page">
		<view class="labels">
			<view class="name">当前版本</view>
			<view class="version">v1.0.3</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Aboutus',
		onLoad() {
			uni.setNavigationBarTitle({
				title: '关于我们'
			})
		}
	}
</script>

<style scoped>
	.page{
		background: #fff;
	}
	.labels{
		width: 100%;
		border-bottom: 1px solid #f9f9f9;
		position: relative;
		padding: 20upx;
	}
	.labels .name{
		font-size: 28upx;
	}
	.version{
		position: absolute;
		right: 60upx;
		top: 0;
		line-height: 80upx;
		color: #aaa;
	}
	.right_arrow{
		width: 25upx;
		height: 25upx;
		position: absolute;
		right: 20upx;
		top: 28upx;
	}
</style>
