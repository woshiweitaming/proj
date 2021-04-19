<template>
	<view class="product_wrap">
		<Summary :pro_name="pro_name" :tagList="tagList" :summary="summary" />
		<u-gap height="20" bg-color="#f5f5f3"></u-gap>
		<Feature />
		<u-gap height="20" bg-color="#f5f5f3"></u-gap>
		<Detail :details="details" />
		<u-gap height="20" bg-color="#f5f5f3"></u-gap>
		<Question />
		<BottomBar @callback="callback" />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Summary from '@/layouts/product/summary.vue'
	import Feature from '@/layouts/product/feature.vue'
	import Detail from '@/layouts/product/detail.vue'
	import Question from '@/layouts/common/question.vue'
	import BottomBar from '@/layouts/product/bottom_bar.vue'
	export default {
		name: 'Product',
		mixins: [langMixins],
		data(){
			return {
				pro_name: '',
				tagList: [],
				summary: {
					min_amount: 0,
					period: 0,
					deal_rate: 0
				},
				details: {
					period: 0,
					total_amount: 0,
					progress: 0,
					deal_rate: 0,
				},
				opt: {}
			}
		},
		components: {
			Summary,
			Feature,
			Detail,
			Question,
			BottomBar
		},
		methods: {
			callback(){
				uni.navigateTo({
					url: '/pages/order/index?'+this.convertObj(this.opt)
				})
			},
			convertObj(data) {
				let _result = [];
				for (let key in data) {
				    let value = data[key];
				    if (value.constructor == Array) {
				        value.forEach((_value) => {
				          _result.push(key + "=" + _value);
				        });
				    } else {
				        _result.push(key + '=' + value);
				    }
				}
				return _result.join('&');
			}
		},
		onLoad(opt) {
			this.opt = opt
			const { min_amount, period, deal_rate, total_amount, progress } = opt
			this.summary = { min_amount, period, deal_rate }
			this.tagList = opt.label.split(',')
			this.pro_name = opt.pro_name
			this.details = { min_amount, progress, period, deal_rate }
			uni.setNavigationBarTitle({
				title: this.getLang('product_p1')
			})
		}
	}
</script>

<style scoped>
</style>
