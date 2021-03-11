<template>
	<view :class="['home_class', createOSClass]">
		<view :class="['topbar', createOSClass]">
			<image src="../../static/images/logo.png" class="logo"></image>
			<Kefu />
		</view>
		<!--轮播图-->
		<Swipers :status="status"/>
		<!--币种-->
		<Currency />
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex'
	import appConfig from '@/config/appConfig.js'
	import Swipers from '@/layouts/home/Swiper.vue'
	import Currency from '@/layouts/home/Currency.vue'
	import Kefu from '@/layouts/kefu/kefu.vue'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import { getProduct } from '@/api/public.js'
	export default {
		name: 'Home',
		mixins: [commonMixins, websocketMixins, userMixins, langsMixins, currencyMixins],
		components: {
			Swipers,
			Currency,
			Kefu
		},
		data(){
			return {
				status: false
			}
		},
		onShow() {
			//uni.closeSocket()
			// this.getUserLeftmoneyHandler()
			this.status = !this.status
			this.setTitle(appConfig.appName)
			this.show = true
		},
	}
</script>

<style scoped>
	page{
		background: #f9f9f9;
	}
	.topbar{
		text-align: center;
	}
	.home_class.h5{
		padding-top: 89upx;
	}
	.home_class.app{
		padding-top: calc(var(--status-bar-height) + 88upx);
	}
	.logo{
		width: 230upx;
		height: 80upx;
		position: fixed;
		top: var(--status-bar-height);
		left: 50%;
		margin-left: -125upx;
	}
	.home_class{
		height: 100%;
		box-sizing: border-box;
		background: #f9f9f9;
		overflow: auto;
	}
</style>
