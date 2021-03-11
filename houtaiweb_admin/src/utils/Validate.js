class Validate {
	//验证是否为空
	static checkIsEmpty(value){
		if(value === '' || value === null || value === undefined){
			return true
		}
		return false
	}
	//验证用户名
	static checkUsername(value){
		if(this.checkIsEmpty(value)){
			return false
		}
		return true
	}
	//验证密码是否合法（数字+字母）
	static checkPasswd(value){
		const regs = ''
		if(value){
			if(value.length < 6){
				return false
			}
			return true
		}
		return false
	}
	//验证请求回复代码
	static checkRscode(code){
		switch(code){
			case '000000' :
			   return true;
			default :
			   return false
		}
	}
}

export default Validate