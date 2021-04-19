<template>
	<view class="create_bank">
		<view class="forms">
			<view class="labels">
				<view class="name">{{getLang('delivery_p3')}}</view>
				<view class="input_bar">
					<input type="text" v-model="form.name" class="input" :placeholder="getLang('delivery_p8')" />
				</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('delivery_p4')}}</view>
				<view class="input_bar">
					<input type="text" class="input" v-model="form.phone" :placeholder="getLang('delivery_p9')" />
				</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('delivery_p5')}}</view>
				<view class="input_bar">
					<input type="text" disabled @click="show1 = true" class="input" v-model="form.province" :placeholder="getLang('delivery_p10')" />
				</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('delivery_p6')}}</view>
				<view class="input_bar">
					<input type="text" disabled @click="show2 = true" v-model="form.city" class="input" :placeholder="getLang('delivery_p11')" />
				</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('delivery_p7')}}</view>
				<view class="input_bar">
					<input type="text" v-model="form.adds" class="input" :placeholder="getLang('delivery_p12')" />
				</view>
			</view>
			<view class="btns">
				<u-button type="primary" @click="addAddsHandler">{{getLang('delivery_p13')}}</u-button>
			</view>
		</view>
		<u-popup v-model="show1" mode="bottom" length="60%" :safe-area-inset-bottom="true" :closeable="true">
			<view class="pop">
				<view class="title">{{getLang('delivery_p5')}}</view>
				<view class="list">
					<scroll-view :scroll-y="true" style="height: 100%;">
						<view class="labels" @click="provinceSelected(curItem.label)" v-for="(curItem, index) in province" :key="index">
							<view class="name">{{curItem.label}}</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</u-popup>
		<u-popup v-model="show2" mode="bottom" length="60%" :safe-area-inset-bottom="true" :closeable="true">
			<view class="pop">
				<view class="title">{{getLang('delivery_p6')}}</view>
				<view class="list">
					<scroll-view :scroll-y="true" style="height: 100%;">
						<view class="labels" @click="citySelected(curItem.label)" v-for="(curItem, index) in getCity" :key="index">
							<view class="name">{{curItem.label}}</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Banks from '@/layouts/create_bank/banks.vue'
	import { addAdds } from '@/apis/users.js'
	import tips from '@/utils/tips.js'
	import total from '@/datas/address.js'
	export default {
		name: 'CreateBank',
		mixins: [langMixins],
		components: {
			Banks
		},
		data(){
			return {
				form: {
					adds: '',
					phone: '',
					name: '',
					province: '',
					city: ''
				},
				show1: false,
				show2: false,
				province: total,
				city: []
			}
		},
		methods: {
			async addAddsHandler(){
				if(this.form.name.length === 0){
					return tips.showToast(this.getLang('delivery_p8'))
				}
				if(this.form.phone.length === 0){
					return tips.showToast(this.getLang('delivery_p9'))
				}
				if(this.form.province.length === 0){
					return tips.showToast(this.getLang('delivery_p10'))
				}
				if(this.form.city.length === 0){
					return tips.showToast(this.getLang('delivery_p11'))
				}
				if(this.form.adds.length === 0){
					return tips.showToast(this.getLang('delivery_p12'))
				}
				await addAdds(this.form)
				tips.showToast(this.getLang('common_p6'))
				uni.navigateBack()
			},
			provinceSelected(province){
				this.form.province = province
				this.form.city = ''
				this.show1 = false
			},
			citySelected(city){
				this.form.city = city
				this.show2 = false
			}
		},
		computed: {
			getCity(){
				if(this.form.province.length === 0) return []
				const curProvince = total.filter(res => res.label == this.form.province)[0]
				return curProvince.children
			}
		},
		onShow(){
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('delivery_p2')
			})
		}
	}
</script>

<style scoped>
	.bank_list{
		padding: 20upx;
	}
	.long{
		width: 100%;
		font-size: 24upx;
		background: #fff;
		padding-left: 20upx;
		line-height: 60upx;
		color: #666;
	}
	.btns{
		padding: 40upx;
	}
	.input{
		line-height: 40upx !important;
		height: 80upx !important;
	}
	.pop{
		height: 100%;
		width: 100%;
	}
	.pop .title{
		text-align: center;
		line-height: 100upx;
	}
	.pop .list{
		height: calc(100% - 100upx);
		overflow: auto;
	}
	.pop .list .labels{
		display: flex;
		padding: 20upx;
		border-bottom: 1px solid #eee;
	}
	.pop .list .labels .name{
		text-align: center;
		line-height: 60upx;
		vertical-align: top;
	}
	.pop .icon{
		width: 60upx;
	}
	.pop .scroll{
		height: 100%;
		overflow: auto;
	}
</style>