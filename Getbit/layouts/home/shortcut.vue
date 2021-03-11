<template>
	<view class="shortcut card">
		<view class="shortcut_label" @click="toPage(curItem.path, curItem.type)" v-for="(curItem, index) in list" :key="index">
			<view class="icon_large">
				<image class="img" :src="curItem.icon"></image>
			</view>
			<text class="name">{{curItem.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Shortcut',
		data(){
			return {
				list: [
					{
						name: '帮助中心',
						icon: '/static/images/icons/shortcut/help.png',
						path: 'http://help.getbit.in',
						type: 'web'
					},
					{
						name: '邀请好友',
						icon: '/static/images/icons/shortcut/invite.png',
						path: '/pages/invite/index'
					},
					{
						name: '充币',
						icon: '/static/images/icons/shortcut/recharge.png',
						path: '/pages/recharge/index'
					},
					{
						name: '每日快讯',
						icon: '/static/images/icons/shortcut/news.png',
						path: 'http://help.getbit.in',
						type: 'web'
					},
					{
						name: 'GNB回购',
						icon: '/static/images/icons/shortcut/buyback.png',
						path: 'http://gnb.life',
						type: 'web'
					},
					{
						name: '理财',
						icon: '/static/images/icons/shortcut/financial.png',
						path: '',
						type: 'web'
					},
					{
						name: '永续合约',
						icon: '/static/images/icons/shortcut/contract.png',
						path: '/pages/contract/index'
					},
					{
						name: '智能跟单',
						icon: '/static/images/icons/shortcut/ai.png',
						path: '/pages/ai/index'
					}
				]
			}
		},
		methods: {
			toPage(path, type){
				if(type == 'web'){
					uni.navigateTo({
						url: '/pages/web/index?url='+path
					})
				}else{
					uni.navigateTo({
						url: path
					})
				}
			}
		}
	}
</script>

<style scoped>
	.shortcut .shortcut_label{
		width: 25%;
		text-align: center;
		margin-bottom: 20upx;
	}
	.shortcut .icon_large{
		text-align: center;
		display: block;
		margin: 20upx auto;
	}
	.shortcut .name{
		font-size: 24upx;
	}
</style>
