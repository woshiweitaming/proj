<template>
	<view class="page">
		<view class="form_label">
			<view class="name">持卡人</view>
			<input class="input_bar input_bar_bottom" placeholder="请输入持卡人姓名" v-model="form.name"/>
		</view>
		<view class="form_label">
			<view class="name">银行卡号</view>
			<input class="input_bar input_bar_bottom" placeholder="请输入银行卡号" v-model="form.number"/>
		</view>
		<view class="form_label">
			<view class="name">银行</view>
			<input class="input_bar input_bar_bottom" placeholder="请输入银行卡所属银行" v-model="form.bank"/>
		</view>
		<view class="form_label">
			<view class="name">开户行</view>
			<input class="input_bar input_bar_bottom" placeholder="请输入开户行" v-model="form.address"/>
		</view>
		<view class="form_label">
			<view :class="['buttons', getActive]">保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Bankcard',
		data(){
			return {
				form: {
					name: '',
					number: '',
					bank: '',
					address: ''
				}
			}
		},
		methods: {
		},
		computed: {
			getActive(){
				if(this.form.name.length > 0 && this.form.number.length > 0 && this.form.bank.length > 0 && this.form.address.length > 0){
					return 'on'
				}
				return 'un'
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '银行卡'
			})
		}
	}
</script>

<style scoped>
	.page{
		background: #fff;
	}
</style>
