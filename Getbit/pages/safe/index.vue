<template>
	<view class="page">
		<view class="labels">
			<view class="name">手机</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
			<text :class="['status', getPhone ? '' : 'un']">{{getPhone ? '已开启' : '未绑定'}}</text>
		</view>
		<view class="labels">
			<view class="name">电子邮箱</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
			<text class="status un"></text>
		</view>
		<view class="labels">
			<view class="name">谷歌身份认证器</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
			<text class="status"></text>
		</view>
		<view class="labels" @click="toPage('/pages/certification/index')">
			<view class="name">实名认证</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
			<text :class="['status', getCertStatu ? 'un' : '']">{{getCertStatus ? '已认证' : '未认证'}}</text>
		</view>
		<view class="sub">其他设置</view>
		<view class="labels" @click="toPage('/pages/pay_passwd/index')">
			<view class="name">支付密码</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
			<text class="status">重置</text>
		</view>
		<view class="labels" @click="toPage('/pages/login_passwd/index')">
			<view class="name">登录密码</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
			<text class="status">重置</text>
		</view>
	</view>
</template>

<script>
	import { getAuthStatus } from '@/apis/user.js'
	import storage from '@/utils/storage.js'
	export default {
		name: 'Safe',
		data(){
			return {
				userInfo:{}
			}
		},
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			},
			async getAuthStatusHandler(){
				const uid = storage.getLocalData('token')
				const res = await getAuthStatus({uid: uid})
				this.userInfo = res
			}
		},
		computed: {
			getPhone(){
				return this.userInfo.auth_phone && this.userInfo.auth_phone != ''
			},
			getCertStatus(){
				return this.userInfo.auth_type == 0
			}
		},
		onLoad() {
			this.getAuthStatusHandler()
			uni.setNavigationBarTitle({
				title: '账户与安全'
			})
		}
	}
</script>

<style scoped>
	.page{
		padding: 20upx 0 0 20upx;
	}
	.labels{
		padding: 40upx 0;
		border-bottom: 1px solid #eee;
		font-size: 28upx;
		position: relative;
	}
	.sub{
		margin-top: 60upx;
		color: #666;
	}
	.right_arrow{
		width: 20upx;
		height: 20upx;
		position: absolute;
		right: 20upx;
		bottom: 50upx;
	}
	.status{
		position: absolute;
		right: 60upx;
		bottom: 40upx;
		color: #999;
	}
	.un{
		color: #FA3534;
	}
</style>
