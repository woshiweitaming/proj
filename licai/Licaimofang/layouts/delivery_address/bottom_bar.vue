<template>
	<view class="bottom_bar">
		<view class="btns" @click="toPage">{{getLang('delivery_p2')}}</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'DeliveryAddressBottom',
		mixins: [langMixins],
		methods: {
			toPage(){
				uni.navigateTo({
					url: '/pages/create_delivery_address/index'
				})
			}
		}
	}
</script>

<style scoped>
	.bottom_bar{
		width: 100%;
		height: calc(100upx + env(safe-area-inset-bottom));
		position: absolute;
		padding: 10upx 20upx 20upx 0;
		bottom: env(safe-area-inset-bottom);
		left: 0;
		z-index: 1;
	}
	.bottom_bar .btns{
		width: 60%;
		height: 80upx;
		border-radius: 20upx;
		background: #0077FF;
		text-align: center;
		line-height: 80upx;
		color: #fff;
		margin: auto;
	}
</style>