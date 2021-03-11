import $ from '@/static/jquery/jquery.min.js'  
const fileUtils = {
	/**
	 * 读取文件
	 */
	readFile(filePath){
		
	},
	/**
	 * 字符串转换json数据
	 */
	convertToJson(strings){
		let tmpArr = {}
		const stringsArr = strings.split(';')
		stringsArr.forEach((ele, index) => {
			const arr = ele.split('=')
			tmpObj[arr[0]] = arr[1]
		})
		return tmpArr
	}
}

export default fileUtils