<template>
	<view class="pool_trade_class">
		<view class="pool_trade_card">
			<view class="name">{{getLangs('poolp17')}}({{name}})</view>
			<view class="leftmoney">{{getYield}}</view>
			<view class="name">≈ {{getData}}% {{getLangs('poolp8')}}</view>
		</view>
		<view class="pool_trade_input">
			<text class="name">{{getLangs('poolp12')}}</text>
			<input class="input_bar" type="text" @input="inputHander" v-model="amount" :placeholder="datas.min_amount === undefined ? '' : datas.min_amount + name" />
			<text class="all" @tap="all">{{getLangs('poolp14')}}</text>
		</view>
		<view class="tips">{{getLangs('poolp13')}}:{{getUsableLeftmoney}}</view>
		<view class="pool_limit">
			<view class="title">{{getLangs('poolp15')}}</view>
			<view class="list">
				<view :class="[active === index ? 'on' : '', 'items']" v-for="(items, index) in getPoolLimit" :key="index">
					<view @tap="changeItems(index)" class="text">{{items}}</view>
				</view>
			</view>
			<view class="tips">{{ getLangs('poolp23') + name + getLangs('poolp24') + datas.min_redeem_day + getLangs('poolp18')}}</view>
		</view>
		<view class="bottom">
			<view class="hd">
				<image @tap="change" v-if="checked" src="../../static/images/checked.png" class="check"></image>
				<image @tap="change" v-else src="../../static/images/check.png" class="check"></image>
			   {{getLangs('poolp25')}}<text class="link">《{{getLangs('poolp49')}}》</text>,{{getLangs('poolp26')}}
			</view>
			<view class="btn_bar">
			   <view class="btns" @tap="submit">{{getLangs('poolp27')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Header from '@/layouts/common/header.vue'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import { getMiningPoolProcuteList, submitMiningPoolOrder } from '@/api/user.js'
	import Utils from '@/utils/Utils.js'
	import validate from '@/utils/validate.js'
	export default {
		name: 'PoolTrade',
		mixins: [commonMixins, langsMixins, userMixins],
		components: {
			Header
		},
		data(){
			return {
				pid: '',
				name: '',
				leftmoney: '0.00',
				datas: {},
				active: 0,
				checked: true,
				amount: '',
				timer: null
			}
		},
		methods: {
			async getMiningPoolProcuteListHandler(){
				const params = {
					mid: this.pid
				}
				const res = await getMiningPoolProcuteList(params)
				this.datas = res.list[0]
			},
			change(){
				this.checked = !this.checked
			},
			changeItems(index){
				this.active = index
			},
			getDays(){
				let res = 0
				switch(this.active){
					case 0 :
					   res = 0
					   break;
					case 1 :
					   res = 30
					   break;
				    case 2 :
				       res = 60
				       break;
					case 3 :
					   res = 90
					   break;
				}
				return res
			},
			async submit(){
				if(this.amount === ''){
					return this.$tips.showToast(this.getLangs('poolp44'))
				}
				const params = {
					mid: this.pid,
					amount: this.amount,
					period: this.getDays()
				}
				const date = Utils.toDate(new Date().getTime() + 3600000)
				const curDate = date.split(' ')[0]
				const res = await submitMiningPoolOrder(params)
				if(validate.checkCode(res)){
					this.navigateTo('/pages/pool_confirm/index', Object.assign(res.data, params))
				}else{
					this.backTips(res)
				}
				// uni.showModal({
				//     content: curDate + this.getLangs('poolp42'),
				//     success: async (res) => {
				//         if (res.confirm) {
				// 			this.navigateTo('/pages/pool_confirm/index', params)
				//         }
				//     }
				// });	
			},
			setTimer(){
				this.timer = setInterval(() => {
					this.getUserLeftmoneyHandler()
				}, 2000)
			},
			clearTimer(){
				clearInterval(this.timer)
				this.timer = null
			},
			all(){
				this.amount = this.getUsableLeftmoney
			},
			inputHander(e){
				setTimeout(() => {
					const value = e.detail.value
					const regs = /^([0]|[1-9][0-9]*)$/
					if(regs.test(value)){
						this.amount = value
					}else{
						this.amount = ''
					}
				}, 50)
			}
		}, 
		computed: {
			getData(){
				let active = 'D0'
				switch(this.active){
					case 0 :
					   active = 'D0'
					   break;
					case 1 :
					   active = 'D30'
					   break;
				    case 2 :
				       active = 'D60'
				       break;
					case 3 :
					   active = 'D90'
					   break;
				}
				return this.datas[active]
			},
			getPoolLimit(){
				let arr = [this.getLangs('poolp48'), (30 + this.getLangs('poolp18')),(60 + this.getLangs('poolp18')), (90 + this.getLangs('poolp18'))]
				return arr
			},
			getYield(){
				//本金×年化收益率×投资天数/365
				const days = this.getDays()
				const amount = this.amount == '' ? 0 : this.amount
				const data = this.getData
				const res = amount * (data/100) * 1 / 365
				return res === 0 ? res.toFixed(2) : res.toFixed(8)
			},
			getUsableLeftmoney(){
				const data = this.getAccountBanlance
				if(data.length == 0) return 0
				const leftmoney = data[3][this.name].usable
				return leftmoney
			},
			...mapGetters({
				getAccountBanlance: 'getAccountBanlance'
			})
		},
		onLoad(opt){
			this.pid = opt.pid
			this.name = opt.name
		},
		onShow() {
			this.setTitle(this.name + this.getLangs('poolp11'))
			this.getMiningPoolProcuteListHandler()
			this.getUserLeftmoneyHandler()
			this.setTimer()
			this.$once('hook:destroyed', () => {
				this.clearTimer()
			})
		}
	}
</script>

<style scoped>
	.pool_trade_class{
		border-top: none;
		height: 100%;
		padding-bottom: 200upx;
		background: #f9f9f9;
	}
	.pool_trade_card{
		background: #323457;
		padding: 20upx;
	}
	.pool_trade_card .name{
		text-align: center;
		color: rgba(255,255,255,.6);
		font-size: 24upx;
		line-height: 80upx;
	}
	.pool_trade_card .leftmoney{
		color: #fff;
		font-size: 46upx;
		text-align: center;
		font-weight: bold;
	}
	.pool_trade_input{
		margin-top: 20upx;
		background: #fff;
		padding: 20upx;
		position: relative;
		padding-right: 80upx;
		display: flex;
	}
	.pool_trade_input .name{
		font-size: 30upx;
	}
	.pool_trade_input .input_bar{
		font-size: 30upx;
		padding-left: 10upx;
	}
	.pool_trade_input .all{
		color: #007AFF;
		position: absolute;
		right: 20upx;
		top: 20upx;
	}
	.tips{
		padding: 0 10upx;
		color: #999;
		line-height: 60upx;
		font-size: 24upx
	}
	.pool_limit{
		padding: 10upx;
		background: #fff;
	}
	.pool_limit .title{
		font-size: 30upx;
		line-height: 80upx;
	}
	.pool_limit .list .items{
		display: inline-block;
		padding: 10upx 20upx;
		border-radius: 5px;
		margin-right: 10upx;
		border: 1px solid #eee;
		font-size: 28upx
	}
	.pool_limit .list .items.on{
		border: 1px solid #007AFF;
		color: #007AFF;
	}
	.pool_limit .tips{
		padding-top: 10upx;
		border-top: 1px solid #f9f9f9;
		margin-top: 20upx;
	}
	.bottom{
		width: 100%;
		position: fixed;
		height: 160upx;
		bottom: 40upx;
		left: 0;
	}
	.bottom .hd{
		text-align: center;
		font-size: 24upx;
		color: #aaa;
		padding: 0 10upx 0 60upx;
		position: relative;
	}
	.bottom .hd .link{
		color: #007AFF;
	}
	.bottom .btn_bar{
		padding: 0 20upx;
	}
	.bottom .btns{
		background: #007AFF;
		color: #fff;
		text-align: center;
		line-height: 80upx;
		margin-top: 10upx;
		border-radius: 10upx;
	}
	.check{
		width: 40upx;
		height: 40upx;
		position: absolute;
		left: 20upx;
		top: 0;
	}
</style>
