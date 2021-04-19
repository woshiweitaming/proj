<template>
	<view class="record">
		<u-gap height="20" bg-color="#f8fbfd"></u-gap>
		<view class="record_table">
			<view class="thead">
				<view class="td td1">{{getLang('investment_detail_p6')}}</view>
				<view class="td td2">{{getLang('investment_detail_p7')}}</view>
				<view class="td td2">{{getLang('investment_detail_p8')}}</view>
				<view class="td td2">{{getLang('investment_detail_p9')}}</view>
			</view>
			<view class="tbody">
				<view class="tr" v-for="(curItem, index) in dataList" :key="index">
					<view class="td td1">{{(index+1)}}</view>
					<view class="td td2">{{curItem.principal}}</view>
					<view class="td td2">{{curItem.amount}}</view>
					<view class="td td2 date">{{curItem.ctime}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Record',
		mixins: [langMixins],
		props: ['dataList']
	}
</script>

<style scoped>
	.record_table{
		background: #fff;
	}
	.thead,
	.tbody{
		display: flex;
		padding: 0 10upx;
	}
	.td{
		font-size: 26upx;
		color: #aaa;
		line-height: 60upx;
		border-bottom: 1px solid #eee;
	}
	.tbody .td{
		color: #222;
	}
	.td1{
		width: 10%;
	}
	.td2{
		width: 30%;
	}
	.td:last-child{
		text-align: right;
	}
	.date{
		color: #aaa !important
	}
</style>
