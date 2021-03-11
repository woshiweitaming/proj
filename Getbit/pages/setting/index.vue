<template>
	<view class="page bottom_page">
		<view class="labels" @click="toPage('/pages/language/index')">
			<view class="name">语言</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
			<text class="status">简体中文</text>
		</view>
		<view class="labels" @click="toPage('/pages/mode/index')">
			<view class="name">模式</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
			<text class="status">白天</text>
		</view>
		<view class="labels" @click="toPage('/pages/work_order/index')">
			<view class="name">问题反馈</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
		</view>
		<view class="labels" @click="toPage('/pages/account_manage/index')">
			<view class="name">账户管理</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
		</view>
		<view class="bottom_btn_bar">
			<view class="buttons">退出当前账号</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Setting',
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '设置'
			})
		}
	}
</script>

<style scoped>
	.page{
		padding: 20upx 0 0 20upx;
		background: #fff;
	}
	.labels{
		padding: 40upx 0;
		border-bottom: 1px solid #eee;
		font-size: 28upx;
		position: relative;
	}
	.sub{
		margin-top: 60upx;
		color: #666;
	}
	.right_arrow{
		width: 20upx;
		height: 20upx;
		position: absolute;
		right: 20upx;
		bottom: 50upx;
	}
	.status{
		position: absolute;
		right: 60upx;
		bottom: 40upx;
		color: #999;
	}
	.un{
		color: #FA3534;
	}
</style>
