<template>
	<view class="do_cell">
		<view class="do_cell_group" v-for="(curItem, index) in dataList" :key="index">
			<view class="do_cell_labels" @click="toCallback(cell)" v-for="(cell, idx) in curItem.children" :key="idx">
				<view class="do_cell_title">{{cell.title}}</view>
				<image src="@/static/images/right_arrow.png" class="arrow_right" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * Cell
	 * dataList { Object } 传入的列表对象
	 * [{children: [{title: String, path: String}]}]
	 */
	export default {
		name: 'DoCell',
		props: {
			dataList: {
				type: Array,
				default: []
			}
		},
		methods: {
			toCallback(selectedCell){
				this.$emit('selectedCellCallback', selectedCell)
			}
		}
	}
</script>

<style scoped>
	.do_cell{
		background: #f9f9f9;
	}
	.do_cell .do_cell_group{
		padding-bottom: 20rpx;
		background: #f9f9f9;
		border-bottom: 2rpx solid #f9f9f9;
	}
	.do_cell .do_cell_labels{
		background: #fff;
		padding-left: 80rpx;
		position: relative;
		z-index: 1;
	}
	.do_cell .do_cell_labels .do_cell_title{
		line-height: 100rpx;
		font-size: 28rpx;
		border-bottom: 2rpx solid #f9f9f9;
	}
	.do_cell .do_cell_labels .arrow_right{
		width: 40rpx;
		position: absolute;
		top: 35rpx;
		right: 20rpx;
		z-index: 2;
	}
</style>
