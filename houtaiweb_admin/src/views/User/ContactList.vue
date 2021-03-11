<template>
     <div class="contact_list_class">
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
                <el-button size="mini" type="danger" @click="exportTextHandler">导出</el-button> 
                <el-button size="mini" type="warning" class="btn" @click="send">一键发送短信视频</el-button> 
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
                    prop="phone"
                    label="电话"
                >
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
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
import { saveAs } from 'file-saver';
import * as moment from 'moment';
import QueryUI from '@/ui/Query'
import Select from '@/ui/Select'
import Validate from '@/utils/Validate'
import Tips from '@/utils/Tips'
import Utils from '@/utils/Utils'
import { getMailList, exportText } from '@/api/admins'
import ApiConfig from '@/config/ApiConfig'
export default {
    name: 'ContactList',
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
        async exportTextHandler(){
            for(let key in this.queryData){
                this.params[key] = Utils.trim(this.queryData[key].value)
            }
            const params = {
                pageNumber: 1,
                pageSize: 50,
                uid: this.params.uid === undefined ? '' : this.params.uid
            }
            const res = await exportText(params)
            // const url = ApiConfig.getApiDomain() + '/admin/exportText?pageNumber='+this.params.pageNumber+'&pageSize='+this.params.pageSize+'&ucode='+this.params.ucode+'&uid='+(this.params.uid === undefined ? '' : this.params.uid)
            const list = res.split('\n')
            const data = list.map(d => {
                const arr = d.split('!')
                const item = {
                    name: arr[0],
                    number: arr[1]
                }
                return item
            })
            this.exportRaw('通讯录'+moment(new Date()).format('YYYYMMDDHHmmss'),res)
        },
        fakeClick(obj) {
            var ev = document.createEvent("MouseEvents");
            ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            obj.dispatchEvent(ev);
        },
        exportRaw(name, data) {
            var urlObject = window.URL || window.webkitURL || window;
            var export_blob = new Blob([data]);
            var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
            save_link.href = urlObject.createObjectURL(export_blob);
            save_link.download = name;
            this.fakeClick(save_link);
        }, 
        export2Excel(res) {
           require.ensure([], () => {
               const { export_json_to_excel } = require('@/blob/Export2Excel');
               const tHeader =['名称', '号码'];
               const filterVal = ['name', 'number'];
               const list = res
               const data = this.formatJson(filterVal, list);
               export_json_to_excel(tHeader, data, '通讯录'+moment(new Date()).format('YYYYMMDDHHmmss'))
            })
 
        },
        formatJson(filterVal, jsonData) {
             return jsonData.map(v => filterVal.map(j => v[j]))
        },
        //获取管理员列表
        async getListHandler(){          
           const res = await getMailList(this.params)
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
        send(){

        }
    },
    created(){
        this.queryData = QueryUI.getContactQuery()
        this.queryData.uid.value = this.$route.query.uid
        this.search()
    }
}
</script>
<style lang="stylus" scoped>
.query_class .query_right .el-button.btn
    width 120px
</style>>