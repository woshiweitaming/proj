<template>
	<view class="investment_detail">
		<Info :opt="opt"/>
		<Record :dataList="dataList" />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Info from '@/layouts/investment_detail/Info.vue'
	import Record from '@/layouts/investment_detail/record.vue'
	import { getMyProjectHistory } from '@/apis/users.js'
	export default {
		name: 'InvestmentDetail',
		mixins: [langMixins],
		data(){
			return {
				opt: {},
				dataList: []
			}
		},
		methods: {
			async getMyProjectHistoryHandler(){
				const res = await getMyProjectHistory({oid: this.opt.oid})
				this.dataList = res.data
			}
		},
		components: {
			Info,
			Record
		},
		onLoad(opt) {
			this.opt = opt
			this.getMyProjectHistoryHandler()
			uni.setNavigationBarTitle({
				title: this.getLang('investment_detail_p1')
			})
		}
	}
</script>

<style scoped>
</style>
 