<template>
	<view class="page">
		<view class="form_label">
			<view class="name">微信昵称</view>
			<input class="input_bar input_bar_bottom" placeholder="请输入微信昵称" v-model="form.name"/>
		</view>
		<view class="form_label">
			<view class="name">账号</view>
			<input class="input_bar input_bar_bottom" placeholder="请输入微信账号" v-model="form.account"/>
		</view>
		<view class="form_label">
			<view class="qrcode">
				<view class="tips">+ 收款码</view>
				<view class="light">上传微信收款码</view>
			</view>
		</view>
		<view class="form_label">
			<view :class="['buttons', getActive]">保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Wechat',
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
				title: '微信'
			})
		}
	}
</script>

<style scoped>
	.page{
		background: #fff;
	}
</style>
