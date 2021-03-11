<template>
	<view class="question">
		<view class="inner_box">
			<view class="title">{{getLang('question_p1')}}</view>
			<view class="question_list">
				<view class="labels" @click="toggle(index)" v-for="(curItem, index) in dataList" :key="index">
					<view class="tag">{{getLang('question_p18')}}</view>
					<view class="name">{{getLang(curItem.title)}}<image src="/static/images/insurancePages/icon/down1.png" mode="widthFix" class="icon"></image></view>
					<view class="content" v-if="curItem.show">{{getLang(curItem.content)}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Question',
		mixins: [langMixins],
		data(){
			return {
				dataList: [
					{
						title: 'question_p2',
						content: 'question_p3',
						show: false
					},
					{
						title: 'question_p4',
						content: 'question_p5',
						show: false
					},
					{
						title: 'question_p6',
						content: 'question_p7',
						show: false
					},
					{
						title: 'question_p8',
						content: 'question_p9',
						show: false
					},
					{
						title: 'question_p10',
						content: 'question_p11',
						show: false
					},
					{
						title: 'question_p12',
						content: 'question_p13',
						show: false
					},
					{
						title: 'question_p14',
						content: 'question_p15',
						show: false
					},
					{
						title: 'question_p16',
						content: 'question_p17',
						show: false
					}
				]
			}
		},
		methods: {
			toggle(index){
				this.dataList[index].show = !this.dataList[index].show
			}
		}
	}
</script>

<style scoped>
	.question{
		padding: 20upx;
	}
	.question .title{
		text-align: center;
		margin-bottom: 20upx;
		font-size: 32upx
	}
	.question .labels{
		margin-bottom: 20upx;
		padding-left: 60upx;
		background: #f9f9f9;
		border-radius: 20upx;
		position: relative;
	}
	.question .name{
		padding: 20upx 10upx;
		position: relative;
		font-weight: bold;
	}
	.question .content{
		top: -10upx;
		padding: 0 20upx 40upx 0;
		font-size: 24upx;
	}
	.question .tag{
		padding: 5upx;
		color: #fff;
		text-align: center;
		position: absolute;
		left: 20upx;
		top: 20upx;
		background: #007AFF;
		font-size: 24upx;
		border-radius: 5upx;
	}
	.icon{
		width: 20upx;
		position: absolute;
		right: 20upx;
		top: 30upx;
	}
</style>
