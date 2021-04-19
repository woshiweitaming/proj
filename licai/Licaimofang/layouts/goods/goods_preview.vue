<template>
	<view class="goods_preview">
		<swiper class="swiper" :style="{height: getHeight}" :autoplay="autoplay" :indicator-dots="indicatorDots">
		    <swiper-item v-for="(curItem, index) in dataList" :key="index">
		        <view class="swiper-item">{{curItem.name}}</view>
		    </swiper-item>
		</swiper>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'GoodsPreview',
		mixins: [langMixins],
		data(){
			return {
				dataList: [
					{
						name: 'A'
					},
					{
						name: 'B'
					}
				],
				autoplay: true,
				indicatorDots: true
			}
		},
		computed: {
			getHeight(){
				const { screenWidth } = uni.getSystemInfoSync()
				return screenWidth / 2 + 'px'
			}
		}
	}
</script>

<style scoped>
	.goods_preview{
		padding: 10upx;
		background: #fff;
		margin-bottom: 20upx;
	}
</style>
