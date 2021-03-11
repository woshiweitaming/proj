<template>
	<view class="currency">
		<image @click="toggle" class="menu" src="/static/images/icons/trade/menu.png"></image>
		<text class="name">{{getName}}</text>
		<view class="ratio">{{getRatio}}%</view>
		<image class="k" @click="toPage" src="/static/images/icons/trade/k.png"></image>
		<u-popup v-model="popupStatus" mode="left" width="80%">
			<Popup @callback="callback" />
		</u-popup>
	</view>
</template>

<script>
	import trade_mixins from '@/mixins/trade_mixins.js'
	import Popup from '@/layouts/trade/popup.vue'
	export default {
		name: 'Currency',
		props: ['active'],
		mixins: [trade_mixins],
		components: {
			Popup
		},
		data(){
			return {
				popupStatus: false	
			}
		},
		methods: {
			toPage(){
				const id = this.getData.id 
				const name = this.getData.name 
				const fromcid = this.getData.fromcid
				uni.navigateTo({
					url: '/pages/kline/index?id='+id+'&name='+name+'&fromcid='+fromcid
				})
			},
			toggle(){
				this.popupStatus = !this.popupStatus
			},
			callback(active){
				this.$emit('callback',active)
				this.toggle()
			}
		},
	}
</script>

<style scoped>
	.currency{
		position: relative;
		padding: 0 20upx;
		height: 60upx;
	}
	.menu{
		width: 30upx;
		height: 30upx;
		vertical-align: center;
	}
	.name{
		font-size: 32upx;
		color: #14181F;
		font-weight: bold;
		margin-left: 20upx;
		display: inline-block;
		vertical-align: top;
		line-height: 30upx;
	}
	.ratio{
		background: #fde9eb;
		color: #dd6e7b;
		display: inline-block;
		font-size: 24upx;
		padding: 0 10upx;
		border-radius: 5px;
		vertical-align: top;
		margin-left: 10upx;
		font-weight: bold;
	}
	.k{
		width: 40upx;
		height: 40upx;
		position: absolute;
		right: 20upx;
		top: 0;
	}
</style>
