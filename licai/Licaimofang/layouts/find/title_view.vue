<template>
	<view class="custom_header">
		<view class="custom_header_main">
			<image src="../../static/images/logo/asset-logo-head.png" class="logo" mode="widthFix"></image>
			<!-- <image src="../../static/images/icon/im.png" mode="widthFix" class="kefu"></image> -->
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomeTitleView'
	}
</script>

<style scoped>
	.custom_header{
		background: #fff;
	}
	.custom_header .logo{
		width: 200upx;
		margin: 10upx 30upx;
	}
	.custom_header .kefu{
		position: absolute;
		right: 20upx;
		top: 20upx;
		width: 40upx;
	}
</style>
