<template>
	<view class="pool_class">
		<view class="u-page">
			<view class="page" v-if="current === 0">
				<Header background="#323457" :isBackground="true" :backBtn="false" title="poolp1" theme="white" />
				<Fund :show="show" />
				<Staking :show="show" @callback="callback" />
				<Pow :show="show" @callback="callback"/>
			</view>
			<view class="page" v-if="current === 1">
				<Yield />
			</view>
		</view>
		<!-- <u-tabbar v-model="current" :list="list" bg-color="#fff" active-color="#2970e6" inactive-color="#666"></u-tabbar> -->
	</view>
</template>

<script>
	import Header from '@/layouts/common/header.vue'
	import Fund from '@/layouts/pool/fund.vue'
	import Staking from '@/layouts/pool/staking.vue'
	import Pow from '@/layouts/pool/pow.vue'
	import Yield from '@/layouts/pool/yield.vue'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	export default {
		name: 'Pool',
		mixins: [commonMixins, langsMixins, userMixins],
		components: {
			Fund,
			Staking,
			Pow,
			Header,
			Yield
		},
		data(){
			return {
				current: 0,
				list: [],
				show: false
			}
		},
		methods: {
			setTimer(){
				this.timer = setInterval(() => {
					this.getUserLeftmoneyHandler()
				}, 2000)
			},
			clearTimer(){
				clearInterval(this.timer)
				this.timer = null
			},
			callback(){
				uni.stopPullDownRefresh()
			}
		},
		onLoad() {
			this.list = [
				{
				    iconPath: "home",
					selectedIconPath: "home-fill",
					text: this.getLangs('poolp1'),
				},
				{
					iconPath: "coupon",
					selectedIconPath: "coupon-fill",
					text: this.getLangs('poolp2'),
				},
			]
		},
		onShow() {
			this.setTitle(this.getLangs('poolp1'))
			this.show = true
		},
		onPullDownRefresh() {
			this.show = false
		},
		onTabItemTap() {
			this.show = !this.show
		}
	}
</script>

<style scoped>
	.page,
	.u-page{
		height: 100%;
	}
	.pool_class{
		padding-top: calc(var(--status-bar-height) + 88upx);
		height: 100%;
		background: #f9f9f9;
	}
	.topbar{
		border-bottom: 1px solid rgba(255,255,255,.1);
	}
</style>
