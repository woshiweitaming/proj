/**
 * 币种数据混入组件
 */
import { mapGetters, mapMutations } from 'vuex'
import { getProduct } from '@/api/public.js'
let cloneData = []
const currencyMixins = {
	methods: {
		/**
		 * 获取币种产品
		 */
		async getProductDataHandler(){
			const res = await getProduct()
			this.clearTimer()
			this.setProductData(res.data)
		},
		...mapMutations({
			setProductData: 'SET_PRODUCT_DATA',
		})
	},
	computed: {
		// getCurrencyData(){
		// 	if(typeof this.getProductData.length === 'undefined' || this.getProductData.length === 0 || typeof this.getWSData.length === 'undefined' || this.getWSData.length === 0) return []
		// 	const productData = JSON.parse(JSON.stringify(this.getProductData))
		// 	const mapData = productData.map((res) => {
		// 		const curWsData = this.getWSData.filter(r => r.id === res.id)
		// 		const tempData = Object.assign(res, curWsData[0])
		// 		return tempData
		// 	})
		// 	cloneData = mapData
		// 	return mapData
		// },
		getShowData(){
			if(JSON.stringify(this.getCurrencyData) === '{}') return []
			const data = this.getCurrencyData
			return data.slice(0, 3)
		},
		getTradeData(){
			if(this.active === 0){
				return this.getCurrencyData.sort((a, b) => {
					return b.gain - a.gain
				})
			}
			if(this.active === 1){
				return this.getCurrencyData.sort((a, b) => {
					return b.count - a.count 
				})
			}
		},
		getLeftData(){	
			if(typeof this.getProductData.length === 'undefined' || this.getProductData.length === 0 || typeof this.getLeftWsData.length === 'undefined' || this.getLeftWsData.length === 0) return []
			const productData = JSON.parse(JSON.stringify(this.getProductData))
			const mapData = productData.map((res) => {
				const curWsData = this.getLeftWsData.filter(r => r.id === res.id)
				const tempData = Object.assign(res, curWsData[0])
				return tempData
			})
			cloneData = mapData
			return mapData
		},
		getCurrenctData(){
			if(this.getWSData.length && this.getWSData.length > 0){
				const id = this.getCurrentPageData('opt').id
				const data = this.getWSData.slice().sort((a, b) => {
					return a.id - b.id
				})
				return this.getWSData.filter(res => res.id == id)[0]
			}
		},
		getWSSortData(){
			if(this.getWSData.length && this.getWSData.length > 0){
				if(this.active === 0){
					const data =this.getWSData.slice().sort((a, b) => {
						return b.gain - a.gain
					})
					return data
				}
				if(this.active === 1){
					const data =this.getWSData.slice().sort((a, b) => {
						return b.vol - a.vol
					})
					return data
				}
			}
		},
		...mapGetters({
			getProductData: 'getProductData',
			getWSData: 'getWSData',
			getLeftWsData: 'getLeftWsData'
		})
	}
}

export default currencyMixins