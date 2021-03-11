<template>
    <div class="record_wrapper_class">
        <div class="record_content">
            <!--查询-->
            <div class="query_class">
                <div class="query_data_class">
                    <div class="query_items">
                        <div class="query_label" >
                            <span>状态</span>
                            <el-select clearable class="input_bar" size="mini" v-model="params.state" placeholder="请选择">
                                <el-option
                                    v-for="(items, index) in subscribeStatus"
                                    :key="index"
                                    :label="items.name"
                                    :value="items.value"
                                >
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>用户名</span>
                            <el-input type="text" class="input_bar" size="mini" clearable v-model="params.uname" placeholder="用户名"></el-input>
                        </div>
                    </div>
                    <div class="query_items">
                        <el-button type="primary" @click="search" size="mini">查询</el-button>
                    </div>
                </div>
            </div>
            <!--表格-->
            <div class="table_class">
                <el-table
                    :data="tableData"
                    border
                    @sort-change="sortChange"
                >
                    <el-table-column
                        prop="name"
                        label="名称"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="uname"
                        label="用户名"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        label="发行价"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        label="数量"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="ctime"
                        label="时间"
                        sortable
                        show-overflow-tooltip
                    >
                        <template slot-scope="scope">
                            <span>{{toDate(scope.row.ctime)}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="状态"
                        sortable
                        show-overflow-tooltip
                        width="80px"
                    >
                        <template slot-scope="scope">
                            <span>{{toStatus(scope.row.state)}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        width="100px"
                    >
                        <template slot-scope="scope">
                            <el-button class="table_btn table_btn1" type="success" plain size="mini" @click="dist(scope.row.id)">分配</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <el-dialog
                title="分配"
                :visible="status"
                width="450px"
                :before-close="close"
            >
               <el-form ref="form" label-position="right" label-width="100px">
                    <el-form-item label="数量">
                        <el-input size="mini" class="form_label" v-model="num" placeholder="请输入分配数量"></el-input>
                    </el-form-item>
               </el-form>
             <span slot="footer" class="dialog-footer">
                <el-button class="dialog_btn" size="small"  @click="close">取 消</el-button>
                <el-button class="dialog_btn"  size="small" type="primary" @click="distHandler">确 定</el-button>
            </span>
        </el-dialog>
        <div class="pagination">
            <el-pagination
                :small="true"
                background
                @current-change="currentChangeHandler"
                @size-change="handleSizeChange"
                :current-page="params.pageNumber"
                :page-sizes="[50, 100, 200, 300, 400]"
                layout="total, sizes, prev, pager, next"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { subscribeStatus } from '@/datas/status_datas'
import { getSubscribeList, distribution } from '@/api/admins'
import appConfig from '@/config/appConfig'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import tips from '@/utils/tips'
export default {
    name: 'SubscribeList',
    mixins: [commonMixins, recordMixins, paginationMixins],
    data(){
        return {
            params: {
                state: '',
                uname: '',
                pageNumber: 1,
                pageSize: 50
            },
            total: 0,
            tableData: [],
            subscribeStatus: subscribeStatus,
            status: false,
            id: '',
            num: ''
        }
    },
    methods: {
        /**
         * 查询
         */
        async search(){
            const params = JSON.parse(JSON.stringify(this.params))
            const res = await getSubscribeList(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
        },
        toStatus(status){
            const data = subscribeStatus.filter(res => res.value == status)
            return typeof data[0] === 'undefined' ? '-' : data[0].name
        },
        toDate(ts){
            var date = new Date(parseFloat(ts) * 1000);
            var YY = date.getFullYear() + '-';
            var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
            var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            return YY + MM + DD +" "+hh + mm + ss; 
        },
        async dist(id){
            this.id = id
            this.status = true
        },
        async distHandler(){
            const res = await distribution({id: this.id, number: this.num})
            if(res.rpCode === '000000'){
                tips.successTips('成功')
                this.close()
                this.search()
            }else{
                tips.errorTips(res.rpMsg) 
            }
        },
        close(){
            this.status = false
        }
    },
    created(){
        this.search()
    },
}
</script>
<style lang="stylus" scoped>
</style>