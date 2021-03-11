<template>
	<view class="sliderbar">
		<view class="sliderbar_bar">
			<view @tap="changeBar(0)" :class="['sliderbar_label', selected == 0 ? 'on' : '', selected - 1 >= 0 ? `deal${action}` : '']">
				<view class="bar"></view>
				<view class="line"></view>
				<view :class="['selected', `selected${action}`]"></view>
			</view>
			<view @tap="changeBar(1)" :class="['sliderbar_label', selected == 1 ? 'on' : '', selected - 1 >= 1 ? `deal${action}` : '']">
				<view class="bar"></view>
				<view class="line"></view>
				<view :class="['selected', `selected${action}`]"></view>
			</view>
			<view @tap="changeBar(2)" :class="['sliderbar_label', selected == 2 ? 'on' : '', selected - 1 >= 2 ? `deal${action}` : '']">
				<view class="bar"></view>
				<view class="line"></view>
				<view :class="['selected', `selected${action}`]"></view>
			</view>
			<view @tap="changeBar(3)" :class="['sliderbar_label', selected == 3 ? 'on' : '', selected - 1 >= 3 ? `deal${action}` : '']">
				<view class="bar"></view>
				<view class="line"></view>
				<view :class="['selected', `selected${action}`]"></view>
			</view>
			<view @tap="changeBar(4)" :class="['sliderbar_label', selected == 4 ? 'on' : '', selected - 1 >= 4 ? `deal${action}` : '']">
				<view class="bar"></view>
				<view :class="['selected', `selected${action}`]"></view>
			</view>
		</view>
		<view :class="['per', `per${action}`]">{{getValue}}%</view>
	</view>
</template>

<script>
	export default {
		name: 'Sliderbar',
		props: {
			action: {
				type: Number,
				default: 0
			}
		},
		data(){
			return {
				dataList: [1,2,3,4],
				selected: 0,
			}
		},
		computed: {
			getValue(){
				const list = [0,25,50,75,100]
				return list[this.selected]
			}
		},
		methods: {
			changeBar(index){
				this.selected = index
				this.$emit('callback', this.getValue)
			}
		},
		watch: {
			action(val){
				this.selected = 0
			}
		}
	}
</script>

<style scoped>
	.sliderbar{
		width: 100%;
	}
	.sliderbar_bar{
		width: 100%;
		height: 60upx;
		display: flex;
		position: relative;
	}
	.sliderbar_label{
		width: 25%;
		text-align: center;
		position: relative;
	}
	.sliderbar_label:last-child{
		width: 10%;
		position: absolute;
		right: -30upx;
	}
	.sliderbar_label .bar{
		width: 10upx;
		height: 30upx;
		background: #e3e3e3;
		position: absolute;
	}
	.sliderbar_label .line{
		width: 100%;
		height: 8upx;
		background: #e3e3e3;
		top: 10upx;
		position: absolute;
	}
	/* .sliderbar_label{
		width: 10upx;
	} */
	.sliderbar_label.deal0 .bar,
	.sliderbar_label.deal0 .line{
		background: #00ad90;
	}
	.sliderbar_label.deal1 .bar,
	.sliderbar_label.deal1 .line{
		background: #d14b64;
	}
	.sliderbar_label:nth-child(2).on .selected{
		left: -20upx;
	}
	.sliderbar_label:nth-child(3).on .selected{
		left: -20upx;
	}
	.sliderbar_label:nth-child(4).on .selected{
		left: -20upx;
	}
	.sliderbar_label.on .selected{
		width: 40upx;
		height: 60upx;
		position: absolute;
		left: 0;
		top: -15upx;
		z-index: 100;
	}
	.sliderbar_label.on .selected0{
		background: url(../../static/images/icons/trade/bar1.png);
		background-size: 40upx 60upx;
	}
	.sliderbar_label.on .selected1{
		background: url(../../static/images/icons/trade/bar2.png);
		background-size: 40upx 60upx;
	}
	.sliderbar_label.on .selected{
		display: block;
	}
	.sliderbar_label:last-child .selected{
		left: -30upx;
	}
	.right{
		right: -10upx;
	}
	.per{
		text-align: right;
		font-size: 24upx;
	}
	.per0{
		color: #00ad90;
	}
	.per1{
		color: #d14b64;
	}
</style>
