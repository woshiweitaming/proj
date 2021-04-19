<template>
	<view class="top_bar">
		<view class="top_bar_img">
			<view class="greeting">{{getLang('home_p25')+'，'+getLang('appName')}}</view>
			<view class="nav">
				<view class="labels" @click="toPage(curItem.path, index)" v-for="(curItem, index) in topList" :key="index">
					<image :src="curItem.icon" class="icon"></image>
					<view class="name">{{getLang(curItem.name)}}</view>
				</view>
			</view>
		</view>
		<view class="float_bar" @click="toPage('/pages/member/index')">
			<image class="vip" src="/static/images/home/vipicon.png" mode="widthFix"></image>
			<view class="name">{{getLang('home_p14')}}</view>
			<view class="enter">{{getLang('home_p15')}}</view>
			<image class="arrow" src="/static/images/home/arrow.png" mode="widthFix"></image>
		</view>
		<!-- <view class="float_bar">
			<view class="float_bar_item" @click="toPage(curItem.path)" v-for="(curItem, index) in topList" :key="index">
				<view class="float_bar_label">
					<view class="name">{{getLang(curItem.name)}}</view>
					<view class="sub">{{getLang(curItem.sub)}}</view>
				</view>
			</view>
		</view> -->
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
						name: 'home_p26',
						icon: '/static/images/home/shortcut/i1.png',
						path: ''
					},
					{
						name: 'home_p27',
						icon: '/static/images/home/shortcut/i2.png',
						path: ''
					},
					{
						name: 'home_p28',
						icon: '/static/images/home/shortcut/i3.png',
						path: '/pages/piggy_bank/index'
					},
					{
						name: 'home_p29',
						icon: '/static/images/home/shortcut/i4.png',
						path: '/pages/invite_friend/index'
					}
				]
			}
		},
		methods: {
			toPage(path, index){
				if(index === 0){
					return this.$emit('openDialog')
				}
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
		height: 550upx;
		position: relative;
	}
	.top_bar_img{
		height: 100%;
		background: url('/static/images/home/bg.png');
		background-size: 100% 100%
	}
	.greeting{
		padding: 80upx 40upx 40upx 40upx;
		font-size: 40upx;
		color: #fff;
		font-weight: bold;
	}
	.float_bar{
		width: 100%;
		position: absolute;
		height: 120upx;
		bottom: -20upx;
		left: 0;
		right: 20upx;
		display: flex;
		background: url('/static/images/home/vip_bg.png');
		background-size: 100% 100%;
		padding: 26upx 20upx 20upx 20upx;
		justify-content:space-around
	}
	.float_bar .vip{
		width: 60upx;
	}
	.float_bar .name{
		width: 60%;
		padding-left: 20upx;
		font-weight: bold;
		line-height: 60upx;
		color: #341400;
		font-size: 32upx
	}
	.float_bar .enter{
		text-align: right;
		color: #865105;
		line-height: 60upx;
	}
	.float_bar .arrow{
		width: 16upx;
		margin-top: 20upx;
	}
	.top_bar_img .nav{
		display: flex;
	}
	.top_bar_img .nav .labels{
		width: 25%;
		text-align: center;
	}
	.top_bar_img .nav .labels .icon{
		width: 50upx;
		height: 50upx;
	}
	.top_bar_img .nav .labels .name{
		color: #fff;
		font-size: 28upx
	}
</style>
