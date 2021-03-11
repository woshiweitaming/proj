<template>
	<view class="headbar">
		<view class="label">
			<view @click="changeMenu(index)" :class="['menu', tradeActionActive === index ? 'on' : '']" v-for="(curItem, index) in tradeActionList" :key="index">{{curItem}}</view>
		</view>
		<view class="last">
			<view class="filters" @click="dropdownChange(index)" v-for="(curItem, index) in filterList" :key="index">
				<image class="imgs" mode="widthFix" :src="curItem.icon"></image>
				<text class="name">{{curItem.name}}</text>
			</view>
		</view>
		<view class="coin_drop mask" @click="coinDropStatus = false" v-if="coinDropStatus">
			<view class="coin_drop_list">
				<view class="labels" v-for="(curItem, index) in coinList" :key="index">
					<view class="name">{{curItem.name}}</view>
					<image v-if="index === coinActive" class="selected" src="../../static/images/icons/selected.png"></image>
				</view>
			</view>
		</view>
		<view class="coin_drop mask" @click="filterDropStatus = false" v-if="filterDropStatus">
			<view class="coin_drop_list">
				<view class="labels" v-for="(curItem, index) in filterConditionList" :key="index">
					<view class="name">{{curItem.name}}</view>
				</view>
				<view class="btns">
					<view class="btns_box">重置</view>
					<view class="btns_box finish" @click="filterDropStatus = false">完成</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Headbar',
		data(){
			return {
				tradeActionList: ['我要买', '我要卖'],
				tradeActionActive: 0,
				filterList: [
					{
						name: '法币',
						icon: '/static/images/icons/coin/coin.png'
					},
					{
						name: '筛选',
						icon: '/static/images/icons/coin/filter.png'
					}
				],
				coinList: [
					{
						name: '全部',
						value: 0,
					},
					{
						name: '人民币(CNY)',
						value: 1,
					},
					{
						name: '美元(USD)',
						value: 2,
					},
					{
						name: '新元(SGD)',
						value: 3,
					},
					{
						name: '卢比(INR)',
						value: 4,
					}
				],
				filterConditionList: [
					{
						name: '银行卡',
						value: 0
					},
					{
						name: '支付宝',
						value: 1
					},
					{
						name: '微信',
						value: 2
					},
					{
						name: 'PayPal',
						value: 3
					}
				],
				coinDropStatus: false,
				coinActive: 0,
				filterDropStatus: false
			}
		},
		methods: {
			changeMenu(index){
				this.tradeActionActive = index
				this.$emit('callback', index)
			},
			dropdownChange(index){
				if(index === 0){
					this.coinDropStatus = true
					this.filterDropStatus = false
				}
				if(index === 1){
					this.filterDropStatus = true
					this.coinDropStatus = false
				}
			}
		}
	}
</script>

<style scoped>
	.headbar{
		display: flex;
		width: 100%;
		padding: 0 20upx;
		box-sizing: border-box;
		margin-top: 20upx;	
		height: 60upx;
		line-height: 60upx;
		position: relative;
		z-index: 101;
	}
	.label{
		width: 50%;
		display: flex;
	}
	.label .menu{
		width: 50%;
		color: #aaa;
	}
	.label .menu.on{
		font-size: 40upx;
		color: #0F1118;
		font-weight: bold;
	}
	.last{
		width: 50%;
		display: flex;
	}
	.last .filters{
		width: 50%;
		text-align: right;
		position: relative;
		padding-right: 20upx;
	}
	.last .filters .imgs{
		width: 30upx;
		height: 30upx;
		display: inline-block
	}
	.last .filters .name{
		font-size: 24upx;
		position: absolute;
		right: 10upx;
		bottom: -30upx;
	}
	.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 1;
		background: rgba(0,0,0,.5);
		left: 0;
		top: 190upx;
	}
	.selected{
		width: 40upx;
		height: 30upx;
		position: absolute;
		right: 0;
		top: 20upx;
	}
	.coin_drop_list{
		width: 100%;
		padding: 20upx;
		background: #fff;
		position: absolute;
		top: 0upx;
		z-index: 99;
	}
	.coin_drop_list .labels{
		border-bottom: 1px solid #eee;
		line-height: 100upx;
		position: relative;
	}
	.coin_drop_list .labels:last-child{
		border-bottom: none;
	}
	.btns{
		display: flex;
		width: 100%;
	}
	.btns .btns_box{
		width: 50%;
		text-align: center;
		line-height: 80upx;
	}
	.btns .btns_box:last-child{
		color: #007AFF;
	}
</style>
