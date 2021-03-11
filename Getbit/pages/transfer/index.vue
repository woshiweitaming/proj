<template>
	<view class="page">
		<view class="select_currency" @click="show = true">
			<view class="name">{{form.getCurrency}}</view>
			<view class="sub">选择币种</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
		</view>
		<view class="transfer">
			<view class="action">
				<image mode="widthFix" src="../../static/images/icons/action.png" class="action_img"></image>
			</view>
			<view class="btns"><image class="icon" src="../../static/images/icons/transfer_icon.png"></image></view>
			<view class="box">
				<view class="fixed">从</view>
				<view class="value">合约账户</view>
			</view>
			<view class="box">
				<view class="fixed">到</view>
				<view class="value">币币资产</view>
			</view>
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
		<view class="tips">只有将资产换转到对应的钱包才可进行相关交易，钱包间的划转不收取手续费</view>
		<view class="form_label">
			<view :class="['buttons', getActive]">划转</view>
		</view>
		<u-action-sheet @click="clickHandler" :list="list" v-model="show"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		name: 'Withdrawal',
		data(){
			return {
				form: {
					getCurrency: 'LTC',
					num: '',
				},
				usable: 0,
				show: false,
				list: [{
					text: 'LTC',
				},
				{
					text: 'BTC',
				}],
			}
		},
		methods: {
			clickHandler(index){
				this.form.getCurrency = this.list[index].text
			},
			all(){
				
			},
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '划转'
			})
		},
		computed: {
			getNumPlaceholder(){
				return '最小划转数量'
			},
			getActive(){
				if(this.form.num.length > 0){
					return 'on'
				}
				return 'un'
			}
		},
		onNavigationBarButtonTap(e) {
			this.toPage('/pages/transfer_record/index')
		}
	}
</script>

<style scoped>
	.page{
		padding: 20upx;
		background: #fff;
	}
	.select_currency{
		padding: 20upx;
		background: #f4f5fa;
		border-radius: 20upx;
		position: relative;
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
	.transfer{
		padding-right: 120upx;
		padding-left: 100upx;
		border: 1px solid #eee;
		margin-top: 80upx;
		position: relative;
		height: 200upx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		flex-direction: column;
	}
	.transfer .btns{
		width: 120upx;
		background: #f4f5fa;
		height: 200upx;
		position: absolute;
		right: 0;
		text-align: center;
		padding-top: 70upx;
	}
	.transfer .action{
		width: 60upx;
		height: 200upx;
		position: absolute;
		left: 0;
		padding-top: 35upx;
		padding-left: 40upx;
	}
	.action_img{
		width: 20upx		
	}
	.transfer .box{
		height: 100upx;
		width: 100%;
		border-bottom: 1px solid #eee;
		display: flex;
		line-height: 80upx;
	}
	.transfer .box:last-child{
		border-bottom: none;
		line-height: 110upx;
	}
	.transfer .box .fixed{
		color: #666;
		padding-right: 40upx;
	}
	.buttons{
		margin-top: 60upx;
	}
	.icon{
		width: 60upx;
		height: 60upx;
	}
	.tips{
		padding: 40upx;
		background: #f6f6f7;
		margin-top: 80upx;
		font-size: 24upx
	}
</style>
