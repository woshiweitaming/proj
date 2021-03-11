<template>
	<view class="tasks">
		<view class="tasks_menu">{{getLang('mofen_p7')}}</view>
		<view class="tasks_list">
			<view class="tasks_box" v-for="(curItem, index) in tasksList" :key="index">
				<view class="icon"></view>
				<view class="main">
					<view class="name">{{curItem.name}}</view>
					<view class="sub">{{getLang('account_p10')}}{{curItem.coin}}{{getLang('account_p11')}}</view>
				</view>
				<view class="btns">{{getLang('account_p8')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Tasks',
		mixins: [langMixins],
		data(){
			return {
				tasksList: [
					{
						name: '购买一笔智能组合',
						coin: 3000
					}
				],
				cur: 0
			}
		},
		methods: {
			changeMenu(index){
				this.cur = index
			}
		}
	}
</script>

<style scoped>
	.tasks{
		background: #fff;
		position: relative;
		top: -120upx;
	}
	.tasks_menu{
		display: flex;
		line-height: 80upx;
		border-bottom: 1px solid #eee;
		font-size: 32upx;
		padding-left: 40upx;
	}
	.tasks_box{
		padding: 40upx 160upx 40upx 120upx;
		position: relative;
		border-bottom: 1px solid #eee;
	}
	.tasks_box .name{
		font-size: 32upx;
	}
	.tasks_box .sub{
		color: #999;
		font-size: 28upx;
	}
	.tasks_box .btns{
		width: 140upx;
		line-height: 60upx;
		border-radius: 20upx;
		border: 1px solid #007AFF;
		color: #007AFF;
		text-align: center;
		position: absolute;
		right: 20upx;
		top: 50upx;
	}
</style>
