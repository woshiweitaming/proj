<template>
	<view class="tab">
		<view class="tab_label" v-for="(curItem, index) in tabList" :key="index">
			<view class="name">{{getLang(curItem.name)}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Tab',
		mixins: [langMixins],
		data(){
			return {
				tabList: [
					{
						name: 'find_p1',
						icon: '',
						path: ''
					},
					{
						name: 'find_p2',
						icon: '',
						path: ''
					},
					{
						name: 'find_p3',
						icon: '',
						path: ''
					},
					{
						name: 'find_p4',
						icon: '',
						path: ''
					}
				]
			}
		}
	}
</script>

<style scoped>
	.tab{
		display: flex;
		height: 120upx;
	}
	.tab_label{
		width: 25%;
		padding: 20upx;
		text-align: center;
	}
	.tab_label .name{
		font-size: 24upx
	}
</style>
