<template>
	<view class="record">
		<view class="record_menu">
			<view class="labels" v-for="(curItem, index) in menuList" :key="index">
				<view class="menu_item" @click="changeMenu(index)">
					<view :class="['name', cur == index ? 'on' : '']">{{getLang(curItem)}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Record',
		mixins: [langMixins],
		data(){
			return {
				menuList: ['redpack_p5', 'redpack_p6', 'redpack_p7'],
				cur: 0
			}
		},
		methods: {
			changeMenu(index){
				this.cur = index
			}
		}
	}
</script>

<style scoped>
	.record{
		background: #fff;
		position: relative;
		top: -120upx;
	}
	.record_menu{
		display: flex;
		line-height: 80upx;
		border-bottom: 1px solid #eee;
		font-size: 32upx;
		padding-left: 40upx;
	}
	.record_menu .labels{
		width: 33.33%;
		text-align: center;
	}
	.record_menu .menu_item{
		padding: 0 20%;
	}
	.record_menu .menu_item .name{
		font-size: 28upx;
		line-height: 100upx;
	}
	.record_menu .menu_item .name.on{
		color: #007AFF;
		font-size: 34upx;
		border-bottom: 2px solid #007AFF;
	}
</style>
