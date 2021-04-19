const validate = {
	//判断返回的结果
	checkCode: (res) => {
		if(typeof res === 'undefined' || typeof res.rpCode === 'undefined') return true
		if(res.rpCode === '000000'){
			return true
		}else{
			return false
		}
	},
	//判断权限
	checkAuthCode: (res) => {
		if(typeof res === 'undefined') return false
		if(res.rpCode === '100003'){
			return true
		}
		return false
	},
}

export default validate