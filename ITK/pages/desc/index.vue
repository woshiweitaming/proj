<template>
	<view class="desc_class">
		<rich-text :nodes="content"></rich-text>
	</view>
</template>

<script>
	/**
	 * 详情
	 */
	import appConfig from '@/config/appConfig.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getNNoticeDetails } from '@/api/public.js'
	export default {
		name: 'DescProduct',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				id: '',
				title: '',
				content: ''
			}
		},
		methods: {
			async getNoticeDetailsHandler(){
				const res = await getNNoticeDetails({id: this.id})
				this.content = res.data.content
			}
		},
		onLoad(opt) {
			this.id = opt.id
			this.title = opt.title
		},
		onShow() {
			this.setTitle(this.title)
			this.getNoticeDetailsHandler()
		}
	}
</script>

<style scoped>
	.desc_class{
		padding: 20upx 40upx;
		font-size: 28upx;
		color: #aaa;
	}
	.desc_class .p{
		display: block;
		margin: 20upx 0;
	}
	.desc_class .t{
		font-weight: bold;
	}
</style>
