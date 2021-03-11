<template>
   <div class="tab_menu_class">
      <el-tabs v-model="current" closable type="card" @tab-click="tabClick" @tab-remove="removeTab">
         <el-tab-pane
            :key="item.path"
            v-for="item in dataList"
            :label="item.name"
            :name="item.path"
         >
         </el-tab-pane>
     </el-tabs>
   </div>
</template>
<script>
import routeMenuDatas from '@/datas/route_menu_datas'
export default {
    name: 'TabMenu',
    data(){
       return {
          current: '',
          dataList: [],
       }
    },
    methods: {
       pushMenu(){
          const currentRoute = this.$route
          this.current = currentRoute.path
          const isExist = this.dataList.findIndex(res => res.path === this.current)
          if(isExist > -1){
             this.dataList.splice(isExist, 1, currentRoute)
          }else{
             this.dataList.push(currentRoute)
          }
       },
       tabClick(data){
          const path = data.$options.propsData.name
          this.$router.push({path: path})
       },
       removeTab(targetName){
         if(this.dataList.length === 1){
            return
         }
         const tabs = this.dataList
         const _index = tabs.findIndex(res => res.path == targetName) 
         tabs.splice(_index, 1)
         this.current = _index === 0 ? this.dataList[0].path : this.dataList[_index-1].path
         this.dataList = tabs
         this.$router.push({path: this.current})
       }
    },
    created(){
       this.pushMenu()
    },
    watch: {
       $route(to,from){
           this.pushMenu()
       }
    }
}
</script>
<style lang="stylus" scoped>
.tab_menu_class
   height 40px
   margin-bottom 10px
   width 100%
   position absolute
   top 10px
   left 0
   padding 0 10px
   box-sizing border-box
</style>
<style lang="stylus">
.el-tabs__item
   height 30px
   line-height 30px
   font-size 12px
   padding-left 10px !important
   padding-right 10px !important
</style>