<template>
	<view class="co_card">
		<view class="co_card_title_bar" v-if="title.length > 0">
			<view class="co_card_title">{{title}}</view>
		</view>
		<view class="co_card_main_bar">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CoCard',
		props: {
			title: {
				type: String,
				default: ''
			}
		},
		methods: {
			
		},
		computed: {
			
		},
		created() {
			
		}
	}
</script>

<style scoped>
	.co_card{
		border-radius: 20rpx;
		background: #fff;
		box-shadow: 0 0 10rpx 0 rgba(0.0.0..1);
	}
	.co_card_title_bar{
		height: 80rpx;
		border-bottom: 1px solid #F9F9F9;
	}
	.co_card_title{
		line-height: 80rpx;
		padding: 0 40rpx;
		text-align: left;
		font-size: 30rpx
	}
	.co_card_main_bar{
		padding: 40rpx;
	}
</style>
