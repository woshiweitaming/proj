<template>
	<view class="loading">
		<image class="loading_img" src="../../static/images/loading1.gif"></image>
	</view>
</template>
<script>
	export default {
		name: 'Loading'
	}
</script>

<style scoped>
	.loading{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10000;
		background: rgba(0,0,0,.5);
	}
	.loading_img{
		width: 80upx;
		height: 80upx;
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 10001;
		margin-left: -40upx;
		margin-top: -40upx;
	}
</style>
