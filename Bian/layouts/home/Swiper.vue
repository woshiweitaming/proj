<template>
	<view class="swiper_class">
		<special-banner v-if="bannerList.length > 0" :banner-list="bannerList" :swiper-config="swiperConfig"></special-banner>
	</view>
</template>

<script>
	import { getNConfig, getDownload} from '@/api/public.js'
	import SpecialBanner from '@/components/EtherealWheat-banner/specialBanner.vue'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import NoticeDialog from '@/layouts/dialog/notice_dialog.vue'
	export default {
		name: 'Swipers',
		mixins: [commonMixins, langsMixins],
		props: ['status'],
		components: {
			SpecialBanner,
			 NoticeDialog
		},
		data(){
			return {
				bannerList: [],
				swiperConfig: {
				    indicatorDots: false,
				    indicatorColor: 'rgba(255, 255, 255, .4)',
				    indicatorActiveColor: 'rgba(255, 255, 255, 1)',
				    autoplay: true,
				    interval: 3000,
				    duration: 300,
				    circular: true,
				    previousMargin: '58rpx',
				    nextMargin: '58rpx'
				},
				show: false,
				content: '',
				title: ''
			}
		},
		methods: {
			changeIndicatorDots(e) {
			    this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
			    this.autoplay = !this.autoplay
			},
			intervalChange(e) {
			    this.interval = e.target.value
			},
			durationChange(e) {
			    this.duration = e.target.value
			},
			async getConfigHandler(){
				const res = await getNConfig()
				if(res.data.notice !== null){
					this.content = res.data.notice.content
					this.title = res.data.notice.title
					this.show = true
				}
				this.bannerList = res.data.banner.map(res => {
					res.picture = res.img
					res.path = ''
					res.title = ''
					return res
				})
				this.bannerList.push({
					picture: '/static/images/banner/banner5.jpg',
					path: '/pages/webview/index',
					title: ''
				})
				// #ifdef H5
				const res1 = await getDownload()
				this.bannerList.push({
					picture: '/static/images/banner/download_'+this.getGlobalLang+'.jpg',
					path: res1.data.url,
					title: ''
				})
				// #endif

		    },
			closeHanlder(){
				this.show = false
			}
		},
		created(){
			
		},
		watch: {
			status: {
				handler(val){
					this.getConfigHandler()
				},
				deep: true,
				immediate: true
			}
		}
	}
</script>
<style scoped>
	.swiper_class{
		width: 100%;
	}
	.swiper_image{
		width: 100%;
		height: 300upx;
		position: relative;
		z-index: 100;
		background: #f9f9f9;
	}
	.uni-padding-wrap{
		width: 100%;
	}
</style>
