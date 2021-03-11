<template>
	<view class="bottom_btn_bar">
		<view class="buttons button0" @click="toPage(0)">买入</view>
		<view class="buttons button1" @click="toPage(1)">卖出</view>
	</view>
</template>

<script>
	import storage from '@/utils/storage.js'
	export default {
		name: 'BottomBtn',
		methods: {
			toPage(type){
				storage.setLocalData('trade_type', type)
				uni.switchTab({
					url: '/pages/trade/index'
				})
			}
		}
	}
</script>

<style scoped>
	.bottom_btn_bar{
		width: 100%;
		display: flex;
		background: #071724;
		border-top: #071724;
	}
	.buttons:first-child{
		margin-right: 2px;
	}
	.buttons:last-child{
		margin-left: 2px;
	}
	.buttons{
		width: 50%;
		line-height: 55upx;
		height: 75upx;
	}
</style>
