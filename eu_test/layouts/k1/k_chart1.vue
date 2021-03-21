<template>
	<view class="tv_chart_container" id="tv_chart_container">
		<iframe v-if="showChart" id="chart" width="100%" scrolling="no" frameborder="0" :src="chartHtml" style="height: 100%;"></iframe>
	</view>
</template>

<script>
	/**
	 * K线图
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	let wv = null
	export default {
		name: 'KChart',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				chartHtml: '',
				showChart: false
			}
		},
		methods: {
			/**
			 * 创建k线图
			 */
			createKlineChart(id){
				let p = 2
				switch(Number(id)){
					case 1 : case 2 : case 5 : case 6 :
					  p = 4
					  break;
					case 10: 
					  p = 5
					  break;
				}
				const ver = Math.random()
				const lang = this.getGlobalLang
				const url = '/hybrid/html/kxt/index.html?market=USDT&token='+id+'&pricescale='+p+'&lang='+lang+'&secai=131b2e&ver='+ver
				this.chartHtml = url				
				// #ifdef APP-PLUS
				this.showChart = false
				wv = plus.webview.create("","custom-webview",{
				      plusrequire:"none",
				      'uni-app': 'none',
				      top: '350px',
				      height: '400px',
				      kernel: 'UIWebview'  
				})
				wv.loadURL(url)
				const currentWebview = this.$mp.page.$getAppWebview()
				currentWebview.append(wv);
				// #endif
				this.showChart = true
				
			}
		},
		created() {
			const id = this.getCurrentPageData('opt').id
			this.createKlineChart(id)
		}
	}
</script>

<style scoped>
	.tv_chart_container{
		margin-top: 20upx;
		height: 800upx;
	}
</style>
