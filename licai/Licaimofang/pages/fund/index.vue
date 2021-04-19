<template>
	<view class="fund">
		<Balance :userInfo="userInfo" />
		<List />
	</view>
</template>

<script>
	import Balance from '@/layouts/fund/balance.vue'
	import List from '@/layouts/fund/list.vue'
	import { getUserInfo } from '@/apis/users.js'
	export default {
		name: 'Fund',
		data(){
			return {
				userInfo: {}
			}
		},
		components: {
			Balance,
			List
		},
		methods: {  
			async getUserInfoHandler(){
				uni.stopPullDownRefresh();
				const res = await getUserInfo()
				this.userInfo = res.data
			}
		},
		onLoad(){
		    uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
		    this.getUserInfoHandler()
		},
	}
</script>

<style scoped>
</style>
