<template>
	<view class="new_deal">
		<view class="thead">
			<view class="hd">时间</view>
			<view class="hd">方向</view>
			<view class="hd">数量(BTC)</view>
			<view class="hd">价格(USDT)</view>
		</view>
		<view class="tbody">
			<view class="labels" v-for="(curItem, index) in dataList" :key="index">
				<view class="hd date">{{format(curItem.inputtime)}}</view>
				<view :class="['hd', getDirection(curItem.direction)]">{{curItem.direction}}</view>
				<view class="hd">{{curItem.donenums && curItem.donenums.toFixed(4)}}</view>
				<view class="hd">{{curItem.doneprice && curItem.doneprice.toFixed(4)}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'NewDeal',
		props: {
			dataList: {
				type: Array,
				default: []
			}
		},
		computed: {
			getDirection(){
				return value => {
					return value == 'sell' ? 'red' : 'green'
				}
			}
		},
		methods: {
			add0(m){
				return m<10?'0'+m:m
			},
			format(ts){
				if(typeof ts == 'undefined') return ''
			    var time = new Date(ts * 1000);
			    var y = time.getFullYear();
			    var m = time.getMonth()+1;
			    var d = time.getDate();
			    var h = time.getHours();
			    var mm = time.getMinutes();
			    var s = time.getSeconds();
			    return y+'-'+this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);
			}
		}
	}
</script>

<style scoped>
	.thead,
	.labels{
		display: flex;
		width: 100%;
	}
	.hd{
		font-size: 24upx;
		color: rgba(255,255,255,.6);
		line-height: 60upx;
		text-align: center;
	}
	.thead .hd:nth-child(1){
		font-size: 24upx !important
	}
	.hd:nth-child(1){
		width: 35%;
	}
	.hd:nth-child(2),
	.hd:nth-child(3),
	.hd:nth-child(4){
		width: 23.33333%;
		text-align: center;
	}
	.date{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding-left: 2px;
		transform: scale(0.8)
	}
</style>
