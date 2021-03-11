<template>
	<view class="withdrawals_class">
		<view class="form_main">
			<view class="form_items">
				<text class="name">{{getLangs('quantity')}}</text>
				<input :placeholder="getLangs('withdrawalAmount')" type="number" class="uni-input" @input="checkInput" v-model="dollar" />
			</view>
			<view class="form_items" v-for="(items, index) in form" :key="index">
				<text class="name">{{items.name}}</text>
				<input class="uni-input" :placeholder="items.placeholder" v-model="items.value" />
			</view>
			<view class="form_class">
			    <button class="button" @click="submit">{{getLangs('submit')}}</button>
			</view>
			<text class="tips_title">{{getLangs('specialReminder')}}</text>
			<text class="tips_content">{{getLangs('specialReminderText')}}</text>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { userCertInfo, withdrawal } from '../../api/user.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import validate from '@/utils/validate.js'
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		mixins: [commonMixins, langMixins],
		data(){
			return {
				dollar: '',
				form: {
					// qbdizhi: {
					// 	name: '钱包地址',
					// 	value: '',
					// 	placeholder: '请输入钱包地址',
					// },
					// phone: {
					// 	name: '联系方式',
					// 	value: '',
					// 	placeholder: '请输入联系方式',
					// 	required: true
					// },
					banknumber: {
						name: '银行账号',
						value: '',
						placeholder: '请输入银行账号',
						required: true
					},
					bname: {
						name: '客户名称',
						value: '',
						placeholder: '请输入客户名称',
						required: true
					},
					bankname: {
						name: '银行名称',
						value: '',
						placeholder: '请输入银行名称',
						required: true
					},
					badds: {
						name: '银行地址',
						value: '',
						placeholder: '请输入银行地址',
						required: true
					},
					qbdizhi: {
						name: '钱包地址',
						value: '',
						placeholder: '请输入钱包地址',
					},
				},
			}
		},
		computed: {
			...mapGetters({
				getLeftmoney: 'getLeftmoney'
			})
		},
		methods:{
			init(){
				this.form.banknumber.name = this.getLangs('bankAccountNumber')
				this.form.banknumber.placeholder = this.getLangs('bankAccountNumber')
				this.form.bname.name = this.getLangs('customerName')
				this.form.bname.placeholder = this.getLangs('customerName')
				this.form.bankname.name = this.getLangs('bankName')
				this.form.bankname.placeholder = this.getLangs('bankName')
				this.form.badds.name = this.getLangs('bankAddress')
				this.form.badds.placeholder = this.getLangs('bankAddress')
				this.form.qbdizhi.name = this.getLangs('walletAddress')
				this.form.qbdizhi.placeholder = this.getLangs('walletAddress')
			},
			/**
			 * 获取认证信息
			 */
			async getUserCertInfo(){
				const that = this
				const res = await userCertInfo()
				for(let key in that.form){
					that.form[key].value = res.data[key] === 'null' ? '' : res.data[key]
				}
			},
			/**
			 * 提现
			 */
		 	async submit(){
				let pass = 0
				if(this.dollar === ''){
					return this.$tips.showToast(this.getLangs('withdrawalAmount'))
				}
				if(Number(this.dollar) < 10){
					return this.$tips.showToast(this.getLangs('withdrawTips'))
				}
				const params = {
					banknumber: this.form.banknumber.value,
					bname: this.form.bname.value,
					bankname: this.form.bankname.value,
					badds: this.form.badds.value,
					qbdizhi: this.form.qbdizhi.value
				}
				// if(params.banknumber === ''){
				// 	return Tips.showToast(this.getLangs('bankAccountNumberEmpty'))
				// }
				// if(params.bname === ''){
				// 	return Tips.showToast(this.getLangs('customerNameEmpty'))
				// }
				// if(params.bankname === ''){
				// 	return Tips.showToast(this.getLangs('bankNameEmpty'))
				// }
				// if(params.badds === ''){
				// 	return Tips.showToast(this.getLangs('bankAddressEmpty'))
				// }
				// console.log(params.banknumber)
				const obj = {dollar: this.dollar}
				const res = await withdrawal(Object.assign(params, obj))
				this.backTips(res)
			},
			checkInput(e){
				setTimeout(() => {
					const regs = /^(\d+|\d+\.\d{0,4})$/;
					const val = e.detail.value
					if(regs.test(val)){
						this.dollar = val
					}else{
						const arr = val.split('.')
						const zs = arr[0]
						const xs = arr[1]
						if(xs.length > 4){
							this.dollar = zs+'.'+xs.substring(0,4)
						}else{
							this.dollar = zs+'.'+xs
						}
						//this.amount = val.substring(0, val.length-1)
					}
				},20)
			}
		},
		created() {
			//this.getUserCertInfo()
			this.init()
		}
	}
</script>

<style scoped>
	.form_main{
		padding: 0 10px;
		padding-top: 40upx;
	}
	.form_main .form_items{
		margin-bottom: 20upx;
		font-size: 28upx;
		position: relative;
		padding-left: 80px;
	}
	.form_main .form_items .name{
		width: 80px;
		line-height: 40px;
		display: block;
		text-align: left;
		position: absolute;
		left: 0;
		top: 0;
		font-size: 24upx;
		color: #72899A;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.form_main .form_items input{
		width: 100%;
		height: 40px;
		line-height: 40px;
		color: #4944b3;
		font-size: 26upx;
		border-bottom: 2px solid #eee;
	}
	.btns{
		margin-top: 20px;
		height: 35px;
		font-size: 26upx;
		line-height: 35px;
	}
	.tips_title,
	.tips_content{
		display: block;
		line-height: 50upx;
	}
	.tips_title{
		font-size: 26upx;
		color: #C12D3B;
		margin-top: 10px;
	}
	.tips_content{
		font-size: 24upx;
		color: #72899A;
	}
</style>
