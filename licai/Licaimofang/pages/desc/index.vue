<template>
	<view class="desc">
		<rich-text :nodes="content"></rich-text>
	</view>
</template>

<script>
	import { getAgreementUrl } from '@/apis/publics.js'
	export default {
		name: 'DescRich',
		data(){
			return {
				content: ''
			}
		},
		methods: {
			async getAgreementUrlHandlder(type){
				const res = await getAgreementUrl({type: type})
				this.content = res.date.content.replace(/<p([\s\w"=\/\.:;]+)((?:(style="[^"]+")))/ig, '<p')
                .replace(/<p>/ig, '<p style="font-size: 15px; line-height: 25px;">')
                .replace(/<img([\s\w"-=\/\.:;]+)((?:(height="[^"]+")))/ig, '<img$1')
                .replace(/<img([\s\w"-=\/\.:;]+)((?:(width="[^"]+")))/ig, '<img$1')
                .replace(/<img([\s\w"-=\/\.:;]+)((?:(style="[^"]+")))/ig, '<img$1')
                .replace(/<img([\s\w"-=\/\.:;]+)((?:(alt="[^"]+")))/ig, '<img$1')
                .replace(/<img([\s\w"-=\/\.:;]+)/ig, '<img style="width: 100%;" $1');
				uni.setNavigationBarTitle({
					title: res.date.title
				})
			}
		},
		onLoad(opt){
			this.getAgreementUrlHandlder(opt.type)
		}
	}
</script>

<style scoped>
	.desc{
		padding: 0 10upx;
	}
</style>
