<template>
	<view>
		<view class="echarts" :prop="option" :change:prop="echarts.update"></view>
	</view>
</template>
<script>
	export default {
		name: 'Echarts',
		props: {
			option: {
				type: Object,
				required: true
			},
		}
	}
</script>
<script module="echarts" lang="renderjs">
	let isupdate = false
	export default {
		data() {
			return {
				chart: null,
				start: 100,
				end: 90
			}
		},
		mounted() {
			if (typeof window.echarts === 'object') {
				this.init()
			} else {
				// 动态引入类库
				const script = document.createElement('script')
				script.src = './static/echarts/echart.min.js'
				script.onload = this.init
				document.head.appendChild(script)
			}
		},
		methods: {
			/**
			 * 初始化echarts
			 */
			init() {
				this.chart = echarts.init(this.$el)
				this.update(this.option)
			},
			/**
			 * 监测数据更新
			 * @param {Object} option
			 */
			update(option) {
				const that = this
				if (this.chart) {
					// 因App端，回调函数无法从renderjs外传递，故在此自定义设置相关回调函数
					if (option) {
						// tooltip
						if (option.tooltip) {
							// 判断是否设置tooltip的位置
							if (option.tooltip.positionStatus) {
								option.tooltip.position = this.tooltipPosition()
							}
							// 判断是否格式化tooltip
							if (option.tooltip.formatterStatus) {
								option.tooltip.formatter =  this.tooltipFormatter(option.tooltip.lang, option.tooltip.data)
							}
							if(option.seriese){
								option.series[4].itemStyle.normal.color = this.setColor1(option.tooltip.data)
								option.series[7].itemStyle.normal.color = this.setColor2(option.tooltip.data)
							}
						}
					}
					this.chart.on('dataZoom',function(event){
						isupdate = true
					    if(event.batch){
					    	that.start=event.batch[0].start;
					    	that.end=event.batch[0].end;
					    }else{
					    	that.start=event.start;
					    	that.end=event.end;
					    };
					});
					if(isupdate){
						option.dataZoom[0].start = this.start
						option.dataZoom[0].end = this.end
					}
					// 设置新的option
					this.chart.setOption(option)
				}
			},
			setColor1(data){
				return params => {
					const upColor="#1CAD90";//涨颜色
					const downColor="#CD4E65";//跌颜色
					var colorList;
					if (data.datas[params.dataIndex] > data.datas[params.dataIndex-1]) {
					   colorList = upColor;
					} else {
					   colorList = downColor;
					}
					return colorList;
				}
			},
			setColor2(data){
				return params => {
					const upColor="#1CAD90";//涨颜色
					const downColor="#CD4E65";//跌颜色
					var colorList;
					if (params.data >= 0) {
					   colorList = upColor;
					} else {
					   colorList = downColor;
					}
					return colorList;
				}
			},
			tooltipPosition(){
				return [2,2]
			},
			tooltipFormatter(lang, data){
				return params => {
					var i = params[0].dataIndex;
					// #ifdef H5
					if(lang === 'cn'){
						var html = `${data.times[i]}\n开：  ${data.datas[i][0]}\n高：  ${data.datas[i][3]}\n低：  ${data.datas[i][2]}\n收：  ${data.datas[i][1]}`
						return html
					}
					if(lang === 'cns'){
						var html = `${data.times[i]}\n開：  ${data.datas[i][0]}\n高：  ${data.datas[i][3]}\n低：  ${data.datas[i][2]}\n收：  ${data.datas[i][1]}`
						return html
					}
					if(lang === 'en'){
						var html = `${data.times[i]}\nOpen：  ${data.datas[i][0]}\nHigh：  ${data.datas[i][3]}\nLow：  ${data.datas[i][2]}\nClose：  ${data.datas[i][1]}`
						return html
					}
					if(lang === 'ja'){
						var html = `${data.times[i]}\n開：  ${data.datas[i][0]}\n高さ：  ${data.datas[i][3]}\n低い：  ${data.datas[i][2]}\nおさめる：  ${data.datas[i][1]}`
						return html
					}
					if(lang === 'ko'){
						var html = `${data.times[i]}\n열다：  ${data.datas[i][0]}\n높다：  ${data.datas[i][3]}\n낮다：  ${data.datas[i][2]}\n받다：  ${data.datas[i][1]}`
						return html
					}
					if(lang === 'vi'){
						var html = `${data.times[i]}\nmở：  ${data.datas[i][0]}\ncao：  ${data.datas[i][3]}\nthấp：  ${data.datas[i][2]}\nthu thập：  ${data.datas[i][1]}`
						return html
					}
					return
					// #endif
				    if(lang === 'cn'){
				    	var html = `<div style="width: 100px;">
				        	<span style="display: block; font-size: 12px"></span><span>${data.times[i]}</span>
				    	    <span style="width:100%;display: flex"><span style="flex: 1;">开</span><span style="flex: 1; text-align: right">${data.datas[i][0]}</span></span>
				    		<span style="width:100%;display: flex"><span style="flex: 1;">高</span><span style="flex: 1; text-align: right">${data.datas[i][3]}</span></span>
				    		<span style="width:100%;display: flex"><span style="flex: 1;">低</span><span style="flex: 1; text-align: right">${data.datas[i][2]}</span></span>
				    		<span style="width:100%;display: flex"><span style="flex: 1;">收</span><span style="flex: 1; text-align: right">${data.datas[i][1]}</span></span>
				    	</div>`
						return html
					}
					if(lang === 'en'){
						var html = `<div style="width: 100px;">
						<span style="display: block; font-size: 12px"></span><span>${data.times[i]}</span>
						<span style="width:100%;display: flex"><span style="flex: 1;">Open</span><span style="flex: 1; text-align: right">${data.datas[i][0]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">High</span><span style="flex: 1; text-align: right">${data.datas[i][3]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">Low</span><span style="flex: 1; text-align: right">${data.datas[i][2]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">Close</span><span style="flex: 1; text-align: right">${data.datas[i][1]}</span></span>
						</div>`
						return html
					}
					if(lang === 'cns'){
						var html = `<div style="width: 100px;">
						<span style="display: block; font-size: 12px"></span><span>${data.times[i]}</span>
						<span style="width:100%;display: flex"><span style="flex: 1;">開</span><span style="flex: 1; text-align: right">${data.datas[i][0]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">高</span><span style="flex: 1; text-align: right">${data.datas[i][3]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">低</span><span style="flex: 1; text-align: right">${data.datas[i][2]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">收</span><span style="flex: 1; text-align: right">${data.datas[i][1]}</span></span>
						</div>`
						return html
					}
					if(lang === 'ja'){
						var html = `<div style="width: 100px;">
						<span style="display: block; font-size: 12px"></span><span>${data.times[i]}</span>
						<span style="width:100%;display: flex"><span style="flex: 1;">開く</span><span style="flex: 1; text-align: right">${data.datas[i][0]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">高さ</span><span style="flex: 1; text-align: right">${data.datas[i][3]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">低い</span><span style="flex: 1; text-align: right">${data.datas[i][2]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">おさめる</span><span style="flex: 1; text-align: right">${data.datas[i][1]}</span></span>
						</div>`
						return html
					}
					if(lang === 'ko'){
						var html = `<div style="width: 100px;">
						<span style="display: block; font-size: 12px"></span><span>${data.times[i]}</span>
						<span style="width:100%;display: flex"><span style="flex: 1;">열다</span><span style="flex: 1; text-align: right">${data.datas[i][0]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">높다</span><span style="flex: 1; text-align: right">${data.datas[i][3]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">낮다</span><span style="flex: 1; text-align: right">${data.datas[i][2]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">받다</span><span style="flex: 1; text-align: right">${data.datas[i][1]}</span></span>
						</div>`
						return html
					}
					if(lang === 'vi'){
						var html = `<div style="width: 100px;">
						<span style="display: block; font-size: 12px"></span><span>${data.times[i]}</span>
						<span style="width:100%;display: flex"><span style="flex: 1;">mở</span><span style="flex: 1; text-align: right">${data.datas[i][0]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">cao</span><span style="flex: 1; text-align: right">${data.datas[i][3]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">thấp</span><span style="flex: 1; text-align: right">${data.datas[i][2]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">thu thập</span><span style="flex: 1; text-align: right">${data.datas[i][1]}</span></span>
						</div>`
						return html
					}
				}
			}
		}
	}
</script>

<style scoped>
	.echarts{
		height: 100%
	}
</style>
