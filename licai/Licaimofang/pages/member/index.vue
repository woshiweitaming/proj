<template>
	<view class="member">
		<Circles :info="levelInfo" :levelList="levelList" />
		<Card :info="levelInfo" />
		<Table :levelList="levelList" />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Circles from '@/layouts/member/circle.vue'
	import Card from '@/layouts/member/card.vue'
	import Table from '@/layouts/member/table.vue'
	import { getLevel } from '@/apis/users.js'
	export default {
		name: 'Member',
		mixins: [langMixins],
		components: {
			Circles,
			Card,
			Table
		},
		data(){
			return {
				levelInfo: {},
				levelList: []
			}
		},
		methods: {
			async getLevelHandler(){
				const res = await getLevel()
				const info = res.data.info
				const level = res.data.level
				this.levelList = level
				//获取当前会员等级
				const curLevelId = info.level_id
				let nextData = {}
				//获取当前等级数据
				const curLevelInfo = level.filter((res, index) => {
					if(res.id == curLevelId){
						const nextIndex = index+1
						if(level[nextIndex]){
							const nextLevelName = level[nextIndex].name
							res.nextLevelName = nextLevelName
						}
						return res
					}
				})
				//合并会员等级数据
				const levelInfo = Object.assign(info, curLevelInfo[0])
				this.levelInfo = levelInfo
			}
		},
		onLoad() {
			this.getLevelHandler()
			uni.setNavigationBarTitle({
				title: this.getLang('member_p1')
			})
		}
	}
</script>

<style scoped>
	page{
		height: 100%;
		background: #111322;
	}
	.member{
		height: 100%;
		background: #111322;
	}
</style>
