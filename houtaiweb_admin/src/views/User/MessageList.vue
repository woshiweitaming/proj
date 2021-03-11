<template>
     <div class="message_list_class">
         <div class="query_class">
            <div class="query_left">
                <div class="query_labels" v-for="(items, index) in queryData" :key="index">
                    <span>{{items.label}}</span>
                    <el-input v-if="items.type === 'text'" type="text" size="mini" v-model="items.value"></el-input>
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
                    prop="ctime"
                    label="接收时间"
                >
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="发送号码"
                >
                </el-table-column>
                <el-table-column
                    prop="content"
                    label="短信内容"
                >
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
import QueryUI from '@/ui/Query'
import Select from '@/ui/Select'
import Validate from '@/utils/Validate'
import Tips from '@/utils/Tips'
import Utils from '@/utils/Utils'
import { getSmsList } from '@/api/admins'
export default {
    name: 'MessageList',
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
        //获取管理员列表
        async getListHandler(){          
           const res = await getSmsList(this.params)
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

        }
    },
    created(){
        this.queryData = QueryUI.getMessageQuery()
        this.queryData.uid.value = this.$route.query.uid
        this.search()
    }
}
</script>