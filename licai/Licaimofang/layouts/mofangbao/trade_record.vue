<template>
	<view class="trade_record">
		<view class="title">
			<text class="text">{{getLang('mofangbao_p5')}}</text>
			<view class="more">></view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'TradeRecord',
		mixins: [langMixins],
	}
</script>

<style scoped>
	.trade_record{
		padding: 20upx;
	}
	.trade_record .title{
		position: relative;
	}
	.trade_record .text{
		vertical-align: top;
		font-weight: bold;
		padding-left: 20upx;
	}
	.trade_record .more{
		position: absolute;
		right: 0;
		font-weight: bold;
		color: #666;
		font-size: 24upx;
		top: 5upx
	}
</style>
