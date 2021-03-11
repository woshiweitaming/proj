<template>
	<view class="title_bar">
		<view class="account_icon icon_medium" @click="toAccount">
			<image class="img" src="../../static/images/icons/common/account_icon.png"></image>
		</view>
		<view class="title_text">行情</view>
		<view class="search_icon icon_medium" @click="toSearch">
			<image class="img" src="../../static/images/icons/search_icon.png"></image>
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
			toAccount(){
				uni.navigateTo({
					url: '/pages/account/index'
				})
			},
			toSearch(){
				uni.navigateTo({
					url: '/pages/search/index'
				})
			}
		}
	}
</script>

<style scoped>
	.title_bar{
		padding: 8upx 120upx;
	}
	.account_icon{
		position: absolute;
		left: 20upx;
		top: 10upx;
	}
	.search_icon{
		position: absolute;
		right: 0upx;
		top: 23upx;
	}
	.search_icon .img{
		width: 40upx;
		height: 40upx;
	}
</style>

