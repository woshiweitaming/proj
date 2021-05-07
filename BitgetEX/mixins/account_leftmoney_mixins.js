/**
 * 账户余额混入
 */
import { mapGetters } from 'vuex' 
const accountLeftmoneyMixins = {
	data(){
		return {
			fromData: {
				list: ['futures', 'contract', 'coin', 'poolp1'],
				active: 'futures',
			},
			currency: {
				active: 0,
				show: false
			},
		}
	},
	methods: {
		openDrop(){
			this.currency.show = !this.currency.show
		},
		changeDrop(index){
			this.currency.active = index
			this.currency.show = false
		},
		stopClick(e){
			e.stopPropagation()
		},
		eventClick(){
			this.currency.show = false
		},
	},
	computed: {
		getCurrentAccount(){
			return this.getAccountList[this.currency.active]
		},
		getAccountList(){
			if(this.getAccountBanlance.length === 0) return []
			const fromIndex= this.fromData.list.findIndex(res => res === this.fromData.active)
			if(fromIndex < 0){
				return []
			}
			const data = Object.keys(this.getAccountBanlance[fromIndex])
			data.splice(data.length - 1, 1); 
			return data
		},
		getBalance(){
			if(this.getAccountBanlance.length === 0 && typeof this.getCurrentAccount === 'undefined'){
				return 0
			}else{
				const fromIndex = this.fromData.list.findIndex(res => res === this.fromData.active)
				const currentAccount = this.getAccountBanlance.filter(res => res.type == fromIndex)[0]
				const name = this.getCurrentAccount
				return currentAccount[this.getCurrentAccount].usable
	
			}
		},
		...mapGetters({
			getAccountBanlance: 'getAccountBanlance'
		})
	},
}

export default accountLeftmoneyMixins