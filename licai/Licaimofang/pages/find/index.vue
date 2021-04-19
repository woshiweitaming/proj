<template>
	<view class="wrap">
		<view class="find">
			<Tabs @allCallback="allCallback" @callback="callback" :columnList="columnList" />
			<Product :column="column" :productList="productList" />
			<u-empty v-if="productList.length === 0" :text="getLang('common_p5')" mode="list"></u-empty>
			<u-divider v-if="page > 1" :height="80" bg-color="#f8fbfd" color="#999">{{getLang('common_p4')}}</u-divider>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Product from '@/layouts/find/product.vue'
	import Tabs from '@/layouts/find/tabs.vue'
	import { getColumnList, getProjectList } from '@/apis/publics.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'Find',
		mixins: [langMixins],
		data(){
			return {
				columnList: [],
				column: {},
				productList: [],
				page: 1
			}
		},
		components: {
			Tabs,
			Product
		},
		methods: {
			async getColumnListHandler(){
				const res = await getColumnList()
				this.columnList = res.data
				this.column = {cid: ''}
				uni.startPullDownRefresh()
			},
			async getProjectListHandler(column, num){
				const res = await getProjectList({type: column.cid, num: num})
				uni.stopPullDownRefresh()
				res.data.forEach((curItem, index) => {
					this.productList.push(curItem)
				})
			},
			callback(tab){
				this.column = tab
				this.page = 1
				uni.startPullDownRefresh()
			},
			allCallback(){
				this.column = {column_name: this.getLang('common_p2') ,cid: ''}
				uni.startPullDownRefresh()
			}
		},
		onReachBottom(data){
			this.page++
			this.getProjectListHandler(this.column, this.page)
		},
		onPullDownRefresh() {
			this.page = 1
			this.productList = []
			this.getProjectListHandler(this.column, this.page)
		},
		onLoad() {
			this.getColumnListHandler()
			uni.setNavigationBarTitle({
				title: this.getLang('find_p16')
			})
		}
	}
</script>

<style scoped>
</style>
