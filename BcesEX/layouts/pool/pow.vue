<template>
	<view class="pow_class">
		<view class="title">{{getLangs('poolp9')}}<text @tap="navigateTo('/pages/pow_record/index')" class="more">{{getLangs('order')}} ></text></view>
		<view class="pow_content">
			<view class="pow_items" v-for="(items, index) in dataList" :key="index" @tap="toPowDetail(items.algorithm, items.algorithmType)">
				<view class="labels">
					<view class="p1"><image class="icon" :src="items.logo"></image><text class="text">{{items.algorithm}}</text></view>
					<view class="tags">
						<u-tag class="tags_labels" size="mini" :text="curItems" v-for="(curItems, key) in items.usableCoin.split(',')" :key="key" />
					</view>
				</view>
				<view class="labels">
					<view class="p2">{{items.poolRate}}</view>
					<view class="p3">{{getLangs('poolp10')}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getMiningPoolList } from '@/api/user.js'
	export default {
		name: 'Pow',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				dataList: [
				]
			}
		},
		methods: {
			async getMiningPoolListHandler(){
				const res = await getMiningPoolList()
				this.dataList = res.list
			},
			toPowDetail(algorithm, algorithmType){
				const params = {
					algorithm: algorithm,
					algorithmType: algorithmType
				}
				this.navigateTo('/pages/pow_detail/index', params)
			}
		},
		watch: {
			show: {
				handler(val){
					this.getMiningPoolListHandler()
				},
				deep: true,
				immediate: true
			}
		}
	}
</script>

<style scoped>
	.pow_class{
		background: #fff;
		margin-top: 20upx;
	}
	.pow_class .title{
		line-height: 70upx;
		border-bottom: 1px solid #f9f9f9;
		padding: 0 20upx;
		position: relative;
		font-weight: bold;
		color: #14181F;
	}
	.pow_class .more{
		position: absolute;
		right: 20upx;
		color: #aaa;
		font-weight: normal;
		font-size: 24upx
	}
	.pow_items{
		display: flex;
		border-bottom: 1px solid #f9f9f9;
	}
	.pow_items:last-child{
		border-bottom: none;
	}
	.pow_items .labels{
		width: 50%;
		padding: 20upx;
	}
	.pow_items .labels .icon{
		width: 60upx;
		height: 60upx;
		padding-right: 10px;
		display: inline-block;
	}
	.pow_items .labels .text{
		vertical-align: top;
		display: inline-block;
	}
	.pow_items .labels .p1{
		color: #555;
		display: block;
		line-height: 60upx;
	}
	.pow_items .labels .p2{
		font-size: 40upx;
		color: #007AFF;
		text-align: right;
		line-height: 60upx;
		display: block;
	}
	.pow_items .labels .tags{
		display: flex;
	}
	.pow_items .labels .p3{
		font-size: 24upx;
		color: #aaa;
		text-align: right;
	}
	.tags_labels{
		margin-right: 2px;
	}
</style>
