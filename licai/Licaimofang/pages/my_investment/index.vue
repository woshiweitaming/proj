<template>
	<view class="my_investment">
		<Menu />
		<Result :dataList="dataList" />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Menu from '@/layouts/my_invsertment/menu.vue'
	import Result from '@/layouts/my_invsertment/result.vue'
	import { getMyProject } from '@/apis/users.js'
	export default {
		name: 'MyInvestment',
		mixins: [langMixins],
		components: {
			Menu,
			Result 
		},
		data(){
			return {
				dataList: [],
				num: 1
			}
		},
		methods: {
			async getMyProjectHandler(){
				const res = await getMyProject({num: this.num})
				this.dataList = res.data
			}
		},
		onShow(){
			this.getMyProjectHandler()
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('my_investment_p1')
			})
		}
	}
</script>

<style scoped>
</style>
