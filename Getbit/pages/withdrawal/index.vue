<template>
	<view class="page">
		<view class="select_currency" @click="show = true">
			<view class="name">{{form.getCurrency}}</view>
			<view class="sub">选择币种</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
		</view>
		<view class="form_label">
			<view class="name">提币地址</view>
			<input class="input_bar input_bar_bottom" disabled="true" placeholder="请选择提币地址" v-model="form.address"/>
			<image src="../../static/images/icons/address.png" class="address" @click="toPage('/pages/withdrawal_address/index')"></image>
		</view>
		<view class="form_label">
			<view class="name">数量</view>
			<input class="input_bar input_bar_bottom" :placeholder="getNumPlaceholder" v-model="form.num"/>
			<text class="currency">{{form.getCurrency}}</text>
		</view>
		<view class="subs">
			<view class="box">可用 {{usable.toFixed(6)}} {{form.getCurrency}}</view>
			<view class="box" @click="all">全部</view>
		</view>
		<view class="form_label">
			<view class="name">手续费</view>
			<input class="input_bar input_bar_bottom" disabled="true" v-model="fee"/>
			<text class="currency">{{form.getCurrency}}</text>
		</view>
		<view class="form_label">
			<view class="name">验证码</view>
			<view class="code_bar">
				<u-subsection :font-size="20" :list="actionList" :current="action" button-color="#007AFF" active-color="#fff"></u-subsection>
			</view>
			<input class="input_bar input_bar_bottom" placeholder="请输入验证码" v-model="form.code"/>
			<text class="validate">发送验证码</text>
		</view>
		<view class="form_label">
			<view :class="['buttons', getActive]">确认提币</view>
		</view>
		<u-action-sheet @click="clickHandler" :list="list" v-model="show"></u-action-sheet>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { walletCashAddressList } from '@/apis/cash.js'
	import storage from '@/utils/storage'
	export default {
		name: 'Withdrawal',
		data(){
			return {
				form: {
					getCurrency: '',
					num: '',
					code: '',
					address: ''
				},
				usable: 0,
				fee: 0,
				show: false,
				list: [],
				active: 0,
				actionList: [
					{
						name: '短信验证码'
					}, 
					{
						name: '邮箱验证码'
				}],
				action: 0,
				curCurrencyData: {}
			}
		},
		methods: {
			scan(){
				
			},
			clickHandler(index){
				this.active = index
				this.form.getCurrency = this.getQuotation[index].fromcname
			},
			all(){
				
			},
			toPage(path){
				uni.navigateTo({
					url: path
				})
			},
			async walletCashAddressListHandler(){
				const uid = storage.getLocalData('token')
				const coin_id = this.getQuotation[this.active].fromcid
				const res = walletCashAddressList({uid: uid, coin_id: coin_id})
				this.curCurrencyData = res
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '提币'
			})
		},
		computed: {
			getNumPlaceholder(){
				return '最小提笔数量'
			},
			getActive(){
				if(this.form.num.length > 0 && this.form.address.length > 0 && this.form.code.length > 0){
					return 'on'
				}
				return 'un'
			},
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
				this.form.getCurrency = val[this.active].fromcname
				this.walletCashAddressListHandler()
			}
		},
		onNavigationBarButtonTap(e) {
			const index = e.index
			switch(index){
				case 0 :
				   //跳转记录
				   this.toPage('/pages/withdrawal_record/index')
				   break;
				case 1 :
				   //扫码
				   this.scan()
				   break;
			}
		}
	}
</script>

<style scoped>
	.page{
		padding: 20upx;
	}
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
	.select_currency .sub{
		position: absolute;
		right: 60upx;
		top: 20upx;
		font-size: 26upx;
		color: #666;
	}
	.form_label{
		position: relative;
	}
	.currency{
		position: absolute;
		right: 0;
		bottom: 40upx;
	}
	.subs{
		width: 100%;
		display: flex;
	}
	.subs .box{
		width: 50%;
		font-size: 24upx
	}
	.subs :last-child{
		width: 50%;
		text-align: right;
		color: #007AFF;
	}
	.validate{
		position: absolute;
		right: 0;
		color: #007AFF;
		font-size: 24upx;
		bottom:40upx;
	}
	.code_bar{
		width: 60%;
		margin-bottom: 20upx;
	}
	.address{
		width: 40upx;
		height: 40upx;
		position: absolute;
		right: 0;
		bottom: 40upx;
	}
</style>
