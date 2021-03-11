<template>
	<view class="tasks">
		<view class="tasks_menu">
			<view class="labels" v-for="(curItem, index) in menuList" :key="index">
				<view class="menu_item" @click="changeMenu(index)">
					<view :class="['name', cur == index ? 'on' : '']">{{getLang(curItem)}}</view>
				</view>
			</view>
		</view>
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
				menuList: ['account_p6', 'account_p7'],
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
	}
	.tasks_menu{
		display: flex;
		border-bottom: 1px solid #eee;
	}
	.tasks_menu .labels{
		width: 50%;
		text-align: center;
	}
	.tasks_menu .menu_item{
		padding: 0 30%;
	}
	.tasks_menu .menu_item .name{
		font-size: 28upx;
		line-height: 100upx;
	}
	.tasks_menu .menu_item .name.on{
		color: #007AFF;
		font-size: 34upx;
		border-bottom: 2px solid #007AFF;
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
