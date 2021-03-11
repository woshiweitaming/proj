<template>
	<view class="echarts_class">
		<view class="title">{{getLangs('powp3')}}</view>
		<view class="sub_title">{{getLangs('powp4')}}<text class="pool_rate">{{poolRate}}</text><u-tag class="unit" :text="unit" type="primary" size="mini" /></view>
		<view class="echarts_main">
			<Chart class="echarts" refs="echart" :option="resourceData"></Chart>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import Chart from './chart.vue'
	export default {
		name: 'PowEchart',
		props: {
			poolRate: {
				type: String,
				default: ''
			},
			unit: {
				type: String,
				default: ''
			},
			resourceData: {
				type: Object,
				default: {}
			}
		},
		components: {
			Chart
		},
		mixins: [commonMixins, langsMixins],
	}
</script>

<style scoped>
	.echarts_class{
		background: #fff;
	}
	.echarts_class .title,
	.echarts_class .sub_title{
		line-height: 60upx;
		font-size: 28upx;
		padding: 0 20upx;
	}
	.echarts_class .sub_title{
		font-size: 24upx;
		color: #aaa;
		position: relative;
	}
	.echarts_class .pool_rate{
		font-size: 24upx;
		color: #007AFF;
		font-weight: bold;
		padding-left: 30upx;
	}
	.echarts_class .unit{
		font-size: 24upx;
		color: #007AFF;
		font-weight: bold;
		position: absolute;
		right: 20upx;
	}
	.echarts_class .echarts_main{
		height: 400upx;
		padding: 20upx;
	}
	.echarts{
		height: 100%;
	}
</style>
