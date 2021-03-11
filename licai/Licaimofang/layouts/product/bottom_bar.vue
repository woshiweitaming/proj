<template>
	<view class="bottom_bar">
		<view class="labels labels1">
			<view class="border btn">
				<image src="../../static/images/share/wj.png" class="icon" mode="widthFix"></image>
			    <text class="name">{{getLang('product_p33')}}</text>
			</view>
		</view>
		<view class="labels labels2">
			<view class="bg btn">{{getLang('product_p34')}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'BottomBar',
		mixins: [langMixins]
	}
</script>

<style scoped>
	.bottom_bar{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 1;
		background: #fff;
		height: 100upx;
		padding: 10upx;
		display: flex;
	}
	.bottom_bar .labels{
		padding: 0 20upx;
		text-align: center;
	}
	.bottom_bar .labels1{
		width: 30%;
	}
	.bottom_bar .labels2{
		width: 70%;
	}
	.bottom_bar .btn{
		line-height: 80upx;
		border-radius: 20upx;
		box-sizing: border-box;
		font-weight: bold;
	}
	.bottom_bar .border{
		border: 1px solid #007AFF;
		color: #007AFF;
		line-height: 78upx;
	}
	.bottom_bar .bg{
		background: #007AFF;
		color: #fff;
	}
	.bottom_bar .icon{
		width: 40upx;
	}
	.bottom_bar .name,
	.bottom_bar .icon{
		vertical-align: middle;
		margin: 0 2px;
	}
</style>
