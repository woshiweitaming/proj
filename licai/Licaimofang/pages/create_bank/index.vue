<template>
	<view class="create_bank">
		<view class="forms">
			<view class="labels">
				<view class="name">{{getLang('createbank_p13')}}</view>
				<view class="input_bar">
					<input type="text" disabled class="input" :placeholder="getLang('createbank_p14')" />
				</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('createbank_p15')}}</view>
				<view class="input_bar">
					<input type="text" v-model="form.name" class="input" :placeholder="getLang('createbank_p16')" />
				</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('createbank_p17')}}</view>
				<view class="input_bar">
					<input type="text" class="input" :placeholder="getLang('createbank_p18')" />
				</view>
				<view class="long">{{getLang('createbank_p19')}}</view>
			</view>
			<u-gap height="20" bg-color="#f8fbfd"></u-gap>
			<view class="labels">
				<view class="name">{{getLang('createbank_p20')}}</view>
				<view class="input_bar">
					<input type="text" disabled @click="show = true" v-model="form.bankcode" class="input" :placeholder="getLang('createbank_p21')" />
				</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('createbank_p22')}}</view>
				<view class="input_bar">
					<input type="text" class="input" v-model="form.adds" :placeholder="getLang('createbank_p23')" />
				</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('createbank_p24')}}</view>
				<view class="input_bar">
					<input type="text" class="input" v-model="form.banknumber" :placeholder="getLang('createbank_p25')" />
				</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('createbank_p26')}}</view>
				<view class="input_bar">
					<input type="text" v-model="form.phone" class="input" :placeholder="getLang('createbank_p27')" />
				</view>
			</view>
			<view class="btns">
				<u-button type="primary" @click="addBankHandler">{{getLang('createbank_p28')}}</u-button>
			</view>
		</view>
		<u-popup v-model="show" mode="bottom" length="60%" :safe-area-inset-bottom="true" :closeable="true">
			<Banks @callback="callback" />
		</u-popup>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Banks from '@/layouts/create_bank/banks.vue'
	import { addBank, checkIn } from '@/apis/users.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'CreateBank',
		mixins: [langMixins],
		components: {
			Banks
		},
		data(){
			return {
				form: {
					bankcode: '',
					adds: '',
					phone: '',
					name: '',
					banknumber: '',
				},
				show: false
			}
		},
		methods: {
			async addBankHandler(){
				if(this.form.name.length === 0){
					return tips.showToast(this.getLang('createbank_p16'))
				}
				if(this.form.bankcode.length === 0){
					return tips.showToast(this.getLang('createbank_p21'))
				}
				if(this.form.adds.length === 0){
					return tips.showToast(this.getLang('createbank_p23'))
				}
				if(this.form.banknumber.length === 0){
					return tips.showToast(this.getLang('createbank_p25'))
				}
				if(this.form.phone.length === 0){
					return tips.showToast(this.getLang('createbank_p27'))
				}
				await addBank(this.form)
				uni.navigateBack()
			},
			callback(name){
				this.form.bankcode = name
				this.show = false
			},
			async checkInHandler(){
				//const res = await checkIn()
			}
		},
		onShow(){
			this.checkInHandler()
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('createbank_p1')
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
</style>