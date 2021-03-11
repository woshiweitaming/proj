var myChartDeep
// var data = {
//     "asks": [
//         ["10688.9", "4.64068215", "12"],
//         ["10689", "0.1", "1"],
//         ["10689.1", "0.17", "1"],
//         ["10689.4", "0.03337818", "2"],
//         ["10689.5", "0.25", "1"],
//         ["10689.6", "0.201", "2"],
//         ["10689.7", "0.28777592", "3"],
//         ["10689.8", "1.9253761", "3"],
//         ["10690.1", "0.31", "2"],
//         ["10690.3", "2.003", "3"],
//         ["10690.6", "0.5", "1"],
//         ["10690.9", "1.1", "2"],
//         ["10691", "0.20111165", "2"],
//         ["10691.2", "2.0676", "1"],
//         ["10691.3", "1.2", "2"],
//         ["10691.4", "0.2", "1"],
//     ],
//     "bids": [
//         ["10688.8", "0.258", "2"],
//         ["10688.1", "0.19427671", "2"],
//         ["10687.7", "2", "1"],
//         ["10687.6", "0.01", "1"],
//         ["10687.2", "0.02", "1"],
//         ["10686.8", "0.18698433", "1"],
//         ["10686.6", "0.96", "1"],
//         ["10686.5", "0.936", "1"],
//         ["10686.2", "0.465", "1"],
//         ["10686", "0.7", "2"],
//         ["10685.7", "0.15", "1"],
//         ["10685.6", "1.2", "2"],
//         ["10685.5", "0.11005049", "2"],
//         ["10685.4", "1.11774854", "2"],
//         ["10685.3", "0.98277445", "2"],
//         ["10685.2", "1", "1"],
//         ["10685.1", "1.5803824", "3"],
//         ["10685", "0.2", "1"],
//         ["10684.9", "0.6", "2"],
//         ["10684.8", "1.44", "2"],
//     ],
// }
var data = {
    asks: [],
    bids: []
}
var arr1 = [];
var arr2 = [];
var app = new Vue({
	el:'#app',
	methods: {
		draw(){
			var option = {
			        backgroundColor: '#141E46',
			        title: {
			            text: ''
			        },
			          tooltip : {
			                trigger: 'axis',
			                position: function (point, params, dom, rect, size) {
			                    return [point[0], point[1]];
			                },
			                backgroundColor:"#222E5D",
			                axisPointer: {
			                    type: 'cross',
			                    lineStyle:{
			                        color:'#60698D',
			                        type:'dashed'
			                    },
			                    label: {
			                        show:false,//坐标指示器
			                        fontSize:11,
			                        backgroundColor: '#222E5D',
			                    }
			                }
			            },
			            grid: {
			                containLabel: true,
			                left: '0%',
			                right: '0%',
			                bottom: '0%'
			            },
			     
			        grid: {
			            containLabel: true,
			            left: '0%',
			            right: '0%',
			            bottom: '0%'
			        },
			        textStyle:{
			            color:'#fff'
			        },
			        animation:false,
			        xAxis : 
			            { 
			                type : 'category',
			                boundaryGap : false,
			                min: 'dataMin',
			                axisLine:{
			                    lineStyle: {
			                        color: "transparent"
			                    }
			                },
			                 axisLabel: {
			                    margin: 0,
			                    align: "center",
			                    showMaxLabel:false,
			                    showMinLabel: false//不显示X轴最小刻度
			                },
			                show:true
			            }
			        ,
			        yAxis : 
			            {
			                splitNumber:2,
			                zlevel:-1,
			                nameTextStyle:{
			                    fontSize:10,
			                    color:"#fff"
			                },
			                offset:0,
			                //min: 'dataMin',
			                type : 'value',
			                splitLine:{show: false},
			                axisTick:{
			                    show:false,
			                    color:"#fff"
			                },
			                 axisLine:{
			                    show:false
			                },
			                axisLabel:{fontSize:10,
			                    inside:true,
			                    color:"#fff"
			                }
			            },
			        series : [
			                {
			                name:'buy',
			                showSymbol:false,
			                symbol:"circle",
			                zlevel:-21,
			                label:{
			                    show:false,
			                    distance:22,
			                    color:"#fff",
			                    fontSize:12,
			                    align:"center",
			                    verticalAlign:"middle",
			                    backgroundColor:"#222E5D",
			                    padding: [10, 15, 10, 15],
			                },
			                symbolSize:11,
			                connectNulls:true,
			                //step:true,
			                emphasis:{
			                
			                },
			                lineStyle:{
			                    
			                },
			                type:'line', 
			                itemStyle: {
			                    normal: {
			                        color: '#01C57B',
			                        borderColor:'#01C57B',
			                    
			                    }
			                },
			               
			                areaStyle: {
			                    normal: {
			                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                            offset: 0,
			                            color: '#00fd9d'
			                        }, {
			                            offset: 1,
			                            color: '#141E46'
			                        }])
			                    }
			                },
			                 
			                data:arr1
			            },
			            {
			                name:'sell',
			                 showSymbol:false,
			                symbol:"circle",
			                label:{
			                    show:false,
			                    distance:22,
			                    color:"#fff",
			                    fontSize:12,
			                    align:"center",
			                    verticalAlign:"middle",
			                    backgroundColor:"#222E5D",
			                    padding: [10, 15, 10, 15],
			                },
			                symbolSize:11,
			                connectNulls:true,
			                //step:true,
			                type:'line',
			                stack: '总量',
			                itemStyle: {
			                    normal: {
			                        color: '#D8195A'
			                    }
			                },
			                areaStyle: {normal: {
			                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                            offset: 0,
			                            color: '#D8195A'
			                        }, {
			                            offset: 1,
			                            color: '#141E46'
			                        }])
			                    }},
			                
			                data:arr2
			            }
			        ]
			    };
			
			myChartDeep.setOption(option);
			// 加载上一页数据
			myChartDeep.on('datazoom',function(params){
				let num=params.batch[0]['start'];
				if(num==0){
					console.log('到最左边了')
				}
			})
			window.addEventListener('resize', () => { myChartDeep.resize()})
		},
		depthMe(arr1,arr2){
		    var bids = [];
		    var asks = [];
		    
		    for (var i = 0; i < arr1.length; i++) {
		        bids.push(arr1[i].splice(0,2).map(Number).reverse());  //取数组内容前两位，再倒序，变为数量排在前面用来作为排序字段。
		        
		    }
		    for (var i = 0; i < arr2.length; i++) {
		        asks.push(arr2[i].splice(0,2).map(Number).reverse());
		    }
		    this.K_chart(bids,asks)
		},
		K_chart(bids,asks){
		    var bids = this.sortarr(bids)   //以数量从小到大排序
		    var asks = this.sortarr(asks).reverse();   //排序之后再倒过来，变成从大到小
		    for (var i = 0; i < bids.length; i++) {
		        arr1.push(bids[i].splice(0,2).reverse());   //将价格重新变为内容数组第一位
		    }
		    for (var i = 0; i < asks.length; i++) {
		        arr2.push(asks[i].splice(0,2).reverse());
		    }
		    //最终得出的arr1和arr2就可以去用来渲染深度图了
		},
		unique(arr) {
		    let newArr = [arr[0]];
		    for (let i = 1; i < arr.length; i++) {
		        let repeat = false;
		        for (let j = 0; j < newArr.length; j++) {
		            if (arr[i] === newArr[j]) {
		                repeat = true;
		                break;
		            }else{
		                
		            }
		        }
		        if (!repeat) {
		            newArr.push(arr[i]);
		        }
		    }
		    return newArr;
		},
		sortarr(list){
		    function sortNumbersub(a,b){
		        return Number(b[0])-Number(a[0]);
		    }
		    list.sort(sortNumbersub)
		    return list;
		},
		getData(){
			const pid = this.getQueryVariable('pid')
			const url = this.getQueryVariable('apiUrl')
			const that = this
			axios.get(url,{
				params: {
					excpairs: pid
				}
			}).then(function (response) {
				const datas = response.data.return
				data = {bids: [], asks: []}
				data.bids = datas.bids
				data.asks = datas.asks
				that.depthMe(data.bids, data.asks)
				that.draw()
				setTimeout(() => {
					that.getData()
				}, 2000)
			})
		},
		getQueryVariable(variable){
		       var query = window.location.search.substring(1);
		       var vars = query.split("&");
		       for (var i=0;i<vars.length;i++) {
		               var pair = vars[i].split("=");
		               if(pair[0] == variable){return pair[1];}
		       }
		       return(false);
		},
	},
	mounted() {
		myChartDeep = echarts.init(document.getElementById('main'));
		this.getData()
		
		// this.depthMe(data.bids, data.asks)
		// this.draw()
	}
})