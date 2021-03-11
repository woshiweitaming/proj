<template>
	<view class="list">
		<view class="wrap">
			<view class="title">{{menuList[menuActive]}}</view>
			<view class="list_main" v-if="menuActive == 0">
				<view class="cell" @click="toPage(curItem)" v-for="(curItem, index) in dataList" :key="index">
					<view class="date">{{toDate(curItem.ctime)}}</view>
					<view class="labels">
						<view class="items">
							<view class="n1">{{curItem.name}}</view>
							<view class="n2">名称</view>
						</view>
						<view class="items">
							<view class="n1">{{curItem.num}}</view>
							<view class="n2">数量</view>
						</view>
						<view class="items">
							<view class="n1">{{curItem.price}}</view>
							<view class="n2">发行价(USDT)</view>
						</view>
					</view>
				</view>
			</view>
			<view class="list_main l2" v-if="menuActive == 1">
				<view class="cell" @click="showDialog(curItem)" v-for="(curItem, index) in dataList" :key="index">
					<view class="date">{{toDate(curItem.ctime)}}</view>
					<view class="labels">
						<view class="items">
							<view class="n1">{{curItem.name}}</view>
							<view class="n2">名称</view>
						</view>
						<view class="items">
							<view class="n1">{{curItem.num}}</view>
							<view class="n2">数量</view>
						</view>
						<view class="items">
							<view class="n1">{{curItem.price}}</view>
							<view class="n2">发行价(USDT)</view>
						</view>
						<view class="items">
							<view :class="['n1', `color${curItem.state}`]">{{toStatus(curItem.state)}}</view>
							<view class="n2">状态</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bottom">
				<view @click="changeMenu(index)" :class="['cells', index === menuActive ? 'on' : '']" v-for="(curItem, index) in menuList" :key="index">{{curItem}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getSubscribeList, getMySubscribe, applyForPurchase } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'Subsribe',
		mixins: [commonMixins],
		data(){
			return {
				dataList: [],
				menuList: ['新币日历' , '我的申购'],
				menuActive: 0
			}
		},
		methods: {
			toPage(params){
				uni.navigateTo({
					url: `/pages/subscribe_detail/index?${this.createParams(params)}`
				})
			},
			createParams(params){
				return Object.keys(params).map(function (key) {
				        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
				 }).join("&");
			},
			async getSubscribeListHandler(){
				const res = await getSubscribeList()
				this.dataList = res.data
			},
			toDate(ts){
				  var date = new Date(parseFloat(ts) * 1000);
				  var YY = date.getFullYear() + '-';
				  var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				  var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
				  var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
				  var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
				  var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
				  return YY + MM + DD +" "+hh + mm + ss; 
			},
			async getMySubscribeHandler(){
				const res = await getMySubscribe()
				this.dataList = res.data
			},
			changeMenu(index){
				this.menuActive = index
				this.dataList = []
				if(index == 0){
					this.getSubscribeListHandler()
				}else{
					this.getMySubscribeHandler()
				}
			},
			toStatus(val){
				switch(val){
					case 0:
					  return '待配置'
					case 1:
					  return '待认购'
					case 2:
					  return '已过期'
				    case 3:
				      return '已完成'
				}
			},
			showDialog(curItem){
				if(curItem.state == 1){
					const that = this
					uni.showModal({
						title: '认购确认',
						content: `您申请认购${curItem.num}个 ${curItem.name}，将扣除${(parseFloat(curItem.price) * parseFloat(curItem.num)).toFixed(4)}个USDT，确认继续吗？`, 
						success: async (btn) => {
							if(btn.confirm){
								const params = {
									type: 1,
									id: curItem.id
								}
								const res = await applyForPurchase(params)
								if(validate.checkCode(res)){
									tips.showToast('成功')
									that.getMySubscribeHandler()
								}else{
									this.backTips(res)
								}
							}
						}
					})
				}
			}
		},
		onLoad() {
			this.getSubscribeListHandler()
		}
	}
</script>

<style scoped>
	.list{
		height: 100%;
		padding: 20upx 20upx 100upx 20upx;
		background: #fff;
		box-sizing: border-box;
	}
	.wrap{
		height: 100%;
	}
	.title{
		background: #fff;
		padding: 10upx 10upx 10upx 40upx;
		border-left: 3px solid #007AFF;
		border-bottom: 1px solid #eee;
		margin-bottom: 40upx;
		font-size: 32upx;
		font-weight: bold
	}
	.cell{
		padding: 20upx;
	}
	.cell .date{
		font-size: 32upx;
		font-weight: bold;
		padding-bottom: 10upx;
		border-bottom: 1px solid #eee;
	}
	.labels{
		display: flex;
	}
	.items{
		width: 33.333%;
	}
	.l2 .items{
		width: 25% !important;
	}
	.n1{
		font-size: 32upx;
		line-height: 60upx;
	}
	.n2{
		font-size: 26upx;
		color: #999;
	}
	.items:nth-child(3){
		text-align: right
	}
	.l2 .items:nth-child(3){
		text-align: center
	}
	.l2 .items:nth-child(4){
		text-align: right
	}
	.bottom{
		position: fixed;
		bottom: 0;
		height: 100upx;
		display: flex;
		width: 100%;
		left: 0;
		z-index: 1;
		border-top: 1px solid #eee;
	}
	.bottom .cells{
		width: 50%;
		text-align: center;
		font-size: 32upx;
		line-height: 100upx;
	}
	.bottom .cells.on{
		color: #007AFF;
	}
	.color0{
		color: #007AFF;
	}
	.color1{
		color: #04AD8F;
	}
	.color2{
		color: #DD4A68
	}
	.color3{
		color: #F0AD4E;
	}
</style>
