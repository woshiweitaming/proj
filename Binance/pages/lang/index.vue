<template>
	<view class="lang_class">
		<view class="list_class">
			<view :class="['list_label', getGlobalLang === items.value ? 'on' : '']" v-for="(items, index) in langList" :key="index" @tap="changeLang(items.value)">
				{{items.name}}
				<image v-if="getGlobalLang === items.value " src="../../static/images/selected.png" class="icon"></image>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 设置
	 */
	import { mapGetters, mapMutations } from 'vuex'
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import { userLoginOut } from '@/api/user.js'
	export default {
		name: 'Lang',
		mixins: [langsMixins, commonMixins],
		data(){
			return {
				langList: [
					// {
					// 	name: '简体中文',
					// 	value: 'cn'
					// },
					{
						name: 'English',
						value: 'en'
					},
					{
						name: '繁体中文',
						value: 'cns'
					},
					{
						name: '한국어',
						value: 'ko'
					},
					{
						name: '日本語',
						value: 'ja'
					},
					{
						name: 'ViệtName',
						value: 'vi'
					},
				]
			}
		},
		methods:{
			/**
			 * 重置标题栏
			 */
			resetTitle(){
				this.setTitle(this.getLangs('langSetting'))
			}
		},
		onShow() {
			this.setTitle(this.getLangs('langSetting'))
		},
		watch: {
			getGlobalLang(){
				this.resetTitle()
			}
		}
	}
</script>

<style scoped>
	.lang_class{
		padding: 40upx 0;
	}
	.list_label{
		color: #333;
		border-bottom: 1px solid #eee
	}
	.list_label.on{
		color: #2970e6
	}
	.list_class .list_label .icon{
		width: 40upx;
		height: 40upx;
		position: absolute;
		right: 10upx;
		top: 20upx;
	}
</style>
