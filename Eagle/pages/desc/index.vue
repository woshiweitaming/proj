<template>
	<view class="desc_class">
		<rich-text :nodes="content"></rich-text>
	   <!-- <view v-if="getGlobalLang === 'cn'">
		   <text class="p">AotaiEX交易平台即将开放ZDE充值、提现、开放ZDE/USDT交易。</text>
		   <text class="p t">币介绍：</text>
		   <text class="p">代币名称ToKen 英文缩写ZDE 发行量79000000,流通量5000000。</text>
		   <text class="p t">项目介绍：</text>
		   <text class="p">ZDE团队将打造完整的一站式区块链数字资产平台，主要包含区块链数字资产交易平台、区块链数字资产钱包等。ZDE是基于以太ERC20标准合约代码编写，其代币ZDE作为数字资产平台的平台币流通。ZDE以流量发展、代币价值为重点，扩大社区参与、空投文化为共识，使ZDE具有强大的社区流量及流通价值。</text>
		   <text class="p t">风险提示：</text>
		   <text class="p">数字资产是创新的投资产品，价格波动大，请您理性判断自己的投资能力，谨慎做出投资决策。</text>
		   <text class="p">感谢您对AotaiEX 的支持，AotaiEX团队期待您宝贵的意见</text>
		   <text class="p">AotaiEX团队解释权归AotaiEX团队所有</text>
	   </view>
	   <view v-else>
	   		<text class="p">AotaiEX trading platform will open ZDE deposit, withdrawal, ZDE / USDT trading soon.</text>
	   		<text class="p">Coin Introduction: ToKen (ZDE) with the circulation 79000000, liquidity 5000000.</text>
	   		<text class="p">Project Introduction: The ZDE team will build a complete one-stop blockchain digital asset platform, mainly including blockchain digital asset transactions, blockchain digital asset wallets.</text>
	   		<text class="p">ZDE is written based on the Ethreum ERC20 standard contract code, and its token ZDE is circulated as a flat coin for digital assets. ZDE focuses on traffic development and token value, expands community participation, and airdrop culture as a consensus, making ZDE have a strong circulation value.</text>
	   		<text class="p">Risk Warning: Digital asset is an innovative investment products, prices fluctuate greatly, please judge your investment ability rationally, and make investment decisions carefully.</text>
	   		<text class="p">Thank you for your support to AotaiEX, the AotaiEX team looks forward to your valuable opinions    </text>
	   </view> -->
	</view>
</template>

<script>
	/**
	 * 详情
	 */
	import appConfig from '@/config/appConfig.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getNNoticeDetails } from '@/api/public.js'
	export default {
		name: 'DescProduct',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				id: '',
				title: '',
				content: ''
			}
		},
		methods: {
			async getNoticeDetailsHandler(){
				const res = await getNNoticeDetails({id: this.id})
				this.content = res.data.content
			}
		},
		onLoad(opt) {
			this.id = opt.id
			this.title = opt.title
		},
		onShow() {
			this.setTitle(this.title)
			this.getNoticeDetailsHandler()
		}
	}
</script>
<style scoped>
	.desc_class{
		padding: 20upx 40upx;
		font-size: 28upx;
		color: #aaa;
	}
	.desc_class .p{
		display: block;
		margin: 20upx 0;
	}
	.desc_class .t{
		font-weight: bold;
	}
</style>
