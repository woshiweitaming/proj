<template>
	<web-view :src="url"></web-view>
</template>

<script>
	export default {
		name: 'Webview',
		props: {
			url: {
				type: String,
			}
		}
	}
</script>

<style>
</style>
