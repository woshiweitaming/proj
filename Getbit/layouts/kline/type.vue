<template>
	<view class="type">
		<view class="kline_type">
			<view class="kline_list">
				<view @click="changeMenu(curItem.index, curItem.value)" :class="['labels', curType == curItem.index ? 'on' : '']" v-for="(curItem, index) in typeList" :key="index">{{curItem.name}}</view>
			</view>
			<view :class="['deep', curType === 10 ? 'on' : '']" @click="changeMenu(10)"><text class="deep_text">深度</text><image class="deep_icon" src="../../static/images/icons/kline/sd.png"></image></view>
		</view>
		<view class="drop" v-if="show">
			<view @click="changeMenu(curItem.index, curItem.value)" :class="['labels', curType == curItem.index ? 'on' : '']" v-for="(curItem, index) in moreTypeList " :key="index">{{curItem.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'KlineType',
		props: {
			curType: {
				type: Number,
				default: 0
			}
		},
		data(){
			return {
				typeList: [
					{name: '15分', value: '15min', index: 0},
					{name: '30分', value: '30min', index: 1},
					{name: '1时', value: '1hour', index: 2},
					{name: '1日', value: '1day', index: 3},
					{name: '更多', value: 'more', index: 4}
				],
				moreTypeList: [
					{name: '1分', value: '1min', index: 5},
					{name: '5分', value: '5min', index: 6},
					{name: '1周', value: '1week', index: 7},
					{name: '1月', value: '1month', index: 8},
					{name: '1年', value: '1year', index: 9}
				],
				typeActive: 0,
				show: false
			}
		},
		methods: {
			changeMenu(index, value){
				if(index === 4 || index === 5 || index === 6 || index === 7 || index === 8 || index === 9){
					this.show = true
				}else{
					this.show = false
				}
				this.$emit('changeCurType', {index: index, value: value})
			}
		}
	}
</script>

<style scoped>
	.kline_type{
		padding-right: 100upx;
		margin-top: 20upx;
		position: relative;
	}
	.kline_list{
		position: relative;
		display: flex;
	}
	.labels{
		width: 20%;
		text-align: center;
		font-size: 24upx;
		color: #fff;
	}
	.labels.on{
		color: #3e5bfe;
	}
	.deep{
		color: #fff;
		position: absolute;
		right: 10upx;
		font-size: 24upx;
		top: 0;
	}
	.deep_icon{
		width: 30upx;
		height: 30upx;
		margin-left: 5px;
	}
	.deep_text{
		vertical-align: top;
	}
	.drop{
		width: 100%;
		margin: 0 10upx;
		border: 1px solid #2b3a52;
		padding: 10upx 0;
		display: flex;
		margin-top: 10upx;
	}
	.deep.on{
		color: #007AFF;
	}
</style>
