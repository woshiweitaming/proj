<template>
	<view class="certification">
		<view class="tabs">
			<view class="tabs_labels">
				<view :class="['icons', cur === 0 ? 'on' : '']">
					<image src="/static/images/sfz/1.png" class="icon" mode="widthFix"></image>
				</view>
				<view class="name">{{getLang('certification_p1')}}</view>
			</view>
			<view class="tabs_labels">
				<view class="line"></view>
			</view>
			<view class="tabs_labels">
				<view :class="['icons', cur === 1 ? 'on' : '']">
					<image src="/static/images/sfz/2.png" class="icon" mode="widthFix"></image>
				</view>
				<view class="name">{{getLang('certification_p15')}}</view>
			</view>
			<view class="tabs_labels">
				<view class="line"></view>
			</view>
			<view class="tabs_labels">
				<view :class="['icons', cur === 2 ? 'on' : '']">
					<image src="/static/images/sfz/3.png" class="icon" mode="widthFix"></image>
				</view>
				<view class="name">{{getLang('certification_p16')}}</view>
			</view>
		</view>
		<BaseInfo @callback="callback" v-if="cur === 0" />
		<IDcard v-if="cur === 1" />
	</view>
</template>
<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import BaseInfo from '@/layouts/certification/base_info.vue'
	import IDcard from '@/layouts/certification/idcard.vue'
	export default {
		name: 'Certification',
		mixins: [langMixins],
		components: {
			BaseInfo,
			IDcard,
		},
		data(){
			return {
				tabs: [
					{
						cur: true,
						name: 'certification_p1',
						icon: ''
					},
					{
						cur: false,
						name: 'certification_p1'
					},
					{
						cur: false,
						name: 'certification_p1'
					}
				],
				cur: 0
			}
		},
		methods: {
			callback(cur){
				this.cur = 1
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('certification_p1')
			})
		}
	}
</script>
<style scoped>
	.tabs{
		display: flex;
		padding: 40upx 20upx;
		width: 90%;
		margin: auto;
	}
	.tabs_labels{
		width: 20%;
	}
	.icons{
		width: 70upx;
		height: 70upx;
		background: #b9bed1;
		border-radius: 50%;
		margin: 20upx auto;
		text-align: center;
	}
	.icons.on{
		background: #0077FF;
	}
	.name{
		text-align: center;
		font-size: 24upx;
	}
	.line{
		width: 100%;
		height: 2px;
		background: #0077FF;
		margin-top: 60upx;
	}
	.icon{
		width: 50upx;
		margin-top: 10upx;
	}
</style>