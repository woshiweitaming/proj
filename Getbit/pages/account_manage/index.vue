<template>
	<view class="page">
		<view class="labels" @click="select(index)" v-for="(curItem, index) in accountList" :key="index">
			<view class="name">{{curItem.name}}</view>
			<image src="../../static/images/icons/selected_red.png" v-if="index == active" class="right_arrow"></image>
		</view>
		<view class="labels" @click="toPage">
			<view class="text"><image class="add" src="../../static/images/icons/create_account.png"></image>添加或注册账号</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'AccountManage',
		data(){
			return {
				accountList: [
					{
						name: '1564654647',
						value: 0
					}
				],
				active: 0
			}
		},
		methods: {
			select(index){
				this.active = index
			},
			toPage(){
				uni.reLaunch({
					url: '/pages/login_phone/index'
				})
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '账户管理'
			})
		}
	}
</script>

<style scoped>
	.page{
		padding: 20upx 0 0 20upx;
		background: #fff;
	}
	.labels{
		padding: 40upx 0;
		border-bottom: 1px solid #eee;
		font-size: 28upx;
		position: relative;
	}
	.right_arrow{
		width: 30upx;
		height: 20upx;
		position: absolute;
		right: 20upx;
		bottom: 50upx;
	}
	.text{
		color: #007AFF;
		font-weight: bold;
	}
	.add{
		width: 40upx;
		height: 40upx;
		vertical-align: middle;
		margin-right: 20upx;
	}
</style>
