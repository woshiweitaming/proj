<template>
	<view class="recharge_class">
		<view class="recharge_box">
			<view class="title">{{getLangs('rechargeChannel')}}</view>
			<view class="recharge_lists">
				<view @tap="payHandler(items.id)" :class="['recharge_list', items.id === id ? 'on' : '']" v-for="(items, index) in rechargeList" :key="index">
					<image mode="widthFix" class="icons" :src="`../../static/images/recharge/${items.id}.png`"></image>
					<text class="names">{{items.name}}</text>
					<image class="icon" src="../../static/images/right_arrow.png"></image>
				</view>
			</view>
		</view>
		<!-- <view class="recharge_input_main">
			<input type="idcard" v-model="amount" class="input_bar" :placeholder="getLangs('numEmptyTips')" @input="checkInput"/>
		</view>
		<view class="recharge_money_list">
			<view @tap="selectAmonut(items)" class="recharge_money_items" v-for="(items, index) in rechargeMoneyList" :key="index">
				<view :class="['labels', amount == items ? 'on' : '']">{{items}}</view>
			</view>
		</view>
		<view class="recharge_channel_list">
			<text class="name">{{getLangs('rechargeChannel')}}</text>
			<view @tap="changePay(items.id)" :class="['recharge_channel_label', items.id === id ? 'on' : '']" v-for="(items, index) in rechargeList" :key="index">
				{{items.name}}
			</view>
		</view>
		<view class="form_class">
			<view class="button" @tap="payHandler">{{getLangs('submit')}}</view>
		</view>
		<view class="table_class">
			<RechargeRecord ref="rechargeRecord" />
		</view> -->
	</view>
</template>

<script>
	/**
	 * 充值
	 */
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import { getPayList, pay } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	import RechargeRecord from '@/layouts/fund/recharge_record.vue'
	export default {
		name: 'Recharge',
		mixins: [langsMixins, commonMixins],
		data(){
			return{
				rechargeList: [],
				rechargeMoneyList: [100,500,1000,3000,5000,10000,30000,50000],
				id: '',
				amount: ''
			}
		},
		components: {
			RechargeRecord
		},
		methods: {
			/**
			 * 获取充值渠道
			 */
			async getPayListHandler(){
				const res = await getPayList()
				this.rechargeList = res.data.sort((a, b) => a.id - b.id)
				this.id = this.rechargeList[0].id
			},
			/**
			 * 切换充值渠道
			 */
			changePay(id){
				this.id = id
			},
			/**
			 * 选择金额
			 */
			selectAmonut(amount){
				this.amount = amount
			},
			/**
			 * 充值
			 */
			async payHandler(id){
				// if(this.amount === ''){
				// 	return this.$tips.showToast(this.getLangs('rechargeLimit'))
				// }
				//客服充值
				if(id == 1){
					return this.kefuRecharge()
				}
				const params = {
					id: id,
					name: this.rechargeList.filter(res => res.id == id)[0].name
				}
				this.navigateTo('/pages/recharging/index', params)
				// const res = await pay(params)
				// this.backTips(res)
				// if(validate.checkCode(res)){
				// 	this.getRechargeRecord()
				// 	const urlParams = {
				// 		amount: this.amount,
				// 		orderno: res.data.orderno
				// 	}
				// 	this.navigateTo('/pages/recharging/index', urlParams)
				// }
			},
			/**
			 * 获取充值记录
			 */
			getRechargeRecord(){
				this.$refs.rechargeRecord.getPayHandler()
			},
			/**
			 * 客服直充
			 */
			kefuRecharge(){
				uni.showModal({
					title: this.getLangs('serverRecharge'),
					content: this.getLangs('kefutip1') + this.amount + this.getLangs('kefutip2'), 
					cancelText: this.getLangs('undone'),
					confirmText: this.getLangs('completed'),
					success: async (btn) => {
						if(btn.confirm){
							const params = {
								amount: this.amount,
								id: this.id,
								name: this.rechargeList.filter(res => res.id == this.id)[0].name
							}
							this.navigateTo('/pages/recharging/index', params)
						}else{
							this.navigateTo('/pages/kefu/index')
						}
					}
				})
			},
			checkInput(e){
				setTimeout(() => {
					const regs = /^(\d+|\d+\.\d{0,4})$/;
					const val = e.detail.value
					if(regs.test(val)){
						this.amount = val
					}else{
						const arr = val.split('.')
						const zs = arr[0]
						const xs = arr[1]
						if(xs.length > 4){
							this.amount = zs+'.'+xs.substring(0,4)
						}else{
							this.amount = zs+'.'+xs
						}
						//this.amount = val.substring(0, val.length-1)
					}
				},20)
			}
		},
		onShow() {
			this.getPayListHandler()
			this.setTitle(this.getLangs('rechargeCenter'))
		}
	}
