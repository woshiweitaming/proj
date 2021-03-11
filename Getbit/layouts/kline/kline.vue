<template>
	<view class="kline_chart">
		<view class="tv_chart_container" id="tv_chart_container">
			<!-- <view class="chart1"></view>
			<view class="chart2"></view>
		    <Echart class="echarts" refs="echart" :option="option"></Echart> -->
			<iframe class="iframe" :src="url"></iframe>
		</view>
	</view>
</template>

<script>
	import klineMixins from '@/mixins/kline_mixins.js'
	import appConfig from '@/config/appConfig.js'
	var rawData = [];
	export default {
		name: 'Kline',
		props: ['opt', 'curType'],
		data(){
			return {
				url: ''
			}
		},
		watch: {
			curType: {
				handler(val){
					if(JSON.stringify(this.opt) != '{}'){
						this.url = '/hybrid/html/kline.html?pid='+this.opt.id+'&cid='+this.opt.fromcid+'&type='+this.curType+'&apiUrl='+appConfig.domain+'/exc_getkline.html'
					}
				},
				deep: true,
				immediate: true
			}
		},
	}
</script>

<style scoped>
	.iframe{
		width: 100%;
		height: 100%;
		border: none;
	}
	.kline_chart{
		margin-top: 40upx;
	}
	.tv_chart_container{
		position: relative;
		height: 1000upx;
	}
</style>
