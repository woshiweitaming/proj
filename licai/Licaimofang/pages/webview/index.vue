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
			this.url = opt.url
		}
	}
</script>

<style>
</style>
