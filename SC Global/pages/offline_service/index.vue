<template>
	<view class="pages">
		<view class="service_list">
			<view class="labels">
				<image class="icon" src="../../static/images/offline/line.png"></image>
				<text class="name">{{getValue('s2')}}</text>
				<text class="value">{{result.line}}</text>
			</view>
			<view class="labels">
				<image class="icon" src="../../static/images/offline/QQ.png"></image>
				<text class="name">{{getValue('s3')}}</text>
				<text class="value">{{result.qq}}</text>
			</view>
			<view class="labels">
				<image class="icon" src="../../static/images/offline/whatsapp.png"></image>
				<text class="name">{{getValue('s4')}}</text>
				<text class="value">{{result.wahtApp}}</text>
			</view>
			<view class="labels">
				<image class="icon" src="../../static/images/offline/wechat.png"></image>
				<text class="name">{{getValue('s5')}}</text>
				<text class="value">{{result.wx}}</text>
			</view>
		</view>
	</view>
</template>

<script>
const langs = {
    "cn": {
        "s1": "线下客服",
		"s2": "官方Line",
		"s3": "官方QQ",
		"s4": "官方WhatsApp",
		"s5": "官方微信"
    },
    "cns": {
        "s1": "線下客服",
		"s2": "Line",
		"s3": "QQ",
		"s4": "WhatsApp",
		"s5": "Wechat"
    },
    "en": {
        "s1": "Offline customer service",
		"s2": "Line",
		"s3": "QQ",
		"s4": "WhatsApp",
		"s5": "Wechat"
    },
    "ja": {
        "s1": "オフライン",
		"s2": "Line",
		"s3": "QQ",
		"s4": "WhatsApp",
		"s5": "Wechat"
    },
    "ko": {
        "s1": "오프라인 고객 지원",
		"s2": "Line",
		"s3": "QQ",
		"s4": "WhatsApp",
		"s5": "Wechat"
    },
    "vi": {
        "s1": "Dịch vụ thượng hạng",
		"s2": "Line",
		"s3": "QQ",
		"s4": "WhatsApp",
		"s5": "Wechat"
    }
}
    import { mapMutations, mapGetters } from 'vuex'
    import commonMixins from '@/mixins/common_mixins.js'
    import langsMixins from '@/mixins/lang_mixins.js'
	import { getContact } from '@/api/user.js'
	export default {
		name: 'Offline_service',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				result: {
					qq: '',
					wahtApp: '',
					line: '',
					wx: ''
				}
			}
		},
		computed: {
			getValue(){
				return (lang) => {
					return langs[this.getGlobalLang][lang]
				}
			}
		},
		methods: {
			async getContactHandler(){
				const res = await getContact()
				this.result = res.data
			}
		},
		onLoad() {
			this.setTitle(langs[this.getGlobalLang].s1)
			this.getContactHandler()
		}
	}
</script>

<style scoped>
	.pages{
		background: url(../../static/images/bg.jpg);
		background-size: cover;
		height: 100%
	}
	.slogan{
		font-size: 36upx;
		position: absolute;
		left: 20upx;
		top: 30upx;
		color: #fff;
	}
	.service_list{
		padding-left: 120upx;
		padding-top: 80%;
	}
	.service_list .labels{
		position: relative;
		border-bottom: 1px solid rgba(0,0,0,.08);
		display: flex;
	}
	.service_list .labels .icon{
		width: 80upx;
		height: 80upx;
		position: absolute;
		left: -100upx;
		top: 30upx;
	}
	.service_list .labels .name{
		line-height: 120upx;
		font-size: 32upx;
		width: 50%;
	}
	.service_list .labels .value{
		width: 50%;
		line-height: 120upx;
		font-size: 32upx;
		color: #999;
		text-align: right;
		padding-right: 40upx;
	}
</style>
