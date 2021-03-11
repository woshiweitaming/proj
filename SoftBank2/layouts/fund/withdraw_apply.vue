<template>
	<view class="form_class">
		<view class="withdraw_content">
			<view class="form_label">
				<view class="form_label_name">{{getLangs('usdtMargin')}}</view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<input type="text" disabled class="input_bar" :placeholder="getLangs('withdrawalAmount')" v-model="getLeftmoney" />
					</view>
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name">{{getLangs('drawithNum')}}</view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<input type="text" @input="checkInput" class="input_bar" :placeholder="getLangs('quantityExtracted')" v-model="params.dollar" />
						<text @tap="all" class="all_cash">{{getLangs('drawithAll')}}</text>
					</view>
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name">{{getLangs('bankAccountNumber')}}</view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<input type="text" class="input_bar" :placeholder="getLangs('bankAccountNumber')" v-model="params.banknumber" />
					</view>
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name">{{getLangs('customerName')}}</view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<input type="text" class="input_bar" :placeholder="getLangs('customerName')" v-model="params.name" />
					</view>
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name">{{getLangs('bankName')}}</view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<picker class="input_bar" @change="bindPickerChange" :value="banksIndex" :range="banks">
						    <view class="uni-input">{{banks[banksIndex]}}</view>
						 </picker>
					</view>
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name">{{getLangs('bankAddress')}}</view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<input type="text" class="input_bar" :placeholder="getLangs('bankAddress')" v-model="params.badds" />
					</view>
				</view>
			</view>
			<button class="button" @click="withdrawHandler">{{getLangs('withdrawBtn')}}</button>
		</view>
	</view>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	import appConfig from '@/config/appConfig.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import accountLeftmoneyMixins from '@/mixins/account_leftmoney_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import { withdrawal, getWinConfig, getPayAddList, withdrawalBank } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	import banks from '@/data/banks.js'
	export default {
		name: 'WithdrawApply',
		props: ['status'],
		mixins: [langsMixins, commonMixins, accountLeftmoneyMixins, currencyMixins, userMixins],
		data(){
			return {
				config: {},
				params: {
					dollar: '',
					banknumber: '',
					bankname: '',
					name: '',
					badds: ''
				},
				banks: banks,
				banksIndex: 0
			}
		},
		methods:{
			/**
			 * 全部提现
			 */
			all(){
				this.params.dollar = this.getLeftmoney
			},
			/**
			 * 提现
			 */
			async withdrawHandler(){
				if(this.params.dollar.length === 0){
					return this.$tips.showToast(this.getLangs('withdrawalAmount'))
				}
				this.params.bankname = this.banks[this.banksIndex]
				const res = await withdrawalBank(this.params)
				this.backTips(res)
				if(validate.checkCode(res)){
					this.redirectTo('/pages/success_tips/index?name=withdraw')
				}
			},
			async init(){
				const res = await getWinConfig()
				this.config = res.data
			},
			bindPickerChange(value){
				this.banksIndex = value.detail.value
			},
			checkInput(e){
				setTimeout(() => {
					const regs = /^(\d+|\d+\.\d{0,4})$/;
					const val = e.detail.value
					if(regs.test(val)){
						this.dollar = val
					}else{
						if(val.indexOf('.') > -1){
							const arr = val.split('.')
							const zs = arr[0]
							const xs = arr[1]
							if(xs.length > 4){
								this.dollar = zs+'.'+xs.substring(0,4)
							}else{
								this.dollar = zs+'.'+xs
							}
						}else{
							this.dollar = ''
						}
						//this.amount = val.substring(0, val.length-1)
					}
				},50)
			},
		},
		computed: {
			...mapGetters({
				getCertInfo: 'getCertInfo'
			})
		},
		created() {
			this.init()
			this.getUserLeftmoneyHandler()
			this.setTimer()
			this.$once('hook:onUnload', () => {
			    this.clearTimer()                              
			})
			this.$once('hook:onHide', () => {
			    this.clearTimer()                              
			})
		}
	}
</script>

<style scoped>
	.form_class{
		padding: 20upx;
		background: #f9f9f9
	}
	.form_label{
		padding-left: 0;
		border: none !important;
		background: none;
	}
	.form_label_name{
		position: initial !important;
		font-size: 30upx !important;
		color: #333 !important;
		font-weight: bold;
	}
	.withdraw_tips{
		text-align: left;
		font-size: 24upx;
		color: #DF5000; 
		width: 100%;
		line-height: 60upx;
		margin-top: 40upx;
	}
	.withdraw_input_bar{
		padding: 0 20upx;
		border-bottom: 2px solid #eee;
		box-sizing: border-box;
		
	}
	.withdraw_input .name{
		display: flex;
		line-height: 80upx;
		font-size: 28upx;
		color: rgba(255,255,255,.5);
	}
	.withdraw_input_bar .input_bar{
		text-align: center;
		font-size: 32upx;
		color: #000;
	}
	.input_bar{
		color: #333;
		background: #fff;
		border-radius: 10upx;
		padding: 20upx;
		font-weight: bold;
	}
	.linked_main .linked_label{
		width: 160upx;
		display: inline-block;
		padding: 10upx;
		margin-right: 20upx;
		border-radius: 10upx;
		text-align: center;
		font-size: 28upx;
		color: #aaa;
	}
	.linked_main .linked_label.on{
		background: #2970e6;
		border: 1px solid #2970e6;
		color: #fff
	}
	.select_drop{
		z-index: 100;
		background: #fff;
	}
	.select .iconfont{
		right: -20upx !important;
	}
	.all_cash{
		position: absolute;
		right: 20upx;
		top: 20upx;
		color: #007AFF;
		font-weight: bold;
		font-size: 26upx
	}
	.tips_desc{
		font-size: 24upx;
		color: #62759a;
	}
	.account{
		text-align: center;
		line-height: 40upx;
		font-size: 26upx;
		color: #007AFF;
		font-weight: bold;
	}
	.sub{
		font-size: 24upx;
		display: block;
		margin-top: 20upx;
		color: #8D9DBC;
		font-weight: bold;
	}
	.fees{
		color: #aaa;
	}
</style>
