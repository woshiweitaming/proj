<template>
	<view class="tab">
		<view @click="changeMenu(index)" :class="['labels', tabActive == index ? 'on' : '']" v-for="(curItem, index) in tabList" :key="index">{{curItem}}</view>
	</view>
</template>

<script>
	export default {
		name: 'Tabs',
		props: {
			tabActive: {
				type: Number
			}
		},
		data(){
			return {
				tabList: ['开仓', '持仓'],
			}
		},
		methods: {
			changeMenu(index){
				this.$emit('changeTab', index)
			}
		}
	}
</script>

<style scoped>
	.tab{
		display: flex;
		border-bottom: 1px solid #eee;
	}
	.labels{
		width: 50%;
		text-align: center;
		font-size: 28upx;
		line-height: 80upx;
	}
	.labels.on{
		color: #007AFF;
		border-bottom: 2px solid #007AFF;
	}
</style>
