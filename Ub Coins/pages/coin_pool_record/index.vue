<template>
	<view class="coin_pool_record_class">
		<view class="menu_bar">
			<view @tap="changeMenu(index)" :class="['labels', active === index ? 'on' : '']" v-for="(items, index) in menuList" :key="index">{{getLangs(items)}}</view>
		</view>
		<view class="menu_record">
			<view class="labels" v-for="(items, index) in dataList" :key="index">
				<view class="hd">{{items.order_no}}</view>
				<view class="bd">
					<view class="items">
						<view class="p">{{getLangs('recordp1')}}</view>
						<view class="p">{{items.amount}}/{{items.period}}</view>
					</view>
					<view class="items">
						<view class="p">{{getLangs('recordp2')}}</view>
						<view class="p">{{items.dayRate}}</view>
					</view>
					<view class="items">
						<view class="p">{{getLangs('recordp3')}}</view>
						<view class="p">{{items.profit}}/{{items.remain_days}}</view>
					</view>
					<view class="items">
						<view class="p">{{items.create_time}}</view>
						<view @tap="toPage(items.order_no)" class="p btn">{{getLangs('viewDetails')}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getCoinPoolProductOrderList } from '@/api/user.js'
	export default {
		name: 'CoinPoolRecord',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				menuList: ['hosting','redeemed','completed'],
				active: 0,
				dataList: []
			}
		},
		methods: {
			changeMenu(index){
				this.active = index
				this.getCoinPoolProductOrderListHandler()
			},
			async getCoinPoolProductOrderListHandler(){
				const params = {
					pageNumber: 1,
					pageSize: 50,
					status: this.active
				}
				const res = await getCoinPoolProductOrderList(params)
				this.dataList = res.data.list
			},
			toPage(order_no){
				this.navigateTo('/pages/coin_pool_record_detail/index', {orderNo: order_no, status: this.active})
			}
		},
		onShow() {
			this.getCoinPoolProductOrderListHandler()
			this.setTitle(this.getLangs('managedOrder'))
		},
		onBackPress(e) {  
			if (e.from === 'navigateBack') {  
			   return false;  
			}  
			const pages = getCurrentPages()
			const coinPoolPage = pages.findIndex(res => res.route == 'pages/coin_pool/index')
			uni.navigateBack({
			    delta: pages.length - 1 - coinPoolPage
			});
			return true
		}, 
	}
</script>

<style scoped>
	.coin_pool_record_class{
		background: #151936;
		height: 100%;
	}
	.menu_bar{
		height: 100upx;
		background: #323a5e;
		display: flex;
	}
	.menu_bar .labels{
		padding: 0 20upx;
		line-height: 100upx;
		color: #84a9e1;
		font-weight: bold;
		font-size: 30upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.menu_bar .labels.on{
		font-size: 40upx;
		color: #fff;
	}
	.menu_record{
		height: calc(100% - 100upx);
		overflow: auto;
	}
	.menu_record .labels{
		background: #323a5e;
		margin-top: 20upx;
	}
	.menu_record .labels .hd{
		line-height: 80upx;
		border-bottom: 1px solid rgba(255,255,255,.05);
		padding: 0 20upx;
		color: #fff;
	}
	.menu_record .labels .bd{
		padding: 20upx;
		border-bottom: 1px solid rgba(255,255,255,.05);
	}
	.menu_record .fd{
		height: 80upx;
		padding: 0 20upx;
		display: flex;
	}
	.menu_record .labels .items{
		color: #fff;
		font-size: 26upx;
		display: flex;
	}
	.menu_record .labels .items .p{
		line-height: 60upx;
		width: 50%;
	}
	.menu_record .labels .items .p:first-child,
	.menu_record .fd .p:first-child{
		text-align: left;
	}
	.menu_record .labels .items .p:last-child,
	.menu_record .fd .p:last-child{
		text-align: right;
	}
	.menu_record .fd .p{
		width: 50%;
		line-height: 80upx;
	}
	.menu_record .btn{
		color: #007AFF;
	}
</style>
