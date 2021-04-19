<template>
	<view class="transfer">
		<view class="card">
			<view class="name">{{opt.type == 0 ? getLang('transfer_p2') : getLang('transfer_p6')}}</view>
			<view class="card_money">
				<view class="mark">¥</view>
				<view class="card_input">
					<input type="text" v-model="amount" class="input_bar" />
				</view>
			</view>
			<view class="used" v-if="opt.type == 0">{{ getLang('transfer_p3')+':'+balance1}}</view>
			<view class="used" v-if="opt.type == 1">{{ getLang('transfer_p7')+':'+balance2}}</view>
		</view>
		<view class="btns" @click="rlbTransferHandler">{{opt.type == 0 ? getLang('transfer_p4') : getLang('transfer_p8')}}</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { rlbTransfer } from '@/apis/publics.js'
	import { getBalance, getRlbDetails  } from '@/apis/users.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'Transfer',
		mixins: [langMixins],
		data(){
			return {
				opt: {},
				amount: '',
				balance1: 0,
				balance2: 0
			}
		},
		methods: {
			async rlbTransferHandler(){
				if(this.amount.length === 0) return tips.showToast(this.getLang('transfer_p9'))
				if(this.opt.type == 0){
					if(Number(this.amount) > this.balance1){
						 return tips.showToast(this.getLang('transfer_p10'))
					}
				}
				if(this.opt.type == 1){
					if(Number(this.amount) > this.balance2){
						 return tips.showToast(this.getLang('transfer_p11'))
					}
				}
				await rlbTransfer({amount: this.amount, type: this.opt.type})
				uni.navigateTo({
					url: '/pages/transfer_success/index'
				})
			},
			async getBalanceHandler(){
				const res = await getBalance()
				this.balance1 = res.data.balance
			},
			async getRlbDetailsHandler(){
				const res = await getRlbDetails()
				this.balance2 = res.data.rlb_balance
			},
		},
		onLoad(opt) {
			this.opt = opt
			if(opt.type == 0){
				uni.setNavigationBarTitle({
					title: this.getLang('transfer_p1')
				})
			}else{
				uni.setNavigationBarTitle({
					title: this.getLang('transfer_p5')
				})
			}
			this.getBalanceHandler()
			this.getRlbDetailsHandler()
		}
	}
</script>

<style scoped>
	.transfer{
		padding: 20upx;
	}
	.card{
		padding: 20upx;
		background: #fff;
		border-radius: 20upx;
		box-shadow: 0 0 10upx 0 rgba(0,0,0,.1);
	}
	.card .name{
		color: #666;
		margin-bottom: 20upx;
	}
	.card_money{
		display: flex;
		border-bottom: 1px solid #eee;
	}
	.card_money .mark{
		width: 10%;
		font-size: 80upx;
	}
	.card_money .card_input{
		width: 90%;
	}
	.card_money .card_input .input_bar{
		line-height: 112upx;
		height: 112upx;
		font-size: 80upx;
		font-weight: bold;
	}
	.used{
		line-height: 80upx;
		color: #666;
	}
	.btns{
		border-radius: 40upx;
		background: #0077FF;
		line-height: 80upx;
		text-align: center;
		color: #fff;
		margin-top: 40upx;
	}
</style>
