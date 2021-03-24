<template>
	<view class="mask" v-show="showStatus" @click="close">
		<view class="dialog">
			<view class="dialog_wrap">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Dialog',
		data(){
			return {
				showStatus: true
			}
		},
		methods: {
			close(){
				this.showStatus = false
			}
		}
	}
</script>

<style scoped>
	.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10000;
		background: rgba(0,0,0,.8);
	}
	.dialog{
		width: 500upx;
		height: 600upx;
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 10001;
		margin-left: -250upx;
		margin-top: -400upx;
		background: #DD4A68;
	}
</style>
