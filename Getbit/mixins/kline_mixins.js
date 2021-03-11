const klineMixins = {
	methods: {
		// 计算MA
		calculateMA(dayCount, data) {
			var result = [];
			for (var i = 0, len = data.length; i < len; i++) {
				if (i < dayCount) {
					result.push('-');
					continue;
				}
				var sum = 0;
				for (var j = 0; j < dayCount; j++) {
					sum += data[i - j][1];
				}
				// console.log(sum, dayCount)
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
		},
		// 截取数字字符串 保留precision小数
		formatterNum(value, precision) {
			// console.log(value)
			let reg = new RegExp('^\\d+(?:\\.\\d{0,' + precision + '})?')
			return value.toString().match(reg)
		},
		MA(dayCount,data) {
			var result = [];
		
			for (var i = 0, len = data.length; i < len; i++) {
				if (i < dayCount) {
					result.push('-');
					continue;
				}
				var sum = 0;
				for (var j = 0; j < dayCount; j++) {
					sum += data[i - j][4];
				}
				result.push((sum / dayCount).toFixed(2));
			}
			return result;
		},
		draw(data, dates, volumes){
			let that=this;
			const dataMA5 = this.calculateMA(5, data);
			const dataMA10 = this.calculateMA(10, data);
			const dataMA30 = this.calculateMA(30, data);
			const volumeMA5 = this.calculateMA(5, volumes);
			const volumeMA10 = this.calculateMA(10, volumes);
			const macd = this.calcMACD(12,26,9,data,1);  
			const ma5 = this.MA(5,data)
			const ma10 = this.MA(10,data)
			const upColor = '#03ad91';
			const downColor = '#dd345b';
			const colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074',
				'#546570', '#c4ccd3'
			];
			const labelFont = 'bold 12px Sans-serif';
			const option = {
				backgroundColor: '#131e31',
				title: {
					show: false
				},
				legend: {
					show: false
				},
				visualMap: {
				    show: false,
				    seriesIndex: 4,
				    dimension: 2,
				    pieces: [{
				        value: 1,
				        color: downColor
				    }, {
				        value: -1,
				        color: upColor
				    }]
				},
				grid: [{
						top: '5%',
						left: 20,
						right: 20,
						height: '50%'
					},
					{
						top: '60%',
						left: 20,
						right: 20,
						height: '10%'
					},
					{
					    top: '80%',
					    left: 20,
					    right: 40,
					    height: '10%'
					}
				],
				axisPointer: { //坐标轴指示器配置项
					link: {
						xAxisIndex: 'all'
					},
					label: {
						backgroundColor: '#131e31',
						color: '#fff',
						borderColor: 'rgb(99, 117, 139)',
						borderWidth: 1,
						borderRadius: 2,
						fontSize: 10
					}
				},
				xAxis: [{
					type: 'category', //坐标轴类型。(value:数值轴，适用于连续数据。,category:类目轴，适用于离散的类目数据,time: 时间轴，适用于连续的时序数据,log:对数轴。适用于对数数据)
					data: dates, //类目数据，在类目轴（type: 'category'）中有效。
					scale: true,
					boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
					axisLine: {
						show: false
					}, //坐标轴轴线相关设置
					axisTick: {
						show: false
					}, //坐标轴刻度相关设置。
					axisLabel: {
						show: false,
					}, //坐标轴刻度标签的相关设置。
					splitLine: {
						show: false,
						lineStyle: {
							color: 'rgba(255,255,255, 0.1)'
						}
					}, //坐标轴在 grid 区域中的分隔线。
					min: 'dataMin', //坐标轴刻度最小值。可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度。
					max: 'dataMax', //坐标轴刻度最大值。可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。
					axisPointer: {
						label: {
							margin: 200
						}
					},
				}, {
				    type: 'category',
				    gridIndex: 1, //x 轴所在的 grid 的索引，默认位于第一个 grid。
				    data: dates, //类目数据，在类目轴（type: 'category'）中有效。
				    scale: true,
				    boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
				    axisLine: {
					   show: false,
					   lineStyle: {
						   color: 'rgba(255,255,255,1)',
						   width: 1
					   }
				    }, //坐标轴轴线相关设置
				    axisTick: {
					   show: false
			    	}, //坐标轴刻度相关设置。
				    axisLabel: { //坐标轴刻度标签的相关设置。
					    show: true,
					    margin: 6,
					    fontSize: 10,
					    color: 'rgba(99, 117, 139, 1.0)',
					    formatter: function(value) {
						    return echarts.format.formatTime('MM-dd', value);
					    }
				    },
				    splitNumber: 20,
				    splitLine: {
					    show: false,
					    lineStyle: {
						    color: 'rgba(255,255,255, 0.1)'
					    }
				    }, //坐标轴在 grid 区域中的分隔线。
				    min: 'dataMin', //坐标轴刻度最小值。可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度。
				    max: 'dataMax', //坐标轴刻度最大值。可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。
			    },
				{ //幅图
				    type: 'category',
				    gridIndex: 2,
				    data: dates,
				    axisLabel: {
				        show: false
				    },
				    axisTick: {
				        show: false
				    },
				    axisLine:{//axisLine决定是否显示坐标刻度
				        show:false
				    },
				}],
				yAxis: [{
					type: 'value', //坐标轴类型。(value:数值轴，适用于连续数据。,category:类目轴，适用于离散的类目数据,time: 时间轴，适用于连续的时序数据,log:对数轴。适用于对数数据)
					position: 'right', //y 轴的位置。'left','right'
					scale: true, //是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。(在设置 min 和 max 之后该配置项无效。)
					axisLine: {
						show: true
					}, //坐标轴轴线相关设置。
					axisTick: {
						show: true,
						inside:true
					}, //坐标轴刻度相关设置。
					axisLabel: { //坐标轴刻度标签的相关设置。
						show: true,
						color: 'rgba(99, 117, 139, 1.0)',
						inside: true,
						fontSize: 10,
						formatter: function(value) {
							return Number(value).toFixed(2)
						}
					},
					splitLine: {
						show: false,
						lineStyle: {
							color: 'rgba(255,255,255, 0.1)'
						}
					}, //坐标轴在 grid 区域中的分隔线。
				}, {
			    	type: 'value',
				    position: 'right',
				    scale: true,
				    gridIndex: 1,
				    axisLine: {
					   show: false
			    	},
				    axisTick: {
					   show: false
				    },
				    axisLabel: {
					   show: false
				    },
				    splitLine: {
					   show: false
				    }
			    }, 
				{ //幅图
			        z:4, 
					gridIndex: 2,
					splitNumber: 4,
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
			    }],
				animation: false, //是否开启动画。
				color: colorList,
				tooltip: {
					show: true, //是否显示提示框组件，包括提示框浮层和 axisPointer。
					trigger: 'axis', //触发类型。item,axis,none
					formatter(params){
						let tooltip = '';
						let time = '', open = 0, high = 0, low = 0, close = 0, amount = 0;
						for (var i = 0; i < params.length; i++) {
							if (params[i].seriesName === '日K') {
								time = params[i].name;
								open = params[i].data.length > 1 ? Number(that.formatterNum(params[i].data[1], 2)) : 0;
								close = params[i].data.length > 1 ? Number(that.formatterNum(params[i].data[2], 2)) : 0;
								low = params[i].data.length > 1 ? Number(that.formatterNum(params[i].data[3], 2)) : 0;
								high = params[i].data.length > 1 ? Number(that.formatterNum(params[i].data[4], 2)) : 0;
								amount = params[i].data.length > 1 ? Number(that.formatterNum(params[i].data[5], 2)) : 0;
								// console.log(time,open,close,low,high,amount)
								tooltip = '<div class="charts-tooltip">' +
									'<div class="charts-tooltip-row"><div class="ctr-label">' + '时间' + '</div><div class="ctr-value">' + time + '</div></div>' + 
									'<div class="charts-tooltip-row"><div class="ctr-label">' + '开' + '</div><div class="ctr-value">' + open + '</div></div>' + 
									'<div class="charts-tooltip-row"><div class="ctr-label">' + '高' + '</div><div class="ctr-value">' + high + '</div></div>' + 
									'<div class="charts-tooltip-row"><div class="ctr-label">' + '低' + '</div><div class="ctr-value">' + low + '</div></div>' + 
									'<div class="charts-tooltip-row"><div class="ctr-label">' + '收' + '</div><div class="ctr-value">' + close + '</div></div>' + 
									'<div class="charts-tooltip-row"><div class="ctr-label">' + '数量' + '</div><div class="ctr-value">' +amount + '</div></div></div>';
							}
							if (params[i].seriesName === 'MA5') {
								that.MA5 = params[i].data !== 'NAN' ? Number(that.formatterNum(params[i].data, 2)) : 0
							}
							if (params[i].seriesName === 'MA10') {
								that.MA10 = params[i].data !== 'NAN' ? Number(that.formatterNum(params[i].data, 2)) : 0
							}
							if (params[i].seriesName === 'MA30') {
								that.MA30 = params[i].data !== 'NAN' ? Number(that.formatterNum(params[i].data, 2)) : 0
							}
							if (params[i].seriesName === 'VolumeMA5') {
								that.volMA5 = params[i].data !== 'NAN' ? Number(that.formatterNum(params[i].data, 2)) : 0
							}
							if (params[i].seriesName === 'VolumeMA10') {
								that.volMA10 = params[i].data !== 'NAN' ? Number(that.formatterNum(params[i].data, 2)) : 0
							}
						}
						return tooltip;
					},
					triggerOn: 'click', //提示框触发的条件 'mousemove','click','mousemove|click','none'
					textStyle: {
						fontSize: 10
					}, //提示框浮层的文本样式
					backgroundColor: 'rgba(30,42,66,0.8);', //提示框浮层的背景颜色。
					borderColor: '#2f3a56', //提示框浮层的边框颜色。
					borderWidth:2,
					position: function(pos, params, el, elRect, size) { //提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。
						var obj = {
							top: 20
						};
						obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 10;
						return obj;
				    },
					axisPointer: { //坐标轴指示器配置项。
						label: {
							color: 'rgba(255,255,255,.87)',
							fontSize: 9,
							backgroundColor: '#020204',
							borderColor: "#9c9fa4",
							shadowBlur: 0,
							borderWidth: 0.5,
							padding: [4, 2, 3, 2],
						},
						animation: false,
						type: 'cross',
						lineStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: 'rgba(30, 42, 66, 0.1)' // 0% 处的颜色
								}, {
									offset: 0.7,
									color: 'rgba(30, 42, 66,0.9)' // 100% 处的颜色
								}, {
									offset: 1,
									color: 'rgba(30, 42, 66,0.2)' // 100% 处的颜色
								}]
							},
							width: 10,
							shadowColor: 'rgba(30, 42, 66,0.7)',
							shadowBlur: 0,
							shadowOffsetY: 68,
						}
					}
				},
				dataZoom: [{ //用于区域缩放
					type: 'inside',
					xAxisIndex: [0, 1],
					realtime: false,
					start: 50,
					end: 100,
				}],
				series: [
					{
						type: 'candlestick',
						name: '日K',
						data: data,
						itemStyle: {
							color: upColor,
							color0: downColor,
							borderColor: upColor,
							borderColor0: downColor
						},
						markPoint: {
							symbol: 'rect',
							symbolSize: [-10, 0.5],
							symbolOffset: [5, 0],
							itemStyle: {
								color: 'rgba(255,255,255,.87)'
							},
							label: {
								color: 'rgba(255,255,255,.87)',
								offset: [10, 0],
								fontSize: 10,
								align: 'left',
								formatter: function(params) {
									return Number(params.value).toFixed(2)
								}
							},
							data: [{
									name: 'max',
									type: 'max',
									valueDim: 'highest'
								},
								{
									name: 'min',
									type: 'min',
									valueDim: 'lowest'
								}
							]
						},
					}, 
					{
						name: 'MA5',
						type: 'line',
						data: dataMA5,
						symbol: 'none',//去除圆点
						smooth: true,
						lineStyle: { normal: { opacity: 1, width: 1, color: "#eef4ba" } },
						z: 5
					}, 
					{
						name: 'MA10',
						type: 'line',
						data: dataMA10,
						symbol: 'none',//去除圆点
						smooth: true,
						lineStyle: { normal: { opacity: 1, width: 1, color: '#83c1c5' } },
						z: 4
					},
					{
						name: 'MA30',
						type: 'line',
						data: dataMA30,
						symbol: 'none',//去除圆点
						smooth: true,
						lineStyle: { normal: { opacity: 1, width: 1, color: '#b39cd8' } },
						z: 3
					},
					{
					    name: 'Volume',
						type: 'bar',
						xAxisIndex: 1,
						yAxisIndex: 1,
						data:volumes,
					},
					{
						name: 'VolumeMA5',
						type: 'line',
						xAxisIndex: 1,
						yAxisIndex: 1,
						data: volumeMA5,
						symbol: 'none',//去除圆点
						smooth: true,
						lineStyle: { normal: { opacity: 1, width: 1, color: "#eef4ba" } },
						z: 5
					},
					{
						name: 'VolumeMA10',
						type: 'line',
						xAxisIndex: 1,
						yAxisIndex: 1,
						data: volumeMA10,
						symbol: 'none',//去除圆点
						smooth: true,
						lineStyle: { normal: { opacity: 1, width: 1, color: '#83c1c5' } },
						z: 4
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
					}, {
					    name: 'DEA',
					    type: 'line',
					    symbol: "none",
					    xAxisIndex: 2,
					    yAxisIndex: 2,
					    data: macd.dea,
					}
				]
			}
			return option
		}
	}
}

export default klineMixins