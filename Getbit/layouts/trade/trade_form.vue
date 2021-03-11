<template>
	<view class="w60">
		<view class="menu">
			<view @click="changeMenu(index)" :class="['label', type == index ? 'on' : '']" v-for="(curItem, index) in menuList" :key="index">{{curItem}}</view>
		</view>
		<view class="input_bar">
			<input class="input" v-model="form.price" type="number" placeholder="价格">
			<view class="btn">
				<view class="dec" @click="dec">-</view>
				<view class="inc" @click="inc">+</view>
			</view>
		</view>
		<view class="input_bar">
			<input class="input" v-model="form.nums" type="number"  placeholder="数量">
			<view class="text">{{getData.fromcname}}</view>
		</view>
		<view class="balance_av">可用: {{balance}}</view>
		<Sliderbar :action="type" @callback="callback"/>
		<view class="trade_price">交易额 {{getPrice.toFixed(6)}}</view>
		<view :class="['buttons', `button${type}`]" @click="startEutrustHandler">{{type == 0 ? '买入' : '卖出'}}</view>
	</view>
</template>

<script>
	import Sliderbar from './slidebar.vue'
	import { getWalletIndex } from '@/apis/wallet.js'
	import storage from '@/utils/storage.js'
	import { startEutrust } from '@/apis/exc.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'TradeMain',
		props: ['getData', 'type'],
		data(){
			return {
				menuList: ['买入', '卖出'],
				form: {
					price: '',
					nums: '',
					excpairs: '',
					uid: ''
				},
				balance: 0,
				part: 0
			}
		},
		methods: {
			changeMenu(index){
				this.$emit('callback', index)
			},
			inc(){
				this.form.price = this.form.price == '' ? 0 : Number(this.form.price)
				if(this.form.price > -1){
					this.form.price++
				}
			},
			dec(){
				this.form.price = this.form.price == '' ? 0 : Number(this.form.price)
				if(this.form.price > 0){
					this.form.price--
				}
			},
			async getWalletIndexHanlder(){
				const res = await getWalletIndex({uid: this.form.uid})
				this.balance = Number(res.total).toFixed(6)
			},
			async startEutrustHandler(){
				if(this.form.price == '') return tips.showToast('价格不能为空')
				if(this.form.nums == '') return tips.showToast('数量不能为空')
				const params = Object.assign(this.form, {type: Number(this.type)+1})
				const res = await startEutrust(params)
				if(res == null){
					tips.showToast('成功')
					this.form.price == ''
					this.form.nums == ''
				}
			},
			callback(value){
				this.part = value
				this.form.nums = (this.balance * value / 100).toFixed(6)
			}
		},
		computed: {
			getPrice(){
				return Number(this.form.nums) * Number(this.form.price)
			}
		},
		components: {
			Sliderbar
		},
		created() {
			this.form.uid = storage.getLocalData('token')
		},
		watch: {
			getData(val){
				this.form.excpairs = val.id
				this.getWalletIndexHanlder()
			}
		}
	}
</script>

<style scoped>
	.w60{
		width: 60%;
	}
	.menu{
		height: 80upx;
		display: flex;
		justify-content: space-between;
	}
	.menu .label{
		width: 200upx;
		height: 72upx;
		text-align: center;
		line-height: 72upx;
	}
	.menu .label:first-child{
		background: url(../../static/images/icons/common/left.png);
		background-size: 200upx 72upx;
	}
	.menu .label:last-child{
		background: url(../../static/images/icons/common/right.png);
		background-size: 200upx 72upx;
	}
	.menu .label:first-child.on{
		background: url(../../static/images/icons/common/buy.png);
		background-size: 200upx 72upx;
		color: #Fff;
	}
	.menu .label:last-child.on{
		background: url(../../static/images/icons/common/sell.png);
		background-size: 200upx 72upx;
		color: #fff;
	}
	.input_bar{
		border: 1px solid #eee;
		border-radius: 5px;
		margin-top: 20upx;
		position: relative;
	}
	.input_bar .input{
		padding: 0 20upx;
		line-height: 80upx;
		font-size: 28upx
	}
	.input_bar .btn{
		width: 180upx;
		position: absolute;
		right: 0;
		top: 0;
		display: flex;
	}
	.input_bar .btn .inc,
	.input_bar .btn .dec{
		width: 50%;
		text-align: center;
		line-height: 78upx;
		font-size: 40upx;
		color: #aaa;
	}
	.input_bar .btn .dec{
		border-left: 1px solid #eee;
		border-right: 1px solid #eee;
	}
	.input_bar .text{
		position: absolute;
		right: 20upx;
		top: 0;
		line-height: 80upx;
	}
	.balance_av{
		line-height: 80upx;
		font-size: 24upx;
		color: #999;
	}
	.trade_price{
		font-size: 24upx;
		color: #999;
		margin-bottom: 40upx;
	}
</style>
