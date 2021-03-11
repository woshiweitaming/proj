<template>
	<view class="transfer_class" @tap="eventClick">
		<!--账户类型-->
		<view class="account_type transfer_type">
			<view class="title">{{getLangs('transferAccounts')}}</view>
			<view class="labels">
				<view class="label_name">{{getLangs('fromText')}}</view>
				<view class="label_list">
					<u-radio-group v-model="fromData.active">
						<u-radio 
						    shape="circle"
							v-for="(item, index) in fromData.list":key="index" 
							:name="item"
						>
							{{getLangs(item)}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			<view class="labels">
				<view class="label_name">{{getLangs('toText')}}</view>
				<view class="label_list">
					<view class="label_list">
						<u-radio-group v-model="toData.active">
							<u-radio 
							    shape="circle"
								v-for="(item, index) in toData.list" :key="index" 
								:name="item"
							>
								{{getLangs(item)}}
							</u-radio>
						</u-radio-group>
					</view>
				</view>
			</view>
		</view>
		<!--转化币种-->
		<view class="account_type">
			<view class="name">{{getLangs('transferCurrency')}}</view>
			<view class="select" @tap.stop="stopClick">
				<view class="select_label" @tap="openDrop">
					<view class="select_name">{{getCurrentAccount1.name}}</view>
					<text class="iconfont icon-unfold"></text>
				</view>
				<view class="select_drop" v-show="currency.show">
					<view class="selelct_drop_main" @tap.stop="stopClick">
						<view @tap="changeDrop1(key)" class="select_drop_label" v-for="(items, key) in getData"  :key="key">{{items.name}}</view>
					</view>
				</view>
			</view>
		</view>
		<!--交易数量-->
		<view class="num_class">
			<text class="exhange_num">{{getLangs('transferNum')}}</text>
			<view class="exchange_input">
				<view class="currency">{{getCurrentAccount1.name}}</view>
				<view class="input_bar">
					<input type="number" class="input_main" v-model="num" :placeholder="getLangs('numEmptyTips')"/>
				</view>
				<view @tap="allChange" class="all">{{getLangs('all')}}</view>
			</view>
			<!--各账户余额-->
			<view class="leftmoney_bar">
				<view class="value">
				    {{getLangs('avaliableUsdt')}}
					{{getMoney}}
			    </view>
			</view>
		</view>
		<view class="form_class">
			<button @tap="balanceTransferHandler" class="button">{{getLangs('transfer')}}</button>
		</view>
		<view class="tips">{{getLangs('transferTips')}}</view>
	</view>
</template>

<script>
	/**
	 * 兑换
	 */
	import { mapGetters, mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import accountLeftmoneyMixins from '@/mixins/account_leftmoney_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import { balanceTransfer } from '@/api/user.js'
	import { getProductId } from '@/api/public.js'
	export default {
		name: 'Transfer',
		mixins: [commonMixins, langsMixins, userMixins, accountLeftmoneyMixins, currencyMixins],
		data(){
			return {
				toData: {
					list: ['futures', 'contract', 'coin'],
					active: 'contract',
				},
				num: '',
				pList: [],
				active: 0
			}
		},
		methods: {
			/**
			 * 全部兑换
			 */
			allChange(){
				this.num = this.getMoney
			},
			/**
			 * 获取产品id
			 */
			async getProductIdHandler(){
				const res = await getProductId()
				this.pList = res.data
			},
			/**
			 * 提交划转
			 */
			async balanceTransferHandler(){
				if(this.num === ''){
					return this.$tips.showToast(this.getLangs('numEmptyTips'))
				}
				const _in = this.toData.list.findIndex(res => res === this.toData.active)
				const _out = this.fromData.list.findIndex(res => res === this.fromData.active) 
				const type = this.getCurrentAccount1.id
				const params = {
					in: _in,
					out: _out,
					num: this.num,
					type: type
				}
				this.$tips.showLoading(this.getLangs('loadingText'))
				const res = await balanceTransfer(params)
				this.backTips(res)
				this.getUserLeftmoneyHandler()
			},
			changeDrop1(key){
				this.active = key
				this.currency.show = false
			}
		},
		computed: {
			getData(){
				const data = this.pList
				return data.filter(res => res.name == 'BTC' || res.name == 'USDT' || res.name == 'ETH')
			},
			getCurrentAccount1(){
				if(this.getData.length === 0) return ''
				return this.getData[this.active]
			},
			getMoney(){
				const out = this.fromData.list.findIndex(res => res === this.fromData.active) 
				const type = this.getCurrentAccount1.name
				if(this.getAccountBanlance.length > 0 && typeof type !== 'undefined'){
					const curData = this.getAccountBanlance.filter(res => res.type == out)
					const usable = curData[0][type].usable
					return usable
				}
				return 0
			}
		},
		onShow() {
			this.getProductIdHandler()
			this.setTitle(this.getLangs('transfer'))
			this.getUserLeftmoneyHandler()
		},
	}
</script>

<style scoped>
	page{
		background-color: #f9f9f9;
	}
	.transfer_class{
		padding: 20upx;
		height: 100%;
	}
	.transfer_type{
		padding: 0 0 20upx 0 !important;
	}
	.transfer_type .labels{
		padding: 0 0 0 160upx;
		position: relative;
		min-height: 60upx;
		margin-bottom: 20upx;
	}
	.transfer_type .labels .label_name{
		position: absolute;
		left: 0;
		text-align: right;
		line-height: 60upx;
		top: 0;
		width: 150upx;
		color: #90a2b0;
	}
	.transfer_type .labels .label_list{
		vertical-align: top;
	}
	.transfer_type .title{
		line-height: 80upx;
		color: #333;
		font-size: 32upx;
		padding-left: 20upx;
		font-weight: bold;
	}
	.account_type,
	.currency_type,
	.num_class{
		padding: 20upx 20upx 20upx 200upx;
		border-radius: 20upx;
		background: #fff;
		margin-bottom: 20upx;
		box-sizing: border-box;
		padding-left: 200upx;
		position: relative;
	}
	.account_type{
		z-index: 10;
		padding-left: 260upx ;
	}
	.account_type .name{
		width: 200upx;
		text-align: left;
		font-size: 32upx;
		color: #333;
		line-height: 80upx;
		position: absolute;
		left: 10px;
		top: 10px;
		font-weight: bold;
	}
	.currency_type{
		padding-left: 20upx;
		display: flex;
		justify-content: space-between;
		z-index: 9;
	}
	.num_class{
		padding-left: 20px;
	}
	.currency_type .icon{
		width: 46upx;
		height: 46upx;
		position: absolute;
		left: 50%;
		margin-left: -23upx;
		top: 50%;
		margin-top: -23upx;
	}
	.currency_type .currency{
		width: 40%;
	}
	.num_class .exhange_num{
		line-height: 80upx;
		font-size: 32upx;
		color: #333;
	}
	.num_class .exchange_input{
		line-height: 100upx;
		font-size: 50upx;
		padding: 0 160upx 0 160upx;
		border-bottom: 1px solid rgba(255,255,255,.1)
	}
	.num_class .exchange_input .currency{
		line-height: 100upx;
		font-size: 50upx;
		position: absolute;
		left: 40upx;
		color: #333;
	}
	.num_class .exchange_input .input_bar{
		height: 100upx;
		font-size: 40upx;
		box-sizing: border-box;
		padding-left: 40upx;
		padding: 30upx 20px;
		color: #333;
	}
	.num_class .all{
		position: absolute;
		right: 20px;
		color: #007AFF;
		font-size: 28upx;
		top: 100upx;
	}
	.num_class .leftmoney_bar{
		display: flex;
	}
	.num_class .leftmoney_bar .labels{
		width: 33.3333%;
		text-align: center;
	}
	.num_class .leftmoney_bar .name{
		display: block;
		line-height: 80upx;
		font-size: 24upx;
		color: #90a2b0;
	}
	.num_class .leftmoney_bar .value{
		display: block;
		font-size: 24upx;
		color: #90a2b0;
		line-height: 60upx;
	}
	.select_name{
		color: #90a2b0;
		font-size: 28upx;
		font-weight: bold;
	}
	.tips{
		font-size: 26upx;
		padding: 0 20upx;
		color: #62759a;
		margin-top: 20upx;
	}
	.input_main{
		color: #333 !important;
	}
	.select{
		background: #f9f9f9;
	}
</style>