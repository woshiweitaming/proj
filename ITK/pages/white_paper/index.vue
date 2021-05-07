<template>
	<view class="white_paper_class">
		<view class="currency">{{opt.currency}}</view>
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
		<view class="desc">{{this.getGlobalLang === 'cns' ||this.getGlobalLang === 'cn' ? desc.intro_zh : desc.intro_en}}</view>
	</view>
</template>

<script>
	/**
	 * 白皮书
	 */
	import { mapMutations, mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getProductInfo } from '@/api/public.js'
	import Utils from '@/utils/Utils.js'
	export default {
		name: 'WhitePaper',
		mixins: [commonMixins, langsMixins],
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
			async getProductInfoHandler(){
				const res = await getProductInfo({pid: this.opt.id})
				this.desc = res.data
			},
			toDate(timestamp){
				if(timestamp == undefined) return '-'
				return Utils.toDate(timestamp * 1000)
			},
			toPage(url){
				// #ifdef H5
				return window.open(url)
				// #endif
				plus.runtime.openURL(url)
			}
		},
		onLoad(opt) {
			this.opt = opt
		},
		onShow() {
			this.setTitle(this.opt.currency.toUpperCase())
			this.getProductInfoHandler()
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
		font-size: 36upx;
		line-height: 120upx;
		color: #fff
	}
	.currency_label{
		height: 80upx;
		border-top: 1px solid rgba(255,255,255,.05);
		position: relative;
		padding-left: 300upx;
	}
	.currency_label .name{
		line-height: 80upx;
		width: 280upx;
		position: absolute;
		left: 0;
		color: #637b9b;
		font-size: 28upx
	}
	.currency_label .desc{
		line-height: 80upx;
		text-align: right;
		color: #cbd8e9;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.introduce{
		font-size: 32upx;
		color:  #cbd8e9;
		margin-top: 40upx;
		margin-bottom: 40upx;
	}
	.desc{
		font-size: 28upx;
		color: #cbd8e9;
	}
</style>
