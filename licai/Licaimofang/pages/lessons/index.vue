<template>
	<view>
		<view class="u-page">
		</view>
		<u-tabbar v-model="current" :list="list" @change="change" active-color="#6767c7" inactiveColor="#aaaaaa"></u-tabbar>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		data() {
			return {
				list: [{
						iconPath: '/static/images/insurancePages/icon/course.png',
						selectedIconPath: '/static/images/insurancePages/icon/courseSelected.png',
						text: '',
						customIcon: true
					},
					{
						iconPath: '/static/images/insurancePages/icon/bought.png',
						selectedIconPath: '/static/images/insurancePages/icon/boughtSelected.png',
						text: '',
						customIcon: true
					},
				],
				current: 1
			}
		},
		mixins: [langMixins],
		methods: {
			setTitle(){
				const title = this.current == 1 ? this.getLang('lessons_p1') : this.getLang('appName') + this.getLang('lessons_p3')
				uni.setNavigationBarTitle({
					title: title
				})
			},
			change(index){
				this.current = index
				this.setTitle()
			}
		},
		onLoad() {
			this.setTitle()
		},
		onShow() {
			this.list[0].text = this.getLang('lessons_p2')
			this.list[1].text  = this.getLang('lessons_p1')
		}
	}
</script>