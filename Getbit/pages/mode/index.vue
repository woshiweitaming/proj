<template>
	<view class="page">
		<view class="labels" @click="select(index)" v-for="(curItem, index) in modeList" :key="index">
			<view class="name">{{curItem.name}}</view>
			<image src="../../static/images/icons/selected_red.png" v-if="index == active" class="right_arrow"></image>
		</view>
	</view>
</template>

<script>
	import storage from '@/utils/storage.js'
	export default {
		name: 'Mode',
		data(){
			return {
				modeList: [
					{
						name: '白天',
						value: 0
					},
					{
						name: '黑夜',
						value: 1
					}
				],
				active: 0
			}
		},
		methods: {
			select(index){
				this.active = index
				storage.setLocalData('mode', index)
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '模式'
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
	.right_arrow{
		width: 30upx;
		height: 20upx;
		position: absolute;
		right: 20upx;
		bottom: 50upx;
	}
</style>
