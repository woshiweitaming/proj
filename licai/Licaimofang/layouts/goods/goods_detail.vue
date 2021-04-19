<template>
	<view class="goods_detail">
		<view class="title">{{getLang('goods_p8')}}</view>
		<view class="desc">
			<rich-text :nodes="content"></rich-text>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'GoodsDetail',
		mixins: [langMixins],
		data(){
			return {
				content: ''
			}
		}
	}
</script>

<style scoped>
	.goods_detail{
		background: #fff;
		margin-top: 20upx;
	}
	.goods_detail .title{
		line-height: 80upx;
		border-bottom: 1px solid #f9f9f9;
		padding-left: 20upx;
	}
	.goods_detail .desc{
		padding: 20upx;
	}
</style>
