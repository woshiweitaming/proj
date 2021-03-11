<template>
	<view class="w40">
		<view class="price_list">
			<view class="tbody">
				<view class="thead">
					<view class="th">价格</view>
					<view class="th">数量</view>
				</view>
				<view class="body">
					<view class="label" v-for="(curItem, index) in dataList[0]" :key="index">
						<view class="block">
							<view class="td">{{curItem[0]}}</view>
							<view class="td">{{curItem[1]}}</view>
						</view>
					</view>
					<view class="center">
						<view class="price">{{form.price}}</view>
						<view class="usd">≈{{form.usd}} USD</view>
					</view>
					<view class="label" v-for="(curItem, index) in dataList[1]" :key="`k${index}`">
						<view class="block">
							<view class="td">{{curItem[0]}}</view>
							<view class="td">{{curItem[1]}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'PriceList',
		data(){
			return {
				form: {
					price: 15426.32515,
					usd: 1253.265
				},
				dataList: [
					[
						[19552.3214, 1.2511],
						[19552.3214, 1.2511],
						[19552.3214, 1.2511],
						[19552.3214, 1.2511],
						[19552.3214, 1.2511]
					],
					[
						[19552.3214, 1.2511],
						[19552.3214, 1.2511],
						[19552.3214, 1.2511],
						[19552.3214, 1.2511],
						[19552.3214, 1.2511]
					]
				]
			}
		}
	}
</script>

<style scoped>
	.price_list{
		width: 100%;
		box-sizing: border-box;
		padding-left: 20upx;
		padding-right: 20upx;
	}
	.price{
		text-align: left;
		line-height: 60upx;
		font-weight: bold;
		color: #00ad90;
		width: 100%;
	}
	.usd{
		text-align: left;
		font-size: 24upx;
		color: #AAAAAA;
	}
	.tbody{
		width: 100%;
	}
	.tbody .thead{
		display: flex;
		margin-top: 20upx;
		margin-bottom: 10upx;
	}
	.tbody .thead .th{
		width: 50%;
		font-size: 24upx;
		color: #aaa;
	}
	.tbody .thead .th:first-child{
		text-align: left;
	}
	.tbody .thead .th:last-child{
		text-align: right;
	}
	.body .label .block{
		display: flex;
		font-size: 22upx;
	}
	.body .label .block .td{
		width: 50%;
		line-height: 45upx;
	}
	.body .label .block .td:first-child{
		color: #d14b64;
	}
	.body .label .block .td:last-child{
		text-align: right;
		color: #999
	}
	.center{
		margin: 20upx 0;
	}
</style>
