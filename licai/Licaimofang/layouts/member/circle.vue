<template>
	<view class="circle" :style="createCircleStyle">
		<view class="circle_main">
			<view class="circle_box">
				<view class="center">
					<view class="p1">{{getLang('member_p12')}}{{info.transcend_num}}%{{getLang('member_p13')}}</view>
					<view class="p2" v-if="info.nextLevelName">{{getLang('member_p14')}}{{info.difference}}{{getLang('member_p15')}}{{info.nextLevelName}}</view>
				</view>
				<canvas class="canvas" canvas-id="circle_canvas"></canvas>
				<!-- <view :class="['dot_label',`dot_label${(index+1)}`]" v-for="(curItem, index) in levelList" :key="index">
					<view class="box">
						<view class="name">{{curItem.name}}</view>
						<view class="value">{{curItem.min_money}}</view>
						<view class="dot"></view>
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Circles',
		mixins: [langMixins],
		props: ['info','levelList'],
		methods: {
			draw(){
				const { screenWidth, windowTop } = uni.getSystemInfoSync()
				const ctx = uni.createCanvasContext('circle_canvas')
				//半径
				const r = screenWidth / 2 * 0.8
				ctx.beginPath()
				ctx.arc(r + 20, r + 20, r, 0, 2*Math.PI)
				ctx.lineWidth = 2
				ctx.strokeStyle = '#fff8d5'
				ctx.stroke()
				//总数
				const totals = this.levelList.length
				//固定直角边
				const fixSide = screenWidth * 0.7 - r
                //直径
				const diameter = 2*r
				//sin
				const sin = r*Math.sin(60*Math.PI/180)
				//cos
				const cos = r*Math.cos(60*Math.PI/180)
				//循环画点
				for(let i=0; i<totals;i++){
					const d = 240/(totals > 2 ? totals-1 : totals)
					const angle = i*d + 60
					const data = this.levelList[i]
					this.drawPoint(ctx, r-this.getSin(r, angle), r+this.getCos(r, angle), data.name, data.min_money)
				}
				ctx.draw()
			},
			drawPoint(ctx, x, y, name, min_money){
				ctx.beginPath()
				ctx.arc(x+20, y+20, 5, 0, 2*Math.PI)
				ctx.fillStyle = '#fff8d5'
				ctx.stroke()
				ctx.fill()
				ctx.fillText(name, x-20, y+20)
				ctx.fillText(min_money, x-20, y+30)
			},
			getSin(r, angle){
				return r*Math.sin(angle*Math.PI/180)
			},
			getCos(r, angle){
				return r*Math.cos(angle*Math.PI/180)
			},
		},
		computed: {
			createCircleStyle(){
				const { screenWidth } = uni.getSystemInfoSync()
				return {
					width: screenWidth + 'px',
					height: screenWidth*0.8 + 'px'
				}
			}
		},
		watch: {
			levelList: {
				handler(val){
					if(val.length > 0){
						this.draw()
					}
				},
				deep: true,
				immediate: true
			}
		}
	}
</script>

<style scoped>
	.circle{
		position: relative;
		overflow: hidden;
		padding: 40upx;
	}
	.circle_main{
		width: 100%;
		height: 100%;
	}
	.circle_box{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.canvas{
		width: 100%;
		height: 100%;
	}
	.center{
		width: 100%;
		position: absolute;
		top: 140upx;
		text-align: center;
		left: 0
	}
	.center .p1{
		font-size: 32upx;
		color: #fff;
	}
	.center .p2{
		border-radius: 40upx;
		background: #363545;
		text-align: center;
		color: #fff;
		font-size: 24upx;
		min-width: 60%;
		max-width: 70%;
		margin: 40upx auto;
		line-height: 80upx;
	}
	.circle_rect{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
</style>
