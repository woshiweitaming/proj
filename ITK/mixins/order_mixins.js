/**
 * 订单混入组件
 */
import { getEntrustOrder, getHistoryOrder, getQhOrder, endContractOrder,  getQhHistoryOrder, getBbOrder, revokeBbEntrust, revokeEntrust } from '@/api/record.js'
import validate from '@/utils/validate.js'
const orderMixins = {
	data(){
		return {
			dataList: []
		}
	},
	methods: {
		/**
		 * 获取合约记录
		 */
		async getEntrustOrderHandler(params){
			const res = await getEntrustOrder(params)
			this.dataList = res.data
		},
		/**
		 * 合约持仓平仓
		 */
		async closeContact(orderNo){
			this.$tips.showModel(this.getLangs('sysTips'), this.getLangs('confirmClose'), this.getLangs('cancel'), this.getLangs('confirm'), async (btn) => {
				if(btn.confirm){
					const params = {
						orderNo: orderNo
					}
					const res = await endContractOrder(params)
					if(validate.checkCode(res)){
						this.getEntrustOrderHandler({type: 1})
					}
					this.backTips(res)
				}
			})
		},
		/**
		 * 撤销委托
		 */
		async closeCommission(orderNo){
			this.$tips.showModel(this.getLangs('sysTips'), this.getLangs('revokeTips'), this.getLangs('cancel'), this.getLangs('confirm'), async (btn) => {
				if(btn.confirm){
					const params = {
						orderNo: orderNo
					}
					const res = await revokeEntrust(params)
					if(validate.checkCode(res)){
						this.getEntrustOrderHandler({type: 0})
					}
					this.backTips(res)
				}
			})
		},
		/**
		 * 期货历史列表
		 */
		async getHistoryOrderHandler(){
			const res = await getQhHistoryOrder()
			this.dataList = res.data
		},
		/**
		 * 合约历史列表
		 */
		async getContractHistoryOrderHandler(){
			const res = await getHistoryOrder()
			this.dataList = res.data
		},
		/**
		 * 期货订单列表
		 */
		async getFuturesPositionHandler(){
			const res = await getQhOrder()
			if(validate.checkCode(res)){
				this.dataList = res.data
			}
		},
		/**
		 * 币币订单
		 */
		async getCoinHandler(type){
			const res = await getBbOrder({type: type})
			if(validate.checkCode(res)){
				this.dataList = res.data
			}
		},
		/**
		 * 撤销币币委托
		 */
		async revokeBbHandler(orderNo){
			this.$tips.showModel(this.getLangs('sysTips'), this.getLangs('revokeTips'), this.getLangs('cancel'), this.getLangs('confirm'), async (btn) => {
				if(btn.confirm){
					const params = {
						orderNo: orderNo
					}
					const res = await revokeBbEntrust({orderNo: orderNo})
					if(validate.checkCode(res)){
						this.getCoinHandler(0)
					}
					this.backTips(res)
				}
			})
		},
		/**
		 * 转换时间
		 */
		toTime(str){
			let _str = str.substring(5, str.length - 1)
			_str = _str.replace('-','/')
			let strArr = _str.split(' ')
			let first = strArr[1].toString()
			let second = strArr[0].toString()
			return first.substring(0, first.length - 2) + ' ' + second
		}
	},
}

export default orderMixins