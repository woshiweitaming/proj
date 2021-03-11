<template>
	<view class="live_data_class">
		<view class="live_data_label">
			<text class="box name">{{getLangs('leftmoney')}}</text>
			<text class="box leftmoney">{{getLeftmoney}}</text>
		</view>
		<view class="live_data_label">
			<view class="inner">
				<text :class="['box new_price', getClass(getWSData.gain)]">{{getWSData.close}}</text>
				<text :class="['box ratio', getClass(getWSData.gain)]">{{(getWSData.gain > 0 ?'+' : '-') + getWSData.gain}}%</text>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 实时数据
	 */
	import langsMixins from '@/mixins/lang_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	export default {
		name: 'LiveData',
		mixins: [langsMixins, userMixins, websocketMixins],
	}
</script>

<style scoped>
	.live_data_class{
		display: flex;
		border-bottom: 1px solid rgba(255,255,255,.05);
		padding-bottom: 20upx;
	}
	.live_data_label{
		flex: 1;
	}
	.live_data_label .box{
		display: block;
		color: #fff;
		font-size: 28upx
	}
	.live_data_label .inner .box{
		text-align: right;
	}
	.live_data_label .name{
		color: rgba(255,255,255,.5);
	}
	.live_data_label .leftmoney{
		color: #fff;
		font-size: 40upx
	}
	.live_data_label .new_price{
		font-size: 44upx
	}
</style>
