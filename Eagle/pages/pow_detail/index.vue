<template>
	<view class="pow_detail_class">
		<view class="page_class">
			<view class="pow_chart">
				<Echart :resourceData="getChartData" :poolRate="getData('poolRate')" :unit="getData('unit')" />
			</view>
			<view class="box">
				<view class="title">{{getLangs('powp6')}}</view>
				<view class="list">
					<u-tag v-for="(items, index) in getData('coinName') && getData('coinName').split(' ')" :key="index" :text="items" type="primary" size="mini" />
				</view>
			</view>
			<view class="box">
				<view class="title">{{getLangs('powp11')}}</view>
				<view class="list">
					<view class="labels">
						<view class="name">{{getLangs('powp9')}}</view>
						<view class="value">{{getData('coinName')}}</view>
					</view>
					<view class="labels">
						<view class="name">{{getLangs('powp13')}}</view>
						<view class="value">{{getData('rate')}}</view>
					</view>
					<view class="labels">
						<view class="name">{{getLangs('powp14')}}</view>
						<view class="value">{{getData('difficulty')}}</view>
					</view>
					<view class="labels">
						<view class="name">{{getLangs('powp15')}}</view>
						<view class="value">{{getData('nextDifficulty')}}</view>
					</view>
					<view class="labels" v-if="data.nextDay != null">
						<view class="name">{{getLangs('powp16')}}</view>
						<view class="value">{{getData('nextDay')}}</view>
					</view>
					<view class="labels">
						<view class="name">{{getLangs('powp17')}}</view>
						<view class="value">{{getData('workerNum')}}</view>
					</view>
					<view class="labels">
						<view class="name">{{getLangs('powp18')}}(GH/s)</view>
						<view class="value">{{getData('earn')}}</view>
					</view>
					<view class="labels">
						<view class="name">{{getLangs('powp19')}}</view>
						<view class="value">{{getData('settleType')}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom_btns">
			<view class="labels"><view @tap="navigateTo('/pages/pow_list/index')" class="btns">{{getLangs('powp20')}}</view></view>
			<!-- <view class="labels"><view class="btns">链接教程</view></view> -->
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getMiningPoolInfo } from '@/api/user.js'
	import Echart from '@/layouts/pow/echart.vue'
	export default {
		name: 'Pow',
		mixins: [commonMixins, langsMixins],
		components: {
			Echart
		},
		data(){
			return {
				algorithmType: '',
				data: {}
			}
		},
		methods: {
			async getMiningPoolInfoHandler(){
				const params = {
					algorithmType: this.algorithmType
				}
				const res = await getMiningPoolInfo(params)
				this.data = res
			},
			toDate(ts){
				var time = new Date(ts)
				var y = time.getFullYear();
				var m = time.getMonth()+1;
				var d = time.getDate();
				return this.add0(m)+'/'+this.add0(d)
			},
			add0(m){
				return m<10?'0'+m:m
			}
		},
		computed: {
			getData(){
				return (name) => {
					return this.data.coinRates ? this.data.coinRates[0][name] : ''
				}
			},
			getChartData(){
				if(this.data.miningPoolTrend){
					const that = this
					const lang = this.getGlobalLang
					const data = this.data.miningPoolTrend
					const date = data.date.map(res => {
						return that.toDate(Number(res))
					})
					const option = {
						    ooltip: { //弹框指示器
						        trigger: 'axis',
						        axisPointer: {
						            type: 'cross'
						        },
						        backgroundColor: 'rgba(0,0,0,.5)',
						        borderWidth: 1,
						        borderColor: '#546b87',
						        padding: 10,
						        textStyle:{
						            color:'#9b9da9',
						            fontSize : 12
						        },
						        data: data,
						        lang: lang,
								formatterStatus: true,
						    },
						    xAxis: {
						        type: 'category',
						        boundaryGap: false,
						        data: date,
								axisLine: {
								    lineStyle: {
									    color: '#bbb',
										type: 'dashed'
									},
								},
								splitLine: {
									lineStyle: {
									    color: ['#eee'],
										type: 'dashed'
									},
								},
								axisLabel: { 
								   interval: 7,
								},
						    },
						    yAxis: {
						        type: 'value',
								axisLine: {
								    lineStyle: {
									    color: '#bbb',
										type: 'dashed'
									},
								},
								splitLine: {
									lineStyle: {
									    color: ['#ccc'],
										type: 'dashed'
									},
								},
								interval: 5
						    },
							grid: {
								borderColor: '#ffffff',
								x: 30,
								y: 30
							},
						    series: [{
						        data: data.value,
						        type: 'line',
								smooth: true,
								symbol: 'none',
								lineStyle: {
									color: '#4990e7'
								},
						        areaStyle: {
									color: '#d5e8ff'
								}
						    }]
					}
					return option
				}
				return {}
			},
		},
		onLoad(opt) {
			this.algorithm = opt.algorithm
			this.algorithmType = opt.algorithmType
		},
		onShow() {
			this.getMiningPoolInfoHandler()
			this.setTitle(this.algorithm)
		}
	}
</script>

<style scoped>
	page{
		background: #f5f5f5;
	}
	.pow_detail_class{
		height: 100%;
		padding-bottom: 140upx;
		border-top: 1px solid #f9f9f9;
		background: #f9f9f9;
	}
	.page_class{
		height: 100%;
		overflow: auto;
	}
	.pow_chart{
		padding-top: 20upx;
	}
	.pow_detail_class .title{
		line-height: 60upx;
		font-size: 28upx;
		padding: 0 20upx;
		border-bottom: 1px solid #f9f9f9;
		margin-bottom: 20upx;
	}
	.box{
		margin-top: 20upx;
		background: #fff;
		padding-bottom: 20upx;
	}
	.pow_detail_class .list{
		padding: 0 20upx;
	}
	.box .list{
		position: relative;
	}
	.box .labels{
		position: relative;
		padding-left: 70%;	
		min-height: 60upx;
	}
	.box .labels .name{
		width: 65%;
		text-align: left;
		color: #AAAAAA;
		font-size: 24upx;
		position: absolute;
		left: 0;
		top: 0;
		line-height: 60upx
	}
	.box .labels .value{
		text-align: right;
		color: #333;
		font-size: 24upx;
		line-height: 60upx;
	}
	.bottom_btns{
		width: 100%;
		height: 140upx;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 10000;
		background: #fff;
		box-shadow: -5upx -5upx 20upx 5upx rgba(0,0,0,.1);
		padding: 0 20upx;
		display: flex;
		font-size: 24upx
	}
	.bottom_btns .labels{
		flex: 1;
		text-align: center;
	}
	.bottom_btns .labels .btns{
		background: #007AFF;
		width: 50%;
		display: inline-block;
		line-height: 80upx;
		border-radius: 10upx;
		color: #fff;
		font-weight: bold;
		text-align: center;
		margin-top: 20upx;
	}
</style>
