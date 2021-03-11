import request from '@/request/request.js'
import qs from 'qs'

//历史数据
export const getHistory = (data) => {
	return request({
		url: '/pub/getHistory',
		method: 'get',
		data
	})
}
