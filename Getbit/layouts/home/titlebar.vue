<template>
	<view class="title_bar">
		<view class="account_icon icon_medium" @click="toAccount">
			<image class="img" src="../../static/images/icons/common/account_icon.png"></image>
		</view>
		<view class="search_input">
			<image class="search_icon" src="../../static/images/icons/search_icon.png"></image>
			<u-input @click="toSearch" :disabled="true" type="text" placeholder="搜索" :custom-style="createStyle" ></u-input>
		</view>
		<view class="customer_service_icon icon_medium" @click="toCustomServer">
			<image class="img" src="../../static/images/icons/customer_server_icon.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Titlebar',
		data(){
			return {
				createStyle: {
					'background': '#fff',
					'border-radius': '20upx',
					'padding-left': '10upx'
				}
			}
		},
		methods: {
			toSearch(){
				uni.navigateTo({
					url: '/pages/search/index'
				})
			},
			toCustomServer(){
				uni.navigateTo({
					url: '/pages/custom_server/index'
				})
			},
			toAccount(){
				uni.navigateTo({
					url: '/pages/account/index'
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
	.customer_service_icon{
		position: absolute;
		right: 20upx;
		top: 10upx;
	}
	.search_input{
		background: #fff;
		border-radius: 20upx;
		padding-left: 60upx;
		position: relative;
	}
	.search_icon{
		width: 35upx;
		height: 35upx;
		position: absolute;
		left: 20upx;
		top: 18upx;
	}
</style>
