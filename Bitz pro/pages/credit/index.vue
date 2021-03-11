<template>
	<view class="page">
		<view class="dashboard">
			<view class="name">{{getLangs('creditp1')}}</view>
			<best-gauge v-if="JSON.stringify(gaugeOption) !== '{}'" :config="gaugeOption"></best-gauge>
			<view class="desc">{{jifen == 100 ? getLangs('creditp2') : getLangs('creditp3') }}</view>
			<view class="date">
				<view class="span">{{getLangs('creditp4')}}</view>
				<view class="span">{{getCurDate()}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import bestGauge from '../../components/best-gauge/best-gauge.vue'
	import { getUserInfo } from '@/api/user.js'
	import Utils from '@/utils/Utils.js'
	export default {
		name: 'Credit',
		mixins: [commonMixins, langsMixins],
	    components:{
	        bestGauge
	    },
	    data() {
	        return {
	           gaugeOption: {},
			   jifen: 0
	        }
	    },
		methods: {
			async getUserInfoHandler(){
				const res = await getUserInfo()
				const { windowWidth, windowHeight } = uni.getSystemInfoSync()
				let width = uni.upx2px(windowWidth * 2 * 0.9);
				let fontSize = uni.upx2px(60);
				this.jifen = Number(res.data.jifen)
				this.gaugeOption = {
					id: 'gaugeId0',
					value: this.jifen,
					axisTickLength: 2,
					name: '',
					width: width,
					detail: {
						value: {
							fontSize: 60
						}
					},
					axisTick: {
						color: '#e66060,#c6c6c6'
					}
				}
			},
			getCurDate(){
				const timestap = new Date().getTime()
				return Utils.toDate(timestap).split(' ')[0]
			}
		},
		onShow() {
			this.getUserInfoHandler()
			this.setTitle(this.getLangs('creditp1'))
		}
	}
</script>

<style scoped>
	page,
	.page{
		background: #fff
	}
	.dashboard{
		background: #fff;
		padding-top: 30%;
		position: relative;
	}
	.dashboard .name,
	.dashboard .desc,
	.dashboard .date{
		width: 100%;
		text-align: center;
		line-height: 80upx;
		position: absolute;
		left: 0;
		z-index: 10;
		color: #333
	}
	.dashboard .name{
		font-size: 36upx;
		top: 40%;
	}
	.dashboard .desc{
		bottom: 160upx;
		font-size: 40upx;
		color: #333
	}
	.dashboard .date{
		bottom: 20upx;
	}
	.dashboard .date .span{
		line-height: 60upx;
	}
</style>
