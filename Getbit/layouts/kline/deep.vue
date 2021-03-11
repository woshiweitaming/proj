<template>
	<view class="deep">
		<iframe class="iframe" :src="url"></iframe>
	</view>
</template>

<script>
	import appConfig from '@/config/appConfig.js'
	export default {
		name: 'Deep',
		props: ['opt', 'curType'],
		data(){
			return {
				url: ''
			}
		},
		watch: {
			curType: {
				handler(val){
					if(JSON.stringify(this.opt) != '{}'){
						this.url = '/hybrid/html/deep.html?pid='+this.opt.id+'&apiUrl='+appConfig.domain+'/exc_depth.html'
					}
				},
				deep: true,
				immediate: true
			}
		},
	}
</script>

<style scoped>
	.deep{
		margin-top: 40upx;
		height: 900upx;
	}
	.iframe{
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
