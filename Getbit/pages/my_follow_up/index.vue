<template>
	<view class="inner">
		<FollowUpData />
		<Record />
	</view>
</template>

<script>
	import FollowUpData from '@/layouts/my_follow_up/follow_up_data.vue'
	import Record from '@/layouts/my_follow_up/record.vue'
	export default {
		name: 'MyFollowUp',
		components: {
			FollowUpData,
			Record
		},
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '我的跟单'
			})
		}
	}
</script>

<style scoped>
</style>