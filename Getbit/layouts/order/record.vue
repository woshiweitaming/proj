<template>
	<view class="inner">
		<Nodata />
	</view>
</template>

<script>
	import Nodata from '@/components/no_data/index.vue'
	export default {
		name: 'OrderRecord',
		components: {
			Nodata
		}
	}
</script>

<style scoped>
.inner{
	background: #fff;
}
</style>
