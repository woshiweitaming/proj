<template>
	<view class="country_bar">
		<view class="title">{{getLang('certification_p7')}}</view>
		<view class="list">
			<scroll-view :scroll-y="true" style="height: 100%;">
				<view class="labels" @click="selected(curItem[getCurLang])" v-for="(curItem, index) in list" :key="index">
					<view class="country" style="width: 100%; text-align: center;" >{{curItem[getCurLang]}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import CountryList from '@/datas/country.js'
	export default {
		name: 'Country',
		mixins: [langMixins],
		data(){
			return {
				cur: {},
				list: []
			}
		},
		methods: {
			selected(country){
				this.$emit('callback', country)
			}
		},
		created(){
			this.list = CountryList
		},
	}
</script>

<style scoped>
	.country_bar{
		width: 100%;
		height: 100%;
	}
	.title{
		text-align: center;
		line-height: 80upx;
		border-bottom: 1px solid #eee;
	}
	.list{
		height: calc(100% - 80upx);
		overflow: auto;
	}
	.list .labels{
		display: flex;
		padding: 0 20upx;
		border-bottom: 1px solid #eee;
	}
	.number,
	.country{
		width: 50%;
		line-height: 80upx;
	}
	.country{
		text-align: right;
	}
</style>
