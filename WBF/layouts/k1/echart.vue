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
				end: 95
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
								option.tooltip.formatter =  this.tooltipFormatter(option.tooltip.lang, option.tooltip.data, option.tooltip.extendsObj)
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
			tooltipPosition(){
				return [0,-2]
			},
			tooltipFormatter(lang, data, extendsObj){
				return params => {
					var i = params[0].dataIndex;
				    if(lang === 'cn'){
				    	var html = `<div style="width: 100px;">
				        	<span style="display: block; font-size: 12px"></span><span>${data.times[i]}</span>
				    	    <span style="width:100%;display: flex"><span style="flex: 1;">开</span><span style="flex: 1; text-align: right">${data.datas[i][0]}</span></span>
				    		<span style="width:100%;display: flex"><span style="flex: 1;">高</span><span style="flex: 1; text-align: right">${data.datas[i][3]}</span></span>
				    		<span style="width:100%;display: flex"><span style="flex: 1;">低</span><span style="flex: 1; text-align: right">${data.datas[i][2]}</span></span>
				    		<span style="width:100%;display: flex"><span style="flex: 1;">收</span><span style="flex: 1; text-align: right">${data.datas[i][1]}</span></span>
				    	</div>
						<div class="VOL" style="top:240px;width:95%;position: absolute; font-size: 10px">
						<span style="color:#62759A;margin-right:5px;">VOL:${data.vols[i]}</span>
						<span style="color:#6D1FF3;margin-right:5px;">MA5:${extendsObj.pma5[i]}</span>
						<span style="color:#FFF5A0">MA10:${extendsObj.pma10[i]}</span>
						<span style="color:#6AE5D0">MA30:${extendsObj.pma30[i]}</span>
						</div>
						<div class="macd" style="top:340px;width:95%;;position: absolute; font-size: 10px">
						<span style="color:#62759A;margin-right:5px;">MACD:(12,26,9)</span>
						<span style="color:#CD4E65;margin-right:5px;">DIF:${extendsObj.macd.dif[i]}</span>
						<span style="color:#1CAD90;margin-right:5px;">DEA:${extendsObj.macd.dea[i]}</span>
						<span style="color:#62759A;margin-right:5px;">MACD:${extendsObj.macd.macd[i]}</span>
						</div>
						`
						return html
					}
					if(lang === 'en'){
						var html = `<div style="width: 100px;">
						<span style="display: block; font-size: 12px"></span><span>${data.times[i]}</span>
						<span style="width:100%;display: flex"><span style="flex: 1;">Open</span><span style="flex: 1; text-align: right">${data.datas[i][0]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">High</span><span style="flex: 1; text-align: right">${data.datas[i][3]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">Low</span><span style="flex: 1; text-align: right">${data.datas[i][2]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">Close</span><span style="flex: 1; text-align: right">${data.datas[i][1]}</span></span>
						</div>
						<div class="VOL" style="top:240px;width:95%;position: absolute; font-size: 10px">
						<span style="color:#62759A;margin-right:5px;">VOL:${data.vols[i]}</span>
						<span style="color:#6D1FF3;margin-right:5px;">MA5:${extendsObj.pma5[i]}</span>
						<span style="color:#FFF5A0">MA10:${extendsObj.pma10[i]}</span>
						<span style="color:#6AE5D0">MA30:${extendsObj.pma30[i]}</span>
						</div>
						<div class="macd" style="top:340px;width:95%;;position: absolute; font-size: 10px">
						<span style="color:#62759A;margin-right:5px;">MACD:(12,26,9)</span>
						<span style="color:#CD4E65;margin-right:5px;">DIF:${extendsObj.macd.dif[i]}</span>
						<span style="color:#1CAD90;margin-right:5px;">DEA:${extendsObj.macd.dea[i]}</span>
						<span style="color:#62759A;margin-right:5px;">MACD:${extendsObj.macd.macd[i]}</span>
						</div>`
						return html
					}
					if(lang === 'cns'){
						var html = `<div style="width: 100px; padding: 10px; background: #081723; opacity: 0.9; border: 1px solid #546b87;">
						<span style="display: block; font-size: 12px"></span><span>${data.times[i]}</span>
						<span style="width:100%;display: flex"><span style="flex: 1;">開</span><span style="flex: 1; text-align: right">${data.datas[i][0]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">高</span><span style="flex: 1; text-align: right">${data.datas[i][3]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">低</span><span style="flex: 1; text-align: right">${data.datas[i][2]}</span></span>
						<span style="width:100%;display: flex"><span style="flex: 1;">收</span><span style="flex: 1; text-align: right">${data.datas[i][1]}</span></span>
						</div>
						<div class="VOL" style="top:240px;width:95%;position: absolute; font-size: 10px">
						<span style="color:#62759A;margin-right:5px;">VOL:${data.vols[i]}</span>
						<span style="color:#6D1FF3;margin-right:5px;">MA5:${extendsObj.pma5[i]}</span>
						<span style="color:#FFF5A0">MA10:${extendsObj.pma10[i]}</span>
						<span style="color:#6AE5D0">MA30:${extendsObj.pma30[i]}</span>
						</div>
						<div class="macd" style="top:340px;width:95%;;position: absolute; font-size: 10px">
						<span style="color:#62759A;margin-right:5px;">MACD:(12,26,9)</span>
						<span style="color:#CD4E65;margin-right:5px;">DIF:${extendsObj.macd.dif[i]}</span>
						<span style="color:#1CAD90;margin-right:5px;">DEA:${extendsObj.macd.dea[i]}</span>
						<span style="color:#62759A;margin-right:5px;">MACD:${extendsObj.macd.macd[i]}</span>
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
						</div>
						<div class="VOL" style="top:240px;width:95%;position: absolute; font-size: 10px">
						<span style="color:#62759A;margin-right:5px;font-size: 12px">VOL:${data.vols[i]}</span>
						<span style="color:#6D1FF3;margin-right:5px;font-size: 12px">MA5:${extendsObj.pma5[i]}</span>
						<span style="color:#FFF5A0;font-size: 12px">MA10:${extendsObj.pma10[i]}</span>
						<span style="color:#6AE5D0;font-size: 12px">MA30:${extendsObj.pma30[i]}</span>
						</div>
						<div class="macd" style="top:340px;width:95%;;position: absolute; font-size: 10px">
						<span style="color:#62759A;margin-right:5px;font-size: 12px">MACD:(12,26,9)</span>
						<span style="color:#CD4E65;margin-right:5px;font-size: 12px">DIF:${extendsObj.macd.dif[i]}</span>
						<span style="color:#1CAD90;margin-right:5px;font-size: 12px">DEA:${extendsObj.macd.dea[i]}</span>
						<span style="color:#62759A;margin-right:5px;font-size: 12px">MACD:${extendsObj.macd.macd[i]}</span>
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
						</div>
						<div class="VOL" style="top:240px;width:95%;position: absolute; font-size: 10px">
						<span style="color:#62759A;margin-right:5px;">VOL:${data.vols[i]}</span>
						<span style="color:#6D1FF3;margin-right:5px;">MA5:${extendsObj.pma5[i]}</span>
						<span style="color:#FFF5A0">MA10:${extendsObj.pma10[i]}</span>
						<span style="color:#6AE5D0">MA30:${extendsObj.pma30[i]}</span>
						</div>
						<div class="macd" style="top:340px;width:95%;;position: absolute; font-size: 10px">
						<span style="color:#62759A;margin-right:5px;">MACD:(12,26,9)</span>
						<span style="color:#CD4E65;margin-right:5px;">DIF:${extendsObj.macd.dif[i]}</span>
						<span style="color:#1CAD90;margin-right:5px;">DEA:${extendsObj.macd.dea[i]}</span>
						<span style="color:#62759A;margin-right:5px;">MACD:${extendsObj.macd.macd[i]}</span>
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
						</div>
						<div class="VOL" style="top:240px;width:95%;position: absolute; font-size: 10px">
						<span style="color:#62759A;margin-right:5px;">VOL:${data.vols[i]}</span>
						<span style="color:#6D1FF3;margin-right:5px;">MA5:${extendsObj.pma5[i]}</span>
						<span style="color:#FFF5A0">MA10:${extendsObj.pma10[i]}</span>
						<span style="color:#6AE5D0">MA30:${extendsObj.pma30[i]}</span>
						</div>
						<div class="macd" style="top:340px;width:95%;;position: absolute; font-size: 10px">
						<span style="color:#62759A;margin-right:5px;">MACD:(12,26,9)</span>
						<span style="color:#CD4E65;margin-right:5px;">DIF:${extendsObj.macd.dif[i]}</span>
						<span style="color:#1CAD90;margin-right:5px;">DEA:${extendsObj.macd.dea[i]}</span>
						<span style="color:#62759A;margin-right:5px;">MACD:${extendsObj.macd.macd[i]}</span>
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
