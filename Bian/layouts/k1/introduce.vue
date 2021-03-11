<template>
	<view class="white_paper_class">
		<view class="currency_list">
			<view class="currency_label">
				<view class="name">{{getLangs('releaseTime')}}</view>
				<view class="desc">{{toDate(desc.release_time)}}</view>
			</view>
			<view class="currency_label">
				<view class="name">{{getLangs('totalAmountofIssuance')}}</view>
				<view class="desc">{{desc.release_count}}</view>
			</view>
			<view class="currency_label">
				<view class="name">{{getLangs('totalCirculation')}}</view>
				<view class="desc">{{desc.circulate_count}}</view>
			</view>
			<view class="currency_label">
				<view class="name">{{getLangs('website')}}</view>
				<view class="desc" @tap="toPage(desc.official_website)">{{desc.official_website}}</view>
			</view>
			<view class="currency_label">
				<view class="name">{{getLangs('whitePaper')}}</view>
				<view class="desc" @tap="toPage(desc.white_paper)">{{desc.white_paper}}</view>
			</view>
			<view class="currency_label">
				<view class="name">{{getLangs('blockQuery')}}</view>
				<view class="desc" @tap="toPage(desc.block_query)">{{desc.block_query}}</view>
			</view>
		</view>
		<view class="introduce">{{getLangs('introduce')}}</view>
		<view class="desc">{{this.getGlobalLang === 'cn' ? desc.intro_zh : desc.intro_en}}</view>
	</view>
</template>

<script>
	/**
	 * 白皮书
	 */
	import { mapMutations, mapGetters } from 'vuex'
	import { getProductInfo } from '@/api/public.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import storage from '@/utils/storage.js'
	export default {
		name: 'WhitePaper',
		mixins: [langsMixins],
		props: ['id'],
		data(){
			return {
				opt: {},
				desc: {}
			}
		},
		methods: {
			/**
			 * 获取产品介绍
			 */
			async getProductInfoHandler(id){
				const res = await getProductInfo({pid: id})
				console.log(res)
				this.desc = res.data
			},
			toDate(timestamp){
				if(timestamp == undefined) return '-'
				const date = new Date(timestamp * 1000 + 8 * 3600 * 1000); // 增加8小时
				return date.toJSON().substr(0, 19).replace('T', ' ');
			},
			toPage(url){
				// #ifdef H5
				return window.open(url)
				// #endif
				plus.runtime.openURL(url)
			}
		},
		created(){
			this.getProductInfoHandler(this.id)
		}
	}
</script>
<style>
	page{
		background: #1c1d31
	}
</style>
<style scoped>
	.white_paper_class{
		padding: 0 40upx;
	}
	.white_paper_class .currency{
		font-size: 28upx;
		line-height: 120upx;
		color: #999
	}
	.currency_label{
		height: 80upx;
		border-bottom: 1px solid #eee;
		position: relative;
		padding-left: 300upx;
	}
	.currency_label .name{
		line-height: 80upx;
		width: 280upx;
		position: absolute;
		left: 0;
		color: #637b9b;
		font-size: 24upx;
	}
	.currency_label .desc{
		line-height: 80upx;
		text-align: right;
		color: #999;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 24upx;
	}
	.introduce{
		font-size: 24upx;
		color:  #637b9b;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
	.desc{
		font-size: 24upx;
		color: #999
	}
</style>
