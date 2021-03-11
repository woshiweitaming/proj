<template>
	<view class="qh">
		<view class="search">
			<u-search @change="change" placeholder="搜索国家或地区" bg-color="#f4f5fa" :show-action="false" v-model="keyword"></u-search>
		</view>
		<view class="qh_list">
			<view class="labels" @click="select(curItem)" v-for="(curItem, index) in prefixSorted" :key="index">
				<view class="name">{{curItem.cn}}</view>
				<view class="number">+{{curItem.prefix}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import prefixSorted from '@/datas/prefix.js'
	import loginMixins from '@/mixins/login_mixins.js'
	export default {
		name: 'Qh',
		mixins: [loginMixins],
		data(){
			return {
				keyword: '',
				prefixSorted: []
			}
		},
		methods: {
			change(value){
				this.prefixSorted = prefixSorted.filter(res => res.prefix.indexOf(value) > -1 || res.cn.indexOf(value) > -1)
			},
			select(data){
				this.setAre(data.prefix)
				uni.navigateBack()
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '国家或地区'
			})
		},
		onShow() {
			this.prefixSorted = prefixSorted.sort((a, b) => {
				return a.prefix - b.prefix
			})
		}
	}
</script>

<style scoped>
	.qh{
		height: 100%;
	}
	.search{
		height: 80upx;
	}
	.qh_list{
		height: calc(100% - 80upx);
		overflow: auto;
	}
	.labels{
		padding: 20upx;
		display: flex;
	}
	.labels .name{
		width: 50%;
	}
	.labels .number{
		width: 50%;
		text-align: right;
		color: #666
	}
</style>
