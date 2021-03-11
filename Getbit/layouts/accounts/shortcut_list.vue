<template>
	<view class="shortcut_list">
		<view class="shortcuts" v-for="(curItem, index) in shortcutList" :key="index">
			<view @click="toPage(ele.path, ele.type)" class="shortcuts_label" v-for="(ele, idx) in curItem" :key="idx">
				<image class="icon" :src="ele.icon"></image>
				<text class="name">{{ele.name}}</text>
			</view>
			<Spacer />
		</view>
	</view>
</template>

<script>
	import Spacer from '@/components/spacer/spacer.vue'
	import appConfig from '@/config/appConfig.js'
	export default {
		name: 'ShortcutList',
		components: {
			Spacer
		},
		data(){
			return {
				shortcutList: [
					[
						{
							name: '安全',
							path: '/pages/safe/index',
							icon: '/static/images/icons/account/1.png'
						},
						{
							name: '实名认证',
							path: '/pages/certification/index',
							icon: '/static/images/icons/account/2.png'
						},
						{
							name: '收款账号',
							path: '/pages/account_number/index',
							icon: '/static/images/icons/account/3.png'
						}
					],
					[
						{
							name: '订单',
							path: '/pages/order/index',
							icon: '/static/images/icons/account/4.png'
						},
						{
							name: '提币地址',
							path: '/pages/withdrawal_address/index',
							icon: '/static/images/icons/account/5.png'
						},
					],
					[
						{
							name: '我的收益',
							path: '/pages/my_earnings/index',
							icon: '/static/images/icons/account/6.png'
						},
						{
							name: '我要邀请',
							path: '/pages/invite/index',
							icon: '/static/images/icons/account/7.png'
						},
					],
					[
						{
							name: '公告',
							path: 'http://help.getbit.in/',
							icon: '/static/images/icons/account/8.png',
							type: 'web'
						},
						{
							name: '提交工单',
							path: '/pages/work_order/index',
							icon: '/static/images/icons/account/9.png'
						},
						{
							name: '帮助中心',
							path: 'http://help.getbit.in/',
							icon: '/static/images/icons/account/10.png',
							type: 'web'
						},
						{
							name: '关于我们',
							path: '/pages/aboutus/index',
							icon: '/static/images/icons/account/11.png'
						},
					]
				]
			}
		},
		methods: {
			toPage(path, type){
				if(type == 'web'){
					uni.navigateTo({
						url: '/pages/web/index?url=' + appConfig.newsDomain
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
	.shortcuts{
		background: #fff;
	}
	.shortcuts .shortcuts_label{
		border-bottom: 1px solid #f9f9f9;
		padding: 30upx;
		border-radius: 0;
		position: relative;
	}
	.shortcuts .shortcuts_label .icon{
		width: 40upx;
		height: 40upx;
	}
	.shortcuts .shortcuts_label .name{
		vertical-align: top;
		padding-left: 20upx;
		line-height: 40upx;
		display: inline-block;
	}
</style>
