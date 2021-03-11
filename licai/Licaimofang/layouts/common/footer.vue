<template>
	<view class="footer">
		<view class="label box_label">
			<view class="box" v-for="(curItem, index) in dataList" :key="index">
				<image mode="widthFix" class="icon" :src="curItem.icon"></image>
				<text class="name">{{getLang(curItem.name)}}</text>
				<text class="sub">{{getLang(curItem.sub)}}</text>
			</view>
		</view>
		<view class="label">{{getLang('home_p10')}}</view>
		<view class="label">{{getLang('home_p11')}}<text class="link">{{getLang('home_p12')}}</text></view>
		<view class="label bottom">{{getLang('home_p13')}}</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Footer',
		mixins: [langMixins],
		data(){
			return {
				dataList: [
					{
						name: 'home_p6',
						sub: 'home_p7',
						icon: '/static/images/icon/zjh.png'
					},
					{
						name: 'home_p8',
						sub: 'home_p9',
						icon: '/static/images/icon/msyh.png'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.footer{
		display: flex;
		flex-direction: column;
		padding: 20upx;
		text-align: center;
		font-size: 24upx;
		color: #607c91;
	}
	.footer .label{
		margin-bottom: 10upx;
	}
	.footer .box{
		padding: 10upx 10upx 0 10upx;
		border-radius: 10upx;
		border: 1px solid #d4dade;
		margin-bottom: 20upx;
	}
	.footer .box_label{
		justify-content: space-around;
		display: flex;
	}
	.footer .box_label .name{
		font-weight: bold;
		vertical-align: top;
		line-height: 40upx;
	}
	.footer .box_label .sub{
		margin-left: 20upx;
		vertical-align: top;
		line-height: 40upx;
	}
	.footer .bottom{
		margin-bottom: 100upx;
		color: rgba(0,0,0,.3);
	}
	.footer .link{
		color: #007AFF;
		margin-left: 5px;
	}
	.footer .icon{
		width: 40upx;
	}
</style>
