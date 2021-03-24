<template>
	<view class="shortcut">
		<view class="labels" v-for="(curItem, index) in dataList" :key="index">
			<image :src="curItem.icon" class="icon" mode="widthFix"></image>
			<view class="name">{{getLang(curItem.name)}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Shortcut',
		mixins: [langMixins],
		data(){
			return {
				dataList: [
					{
						name: 'home_p16',
						icon: '/static/images/home/shortcut/h1.png',
						path: ''
					},
					{
						name: 'home_p17',
						icon: '/static/images/home/shortcut/h2.png',
						path: ''
					},
					{
						name: 'home_p18',
						icon: '/static/images/home/shortcut/h3.png',
						path: ''
					},
					{
						name: 'home_p19',
						icon: '/static/images/home/shortcut/h4.png',
						path: ''
					},
					{
						name: 'home_p20',
						icon: '/static/images/home/shortcut/h5.png',
						path: ''
					},
					{
						name: 'home_p21',
						icon: '/static/images/home/shortcut/h6.png',
						path: ''
					},
					{
						name: 'home_p22',
						icon: '/static/images/home/shortcut/h7.png',
						path: ''
					},
					{
						name: 'home_p23',
						icon: '/static/images/home/shortcut/h8.png',
						path: ''
					}
				]
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
