import fetch from '@/fetch/index.js'

export const getIndexProject = (data) => {
	return fetch({
		url: '/pub/getIndexProject',
		method: 'get',
		data
	})
}