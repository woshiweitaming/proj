/**
 * 请求数据
 */
import config from '@/config/config.js'

//队列
let queue = []
//权限锁
let authLock = false

/**
 * 拦截请求
 */
const intercept = (fetchData) => {
	//请求是否存在与队列
	const isExist = queue.findIndex(res => res.url === fetchData.url)
	//不存在则添加进队列
	if(isExist === -1){
		addQueue(fetchData)
	}
}

/**
 * 添加请求队列
 */
const addQueue = (fetchData) => {
	queue.push(fetchData)
}

/**
 * 删除请求队列
 */
const removeQueue = (fetchData) => {
	//获取请求在队列中的索引
	const index = queue.findIndex(res => res.url === fetchData.url)
	if(index > -1){
		queue.splice(index, 1)
	}
}

/**
 * 清空队列
 */
const clearQueue = (fetchData) => {
	queue = []
}

/**
 * 处理header
 */
const headerHandler = () => {
	const headers = {
		token: 'ucc_67ecf215e9c1023e33758c1f2a31b955',
		ens: 0,
	}
	return headers
}

/**
 * 获取domain
 */
const getDomain = () => {
	return config.domain
}

/**
 * 发送请求数据
 */
const fetch = (params) => {
	//拦截请求
	intercept(params)
	//显示loading
	uni.showLoading({
		title: '正在请求中...'
	})
	//开始请求
	return new Promise((resolve, reject) =>  {
		uni.request({
			url: getDomain(	) + params.url,
			method: params.method,
			data: params.data,
			header: headerHandler(),
			timeout: 30000,
			success: (res) => {
				const data = res.data
				removeQueue(params)
				//权限不足
				if(data.rpCode === '100003'){
					authLock = true
					removeQueue()
					uni.hideLoading()
					if(!authLock){
						uni.showToast({
							icon: 'none',
							title: '登录超时'
						})
					}
					setTimeout(() => {
						authLock = false
						uni.navigateTo({
							url: '/pages/login/index'
						})
					}, 1000)
				}else{
					console.log(queue.length)
					if(queue.length === 0){
						uni.hideLoading()
					}
					if(data.rpCode === '000000'){
						resolve(data)
					}else{
						uni.showToast({
							icon: 'none',
							title: data.rpMsg
						})
					}
				}
			},
			fail: (e) => {
				removeQueue(params)
				reject(e)
			}
		})
	})
	
}
export default fetch