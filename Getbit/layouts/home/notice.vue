<template>
	<view class="notice card">
		<view class="notice_wrap">
			<view class="notice_icon icon_small">
				<image class="img" src="../../static/images/icons/news.png"></image>
			</view>
			<view class="notice_text">
				<u-notice-bar @click="onClick" :volume-icon="false" type="none" mode="vertical" :list="list" padding="0 0" :duration="3000"></u-notice-bar>
			</view>
		</view>
	</view>
</template>

<script>
	import { getNewsList } from '@/apis/news.js'
	export default {
		name: 'Notice',
		data(){
			return {
				list: [],
				result: []
			}
		},
		methods: {
			onClick(index){
				const url = this.result[index].url
				uni.navigateTo({
					url: '/pages/news/index?url='+url
				})
			},
			async getNewsListHandler(){
				const res = await getNewsList()
				this.result = res.filter(d => d.catid == 7)
				this.list = this.result.map(d => d.title)
			}
		},
		created() {
			this.getNewsListHandler()
		}
	}
</script>

<style scoped>
	.notice_wrap{
		width: 100%;
		height: 34upx;
		padding: 0 0 0 60upx;
		position: relative;
		box-sizing: border-box;
	}
	.notice_icon{
		position: absolute;
		left: 0;
		top: -5upx;
	}
</style>
