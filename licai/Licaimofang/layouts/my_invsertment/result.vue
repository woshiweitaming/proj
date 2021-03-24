<template>
	<view class="result">
		<view class="line" @click="toPage" v-for="(curItem, index) in dataList" :key="index">
			<view class="labels">
				<view class="name">{{curItem.name}}</view>
				<view class="number">{{curItem.number}}</view>
			</view>
			<view class="labels">
				<view class="money">{{formatNum(curItem.money)}}</view>
			</view>
			<view class="labels">
				<view class="status">{{curItem.status}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Result',
		data(){
			return {
				dataList: [
					{
						name: '项目项目项目',
						number: 123042,
						money: '1000000',
						status: '已完成'
					},
					{
						name: '项目项目项目项目项目项目项目项目项目项目项目项目',
						number: 123042,
						money: '1000000',
						status: '已完成'
					}
				]
			}
		},
		methods: {
			formatNum(str){
			    let newStr = "";
			    let count = 0;
			    if(str.indexOf(".")==-1){
			        for(let i=str.length-1;i>=0;i--){
			            if(count % 3 == 0 && count != 0){
			               newStr = str.charAt(i) + "," + newStr;
			            }else{
			               newStr = str.charAt(i) + newStr;
			            }
			            count++;
			        }
			        str = newStr + ".00"
			    } else {
			        for(let i = str.indexOf(".")-1;i>=0;i--){
			            if(count % 3 == 0 && count != 0){
			               newStr = str.charAt(i) + "," + newStr;
			            }else{
			               newStr = str.charAt(i) + newStr; //逐个字符相接起来
			            }
			            count++;
			        }
			        str = newStr + (str + "00").substr((str + "00").indexOf("."),3)
			    }
				return newStr
			},
			toPage(){
				uni.navigateTo({
					url: '/pages/investment_detail/index'
				})
			}
		}
		
	}
</script>

<style scoped>
	.result .line{
		color: #aaa;
		font-size: 26upx;
		border-bottom: 1px solid #eee;
		display: flex;
	}
	.result .labels{
		padding: 20upx;
	}
	.result .labels:first-child{
		width: 50%;
		padding-left: 20upx;
	}
	.result .labels:nth-child(2){
		width: 30%;
	}
	.result .labels:last-child{
		width: 20%;
		padding-right: 20upx;
		text-align: right;
	}
	.result .labels .name{
		height: 40upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap; 
		color: #222;
	}
	.result .labels .number{
		line-height: 40upx;
	}
	.result .labels .money,
	.result .labels .status{
		line-height: 80upx;
	}
	.result .labels .money{
		color: #DF5000;
		font-size: 32upx
	}
	.result .labels .status{
		color: #4CD964
	}
</style>
