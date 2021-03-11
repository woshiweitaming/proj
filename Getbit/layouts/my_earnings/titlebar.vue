<template>
	<view class="title_bar">
		<view class="back_icon" @click="toBack">
			<image class="img" src="../../static/images/icons/back_icon.png"></image>
		</view>
		<view class="title_text">我的收益</view>
		<view class="title_right_text" @click="toPage('/pages/invite/index')">
		    <text>邀请好友</text>
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
			toPage(path){
				uni.navigateTo({
					url: path
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
