<template>
	<view class="advacced_certification">
		<view class="steps">
			<u-steps :list="stepList" :current="getAdvancedCertCurrent" un-active-color="#ddd" active-color="#2970e6"></u-steps>
		</view>
		<view class="steps_main">
			<Upload v-if="getAdvancedCertCurrent == 0" />
			<Audlt v-if="getAdvancedCertCurrent == 1" />
		</view>
	</view>
</template>

<script>
	/**
	 * 高级认证
	 */
	import { mapGetters, mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import Audlt from '@/layouts/certification/advanced/audlt.vue'
	import Upload from '@/layouts/certification/advanced/upload.vue'
	export default {
		name: 'AdvancedCertification',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				stepList: [],
			}
		},
		components: {
			Audlt,
			Upload
		},
		methods: {
			/**
			 * 创建步骤条
			 */
			 createList(){
				 this.stepList = [{
					 	name: this.getLangs('uploadIdcard'),
					 	icon: ''
					 },{
					 	name: this.getLangs('audlt'),
					 	icon: ''
					 }
				 ]
			 },
			 ...mapMutations({
			 	setAdvancedCertCurrent: 'SET_ADVANCED_CERT_CURRENT'
			 })
		},
		computed: {
			...mapGetters({
				getAdvancedCertCurrent: 'getAdvancedCertCurrent'
			})
		},
		onShow() {
			this.setTitle(this.getLangs('advancedCert'))
			this.setAdvancedCertCurrent(0)
			this.createList()
		}
	}
</script>

<style scoped>
	.advacced_certification{
		padding: 20upx;
	}
</style>
