import request from '../request/request.js'
import * as APIS from './api_url.js'


export const getNewsList = (data) => {
	return request({
		url: APIS.NEWS_LIST_API,
		method: 'get',
		data
	})
}