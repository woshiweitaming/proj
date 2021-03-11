<template>
	<view class="page">
		<view class="form_label">
			<view class="name">姓名</view>
			<view class="tips_value">请输入该支付宝真实姓名，用户对方付款时校验</view>
			<input class="input_bar input_bar_bottom" placeholder="请输入姓名" v-model="form.name"/>
		</view>
		<view class="form_label">
			<view class="name">支付宝账号</view>
			<input class="input_bar input_bar_bottom" placeholder="请输入支付宝账号" v-model="form.account"/>
		</view>
		<view class="form_label">
			<view class="qrcode">
				<view class="tips">+ 收款码</view>
				<view class="light">上传支付宝收款码</view>
			</view>
		</view>
		<view class="form_label">
			<view :class="['buttons', getActive]">保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Alipay',
		data(){
			return {
				form: {
					name: '',
					account: '',
					pic: ''
				}
			}
		},
		methods: {
		},
		computed: {
			getActive(){
				if(this.form.name.length > 0 && this.form.account.length > 0 && this.form.pic.length > 0){
					return 'on'
				}
				return 'un'
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '支付宝'
			})
		}
	}
</script>

<style scoped>
	.page{
		background: #fff;
	}
	.tips_value{
		color: #DF5000;
		font-size: 24upx;
		margin-bottom: 20upx;
	}
</style>
