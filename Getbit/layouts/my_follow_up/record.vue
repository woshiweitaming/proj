<template>
	<view class="record">
		<view class="menus">
			<u-tabs bg-color="#f4f5fa" font-size="28" @change="change" :list="list" :is-scroll="false" :current="current"></u-tabs>
		</view>
		<view class="wrap">
			<Nodata />
		</view>
	</view>
</template>

<script>
	import Nodata from '@/components/no_data/index.vue'
	export default {
		name: 'Record',
		data(){
			return {
				list: [{
					name: '当前跟单'
				},
				{
					name: '历史跟单'
				}],
				current: 0
			}
		},
		components: {
			Nodata
		},
		methods: {
			change(index){
				this.current = index
			}
		}
	}
</script>

<style scoped>
	.menus{
		width: 50%;
	}
	.wrap{
		margin-top: 40upx;
	}
</style>
