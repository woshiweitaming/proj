<template>
	<view class="user_cell">
		<view class="cells tleft">
			<text class="name">{{getLang('user_p2')}}</text>
			<image src="/static/images/user/unlogin.png" mode="widthFix" class="icon"></image>
		</view>
		<u-cell-group>
			<u-cell-item :title="getLang('user_p3')"  value="199****0000" :arrow="false"></u-cell-item>
		</u-cell-group>
		<u-cell-group>
			<u-cell-item @click="toPage('/pages/bank_list/index')" :title="getLang('user_p4')" ></u-cell-item>
			<u-cell-item @click="toPage('/pages/passwd/index')" :title="getLang('user_p5')" ></u-cell-item>
			<u-cell-item :title="getLang('user_p6')" ></u-cell-item>
		</u-cell-group>
		<u-cell-group>
			<u-cell-item :title="getLang('user_p7')" ></u-cell-item>
			<u-cell-item :title="getLang('user_p8')" ></u-cell-item>
		</u-cell-group>
		<view class="u-cell-box">
			<view class="cells btns">{{getLang('user_p9')}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'UserCell',
		mixins: [langMixins],
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style scoped>
	.u-cell-box{
		margin-bottom: 20upx;
	}
	.cells{
		background: #fff;
		text-align: center;
		padding: 26upx 32upx;
		line-height: 54upx;
		position: relative;
	}
	.cells .icon{
		width: 60upx;
		position: absolute;
		right: 20upx;
	}
	.cells .name{
		color: #606266;
		text-align: left;
	}
	.tleft{
		text-align: left;
	}
	.btns{
		border-bottom: 1px solid #e4e7ed;
	}
</style>
