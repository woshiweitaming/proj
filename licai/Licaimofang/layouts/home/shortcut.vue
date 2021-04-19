<template>
	<view class="shortcut">
		<view class="labels" @click="toPage(curItem.path, curItem.index)" v-for="(curItem, index) in dataList" :key="index">
			<image :src="curItem.icon" class="icon" mode="widthFix"></image>
			<view class="name">{{getLang(curItem.name)}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { getNewsUrl } from '@/apis/publics.js'
	export default {
		name: 'Shortcut',
		mixins: [langMixins],
		data(){
			return {
				dataList: [
					{
						name: 'home_p16',
						icon: '/static/images/home/shortcut/h1.png',
						path: '/pages/my_investment/index',
						index: 0,
					},
					{
						name: 'home_p17',
						icon: '/static/images/home/shortcut/h2.png',
						path: '',
						index: 0,
					},
					{
						name: 'home_p18',
						icon: '/static/images/home/shortcut/h3.png',
						path: '',
						index: 2,
					},
					{
						name: 'home_p19',
						icon: '/static/images/home/shortcut/h4.png',
						path: '/pages/coin_exchange/index',
						index: 0,
					},
					{
						name: 'home_p20',
						icon: '/static/images/home/shortcut/h5.png',
						path: '',
						index: 1,
					},
					{
						name: 'home_p21',
						icon: '/static/images/home/shortcut/h6.png',
						path: '',
						index: 10,
					},
					{
						name: 'home_p22',
						icon: '/static/images/home/shortcut/h7.png',
						path: '',
						index: 3,
					},
					{
						name: 'home_p23',
						icon: '/static/images/home/shortcut/h8.png',
						path: '',
						index: 4,
					}
				]
			}
		},
		methods: {
			toPage(path, index){
				if(index == 1 || index == 2 || index == 3 || index == 4){
					return this.toDescHandler(index)
				}
				if(index === 10){
					return this.toWebviewHandler(index)
				}
				uni.navigateTo({
					url: path
				})
			},
			async toWebviewHandler(index){
				const res = await getNewsUrl()
				uni.navigateTo({
					url: '/pages/webview/index?url='+res.url
				})
			},
			async toDescHandler(index){
				uni.navigateTo({
					url: '/pages/desc/index?type='+index
				})
			}
		}
	}
</script>

<style scoped>
	.shortcut{
		display: flex;
		flex-wrap: wrap;
		padding-top: 40upx;
	}
	.shortcut .labels{
		width: 25%;
		margin-bottom: 40upx;
		text-align: center;
	}
	.shortcut .labels .icon{
		width: 80upx;
	}
	.shortcut .labels .name{
		color: #666;
		font-size: 28upx
	}
</style>
