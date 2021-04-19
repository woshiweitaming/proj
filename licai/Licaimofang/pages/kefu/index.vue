<template>
	<web-view :src="url"></web-view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { getKfUrl } from '@/apis/publics.js'
	export default {
		name: 'Kefu',
		mixins: [langMixins],
		data(){
			return {
				url: ''
			}
		},
		methods: {
			async getKfUrlHandler(){
				const res = await getKfUrl()
				this.url = res.data.kfUrl
			}
		},
		onLoad(){
			this.getKfUrlHandler()
		}
	}
</script>

<style>
</style>
