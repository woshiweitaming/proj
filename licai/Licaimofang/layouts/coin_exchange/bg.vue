<template>
	<view class="bg">
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Bg',
		mixins: [langMixins],
		data(){
			return {
				title: ''
			}
		},
	}
</script>

<style scoped>
	.bg{
		height: 100upx;
		padding-top: var(--status-bar-height);
		background: #DD4A68;
		position: relative;
		padding-top: var(--status-bar-height);
	}
</style>