</script>
<style scoped>
	.recharge_box{
		width: 100%;
		background: #fff;
		margin: 60% auto 0 auto;
		border-radius: 20upx;
		padding-bottom: 10upx;
	}
	.recharge_box .title{
		padding: 20upx;
		font-size: 32upx;
		font-weight: bold;
		color: #1f3f59;
		border-bottom: 1px solid #eee;
	}
	.recharge_box .recharge_list{
		padding: 20upx;
		border-bottom: 1px solid #eee;
		position: relative;
	}
	.recharge_box .recharge_list:last-child{
		border-bottom: none;
	}
	.recharge_box .recharge_lists .icon{
		position: absolute;
		right: 20upx;
		width: 40upx;
		height: 40upx;
	}
</style>
<style scoped>
	.recharge_class{
		height: 100%;
		padding: 40upx;
		background: url(../../static/images/recharge_bg.jpg);
		background-size: 100% 100%;
	}
	.recharge_input_main{
		margin: 20upx auto 10upx auto;
		padding: 0 20upx 40upx 20upx;
	}
	.recharge_class .name{
		display: block;
		line-height: 80upx;
		font-size: 30upx;
		color: #aaa;
	}
	.recharge_channel_list{
		margin-top: 40upx;
	}
	.recharge_class .input_bar{
		font-size: 28upx;
		text-align: center;
		border: 1px solid rgba(255,255,255,.05);
		padding: 20upx 0;
		border-radius: 20upx;
		background: rgba(255,255,255,.05);
		color: #fff;
	}
	.recharge_channel_label{
		width: 30%;
		display: inline-block;
		padding: 10upx;
		font-size: 26upx;
		border-radius: 20upx;
		border: 1px dashed rgba(255,255,255,.2);
		color: #aaa;
		background: rgba(0,0,0,.01);
		margin-right: 10upx;
		box-sizing: border-box;
		text-align: center;
		margin-bottom: 20upx;
	}
	.recharge_channel_label.on{
		background: #2970e6;
		color: #fff;
		border: 1px solid #2970e6
	}
	.recharge_money_list{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	.recharge_money_list .recharge_money_items{
		width: 25%;
		padding: 10upx;
		box-sizing: border-box;
	}
	.recharge_money_list .recharge_money_items .labels{
		width: 100%;
		text-align: center;
		border: 1px dashed rgba(255,255,255,.2);
		color: #aaa;
		background: rgba(0,0,0,.01);
		line-height: 60upx;
		border-radius: 20upx;
		font-size: 26upx;
	}
	.recharge_money_list .recharge_money_items .labels.on{
		background: #2970e6;
		color: #fff;
		border: 1px solid #2970e6;
	}
	.table_class{
		margin-top: 40upx;
	}
	.icons{
		width: 40upx;
		height: 40upx;
	}
	.names{
		line-height: 40upx;
		vertical-align: top;
		margin-left: 20upx;
	}
</style>
