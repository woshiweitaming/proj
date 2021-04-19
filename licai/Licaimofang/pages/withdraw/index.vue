<template>
	<view class="recharge">
		<view class="card">
			<view class="name">{{getLang('withdraw_p2')}}</view>
			<view class="value">¥ {{balance}}</view>
		</view>
		<view class="card card2">
			<view class="name">{{getLang('withdraw_p3')}}</view>
			<view class="card_input">
				<view class="mark">¥</view>
				<input type="text" v-model="amount" class="input_bar" />
			</view>
		</view>
		<view class="cards">
			<view class="title">{{getLang('withdraw_p5')}}</view>
			<view class="card_list">
				<view @click="selected(curItem.id)" :class="['labels', bankId == curItem.id ? 'on' : '']" v-for="(curItem, index) in dataList" :key="index">
					<image :src="bankInfo[curItem.bankcode].bg" class="icon"></image>
				    <view class="name">{{curItem.bankcode}}</view>
					<view class="name">{{curItem.banknumber}}</view>
				</view>
			</view>
		</view>
		<view class="card">
			<view class="name">{{getLang('withdraw_p9')}}</view>
			<view class="card_input">
				<input type="password" v-model="zjPwd" :placeholder="getLang('withdraw_p10')" class="input_bars" />
			</view>
		</view>
		<view class="btns" @click="withdrawalHandler">{{getLang('withdraw_p4')}}</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { getBalance, getBankList, withdrawal } from '@/apis/users.js'
	import tips from '@/utils/tips.js'
	let bankInfo = require('@/datas/banks.json');
	export default {
		name: 'Withdraw',
		mixins: [langMixins],
		data(){
			return{
				balance: 0,
				bankId: '',
				amount: '',
				dataList: [],
				bankInfo: bankInfo,
				zjPwd: ''
			}
		},
		methods: {
			async getBalanceHandler(){
				const res = await getBalance()
				this.balance = res.data.balance
			},
			async getBankListHandler(){
				const res = await getBankList()
				this.dataList = res.data
				if(this.dataList.length === 0){
					tips.showToast(this.getLang('withdraw_p7'))
					return uni.navigateTo({
						url: '/pages/bank_list/index'
					})
				}
				this.bankId = this.dataList[0].id
			},
			async withdrawalHandler(){
				if(this.amount.length === 0){
					return tips.showToast(this.getLang('withdraw_p6'))
				}
				if(this.zjPwd.length === 0){
					return tips.showToast(this.getLang('withdraw_p10'))
				}
				if(Number(this.amount) > this.balance){
					return tips.showToast(this.getLang('withdraw_p11'))
				}
				const params = {
					bankId: this.bankId, 
					amount: this.amount, 
					zjPwd: this.zjPwd
				}
				const res = await withdrawal(params)
				uni.navigateTo({
					url: '/pages/withdraw_success/index'
				})
			},
			selected(id){
				this.bankId = id
			}
		},
		onShow(){
			this.getBalanceHandler()
			this.getBankListHandler()
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('withdraw_p1')
			})
		}
	}
</script>

<style scoped>
	.recharge{
		padding: 20upx;
	}
	.card{
		padding: 20upx;
		background: #fff;
		border-radius: 20upx;
		box-shadow: 0 0 10upx 0 rgba(0,0,0,.1);
		display: flex;
		margin-bottom: 20upx;
	}
	.card .name,
	.card .value{
		width: 50%;
	}
	.card .name{
		font-weight: bold;
	}
	.card .value{
		text-align: right;
		font-size: 32upx;
		color: #0077FF;
	}
	.card2{
		flex-wrap: wrap;
	}
	.card2 .name{
		width: 100% !important;
	}
	.card .mark{
		width: 10%;
		font-size: 80upx;
	}
	.card .card_input{
		width: 90%;
		display: flex;
	}
	.card .card_input .input_bar{
		line-height: 112upx;
		height: 112upx;
		font-size: 80upx;
		font-weight: bold;
		padding-left: 20rpx;
	}
	.btns{
		border-radius: 40upx;
		background: #0077FF;
		line-height: 80upx;
		text-align: center;
		color: #fff;
		margin-top: 40upx;
	}
	.btns.border{
		line-height: 76upx;
		background: none;
		border: 1px solid #0077FF;
		color: #0077FF;
		box-sizing: border-box;
	}
	.card3{
		background: #f9f9f9;
		padding: 0;
		text-align: center;
		height: 400upx;
		line-height: 400upx;
		position: relative;
	}
	.card3 .name{
		width: 100%;
		position: absolute;
		left: 50%;
		margin-left: -50%;
		color: #aaa;
	}
	.img_bar{
		height: 400upx;
	}
	.head_img{
		width: 100%;
		height: 400upx;
	}
	.cards{
		padding: 20upx;
		background: #fff;
		border-radius: 20upx;
		box-shadow: 0 0 10upx 0 rgba(0,0,0,.1);
		margin-bottom: 20upx;
	}
	.cards .title{
		margin-bottom: 20upx;
		color: #666;
	}
	.cards .labels{
		padding: 10upx;
		border: 2px solid #eee;
		border-radius: 40upx;
		display: flex;
		margin-bottom: 20upx;
	}
	.cards .labels .name{
		line-height: 80upx;
		font-weight: bold;
		padding-left: 10upx;
	}
	.cards .labels .icon{
		width: 80upx;
		height: 80upx;
	}
	.cards .labels.on{
		border: 2px solid #0077FF
	}
	.input_bars{
		font-size: 28upx
	}
</style>
