import { mapGetters } from 'vuex'
import appConfig from '@/config/appConfig.js'
const trade_mixins = {
	computed: {
		getData(){
			return typeof this.getQuotation[this.active] === 'undefined' ? {} : this.getQuotation[this.active]
		},
		getName(){
			return this.getData.name
		},
		getClose(){	
			if(typeof this.getData.quotation == 'undefined') return 0
			return this.getData.quotation.close
		},
		getRatio(){
			if(typeof this.getData.quotation == 'undefined') return 0
			const res = ((this.getClose - this.getData.quotation.open) / this.getClose * 100).toFixed(2)
			return res > 0 ? `+${res}` : res
		},
		...mapGetters({
			getQuotation: 'getQuotation'
		})
	}
}

export default trade_mixins