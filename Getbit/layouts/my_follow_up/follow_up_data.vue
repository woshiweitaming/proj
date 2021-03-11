<template>
	<view class="wrap">
		<view class="title">跟单数据</view>
		<view class="card">
			<view class="label">
				<view class="name">跟单本金</view>
				<view class="value">{{result.v1.toFixed(2)}}</view>
			</view>
			<view class="label">
				<view class="name">跟单收益</view>
				<view class="value">{{result.v2.toFixed(2)}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MyFollowUp',
		data(){
			return {
				result: {
					v1: 0,
					v2: 0
				}
			}
		}
	}
</script>

<style scoped>
	.title{
		font-size: 32upx;
		line-height: 80upx;
	}
	.card{
		display: flex;
		width: 100%;
	}
	.label{
		width: 50%;
	}
	.label:last-child{
		padding-left: 20upx;
		border-left: 1px solid #f1f1f1;
	}
	.label .name{
		color: #999
	}
	.label .value{
		font-size: 32upx;
		font-weight: bold;
	}
</style>
