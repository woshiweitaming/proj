<template>
	<view class="swiper_class">
		<special-banner v-if="bannerList.length > 0" :banner-list="bannerList" :swiper-config="swiperConfig"></special-banner>
	</view>
</template>

<script>
	import { getNConfig} from '@/api/public.js'
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
				this.bannerList = res.data.banner.map(res => {
					res.picture = res.img
					res.path = `/pages/desc/index?id=${res.id}&title=${res.title}`
					res.title = ''
					return res
				})
				if(res.data.notice !== null){
					this.content = res.data.notice.content
					this.title = res.data.notice.title
					this.show = true
				}
		    },
			closeHanlder(){
				this.show = false
			}
		},
		created(){
			
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
		background: #20222c;
	}
	.uni-padding-wrap{
		width: 100%;
	}
</style>
