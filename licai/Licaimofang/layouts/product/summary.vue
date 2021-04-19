<template>
	<view class="summary">
		<view class="name">{{pro_name}}</view>
		<view class="info">
			<view class="labels">
				<view class="span">{{getLang('product_p2')}}</view>
				<view class="value">{{summary.min_amount}}{{getLang('product_p5')}}</view>
			</view>
			<view class="labels">
				<view class="span">{{getLang('product_p3')}}</view>
				<view class="value">{{summary.deal_rate}}%</view>
			</view>
			<view class="labels">
				<view class="span">{{getLang('product_p4')}}</view>
				<view class="value">{{summary.period}}{{getLang('product_p6')}}</view>
			</view>
		</view>
		<view class="tags">
			<view class="tag" v-for="(curItem, index) in tagList" :key="index">{{curItem}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Summary',
		mixins: [langMixins],
		props: ['pro_name', 'summary', 'tagList']
	}
</script>

<style scoped>
	.summary{
		padding: 20upx;
		height: 300upx;
		background: #282633;
	}
	.summary .name{
		color: #fff;
	}
	.info{
		display: flex;
		padding-top: 40upx;
	}
	.info .labels{
		width: 33.3333%;
	}
	.info .labels .span{
		font-size: 26upx;
		color: #aaa;
	}
	.info .labels .value{
		font-size: 40upx;
		color: #fff;
		line-height: 60upx;
	}
	.tags{
		display: flex;
		margin-top: 20upx;
	}
	.tags .tag{
		padding: 10upx;
		background: #e7c598;
		border-radius: 8upx;
		font-size: 24upx;
		color: #976c39;
		margin-right: 10upx;
	}
</style>
