<template>
	<web-view src="https://www.baidu.com"></web-view>
</template>

<script>
	export default {
		name: 'CustomServer',
		onShow() {
			uni.setNavigationBarTitle({
				title: '在线客服'
			})
		}
	}
</script>

<style scoped>
</style>
