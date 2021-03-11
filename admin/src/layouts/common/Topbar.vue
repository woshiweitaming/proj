<template>
    <div class="topbar_class">
        <span>欢迎回来，{{uname}}</span>
        <el-dropdown class="dropdown">
           <i class="el-icon-setting"></i>
           <el-dropdown-menu slot="dropdown">
             <el-dropdown-item v-for="(items, index) in dropdownList" :key="index">
                 <span @click="toHandler(items.type)">{{items.name}}</span>
             </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-drawer
            :visible="getUpdpwdDrawerStatus"
            :with-header="false"
            :before-close="handleClose"
            :destroyOnClose="true"
            size="350px"
            :modal-append-to-body="false"
            :modal="false"
        >
            <Updpwd />
        </el-drawer>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import Drawer from '@/components/Drawer/Drawer'
import Updpwd from '@/layouts/admin/pwd/Updpwd'
import { loginOut } from '@/api/admins'
export default {
    name: 'Topbar',
    data(){
        return {
            dropdownList: [
                {
                    name: '修改密码',
                    path: '',
                    type: 0
                },
                {
                    name: '退出账户',
                    path: '',
                    type: 1
                }
            ],
            uname: '',
            nickname: '',
        }
    },
    components: {
        Drawer,
        Updpwd
    },
    methods: {
        toHandler(type){
            switch (type) {
                case 0 :
                   this.openDrawer()
                   break;
                case 1 :
                   this.logoutHandler()
                   break;
            }
        },
        //打开抽屉
        openDrawer(){
            this.setUpdpwdDrawerStatus(true)
        },
        handleClose(){
            this.setUpdpwdDrawerStatus(false)
        },
        async logoutHandler(){
            const res = await loginOut()
            this.$storage.clearLocalData()
            this.$router.push({path: '/login'})
        },
        ...mapMutations({
            setUpdpwdDrawerStatus: 'SET_UPDPWD_DRAWER_STATUS'
        })
    },
    computed: {
        ...mapGetters({
            getUpdpwdDrawerStatus: 'getUpdpwdDrawerStatus'
        })
    },
    created(){
        this.uname = this.$storage.getLocalData('uname')
    }
}
</script>
<style lang="stylus" scoped>
.topbar_class
   line-height 40px
   font-size 14px
.dropdown
    margin-left 10px
</style>