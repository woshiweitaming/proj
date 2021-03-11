<template>
	<view class="pop custom">
		<Titlebar />
		<Main />
	</view>
</template>

<script>
	import Titlebar from '@/layouts/pop/titlebar.vue'
	import Main from '@/layouts/pop/main.vue'
	export default {
		name: 'Pop',
		components: {
			Titlebar,
			Main
		}
	}
</script>

<style scoped>
	.pop{
		height: 100%;
		background: url(../../static/images/icons/pop/bg.png);
		background-size: cover;
	}
</style>
