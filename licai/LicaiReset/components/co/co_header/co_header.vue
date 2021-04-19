<template>
	<view class="co_header" :style="getStyle">
		<view class="co_header_wrap">
			<view class="co_header_left" v-if="leftButtons && leftButtons.length > 0">
				<view class="co_header_left_labels" v-for="(curItem, index) in leftButtons" :key="index"></view>
			</view>
			<view class="co_header_title">{{title}}</view>
			<view class="co_header_right" v-if="rightButtons && rightButtons.length > 0">
				<view class="co_header_left_labels" v-for="(curItem, index) in rightButtons" :key="index"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CoHeader',
		props: {
			title: {
				type: String,
				default: ''
			},
			background: {
				type: String,
				default: '#f9f9f9'
			},
			fontColor: {
				type: String,
				default: '#333'
			},
			leftButtons: {
				type: Array,
			},
			rightButtons: {
				type: Array,
			},
		},
		computed: {
			getStyle(){
				return {
					background: this.background, 
					color: this.fontColor,
				}
			}
		},
	}
</script>

<style scoped>
	.co_header{
		width: 100%;
		height: calc(88rpx + var(--status-bar-height));
		position: fixed;
		left: 0;
		top: 0;
		padding-top: var(--status-bar-height);
	}
	.co_header .co_header_wrap{
		height: 100%;
		position: relative;
		padding: 0 120rpx 0 60rpx;
	}
	.co_header .co_header_wrap .co_header_title{
		text-align: center;
		line-height: 88rpx;
		font-weight: 28rpx;
		font-weight: bold;
		position: absolute;
		width: 100%;
		left: 0
	}
</style>
