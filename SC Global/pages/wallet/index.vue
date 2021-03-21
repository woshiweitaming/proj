<template>
	<view class="wallet_class">
		<view class="wallet_list">
			<view class="no_data" v-if="dataList.length === 0">{{getLangs('noData')}}</view>
			<view class="labels" v-else v-for="(items, index) in dataList" :key="index">
				<uni-swipe-action>
				    <uni-swipe-action-item :options="options" @click="onClick($event, items)">
				         <view class="items"><text class="currency">{{items.bname}}</text><text class="box">{{items.chainname}}</text></view>
				         <view class="items"><text class="name">{{items.remarks}}</text></view>
				         <view class="items"><text class="address">{{items.address}}</text></view>
				         <view class="more"><image class="more_icon" src="../../static/images/more.png"></image></view>
				    </uni-swipe-action-item>
				</uni-swipe-action>	
			</view>
		</view>
		<view class="wallet_btn">
			<view class="buttons" @tap="navigateTo('/pages/add_wallet/index')">{{getLangs('addWalletAddress')}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 钱包
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	import validate from '@/utils/validate.js'
	import { getPayAddList, delPayAddress } from '@/api/user.js'
	export default {
		name: 'Wallet',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				dataList: [],
			    options:[
			        {
			            text: '取消',
						icon: '/static/images/edit_icon.png',
			            style: {
			                backgroundColor: '#fff'
			            }
			        }, {
			            text: '确认',
						icon: '/static/images/del_icon.png',
			            style: {
			                backgroundColor: '#fff'
			            }
			        }
			    ]
			}
		},
		components: {
		    uniSwipeAction,
		    uniSwipeActionItem
		},
		methods: {
			async getPayAddListHandler(){
				const res = await getPayAddList()
				this.dataList = res.data
			},
			onClick(e, data){
				const index = e.index
				//编辑
				if(index === 0){
					this.navigateTo('/pages/add_wallet/index', data)
				}
				//删除
				if(index === 1){
					this.delPayAddressHander(data.id)
				}
			},
			/**
			 * 删除地址
			 */
			async delPayAddressHander(id){
				const params = {id: id}
				const res = await delPayAddress(params)
				this.backTips(res)
				if(validate.checkCode(res)){
					this.getPayAddListHandler()
				}
			}
		},
		onShow(){
			this.setTitle(this.getLangs('walletAddress'))
			this.getPayAddListHandler()
		}
	}
</script>

<style scoped>
	page{
		background: #f9f9f9;
	}
	.wallet_class{
		height: 100%;
		padding-bottom: 130upx;
		box-sizing: border-box;
		border-top: 1px solid #f9f9f9
	}
	.wallet_class .wallet_btn{
		width: 100%;
		height: 80upx;
		text-align: center;
		position: fixed;
		left: 0;
		bottom: 40upx;
		padding: 0 40upx;
		box-sizing: border-box;
	}
	.wallet_class .wallet_btn .buttons{
		width: 100%;
		height: 80upx;
		text-align: center;
		background: #2970e6;
		color: #fff;
		text-align: center;
		line-height: 80upx;
		height: 80upx;
		border-radius: 40upx;
	}
	.wallet_list{
		height: 100%;
		margin-top: 20upx;
	}
	.wallet_list .labels{
		padding: 20upx;
		box-sizing: border-box;
		border-bottom: 1px solid #f9f9f9;
		background: #fff;
		position: relative;
		display: flex;
	}
	.wallet_list .items{
		width: 100%
	}
	.wallet_list .labels .currency,
	.wallet_list .labels .name{
		font-size: 32upx;
		font-weight: bold;
		line-height: 50upx;
	}
	.wallet_list .labels .currency{
		color: #333;
	}
	.wallet_list .labels .name{
		color: #333;
	}
	.wallet_list .labels .address{
		font-size: 24upx;
		color: #90a2b0;
	}
	.wallet_list .labels .box{
		font-size: 24upx;
		text-align: center;
		background: #eff5fd;
		color: #588bf7;
		display: inline-block;
		margin-left: 20upx;
		font-weight: bold;
		padding: 0 5px;
	}
	.wallet_list .more{
		position: absolute;
		width: 20upx;
		height: 20upx;
		position: absolute;
		right: 0;
		top: 50upx;
	}
	.wallet_list .more .more_icon{
		width: 5upx;
		height: 30upx;
	}
</style>
