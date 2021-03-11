<template>
	<view class="record">
		<view class="menu">
			<view @click="changeMenu(index)" :class="['labels', menuActive === index ? 'on' : '']" v-for="(curItem, index) in menuList" :key="index">{{curItem}}</view>
		</view>
		<view class="record_main">
			<Nodata />
		</view>
	</view>
</template>

<script>
	import Nodata from '@/components/no_data/index.vue'
	export default {
		name: 'Record',
		components: {
			Nodata
		},
		data(){
			return {
				menuList: ['全部', 'C2C', '划转记录'],
				menuActive: 0
			}
		},
		methods: {
			changeMenu(index){
				this.menuActive = index
			}
		}
	}
</script>

<style scoped>
	.menu{
		margin-top: 20upx;
		display: flex;
		border-bottom: 1px solid #eee;
	}
	.labels{
		line-height: 80upx;
		width: 20%;
		color: #aaa;
		text-align: center;
	}
	.labels.on{
		color: #081723;
	}
	.record_main{
		padding-top: 40upx;
	}
</style>
