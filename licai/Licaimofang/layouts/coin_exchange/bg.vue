<template>
	<view class="bg">
		<u-navbar
		    back-icon-color="#fff" 
			:border-bottom="false" 
			title-color="#fff" 
			:is-back="true" 
			:background="{background: 'transparent'}" 
			:title="getLang('shop_p1')"
		>
		</u-navbar>
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
		height: 500upx;
		padding-top: var(--status-bar-height);
		background: #DD4A68;
		position: relative;
		padding-top: var(--status-bar-height);
	}
</style>
