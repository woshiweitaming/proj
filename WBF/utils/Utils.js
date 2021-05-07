class Utils {
	/**
	 * 转换对象
	 */
	static convertObj(data) {
	    let _result = [];
	    for (let key in data) {
	      let value = data[key];
	      if (value.constructor == Array) {
	        value.forEach(function(_value) {
	          _result.push(key + "=" + _value);
	        });
	      } else {
	        _result.push(key + '=' + value);
	      }
	    }
	    return _result.join('&');
	}
	/**
	 * 随机码
	 */
	static randomCoding(){
		let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		let idvalue ='';
		for(let i=0;i<4;i++){
		    idvalue+=arr[Math.floor(Math.random()*26)];
		}
		return idvalue;
	}
	//获取当前url
	static getCurRoute(){
		const routes = getCurrentPages(); 
		if(routes.length > 0){
			return routes[routes.length - 1].route
		}else{
			return routes
		}
	}
	//时间戳转时间
	static toDate(timestap){
		const date = new Date(timestap + 8 * 3600 * 1000); // 增加8小时
		return date.toJSON().substr(0, 19).replace('T', ' ');
	}
}

export default Utils