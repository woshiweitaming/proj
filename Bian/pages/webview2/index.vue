<template>
	<web-view :src="url"></web-view>
</template>

<script>
	export default {
		name: 'Webview',
		data(){
			return {
				url: ''
			}
		},
		onLoad(opt) {
			window.open(opt.url)
		}
	}
</script>

<style scoped>
</style>
