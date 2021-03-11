<template>
	<view class="page bottom_page">
		<view class="inner">
			<view class="select_currency"  @click="show = true">
				<view class="name">{{getCurrency}}</view>
				<view class="sub">选择币种</view>
				<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
			</view>
			<view class="form_label">
				<view class="name">地址</view>
				<input class="input_bar input_bar_bottom" :placeholder="`请输入或粘贴${getCurrency}地址`" v-model="form.address"/>
				<image src="../../static/images/icons/sao_light.png" class="right_sao"></image>
			</view>
			<view class="form_label">
				<view class="name">交易密码</view>
				<input class="input_bar input_bar_bottom" placeholder="请输入交易密码" type="password" v-model="form.deal_pwd"/>
			</view>
		</view>
		<view class="bottom_btn_bar">
			<view class="buttons" @click="addWalletCashAddressHandler">确定</view>
		</view>
		<u-action-sheet @click="clickHandler" :list="list" v-model="show"></u-action-sheet>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { addWalletCashAddress } from '@/apis/cash.js'
	import tips from '@/utils/tips.js'
	import storage from '@/utils/storage.js'
	export default {
		name: 'WithdrawalAddress',
		data(){
			return {
				show: false,
				list: [],
				getCurrency: '',
				form: {
					address: '',
					deal_pwd: '',
					coin_id: ''
				},
				active: 0
			}
		},
		methods: {
			clickHandler(index){
				this.active = index
				this.getCurrency = this.getQuotation[index].fromcname
				this.form.coin_id = this.getQuotation[index].fromcid
			},
			async addWalletCashAddressHandler(){
				if(this.form.address.length === 0){
					return tips.showToast('钱包地址不能为空')
				}
				if(this.form.deal_pwd.length === 0){
					return tips.showToast('交易密码不能为空')
				}
				const uid = storage.getLocalData('token')
				const params = {
					uid: uid,
					data: this.form,
				}
				const res = await addWalletCashAddress(params)
			}
		},
		computed: {
			...mapGetters({
				getQuotation: 'getQuotation'
			})
		},
		watch: {
			getQuotation(val){
				this.list = val.map(res => {
					res.text = res.fromcname
					return res
				})
				this.getCurrency = val[this.active].fromcname
				this.form.coin_id = val[this.active].fromcid
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '添加地址'
			})
		}
	}
</script>

<style scoped>
	.select_currency{
		height: 72upx;
		padding: 20upx;
		background: #e4e8ee;
		border-radius: 20upx;
		position: relative;
		box-sizing: border-box;
	}
	.right_arrow{
		width: 30upx;
		height: 30upx;
		position: absolute;
		right: 20upx;
		top: 25upx;
	}
	.right_sao{
		width: 40upx;
		height: 40upx;
		position: absolute;
		right: 20upx;
		bottom: 45upx;
	}
	.form_label{
		position: relative;
	}
	.select_currency .sub{
		position: absolute;
		right: 60upx;
		top: 20upx;
		font-size: 26upx;
		color: #666;
	}
</style>
