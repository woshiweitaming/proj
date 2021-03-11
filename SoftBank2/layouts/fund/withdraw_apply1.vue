<template>
	<view class="form_class">
		<view class="withdraw_content">
			<view class="form_label">
				<view class="form_label_name">{{getLangs('drawithCurrency')}}</view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<view class="select" @tap.stop="stopClick">
							<view class="select_label">
								<view class="select_name">{{getUSDT}}</view>
								<!-- <text class="iconfont icon-unfold"></text> -->
							</view>
							<view class="select_drop" v-show="currency.show">
								<view class="selelct_drop_main" @tap.stop="stopClick">
									<view @tap="changeDrop(key)" class="select_drop_label" v-for="(items, key) in getAccountList"  :key="key">{{items}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name">{{getLangs('linkname')}}</view>
				<view class="form_label_main linked_main">
					<view class="linked_list">
						<view @tap="changeChain(items.id)" :class="['linked_label', chainId === items.id ? 'on' : '']" v-for="(items, index) in chainList" :key="index">{{items.name}}</view>
					</view>
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name">{{getLangs('drawithAddress')}}</view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<!-- <input @tap="show = true" type="text" class="input_bar" :placeholder="getLangs('walletAddress')" disabled="true"/> -->
						<view class="select" @tap.stop="stopClick">
							<view class="select_label" @tap="show = !show">
								<view class="select_name">{{qbdizhi === '' ? getLangs('walletAddress') : qbdizhi}}</view>
								<text class="iconfont icon-unfold"></text>
							</view>
							<view class="select_drop" v-show="show">
								<view class="selelct_drop_main" @tap.stop="stopClick">
									<view @tap="changeDrop(items)" class="select_drop_label" v-for="(items, key) in walletList"  :key="key">{{items.address}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name">{{getLangs('drawithNum')}}</view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<input type="text" @input="checkInput" class="input_bar" :placeholder="getLangs('withdrawalAmount')" v-model="dollar" />
						<text @tap="all" class="all_cash">{{getLangs('drawithAll')}}</text>
					</view>
					<text class="sub">{{getLangs('avaliableUsdt')}}(USDT) : {{config.usdt}}</text>
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name">{{getLangs('drawithFee')}}</view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<input type="text" class="input_bar fees" :placeholder="getLangs('withdrawalAmount')" :value="getFees" />
					</view>
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name">{{getLangs('drawithTips')}}</view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<rich-text class="tips_desc" :nodes="getLangs('drawithTipsText')"></rich-text>
					</view>
				</view>
			</view>
			<view class="account">{{getLangs('accountNums')}}:{{getAccountNums}}</view>
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
	import { withdrawal, getWinConfig, getPayAddList } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	export default {
		name: 'WithdrawApply',
		props: ['status'],
		mixins: [langsMixins, commonMixins, accountLeftmoneyMixins, currencyMixins],
		data(){
			return {
				dollar: '',
				banknumber: '',
				bname: '',
				bankname: '',
				badds: '',
				qbdizhi: '',
				chainList: [
					{
						name: 'ERC20',
						id: 1
					},
					{
						name: 'TRC20',
						id: 2
					},
					{
						name: 'OMNI',
						id: 3
					}
				],
				chainId: 1,
				config: {},
				walletList: [],
				show: false
			}
		},
		methods:{
			openDrop(){
				this.currency.show = !this.currency.show
			},
			changeDrop(index){
				this.currency.active = index
				this.currency.show = false
			},
			stopClick(e){
				e.stopPropagation()
			},
			eventClick(){
				this.currency.show = false
			},
			changeChain(id){
				this.chainId = id
			},
			/**
			 * 全部提现
			 */
			all(){
				this.dollar = this.config.usdt
			},
			/**
			 * 提现
			 */
			async withdrawHandler(){
				if(this.dollar === ''){
					return this.$tips.showToast(this.getLangs('withdrawalAmount'))
				}
				if(this.walletList.length === 0){
					return this.navigateTo('/pages/add_wallet/index')
				}
				if(this.walletList.length > 0){
					if(this.qbdizhi === ''){
						return this.$tips.showToast(this.getLangs('walletAddressEmpty'))
					}
				}
				const params = {
					dollar: this.dollar,
					qbdizhi: this.qbdizhi,
					name: this.chainList.filter(res => res.id == this.chainId)[0].name
				}
				const res = await withdrawal(params)
				this.backTips(res)
				if(validate.checkCode(res)){
					this.redirectTo('/pages/success_tips/index?name=withdraw')
				}
				// //需要验证详细信息
				// if(appConfig.isDrawithInput){
				// 	if(this.banknumber === ''){
				// 		return this.$tips.showToast(this.getLangs('bankAccountNumberEmpty'))
				// 	}
				// 	if(this.bname === ''){
				// 		return this.$tips.showToast(this.getLangs('customerNameEmpty'))
				// 	}
				// 	if(this.bankname === ''){
				// 		return this.$tips.showToast(this.getLangs('bankNameEmpty'))
				// 	}
				// 	if(this.badds === ''){
				// 		return this.$tips.showToast(this.getLangs('walletAddressEmpty'))
				// 	}
				// }
				// this.$tips.showLoading(this.getLangs('loadingText'))
				// const params = {
				// 	dollar: this.dollar,
				// 	banknumber: this.banknumber,
				// 	bname: this.bname,
				// 	bankname: this.bankname,
				// 	badds: this.badds,
				// 	qbdizhi: this.qbdizhi
				// }
				// const res = await withdrawal(params)
				// this.$tips.hideLoading()
				// this.backTips(res)
			},
			async init(){
				const res = await getWinConfig()
				this.config = res.data
			},
			async getPayAddListHandler(){
				const res = await getPayAddList()
				this.walletList= res.data
				if(this.walletList.length === 0){
					// this.navigateTo('/pages/add_wallet/index')
					let that = this
					uni.showModal({
					    content: this.getLangs('tipsp1'),
						showCancel: true,
						cancelText: this.getLangs('cancel'),
						confirmText: this.getLangs('confirm'),
					    success: function (res) {
					        if(res.confirm){
								that.navigateTo('/pages/add_wallet/index')
							}
					    }
					})
				}
			},
			/**
			 * 选择钱包
			 */
			changeDrop(data){
				this.qbdizhi = data.address
				this.show = false
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
			}
		},
		computed: {
			//计算手续费
			getFees(){
				if(this.config.fee >= 1){
					return this.config.fee
				}
				if(this.dollar === '') return 0
				return (this.dollar * this.config.fee).toFixed(2)
			},
			//预计到账数量
			getAccountNums(){
				if(this.dollar === ''){
					return 0
				}
				const res = this.dollar - Number(this.getFees)
				return res > 0 ? res.toFixed(2) : 0
			},
			getUSDT(){
				return 'USDT'
			},
			...mapGetters({
				getCertInfo: 'getCertInfo'
			})
		},
		created() {
			// this.init()
			this.fromData.active = 'coin'
			//this.getPayAddListHandler()
		},
		watch: {
			getCertInfo(val){
				//this.init()
			},
			status:{
				handler(val){
					this.init()
					this.getPayAddListHandler()
				},
				deep: true,
				immediate: true
			}
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
		color: #fff;
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
