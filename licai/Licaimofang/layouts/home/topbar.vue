<template>
	<view class="top_bar">
		<view class="top_bar_img"></view>
		<view class="float_bar">
			<view class="float_bar_item" @click="toPage(curItem.path)" v-for="(curItem, index) in topList" :key="index">
				<view class="float_bar_label">
					<view class="name">{{getLang(curItem.name)}}</view>
					<view class="sub">{{getLang(curItem.sub)}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Topbg',
		mixins: [langMixins],
		data(){
			return {
				topList: [
					{
						name: 'home_p1',
						sub: 'home_p2',
						icon: '/static/',
						path: '/pages/safe/index'
					},
					{
						name: 'home_p3',
						sub: 'home_p4',
						icon: '/static/',
						path: '/pages/webview/index'
					}
				]
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
	.top_bar{
		width: 100%;
		padding-top: calc(var(--status-bar-height) + 88upx);
		height: 400upx;
		position: relative;
	}
	.top_bar_img{
		height: 100%;
		background: #007AFF;
	}
	.float_bar{
		width: 100%;
		position: absolute;
		height: 120upx;
		bottom: -60upx;
		left: 0;
		display: flex;
	}
	.float_bar .float_bar_item{
		width: 50%;
	}
	.float_bar .float_bar_item:first-child{
		padding-left: 30upx;
		padding-right: 20upx;
	}
	.float_bar .float_bar_item:last-child{
		padding-right: 30upx;
		padding-left: 20upx;
	}
	.float_bar .float_bar_item .float_bar_label{
		background: #fff;
		height: 120upx;
		padding: 20upx 20upx 20upx 100upx;
		position: relative;
		border-radius: 20upx;
		box-shadow: 0 5upx 30upx 0 rgba(0,0,0,.1);
	}
	.float_bar .float_bar_item .float_bar_label .name{
		font-weight: bold;
	}
	.float_bar .float_bar_item .float_bar_label .sub{
		font-size: 24upx;
		color: #999;
	}
</style>
