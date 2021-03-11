<template>
	<view class="k_line_class">
		<view class="date_menu">
			<view @tap="changeDate(items)" :class="['date_label', items === current ? 'on' : '']" v-for="(items, index) in dateMenuList" :key="index">{{items}}</view>
		</view>
		<view class="tv_chart_container" id="tv_chart_container">
		   <Echart class="echarts" refs="echart" :option="option"></Echart>
		</view>
	</view>	
</template>

<script>
	/**
	 * K线图
	 */
	import { mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import Echart from '@/layouts/k/echart.vue'
	import { getHistory } from '@/api/k.js'		
	import Utils from '@/utils/Utils.js'
	/**
	 * 配置数据
	 */
	const bgColor = "#101C31";//背景
	const upColor="#1CAD90";//涨颜色
	const downColor="#CD4E65";//跌颜色
	// ma  颜色
	const ma5Color = "#39afe6";
	const ma10Color = "#da6ee8";
	const ma20Color = "#ffab42";
	const ma30Color = "#00940b";
	let calcEMA,calcDIF,calcDEA,calcMACD;
	let timer = null
	export default {
		name: 'KChart',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				dateMenuList: ['1M','5M','15M','30M','1H','1D'],
				current: '1M',
				option: {},
				kdata: []
			}
		},
		components: {
			Echart
		},
		computed: {
			...mapGetters({
				getWSData: 'getWSData'
			})
		},
		methods: {
			changeDate(date){
				this.current = date
			},
			/**
			 * 处理时间
			 */
			formatTime(ts){
				const date = Utils.toDate(ts)
				const timeArr = date.split(' ')
				const time = (timeArr[0].substring(5, timeArr[0].length)).replace('-', '/')
				const moment = timeArr[1].substring(0, 5)
				return time + ' ' +moment
			},
			async getHistoryHandler(){
				const types = [
					{
						name: '1M',
						value: '1min'
					},
					{
						name: '5M',
						value: '5min'
					},
					{
						name: '15M',
						value: '15min'
					},
					{
						name: '30M',
						value: '30min'
					},
					{
						name: '1H',
						value: '60min'
					},
					{
						name: '1D',
						value: '1day'
					}
				]
				const that = this
				const id = this.getCurrentPageData('opt').id
				if(id === '' || typeof id === 'undefined'){
					return
				}
				const params = {
					id: id,
					type: types.filter(res => res.name === this.current)[0].value
				}
				const res = await getHistory(params)
				const data = res.data
				let kdata = []
				data.forEach( items => {
					const now = items.ts * 1000
					const ts =  that.formatTime(now)
					const arr = [ts, items.open, items.close, items.low, items.high, items.vol]
					kdata.push(arr)
				})
				this.kdata = kdata
				this.option = this.initKOption(kdata)	
				setTimeout(() => {
					this.getHistoryHandler()
				}, 3000)
			},
			/**
			 * 更新k线数据
			 */
			updateKData(){
				const ts = this.formatTime(this.getWSData.ts * 1000)
				const arr = [ts, this.getWSData.open, this.getWSData.close, this.getWSData.low, this.getWSData.high, this.getWSData.vol]
				const kdata = this.kdata
				kdata.shift()
				kdata.push(arr)
				this.option = this.initKOption(kdata)	
			},
			initKOption(_cdata){
				const that = this
				const lang = this.getGlobalLang
				let cdata = JSON.parse(JSON.stringify(_cdata))
				var _data = this.splitData(cdata);
				var data = this.newData(_data)
				var macd=this.calcMACD(12,26,9,data.datas,1);  
				var ma5 =this.MA(5,data)
				var ma10 =this.MA(10,data)
				var pma5 =this.priceMA(5,data)
				var pma10 =this.priceMA(10,data)
				var pma30 =this.priceMA(30,data)
				var ma60 =this.priceMA(5,data)
				return {
				    tooltip: { //弹框指示器
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
						formatterStatus: true,
				        data: data,
				        lang: lang
				    },
				    color: [ma5Color, ma10Color, ma20Color, ma30Color],
				    grid: [{
				        id: 'gd1',
				        left: '0%',
				        right: '15%',
				        height: '240px', //主K线的高度,
				        top: '20px'
				    }, {
				        left: '0%',
				        right: '15%',
				        top: '300px',
				        height: '40px' //交易量图的高度
				    }, {
				        left: '0%',
				        right: '15%',
				        top: '360px', //MACD 指标
				        height: '70px'
				    }],
				    xAxis: [ //==== x轴
				        { //主图
				            type: 'category',
				            data: data.times,
				            scale: false,
				            boundaryGap: false,
				                    
				            axisLabel: { //label文字设置
				                color: '#9b9da9',
				                fontSize: 10,
				                show:true
				            },
				            axisTick: {
				                show: false
				            },
				            axisLine:{//axisLine决定是否显示坐标刻度
				                show:false
				            },
				            splitLine: {
				                show: true,
				                lineStyle: {
				                    color: '#172031',
				                    type:'solid'
				                }
				            },
				            splitNumber: 20,
				            min: 'dataMin',
				            max: 'dataMax',
				        
				        }, { //交易量图
				            type: 'category',
				            gridIndex: 1,
				            data: data.times,
				            axisLabel: { //label文字设置
				                show: false
				            
				            },
				            axisTick: {
				                show: false
				            },
				            
				                axisLine:{//axisLine决定是否显示坐标刻度
				                    show:false
				                },
				            
				        }, { //幅图
				            type: 'category',
				            gridIndex: 2,
				            data: data.times,
				            axisLabel: {
				                show: false
				            },
				            axisTick: {
				                show: false
				            },
				            
				                axisLine:{//axisLine决定是否显示坐标刻度
				                    show:false
				                },
				        }
				    ],
				    yAxis: [ //y轴
				        { //==主图
				            scale: true,
				            position:'right',
				    
				            axisLabel: { //label文字设置
				                color: '#c7c7c7',
				                inside: false, //label文字朝内对齐
				                show:true,
				            },
				            axisTick: {
				                show: false
				            },
				            
				                axisLine:{//axisLine决定是否显示坐标刻度
				                    show:true
				                },
				            
				            splitLine: { //分割线设置
				                show: true,
				                lineStyle: {
				                    color: '#172031',
				                    type:'solid',
				                
				                }
				            },
				        }, { //交易图
				            gridIndex: 1, splitNumber: 3, z:4,
				            position:'right',
				            axisLine: {
				                onZero: false
				            },
				            axisLine:{//axisLine决定是否显示坐标刻度
				                show:false
				            },
				        
				            axisTick: {
				                show: false
				            },
				            splitLine: {
				                show: false
				            },
				            axisLabel: { //label文字设置
				                color: '#c7c7c7',
				                inside: false, //label文字朝内对齐 
				                fontSize: 8
				            },
				        }, { //幅图
				            z:4, gridIndex: 2,splitNumber: 4,
				            position:'right',
				            axisLine: {
				                onZero: false
				            },
				            axisLine:{//axisLine决定是否显示坐标刻度
				                show:false
				            },
				        
				            axisTick: {
				                show: false
				            },
				            splitLine: {
				                show: false
				            },
				            axisLabel: { //label文字设置
				                color: '#c7c7c7',
				                inside: false, //label文字朝内对齐 
				                fontSize: 8
				            },
				        }
				    ],
				    dataZoom: [{
				            type: 'inside',
				            minValueSpan:4,
				            xAxisIndex: [0, 1, 2], //控件联动
				            start: 100,
				            end: 90,
				            throttle: 10,
				            top: '94%',
				            height: '6%',
				            show: false,
				            borderColor: '#f7f7f7',
				            textStyle: {
				                color: '#f7f7f7'
				            },
				            handleSize: '90%', //滑块图标
				            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
				            dataBackground: {
				                lineStyle: {
				                    color: '#fff'
				                }, //数据边界线样式
				                areaStyle: {
				                    color: '#8392A5'
				                } //数据域填充样式
				            }
				        },
				        // 		{
				        // 			type: 'inside',
				        // 			xAxisIndex: [0,1,2],//控件联动
				        // 		},
				    ],
				    animation: false, //禁止动画效果
				    backgroundColor: bgColor,
				    blendMode: 'source-over',
				    series: [{
				            name: '',
				            type: 'candlestick',
				            data: data.datas,
				            barWidth: 5,
				            barMaxWidth :6,
				            large: true,
				            largeThreshold: 100,
				            itemStyle: {
				                color: upColor,
				                color0: downColor,
				                borderColor: upColor,
				                borderColor0: downColor
				            },
				            markLine: {
				                data: {
				                    
				                }
				            }
				        }, {
				            name: 'MA7',
				            type: 'line',
				            data: that.calculateMA(5,data),
				            smooth: true,
				            symbol: "none", //隐藏选中时有小圆点
				            lineStyle: {
				                normal: {
				                    opacity: 1,
				                    color: '#6D1FF3',
				                    width: 1
				                }
				            },
				        },
				        {
				            name: 'MA15',
				            type: 'line',
				            data: that.calculateMA(15,data),
				            smooth: true,
				            symbol: "none",
				            lineStyle: { //标线的样式
				                normal: {
				                    opacity: 1,
				                    color: '#FFF5A0',
				                    width: 1
				                }
				            }
				        },
				        {
				            name: 'MA30',
				            type: 'line',
				            data: that.calculateMA(30,data),
				            smooth: true,
				            symbol: "none",
				            lineStyle: { //标线的样式
				                normal: {
				                    opacity: 1,
				                    color: '#6AE5D0',
				                    width: 1
				                }
				            }
				        },
				        {
				            name: 'Volumn',
				            type: 'bar',
				            xAxisIndex: 1,
				            yAxisIndex: 1,
				            data: data.vols,
				            barWidth: 5,
				            itemStyle: {
				                normal: {
				                    color: function(params) {
				                        var colorList;
				                        if (data.datas[params.dataIndex] > data.datas[params.dataIndex-1]) {
				                            colorList = upColor;
				                        } else {
				                            colorList = downColor;
				                        }
				                        return colorList;
				                    },
				                }
				            }
				        }, 
				        {
				            name: 'MA5',
				            type: 'line',
				            symbol: "none",
				            xAxisIndex: 1,
				            yAxisIndex: 1,
				            data: ma5,
				            lineStyle: {
				                normal: {
				                    color: '#CD4E65',
				                    width: 1
				                }
				            }
				        },
				        {
				            name: 'MA10',
				            type: 'line',
				            symbol: "none",
				            xAxisIndex: 1,
				            yAxisIndex: 1,
				            data: ma10,
				            lineStyle: {
				                normal: {
				                    color: '#1CAD90',
				                    width: 1
				                }
				            }
				        },
				        
				        {
				            name: 'MACD',
				            type: 'bar',
				            xAxisIndex: 2,
				            yAxisIndex: 2,
				            data: macd.macd,
				            barWidth: 5,
				            itemStyle: {
				                normal: {
				                    color: function(params) {
				                        var colorList;
				                        if (params.data >= 0) {
				                            colorList = upColor;
				                        } else {
				                            colorList = downColor;
				                        }
				                        return colorList;
				                    },
				                }
				            }
				        },
				            {
				            name: 'DIF',
				            type: 'line',
				            symbol: "none",
				            xAxisIndex: 2,
				            yAxisIndex: 2,
				            data: macd.dif,
				            // lineStyle: {
				            //     normal: {
				            //         color: '#1CAD90',
				            //         width: 1
				            //     }
				            // }
				        }, {
				            name: 'DEA',
				            type: 'line',
				            symbol: "none",
				            xAxisIndex: 2,
				            yAxisIndex: 2,
				            data: macd.dea,
				            // lineStyle: {
				            //     normal: {
				            //         opacity: 0.8,
				            //         color: '#CD4E65',
				            //         width: 1
				            //     }
				            // }
				        }
				    ]
				}

			},
			newData(data){
				// var data1 = []
				// for(var i in data.datas){
				// 	var close = data.datas[i][3]
				// 	data.datas[i].splice(3,1)
				// 	data.datas[i].splice(1,0,close)
				// }
				// console
				return data
			},
			/**
			 * 15:20 时:分 格式时间增加num分钟
			 * @param {Object} time 起始时间
			 * @param {Object} num
			 */
			addTimeStr(time,num){ 
				var hour=time.split(':')[0];
				var mins=Number(time.split(':')[1]);
				var mins_un=parseInt((mins+num)/60);
				var hour_un=parseInt((Number(hour)+mins_un)/24);
				if(mins_un>0){
					if(hour_un>0){
						var tmpVal=((Number(hour)+mins_un)%24)+"";
						hour=tmpVal.length>1? tmpVal:'0'+tmpVal;//判断是否是一位
					}else{
						var tmpVal=Number(hour)+mins_un+"";
						hour=tmpVal.length>1? tmpVal:'0'+tmpVal;
					}
					var tmpMinsVal=((mins+num)%60)+"";
					mins=tmpMinsVal.length>1? tmpMinsVal:0+tmpMinsVal;//分钟数为 取余60的数
				}else{
					var tmpMinsVal=mins+num+"";
					mins=tmpMinsVal.length>1? tmpMinsVal:'0'+tmpMinsVal;//不大于整除60
				} 
				return hour+":"+mins;
			},
			//获取增加指定分钟数的 数组  如 09:30增加2分钟  结果为 ['09:31','09:32'] 
			getNextTime(startTime, endTIme, offset, resultArr) {
				var result = this.addTimeStr(startTime, offset);
				resultArr.push(result);
				if (result == endTIme) {
					return resultArr;
				} else {
					return this.getNextTime(result, endTIme, offset, resultArr);
				}
			},
			time_arr(type) { 
				if(type.indexOf('us')!=-1){//生成美股时间段
					var timeArr = new Array();
					timeArr.push('09:30')
					return this.getNextTime('09:30', '16:00', 1, timeArr);
				}
				if(type.indexOf('hs')!=-1){//生成沪深时间段
					var timeArr = new Array();
						timeArr.push('09:30');
						timeArr.concat(this.getNextTime('09:30', '11:29', 1, timeArr)); 
						timeArr.push('13:00');
						timeArr.concat(this.getNextTime('13:00', '15:00', 1, timeArr)); 
					return timeArr;
				}
				if(type.indexOf('hk')!=-1){//生成港股时间段
					var timeArr = new Array();
						timeArr.push('09:30');
						timeArr.concat(this.getNextTime('09:30', '11:59', 1, timeArr)); 
						timeArr.push('13:00');
						timeArr.concat(this.getNextTime('13:00', '16:00', 1, timeArr)); 
					return timeArr;
				}
			},
			get_m_data(m_data,type) {
				var priceArr = new Array();
				var avgPrice = new Array();
				var vol = new Array();
				var times = this.time_arr(type); 
				m_data.data.forEach((v, i) => {
					priceArr.push(v[1]);
					avgPrice.push(v[2]);
					vol.push(v[3]); 
				})
				return {
					priceArr: priceArr,
					avgPrice: avgPrice,
					vol: vol,
					times: times
				}
			},
			/**
			 * 计算价格涨跌幅百分比
			 * @param {Object} price 当前价
			 * @param {Object} yclose 昨收价
			 */
			ratioCalculate(price,yclose){
				return ((price-yclose)/yclose*100).toFixed(3);
			},
			//数组处理
			splitData(rawData) {
				var datas = []; var times = [];var vols = []; 
				for (var i = 0; i < rawData.length; i++) {
					datas.push(rawData[i]);
					times.push(rawData[i].splice(0, 1)[0]);
					vols.push(rawData[i][4]); 
				}
				return {datas:datas,times:times,vols:vols};
			},
			fcalculateMA(dayCount,data) {
				var result = [];
				for (var i = 0, len = data.times.length; i < len; i++) {
					if (i < dayCount) {
						result.push('-');
						continue;
					}
					var sum = 0;
					for (var j = 0; j < dayCount; j++) {
						sum += data.datas[i - j][1];
					}
					result.push((sum / dayCount).toFixed(2));
				}
				return result;
			},
			MA(dayCount,data) {
				var result = [];
			
				for (var i = 0, len = data.times.length; i < len; i++) {
					if (i < dayCount) {
						result.push('-');
						continue;
					}
					var sum = 0;
					for (var j = 0; j < dayCount; j++) {
						sum += data.datas[i - j][4];
					}
					result.push((sum / dayCount).toFixed(2));
				}
				return result;
			},
			priceMA(dayCount,data) {
				var result = [];
			
				for (var i = 0, len = data.times.length; i < len; i++) {
					if (i < dayCount) {
						result.push('-');
						continue;
					}
					var sum = 0;
					for (var j = 0; j < dayCount; j++) {
						sum += data.datas[i - j][0];
					}
					result.push((sum / dayCount).toFixed(2));
				}
				return result;
			},
            calculateMA(dayCount,data) {
				var result = [];
				for (var i = 0, len = data.times.length; i < len; i++) {
					if (i < dayCount) {
						result.push('-');
						continue;
					}
					var sum = 0;
					for (var j = 0; j < dayCount; j++) {
						sum += data.datas[i - j][1];
					}
					result.push((sum / dayCount).toFixed(2));
				}
				return result;
			},
			/*
			 * 计算EMA指数平滑移动平均线，用于MACD
			 * @param {number} n 时间窗口
			 * @param {array} data 输入数据
			 * @param {string} field 计算字段配置
			 */
			calcEMA(n,data,field){
			    var i,l,ema,a;
			    a=2/(n+1);
			    if(field){
			        //二维数组
			        ema=[data[0][field]];  
			        for(i=1,l=data.length;i<l;i++){
			            ema.push((a*data[i][field]+(1-a)*ema[i-1]).toFixed(2));
			        }
			    }else{
			        //普通一维数组
			        ema=[data[0]];
			        for(i=1,l=data.length;i<l;i++){
			            ema.push((a*data[i]+(1-a)*ema[i-1]).toFixed(3) );
			        }
			    } 
			    return ema;
			},
			/*
			 * 计算DIF快线，用于MACD
			 * @param {number} short 快速EMA时间窗口
			 * @param {number} long 慢速EMA时间窗口
			 * @param {array} data 输入数据
			 * @param {string} field 计算字段配置
			 */
			calcDIF(short,long,data,field){
			    var i,l,dif,emaShort,emaLong;
			    dif=[];
			    emaShort=this.calcEMA(short,data,field);
			    emaLong=this.calcEMA(long,data,field);
			    for(i=0,l=data.length;i<l;i++){
			        dif.push((emaShort[i]-emaLong[i]).toFixed(3));
			    }
			    return dif;
			},
			/*
			 * 计算DEA慢线，用于MACD
			 * @param {number} mid 对dif的时间窗口
			 * @param {array} dif 输入数据
			 */
			calcDEA(mid,dif){
			    return this.calcEMA(mid,dif);
			},
			calcMACD(short,long,mid,data,field){
			    var i,l,dif,dea,macd,result;
			    result={};
			    macd=[];
			    dif=this.calcDIF(short,long,data,field);
			    dea=this.calcDEA(mid,dif);
			    for(i=0,l=data.length;i<l;i++){
			        macd.push(((dif[i]-dea[i])*2).toFixed(3));
			    }
			    result.dif=dif;
			    result.dea=dea;
			    result.macd=macd;
			    return result;
			}
		},
		created(){
			this.getHistoryHandler()
		}
	}
</script>

<style>
	.commColor {
	  width: 120px !important;
	  height: 150px;
	  padding: 0.1rem !important;
	  background: #081723;
	  opacity: 0.9;
	  position: relative;
	  border: 1px solid #546b87;
	}
	.commColor section {
	  position: absolute;
	  top: 0;
	  width: 110px !important;
	  padding: 0.1rem !important;
	}
	.commColor section p {
	  width: 100%;
	  font-weight: bold;
	  font-size: 0.12rem;
	  display: -webkit-box;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-pack: justify;
	      -ms-flex-pack: justify;
	          justify-content: space-between;
	  color: #fff;
	}
</style>
<style scoped>
	.k_line_class{
	}
	.k_line_class .date_menu{
		display: flex;
		justify-content: space-between;
	}
	.k_line_class .date_menu .date_label{
		flex: 1;
		padding: 10upx;
		text-align: center;
		color: #62759a;
		font-size: 30upx
	}
	.k_line_class .date_menu .date_label.on{
		color: #588bf7;
		border-bottom: 2px solid #588bf7;
	}
	.tv_chart_container{
		height: 900upx;
		margin-top: 10upx;
	}
</style>
