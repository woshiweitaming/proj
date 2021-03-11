<template>
	<view class="mask" v-if="show">
		<view class="main">
			<view class="title">绑定信息</view>
			<u-field
				v-model="uname"
				label="用户名"
				placeholder="请输入用户名"
			>
			</u-field>
			<u-field
				v-model="pwd"
				label="密码"
				placeholder="请输入密码"
			>
			</u-field>
			<view class="btns_box">
				<view class="btns" @click="confirm">绑定</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { setFlag } from '@/api/user.js'
	export default {
		data() {
			return {
				show: false,
				uname: '',
				pwd: ''
			}
		},
		onReady() {
			this.show = true;
		},
		methods: {
			async confirm() {
				if(this.uname.length == 0){
					return this.$tips.showToast('请输入用户名')
				}
				if(this.pwd.length == 0){
					return this.$tips.showToast('请输入密码')
				}
				const res = await setFlag({uname: this.uname, pwd: this.pwd})
				if(res.rpCode == '000000'){
					this.show = false
					uni.reLaunch({
						url: '/pages/home/index'
					})
				}else{
					this.$tips.showToast(res.rpMsg)
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background: rgba(0,0,0,.5);
		z-index: 10;
	}
	.main{
		width: 80%;
		position: fixed;
		left: 50%;
		margin-left: -40%;
		background: #fff;
		top: 40%;
		border-radius: 20upx;
	}
	.title{
		line-height: 120upx;
		text-align: center;
		border-bottom: 1px solid #eee;
		font-size: 32upx;
	}
	.btns_box{
		height: 160upx;
		text-align: center;
		padding-top: 40upx;
	}
	.btns{
		width: 60%;
		margin: auto;
		background: #007AFF;
		line-height: 70upx;
		border-radius: 20upx;
		color: #fff;
	}
</style>
