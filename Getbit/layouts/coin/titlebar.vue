<template>
	<view class="title_bar">
		<view class="title_text">法币</view>
		<view class="menu_icon icon_medium" @click="openDrop">
			<image class="img" src="../../static/images/icons/more.png"></image>
		</view>
		<view class="mask" v-if="show" @click="openDrop">
			<view class="popup">
				<view class="labels" @click="toPage(curItem.path)" v-for="(curItem, index) in dropList" :key="index">
					<image :src="curItem.icon" class="icon"></image>
					<text class="name">{{curItem.name}}</text>
				</view>
			</view>
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
				show: false,
				dropList: [
					{
						name: '发布',
						icon: '/static/images/icons/c2c/2.png',
						path: ''
					},
					{
						name: '订单记录',
						icon: '/static/images/icons/c2c/3.png',
						path: '/pages/order/index'
					},
					{
						name: '收款地址',
						icon: '/static/images/icons/c2c/4.png',
						path: '/pages/account_number/index'
					},
					{
						name: 'C2C钱包',
						icon: '/static/images/icons/c2c/1.png',
						path: '/pages/c2c/index'
					}
				]
			}
		},
		methods: {
			openDrop(){
				this.show = !this.show
			},
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
		padding: 8upx 120upx;
	}
	.menu_icon{
		position: absolute;
		right: 0upx;
		top: 15upx;
	}
	.menu_icon .img{
		width: 60upx;
		height: 60upx;
	}
	.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		background: rgba(0,0,0,.7);
	}
	.popup{
		width: 340upx;
		border-radius: 10upx;
		background: #fff;
		box-sizing: border-box;
		padding: 40upx;
		top: 88upx;
		right: 0;
		z-index: 101;
		position: fixed;
	}
	.labels{
		margin-bottom: 40upx;
	}
	.labels:last-child{
		margin-bottom: 0;
	}
	.icon{
		width: 30upx;
		height: 30upx;
	}
	.name{
		vertical-align: top;
		line-height: 30upx;
		margin-left: 40upx;
	}
</style>

