<template>
	<view class="result">
		<view class="line" @click="toPage(curItem)" v-for="(curItem, index) in dataList" :key="index">
			<view class="labels">
				<view class="name">{{curItem.pro_name}}</view>
				<view class="number">{{curItem.ExpectedReturn}}</view>
			</view>
			<view class="labels">
				<view class="money">{{formatNum(curItem.amount.toString())}}</view>
			</view>
			<view class="labels">
				<view class="status">{{curItem.status == 0 ? getLang('my_investment_p5') : getLang('my_investment_p6')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Result',
		props: ['dataList'],
		mixins: [langMixins],
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
			convertObj(data) {
			    let _result = [];
			    for (let key in data) {
			      let value = data[key];
			      if (value.constructor == Array) {
			        value.forEach((_value) => {
			          _result.push(key + "=" + _value);
			        });
			      } else {
			        _result.push(key + '=' + value);
			      }
			    }
			    return _result.join('&');
			},
			toPage(json){
				const urlParams = this.convertObj(json)
				uni.navigateTo({
					url: '/pages/investment_detail/index?'+urlParams
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
		width: 33.3333%;
		padding: 20upx;
	}
	.result .labels:first-child{
		padding-left: 20upx;
	}
	.result .labels:nth-child(2){
		text-align: center;
	}
	.result .labels:last-child{
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
