<template>
	<view>
		<view class="echarts" :prop="option" id="kline" :change:prop="echarts.update"  @click="echarts.onClick"></view>
	</view>
</template>

<script>
	export default {
		name: 'Echart',
		props: {
			option: {
				type: Object,
				required: true
			},
		},
		created() {
			// 设置随机数id
			let t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
			let len = t.length
			let id = ''
			for (let i = 0; i < 32; i++) {
				id += t.charAt(Math.floor(Math.random() * len))
			}
			this.option.id = id
		},
		methods: {
			/**
			 * renderjs内的点击事件，回调到父组件
			 * @param {Object} params
			 */
			onViewClick(params) {
				this.$emit('click', params)
			}
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
				end: 90,
				clickData: null
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
			init(){
				this.chart = echarts.init(document.getElementById('kline'))
				this.chart.on('click', params => {
					this.clickData = params
				})
				this.update(this.option)
			},
			/**
			 * 点击事件，可传递到外部
			 * @param {Object} event
			 * @param {Object} instance
			 */
			onClick(event, instance) {
				if (this.clickData) {
					// 把echarts点击事件相关的值传递到renderjs外
					instance.callMethod('onViewClick', {
						value: this.clickData.data,
						name: this.clickData.name,
						seriesName: this.clickData.seriesName
					})
					// 上次点击数据置空
					this.clickData = null
				}
			},
			/**
			 * 监测数据更新
			 * @param {Object} option
			 */
			update(option) {
				const that = this
				if (this.chart) {
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
		}
	}
</script>
<style scoped>
	.echarts{
		height: 1200upx;
	}
</style>
