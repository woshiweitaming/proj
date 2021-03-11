<template>
    <div class="layui-layout-body">
        <div class="layui-layout layui-layout-admin">
            <Header />
            <LeftNavbar />
            <div class="layui-body main">
                <Tab />
                <div class="content">
                    <router-view class="layui-anim layui-anim-up" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LeftNavbar from '@/components/common/left_navbar'
import Header from '@/components/common/header'
import Tab from '@/components/common/tab'
export default {
    name: 'Index',
    components: {
        LeftNavbar,
        Header,
        Tab
    },
    methods: {
        init(){
            layui.use('element', function(){
                var element = layui.element;
            });
        }
    },
    created(){
        this.init()
    }
}
</script>
<style lang="stylus" scoped>
.main
    bottom 0 !important

.content
    height calc(100% - 20px)
    box-sizing border-box
    padding 10px 10px 0 10px
</style>