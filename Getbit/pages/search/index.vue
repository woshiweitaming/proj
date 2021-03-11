<template>
	<view class="page custom">
		<Titlebar @callback="callback" />
		<CurrencyList :keywords="keywords" :showHeader="false" :borderRadius="false" />
	</view>
</template>

<script>
	import Titlebar from '@/layouts/search/titlebar.vue'
	import CurrencyList from '@/layouts/search/coins_list.vue'
	export default {
		name: 'Search',
		components: {
			Titlebar,
			CurrencyList
		},
		data(){
			return {
				keywords: ''
			}
		},
		methods: {
			callback(val){
				this.keywords = val
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: '搜索'
			})
		}
	}
</script>

<style>
</style>
