<template>
	<web-view :src="url"></web-view>
</template>

<script>
	import appConfig from '@/config/appConfig.js'
	export default {
		name: 'News',
		data(){
			return {
				url: ''
			}
		},
		onLoad(opt) {
			this.url = appConfig.newsDomain + opt.url + '&a=' + opt.a + '&id=' + opt.id
		}
	}
</script>

<style>
</style>
