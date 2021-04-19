<template>
	<view class="qh_bar">
		<view class="title">{{getLang('qh_p1')}}</view>
		<view class="list">
			<scroll-view :scroll-y="true" style="height: 100%;">
				<view class="labels" @click="selected(curItem.prefix)" v-for="(curItem, index) in list" :key="index">
					<view class="number">+{{curItem.prefix}}</view>
					<view class="country">{{curItem[getCurLang]}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import prefixSorted from '@/datas/prefixSorted.js'
	export default {
		name: 'Qh',
		mixins: [langMixins],
		data(){
			return {
				cur: {},
				list: []
			}
		},
		methods: {
			selected(qh){
				this.$emit('callback', qh)
			}
		},
		created(){
			this.list = prefixSorted.sort((a, b) => {
				return a.prefix - b.prefix
			})
		},
	}
</script>

<style scoped>
	.qh_bar{
		width: 100%;
		height: 100%;
	}
	.title{
		text-align: center;
		line-height: 80upx;
		border-bottom: 1px solid #eee;
	}
	.list{
		height: calc(100% - 80upx);
		overflow: auto;
	}
	.list .labels{
		display: flex;
		padding: 0 20upx;
		border-bottom: 1px solid #eee;
	}
	.number,
	.country{
		width: 50%;
		line-height: 80upx;
	}
	.country{
		text-align: right;
	}
</style>
