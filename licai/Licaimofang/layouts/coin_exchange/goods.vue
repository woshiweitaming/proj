<template>
	<view class="goods">
		<view class="title">{{getLang('shop_p6')}}</view>
		<view class="goods_list">
			<view class="goods_labels" v-for="(curItem, index) in dataList" :key="index">
				<view class="goods_items">
					<image class="img"></image>
					<view class="name">{{curItem.name}}</view>
					<view class="coin">{{curItem.coin}}{{getLang('shop_p7')}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Goods',
		mixins: [langMixins],
		data(){
			return {
				dataList: [
					{
						name: '商品1',
						coin: 10000
					},
					{
						name: '商品2发送到发多少发送到发送',
						coin: 10000
					},
					{
						name: '商品3',
						coin: 10000
					}
				]
			}
		}
	}
</script>

<style scoped>
	.goods{
		margin-top: -140upx;
		padding: 20upx;
		background: #fff;
	}
	.title{
		line-height: 80upx;
		font-size: 32upx;
		font-weight: bold;
	}
	.goods_list{
		display: flex;
		flex-wrap: wrap;
	}
	.goods_labels{
		width: 50%;
		padding: 10upx;
		margin-bottom: 10upx;
		text-align: center;
	}
	.goods_items{
		border: 1px solid #f9f9f9;
		border-radius: 20upx;
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.05);
	}
	.img{
		width: 100%;
		height: 300upx;
	}
	.name{
		font-weight: bold;
		padding-bottom: 10upx;
		white-space:nowrap;
		text-overflow:ellipsis;
		overflow:hidden;
		display: block;
		padding: 0 5px;
	}
	.coin{
		font-weight: bold;
		color: #F0AD4E;
		padding-bottom: 20upx;
		font-size: 26upx
	}
</style>
