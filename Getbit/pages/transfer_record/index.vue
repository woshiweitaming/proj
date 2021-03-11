<template>
	<view class="page">
		<view class="menu">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</view>
		<view class="inner">
			<Nodata />
		</view>
	</view>
</template>

<script>
	import Nodata from '@/components/no_data/index.vue'
	export default {
		name: 'RechargeOrder',
		components: {
			Nodata
		},
		data() {
			return {
				list: [{
					name: '全部'
				}, {
					name: '合约到资金'
				}, {
					name: '资金到合约'
				}],
				current: 0
			}
		},
		methods: {
			change(index){
				this.current = index
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '划转记录'
			})
		}
	}
</script>

<style scoped>
	.page{
		background: #fff;
	}
	.inner{
		height: calc(100% - 80upx);
	}
	.menu{
		border-bottom: 1px solid #eee;
	}
</style>
