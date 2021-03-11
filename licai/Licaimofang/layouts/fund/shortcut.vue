<template>
	<view class="shortcut">
		<view class="shortcut_bar">
			<view class="labels" v-for="(curItem, index) in dataList" :key="index">
				<image :src="curItem.icon" class="icon" mode="widthFix"></image>
				<view class="name">{{getLang(curItem.name)}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Shortcut',
		mixins: [langMixins],
		data(){
			return {
				dataList: [
					{
						name: 'fund_p11',
						icon: '/static/images/icon/bianxie1.png'
					},
					{
						name: 'fund_p12',
						icon: '/static/images/icon/xiaoxi1.png'
					},
					{
						name: 'fund_p13',
						icon: '/static/images/icon/custom217.png'
					},
					{
						name: 'fund_p14',
						icon: '/static/images/icon/fenxiang.png'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.shortcut{
		padding: 20upx;
		position: relative;
		top: -60upx;
	}
	.shortcut_bar{
		border-radius: 20upx;
		background: #fff;
		padding: 20upx;
		display: flex;
	}
	.shortcut_bar .labels{
		width: 25%;
		text-align: center;
		font-size: 24upx
	}
	.shortcut_bar .labels .icon{
		width: 60upx;
	}
</style>
