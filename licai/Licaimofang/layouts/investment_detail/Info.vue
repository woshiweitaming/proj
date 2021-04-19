<template>
	<view class="info">
		<view class="summary">
			<view class="name">{{opt.pro_name}}</view>
			<view class="money">{{opt.amount.toString()}}{{getLang('investment_detail_p10')}}</view>
			<view class="status">{{opt.status == 0 ? getLang('my_investment_p5') : getLang('my_investment_p6')}}</view>
		</view>
		<view class="details">
			<view class="labels">
				<view class="name">{{getLang('investment_detail_p2')}}</view>
				<view class="value profit">{{opt.ExpectedReturn}}{{getLang('investment_detail_p10')}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('investment_detail_p3')}}</view>
				<view class="value">{{opt.add_time}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('investment_detail_p4')}}</view>
				<view class="value">{{opt.end_time}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('investment_detail_p5')}}</view>
				<view class="value">{{getLang('investment_detail_p11')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Info',
		mixins: [langMixins],
		props: ['opt'],
	}
</script>

<style scoped>
	.info{
		padding: 40upx 0 0 0;
		text-align: center;
		background: #fff;
	}
	.info .name{
		color: #666
	}
	.info .money{
		color: #222;
		font-size: 50upx
	}
	.info .status{
		color: #4CD964;
	}
	.summary{
		border-bottom: 1px solid #f9f9f9;
		padding-bottom: 40upx;
	}
	.labels{
		display: flex;
		padding: 0 20upx;
	}
	.labels .name{
		width: 30%;
		line-height: 60upx;
		color: #aaa;
	}
	.labels .value{
		width: 70%;
		text-align: right;
		line-height: 60upx;
		color: #aaa;
	}
	.labels .profit{
		color: #222;
	}
</style>
