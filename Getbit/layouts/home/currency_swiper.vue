<template>
	<view class="card">
		<swiper class="swiper" :indicator-dots="options.indicatorDots" :autoplay="options.autoplay" :interval="options.interval" :duration="options.duration">
		    <swiper-item v-for="(curItem, index) in currencyList" :key="index">
		         <view class="swiper-item">
					 <view class="currency_label" @click="toPage(curItem.id, curItem.name, curItem.fromcid)" v-for="(ele, key) in curItem" :key="key">
						 <view class="name">{{ele.name}}</view>
						 <view class="close">{{ele.quotation.close}}</view>
						 <view :class="['ratio', getRatio(ele.quotation.close, ele.quotation.open) > 0 ? 'green' : 'red']">{{getRatio(ele.quotation.close, ele.quotation.open)}}%</view>
					 </view>
				 </view>
		    </swiper-item>
		</swiper>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		data() {
		    return {
		        options: {
					indicatorDots: true,
					autoplay: false,
					interval: 3000,
					duration: 500,
				},
				currencyList: []
		    }
		},
		methods: {
			toPage(id, name, fromcid){
				uni.navigateTo({
					url: '/pages/kline/index?id='+id+'&name='+name+'&fromcid='+fromcid
				})
			}
		},
		computed: {
			getRatio(){
				return (close, open) => {
					return ((close - open) / close * 100).toFixed(3)
				}
			},
			...mapGetters({
				getQuotation: 'getQuotation'
			})
		},
		watch: {
			getQuotation(val){
				let result = [];
				for(let i=0;i<val.length;i+=3){
				    result.push(val.slice(i,i+3));
				}
				this.currencyList = result
			}
		}
	}
</script>

<style scoped>
	.swiper{
		width: 100%;
		height: 200upx;
	}
	.swiper-item{
		display: flex;
	}
	.swiper-item .currency_label{
		width: 33.3333%;
		text-align: center;
	}
	.swiper-item .currency_label .name{
		font-weight: bold;
	}
	.swiper-item .currency_label .close{
		font-weight: bold;
		margin: 10upx 0;
	}
	.swiper-item .currency_label .ratio{
		font-size: 24upx
	}
</style>
