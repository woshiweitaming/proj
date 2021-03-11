<template>
    <span class="breadcrumb">
        <a @click="toPage(curItem.path)" :class="['label', curItem.path == $route.path ? 'on' : '']" href="javascript:;" v-for="(curItem, index) in tabList" :key="index">{{curItem.meta.title}}</a>
    </span>
</template>
<script>
import routesConfig from '@/config/routes_config'
export default {
    name: 'Tab',
    data(){
        return {
            tabList: [],
        }
    },
    methods: {
        init(){
            const that = this
            this.tabList.push(this.$route)
        },
        tabAdd(to){
            const index = this.tabList.findIndex(res => res.path === to.path)
            if(index > -1){
                return this.tabList.splice(index, 1, to)
            }
            this.tabList.push(to)
        },
        toPage(path){
            this.$router.push({path: path})
        }
    },
    computed: {
        getCurRoute(){
            const curPathArr = this.$route.path.split('/')
            const curPath = curPathArr[curPathArr.length - 1]
            return curPath
        }
    },
    created(){
        this.init()
    },
    watch: {
        $route(to, from){
            this.tabAdd(to)
        }
    }
}
</script>
<style lang="stylus" scoped>
.breadcrumb
    padding 0 10px
    background #f9f9f9
    display block
.full_height
    height 100%
.label
    color #999
    font-size 13px
    line-height 40px
    display inline-block
.label.on
    color #000
.label::after
    content '/'
    padding 0 5px
.label:last-child::after
    content ''
</style>