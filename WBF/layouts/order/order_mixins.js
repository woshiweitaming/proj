/**
 * 订单混入组件
 */
import { getEntrustOrder, getHistoryOrder } from '@/api/record.js'
const orderMixins = {
	methods: {
		/**
		 * 获取合约记录
		 */
		async getEntrustOrderHandler(params){
			const res = await getEntrustOrder(params)
			this.dataList = res.data
		},
		/**
		 * 历史列表
		 */
		async getHistoryOrderHandler(){
			const res = await getHistoryOrder()
			//this.dataList = res.data
		},
	},
}

export default orderMixins