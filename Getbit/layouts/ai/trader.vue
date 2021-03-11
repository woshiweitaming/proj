<template>
	<view class="trader">
		<view class="title">
			<view class="text">交易员清单</view>
			<view class="search">
				<u-search shape="square" placeholder="搜索交易员" bg-color="#fff" :show-action="false"></u-search>
			</view>
		</view>
		<view class="type">
			<u-tag v-for="(curItem, index) in tagList" :text="curItem" type="primary" :key="index" />
		</view>
		<view class="record">
			<Nodata />
		</view>
	</view>
</template>

<script>
	import Nodata from '@/components/no_data/index.vue'
	export default {
		name: 'Trader',
		data(){
			return {
				tagList: ['周收益率', '交易胜率']
			}
		},
		components: {
			Nodata
		}
	}
</script>

<style scoped>
	.trader{
		margin-top: 40upx;
	}
	.trader .title{
		display: flex;
	}
	.trader .text{
		width: 60%;
		line-height: 60upx;
		font-size: 32upx;
	}
	.trader .search{
		width: 40%;
	}
	.type{
		margin-top: 20upx;
	}
	.u-tag{
		margin-right: 20upx;
	}
	.record{
		padding-top: 20upx;
		margin-top: 40upx;
	}
</style>
