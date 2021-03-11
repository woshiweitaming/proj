<template>
	<view class="notice">
		<rich-text :nodes="content"></rich-text>
	</view>
</template>

<script>
	import { getNConfig} from '@/api/public.js'
	export default {
		name: 'Notice',
		data(){
			return {
				content: ''
			}
		},
		methods: {
			async getConfigHandler(){
				const res = await getNConfig()
				if(res.data.notice !== null){
					this.content = res.data.notice.content
				}
			},
		},
		onLoad() {
			this.getConfigHandler()
		}
	}
</script>
<style>
	page{
		background: #fff;
	}
</style>
<style scoped>
	.notice{
		padding: 20px;
	}
</style>
