<template>
	<view class="title_bar">
		<view class="back_icon" @click="toBack">
			<image class="img" src="../../static/images/icons/back_icon.png"></image>
		</view>
		<view class="title_text">我的</view>
		<view class="title_right_text" @click="toPage">
		    <text>设置</text>
		</view>
	</view>
</template>

<script>
	import CommonMixins from '@/mixins/common_mixins.js'
	export default {
		name: 'Titlebar',
		mixins: [CommonMixins],
		data(){
			return {
			}
		},
		methods: {
			toPage(){
				uni.navigateTo({
					url: '/pages/setting/index'
				})
			}
		}
	}
</script>

<style scoped>
	.title_bar{
		padding: 0 40upx;
	}
</style>
