<template>
	<view class="exchange_class">
		<view class="leftmoney">
			<text class="leftmoney_text">{{getLangs('leftmoney')}}</text>
			<text class="leftmoney_amount">{{leftmoney}}</text>
		</view>
		<view class="form_class">
			<view class="login_form_content">
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-redpacket"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="number" class="input_bar" @input="checkDollar" :placeholder="getLangs('quantityExtracted')" v-model="form.dollar" />
						</view>
					</view>
				</view>
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-barrage"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="number" class="input_bar" @input="checkBankNumber" :placeholder="getLangs('bankAccountNumber')" v-model="form.banknumber" />
						</view>
					</view>
				</view>
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-addressbook"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" class="input_bar" :placeholder="getLangs('customerName')" v-model="form.name" />
						</view>
					</view>
				</view>
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-headlines"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" class="input_bar" :placeholder="getLangs('bankName')" v-model="form.bankname" />
						</view>
					</view>
				</view>
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-order"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" class="input_bar" :placeholder="getLangs('baddsText')" v-model="form.badds" />
						</view>
					</view>
				</view>
				<view class="form_class">
					<view class="button" @tap="submit">{{getLangs('submit')}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 兑换
	 */
	import { mapMutations, mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import accountLeftmoneyMixins from '@/mixins/account_leftmoney_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import validate from '@/utils/validate.js'
	import { getWinConfig } from '@/api/user.js'
	import { getExchangeRate, confirmExchange, userCertInfo, withdrawalBank} from '@/api/user.js'
	let timer = null
	export default {
		name: 'Exchange',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				form: {
					dollar: '',
					banknumber: '',
					bankname: '',
					badds: '',
					name: ''
				},
				leftmoney: 0
			 }
		},
		methods: {
			async submit(){
				if(this.form.dollar === ''){
					return this.$tips.showToast(this.getLangs('withdrawalAmount'))
				}
				if(Number(this.form.dollar) < 10){
					return this.$tips.showToast(this.getLangs('withdrawTips'))
				}
				const res = await withdrawalBank(this.form)
				this.backTips(res)
			},
			/**
			 * 获取提现数据
			 */
			async getUserCertInfo(){
				const res = await userCertInfo()
				this.form.banknumber = res.data.banknumber
				this.form.bankname = res.data.bankname
				this.form.name = res.data.name
				this.form.badds = res.data.badds
			},
			checkDollar(data){
				const regs = /^\d{1,}$/
				const val = data.detail.value
				if(regs.test(val)){
					this.form.dollar = val
				}else{
					this.form.dollar = ''
				}
			},
			checkBankNumber(data){
				const regs = /^\d{1,}$/
				const val = data.detail.value
				if(regs.test(val)){
					this.form.banknumber = val
				}else{
					this.form.banknumber = ''
				}
			},
			async getWinConfigHandler(){
				const res = await getWinConfig()
				this.leftmoney = res.data.usdt
				this.setTimer()
			},
			setTimer(){
				timer = setInterval(() => {
					this.getWinConfigHandler()
				}, 3000)
			},
			clearTimer(){
				clearInterval(timer)
				timer = null
			}
		},
		onShow() {
			this.setTitle(this.getLangs('withdrawText1'))
			this.getUserCertInfo()
			this.getWinConfigHandler()
		},
		onUnload() {
			this.clearTimer()
		},
		onHide(){
			this.clearTimer()
		}
	}
</script>

<style scoped>
	.leftmoney{
		padding: 20upx 40upx;
		text-align: center;
	}
	.leftmoney .leftmoney_text{
		color: #7C91C0;
		display: block;
		width: 100%;
		margin-bottom: 10upx;
	}
	.leftmoney .leftmoney_amount{
		width: 100%;
		text-align: center;
		display: block;
		color: #007AFF;
		font-size: 36upx
	}
	.form_class{
		padding: 20upx;
	}
	.leftmoney_input{
		color: #007AFF;
	}
</style>
