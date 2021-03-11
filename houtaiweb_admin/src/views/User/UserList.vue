<template>
     <div class="user_list_class">
         <div class="query_class">
            <div class="query_left">
                <div class="query_labels" v-for="(items, index) in queryData" :key="index">
                    <span>{{items.label}}</span>
                    <el-input v-if="items.type === 'text'" type="text" size="mini" v-model="items.value"></el-input>
                    <el-select
                        v-model="items.value"
                        v-if="items.type === 'select'"
                        size="mini"
                    >
                        <el-option
                            v-for="(el, key) in items.children"
                            :key="key"
                            :label="el.name"
                            :value="el.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="query_right">
                <el-button size="mini" type="primary" @click="search">查询</el-button> 
            </div>
        </div>
        <div class="tables">
            <el-table
                :data="tableData"
                border
                ref="multipleTable"
                @selection-change="handleSelectionChange"
            >
                <el-table-column
                    type="selection"
                    width="55"
                >
                </el-table-column>
                <el-table-column
                    prop="uid"
                    label="用户编号"
                >
                </el-table-column>
                <el-table-column
                    prop="ucode"
                    label="授权码"
                >
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="电话号码"
                >
                </el-table-column>
                <el-table-column
                    prop="position"
                    label="位置"
                >
                </el-table-column>
                <el-table-column
                    prop="ctime"
                    label="创建时间"
                >
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="300"
                >
                   <template slot-scope="scope">
                        <el-button class="btn" type="primary" size="mini" @click="toMessage(scope.row.uid)">短信</el-button>
                        <el-button class="btn" type="success" size="mini" @click="toContact(scope.row.uid)">通讯录</el-button>
                        <el-button class="btn" type="danger" size="mini" @click="delHandler(scope.row.uid)">删除</el-button>
                   </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination_class">
            <el-pagination
                background
                @current-change="currentChangeHandler"
                @size-change="handleSizeChange"
                :page-sizes="[50, 100, 200, 300, 400]"
                layout="total, sizes, prev, pager, next"
                :total="total">
            </el-pagination>
        </div>
     </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import QueryUI from '@/ui/Query'
import Select from '@/ui/Select'
import Validate from '@/utils/Validate'
import Tips from '@/utils/Tips'
import Utils from '@/utils/Utils'
import { getUserList, exportText, del } from '@/api/admins'
export default {
    name: 'ManagerList',
    data(){
        return {
            tableData: [],
            queryData: [],
            total: 0,
            params: {
                pageNumber: 1,
                pageSize: 50,
            } 
        }
    },
    methods: {
        search(){
            for(let key in this.queryData){
                this.params[key] = Utils.trim(this.queryData[key].value)
            }
            this.getListHandler()
        },
        async exports(){
            for(let key in this.queryData){
                this.params[key] = Utils.trim(this.queryData[key].value)
            }
            const res = await exportText(this.params)
            console.log(res)
        },
        //获取管理员列表
        async getListHandler(){          
           const res = await getUserList(this.params)
           if(Validate.checkRscode(res.rpCode)){
               this.tableData = res.data.list
               this.total = res.data.totalRow
           }else{
               Tips.errorTips(res.rpMsg)
           }
        },
        currentChangeHandler(val){
            this.params.pageNumber = val
            this.getListHandler()
        },
        handleSizeChange(val){
            this.params.pageSize = val
            this.getListHandler()
        },
        toType(val){
            if(val == 0) return ''
            const data = Select.getAdminType()
            return data.filter(res => res.value == val)[0].name
        },
        handleSelectionChange(){

        },
        toMessage(uid){
            const path = '/user/messageList?uid='+uid
            const name = uid+'的短信'
            const tabs = window.tabMenu.addSub(name, path)
            this.setTabMenu(tabs)
            this.$router.push({path: path})
        },
        toContact(uid){
            const path = '/user/contactList?uid='+uid
            const name = uid+'的通讯录'
            const tabs = window.tabMenu.addSub(name, path)
            this.setTabMenu(tabs)
            this.$router.push({path: path})
        },
        async delHandler(uid){
            const res = await del({uid: uid})
            if(res.rpCode === '000000'){
                Tips.successTips('成功')
                this.getListHandler()
            }else{
                Tips.errorTips(res.rpMsg)
            }
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
    created(){
        this.queryData = QueryUI.getUserQuery()
        this.search()
    }
}
</script>