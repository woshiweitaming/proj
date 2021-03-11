<template>
	<view class="tab_container">
		<view class="tab_main">
			<u-tabs :list="list" @change="change" :is-scroll="false" :current="current" bg-color="#f4f5fa"></u-tabs>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'OrderName',
		data(){
			return {
				list: [{name: '购买'}, {name: '出售'}, {name: '我的发布'}],
				current: 0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style scoped>
	.tab_container{
		border-bottom: 1px solid #eee;
	}
	.tab_main{
		width: 60%;
	}
</style>
