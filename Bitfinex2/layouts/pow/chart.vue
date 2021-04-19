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
				return [2,2]
			},
			tooltipFormatter(lang, data){
				console.log(data)
				return params => {
					return '111111'
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