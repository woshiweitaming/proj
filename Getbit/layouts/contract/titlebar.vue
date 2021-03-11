<template>
	<view class="title_bar">
		<view class="back_icon" @click="toBack">
			<image class="img" src="../../static/images/icons/back_icon.png"></image>
		</view>
		<view class="title_text">永续合约</view>
		<view class="title_right_text" @click="toPage">
		    <text>体验合约</text>
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
					url: '/pages/experience_contract/index'
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
