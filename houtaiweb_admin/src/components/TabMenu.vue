<template>
    <div class="tab_menu_class">
        <el-tabs v-model="editableTabsValue" @tab-click="select" type="card" editable closable @tab-remove="removeTab" size="mini">
            <el-tab-pane
                v-for="(items, index) in getTabMenu"
                :key="getKey(index)"
                :label="items.name"
                :name="items.path"
            >
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'TabMenu',
    data(){
        return {
            editableTabsValue: ''
        }
    },
    methods: {
        select(obj){
            const path = obj.name
            const tabs = window.tabMenu.add(path)
            this.editableTabsValue = path
            this.setTabMenu(tabs)
            this.$router.push({path: path})
        },
        removeTab(path){
            const tabs = window.tabMenu.remove(path)
            this.setTabMenu(tabs.data)
            this.editableTabsValue = tabs.data[tabs.curPathIndex].path
            this.$router.push({path: tabs.data[tabs.curPathIndex].path})
        },
        getPath(obj){
            this.editableTabsValue = obj.fullPath
        },
        ...mapMutations({
            setTabMenu: 'SET_TABMENU'
        })
    },
    computed: {
        getKey(){
            return index => {
                return index + Math.random()
            }
        },
        ...mapGetters({
            getTabMenu: 'getTabMenu'
        })
    },
    created(){
        this.editableTabsValue = this.$route.fullPath
    },
    watch: {
        '$route':'getPath'
    }
}
</script>
<style lang="stylus" scoped>
.tab_menu_class
  width 100%
  position fixed
  top 41px
  left 210px
  z-index: 10
  background #fff
  padding-top 10px
</style>