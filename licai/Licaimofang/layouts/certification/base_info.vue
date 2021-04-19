<template>
	<view class="forms_wrap">
		<view class="forms">
			<view class="titlebar"><image src="/static/images/sfz/4.png" class="icon" mode="widthFix"></image>{{getLang('certification_p17')}}</view>
			<view class="form_label">
				<view class="form_input_bar" @click="show = true">
					<input type="text" :disabled="true" class="input_bar" :placeholder="getLang('certification_p2')" v-model="form.country" />
				</view>
			</view>
			<view class="form_label">
				<view class="form_input_bar">
					<input type="text" class="input_bar" :placeholder="getLang('certification_p3')" v-model="form.name" />
				</view>
			</view>
			<view class="form_label">
				<view class="form_input_bar">
					<input type="text" class="input_bar" :placeholder="getLang('certification_p4')" v-model="form.idcard" />
				</view>
			</view>
			<view class="form_label">
				<view class="form_input_bar">
					<input type="text" class="input_bar" :placeholder="getLang('certification_p5')" v-model="form.adds" />
				</view>
			</view>
		</view>
		<view class="btns" @click="checkInHandler">{{getLang('certification_p6')}}</view>
		<u-popup v-model="show" mode="bottom" length="60%" :safe-area-inset-bottom="true" :closeable="true">
			<Country @callback="callback" />
		</u-popup>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { checkIn } from '@/apis/users.js'
	import Country from '@/layouts/certification/country.vue'
	import tips from '@/utils/tips.js'
	export default {
		name: 'BaseInfo',
		mixins: [langMixins],
		components: {
			Country
		},
		data(){
			return {
				form: {
					country: '',
					name: '',
					idcard: '',
					adds: ''
				},
				show: false
			}
		},
		methods: {
			async checkInHandler(){
				// if(this.form.country.length === 0){
				// 	return tips.showToast(this.getLang('certification_p2'))
				// }
				// if(this.form.name.length === 0){
				// 	return tips.showToast(this.getLang('certification_p3'))
				// }
				// if(this.form.idcard.length === 0){
				// 	return tips.showToast(this.getLang('certification_p4'))
				// }
				// if(this.form.adds.length === 0){
				// 	return tips.showToast(this.getLang('certification_p5'))
				// }
				// const res = await checkIn(this.form)
				this.$emit('callback', 1)
			},
			callback(country){
				this.form.country = country
				this.show = false
			}
		}
	}
</script>

<style scoped>
	.forms_wrap{
		padding: 20upx;
	}
	.forms{
		padding: 0 40upx 40upx 40upx;
		background: #fff;
		border-radius: 20upx;
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.1);
	}
	.forms .form_label{
		border-bottom: 1px solid #eee;
		margin-bottom: 20upx;
	}
	.forms .form_label .input_bar{
		line-height: 50upx;
		height: 80upx;
		font-size: 28upx
	}
	.btns{
		text-align: center;
		line-height: 80upx;
		background: #0077FF;
		border-radius: 40upx;
		color: #fff;
		margin-top: 40upx;
	}
	.titlebar{
		line-height: 120upx;
		border-bottom: 1px solid #eee;
		margin-bottom: 20upx;
	}
	.icon{
		width: 50upx;
		vertical-align: middle;
	}
</style>
