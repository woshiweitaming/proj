<template>
	<view class="profit">
		<view class="labels">
			<view class="name">{{getLang('mofangbao_p2')}}</view>
			<view class="value">0</view>
		</view>
		<view class="labels">
			<view class="name">{{getLang('mofangbao_p3')}}</view>
			<view class="value">0</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Profit',
		mixins: [langMixins],
	}
</script>

<style scoped>
	.profit{
		display: flex;
		padding-top: 40upx;
	}
	.profit .labels{
		width: 50%;
		text-align: center;
	}
	.profit .labels .name{
		font-size: 24upx;
		color: #aaa;
	}
	.profit .labels .value{
		font-size: 50upx;
	}
</style>
