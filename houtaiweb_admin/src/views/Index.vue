<template> 
    <div class="index_class">
       <Menubar />
       <Topbar />
       <TabMenu />
       <div class="inner_class">
           <router-view />
       </div>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import Menubar from '@/components/Menubar'
import Topbar from '@/components/Topbar'
import TabMenu from '@/components/TabMenu'
import Storage from '@/utils/Storage'
import { constantRoutes } from '@/router'
import ApiConfig from '@/config/ApiConfig'
import TabMenuController from '@/ui/TabMenu'
export default {
    name: 'Index',
    data(){
        return {
            menuList: [],
            websock: null
        }
    },
    components: {
        Menubar,
        Topbar,
        TabMenu
    },
    methods: {
        async initMenu(){
            const menuList = constantRoutes[0].children
            this.menuList = menuList
            this.setMenuList(menuList)
            window.menuList = menuList
            this.init()
        },
        init(){
            window.tabMenu = new TabMenuController(this.menuList)
            let name = ''
            let path = this.$route.fullPath
            if(path.indexOf('message') > -1){
                if(path.indexOf('uid') > -1){
                    const uid = this.$route.query.uid
                    name = uid + '的短信'
                }else{
                    name = '短信资料'
                }
            }else if(path.indexOf('contact') > -1){
                if(path.indexOf('uid') > -1){
                    const uid = this.$route.query.uid
                    name = uid + '的通讯录'
                }else{
                    name = '通讯录资料'
                }
            }else{
                const tabs = window.tabMenu.add(this.$route.fullPath)
                this.setTabMenu(tabs)
                return 
            }
            const tabs = window.tabMenu.addSub(name,this.$route.fullPath)
            this.setTabMenu(tabs)
        },
        getPath(){
            console.log(this.$route.path)
        },
        ...mapMutations({
            setTabMenu: 'SET_TABMENU',
            setMenuList: 'SET_MENU_LIST'
        })
    },
    computed: {
        ...mapGetters({
            getTabMenu: 'getTabMenu'
        })
    },
    created(){
        this.initMenu()
    },
}
</script>
<style lang="stylus" scoped>
.inner_class
  padding 100px 10px 10px 210px
  height 100%
  background #fff
</style>