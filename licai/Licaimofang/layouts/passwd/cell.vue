<template>
	<u-cell-group>
		<u-cell-item :title="getLang('passwd_p2')" ></u-cell-item>
		<u-cell-item :title="getLang('passwd_p3')" :arrow="false" ><u-switch v-model="checked"></u-switch></u-cell-item>
		<u-cell-item :title="getLang('passwd_p4')" ></u-cell-item>
		<u-cell-item :title="getLang('passwd_p5')" v-if="checked" ></u-cell-item>
		<u-cell-item :title="getLang('passwd_p6')" ></u-cell-item>
	</u-cell-group>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'PasswdCell',
		mixins: [langMixins],
		data(){
			return {
				checked: false
			}
		},
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style>
</style>
