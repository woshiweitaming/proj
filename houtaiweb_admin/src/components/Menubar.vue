<template>
    <div class="menu_bar_class">
        <h3>后台管理</h3>
        <div class="menu_bar_main">
            <el-menu
                router
                unique-opened
                @select="select"
                :default-active="$route.path"
                class="el-menu-vertical-demo"
            >
                <el-submenu :index="items.path" v-for="(items, index) in getMenuList" :key="index">
                    <template slot="title">
                       <span>{{items.name}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-show="!el.meta.isHidden" :index="el.path" v-for="(el, key) in items.children" :key="key">{{el.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { constantRoutes } from '@/router'
export default {
    name: 'Menubar',
    data(){
        return {
            menuBar: []
        }
    },
    methods:{
        select(index, indexPath){
            const tabs = window.tabMenu.add(indexPath[1])
            this.setTabMenu(tabs)
        },
        ...mapMutations({
            setTabMenu: 'SET_TABMENU'
        })
    },
    computed: {
        ...mapGetters({
            getTabMenu: 'getTabMenu',
            getMenuList: 'getMenuList'
        })
    },
}
</script>
<style lang="stylus" scoped>
.menu_bar_class
  width 200px
  height 100%
  position fixed
  left 0
  top 0
  z-index 100
  background-color #2e3235
.menu_bar_class h3
  text-align center
  color #fff
.menu_bar_class img
  width 150px
  margin-top 20px
  margin-left 20px
.menu_bar_main
.el-menu
  height 100%
.menu_bar_main img
  width 60%
  margin-top 20px
  margin-left 5px
</style>