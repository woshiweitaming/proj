// K线数据
var rawData = [];
var dates = rawData.map(function(item) {
	return item[0];
});
var data = rawData.map(function(item) {
	return [+item[1], +item[2], +item[3], +item[4], +item[5]];
});
var volumes = rawData.map(function(item, index) {
	return [index, item[5], item[1] > item[2] ? 1 : -1];
});

// 交易统计数据
var txData={
		// 最新成交价
		"lastPrice": 8.944,
		// 涨幅
		"upRate": "-79.67%",
		// 1涨绿 2跌红
		"upFlag": "2",
		// 24小时交易量
		"volume": 3,
		// 24小时最高价
		"high": 11.922,
		// 24小时最低价
		"low": 8.944
}
// 获取指定区间随机数
function sum (m,n){
　　var num = Math.floor(Math.random()*(m - n) + n);
	return num;
}
// 深度数据
var depthList=function(){
	let obj={
		buyList:[],
		sellList:[]
	};
	for(let i=0;i<20;i++){
		obj.buyList.push({
			"price": 0.988,
			"amount": 12,
			'width':sum(1,100)
		})
		obj.sellList.push({
			"price": 0.252,
			"amount": 15,
			'width':sum(1,100)
		})
	}
	return obj;
}

// 成交列表
var dealHis=function(){
	let arr=[];
	for(let i =0;i<20;i++){
		arr.push({
			"date": "07-22 16:27:44",
			// 1买入 2卖出
			"takerFlag": "1",
			"price": 44,
			"amount": 444
		})
	}
	return arr;
}
// 项目信息
var tokenInfo={
		"tokenName": "XXX",
		// 发行时间
		"issueDate": "2020-06-15",
		// 发行总量
		"totalSupply": "1000000000",
		// 流通总量
		"nowSupply": "--",
		// 众筹价格
		"price": "--",
		// 白皮书地址
		"whitePaper": "--",
		// 官网
		"webSite": "--",
		// 区块查询
		"exploereSite": "--",
		// 简介
		"remark": "--"
}
