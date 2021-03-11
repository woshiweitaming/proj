<template>
    <div class="record_wrapper_class">
        <div class="record_content">
            <!--查询-->
            <div class="query_class">
                <div class="query_data_class">
                    <div class="query_items">
                        <div class="query_label" >
                            <span>用户名</span>
                            <el-input clearable type="text" class="input_bar" v-model="params.uname" size="mini"></el-input>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>用户ID</span>
                            <el-input clearable type="text" class="input_bar" v-model="params.uid" size="mini"></el-input>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>开始时间</span>
                            <el-date-picker
                                clearable
                                class="input_date_bar"
                                size="mini"
                                v-model="params.start_time"
                                type="date"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd"
                                placeholder="开始时间">
                        </el-date-picker>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>结束时间</span>
                            <el-date-picker
                                clearable
                                class="input_date_bar"
                                size="mini"
                                v-model="params.end_time"
                                type="date"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd"
                                placeholder="结束时间">
                        </el-date-picker>
                        </div>
                    </div>
                    <div class="query_items">
                        <el-button type="primary" @click="search" size="mini">查询</el-button>
                    </div>
                </div>
            </div>
            <!--表格-->
            <div class="table_class">
                <div class="table_data_class">
                    <el-table
                        :data="tableData"
                        border
                        @sort-change="sortChange"
                    >
                        <el-table-column
                            prop="aliasUid"
                            label="用户ID"
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
                            prop="ip"
                            label="IP"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="adds"
                            label="IP归宿地"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="ctime"
                            label="操作时间"
                            sortable
                            show-overflow-tooltip
                        >
                           <template slot-scope="scope">
                               <span>{{toDate(scope.row.ctime)}}</span>
                           </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
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
import { mapMutations } from 'vuex'
import { rechargeStatus } from '@/datas/status_datas'
import { getLoginLog } from '@/api/admins'
import appConfig from '@/config/appConfig'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
export default {
    name: 'PayLogList',
    mixins: [parentSelectMixins, commonMixins, recordMixins, paginationMixins],
    data(){
        return {
            params: {
                uname: '',
                start_time: '',
                end_time: '',
                pageNumber: 1,
                uid: '',
                pageSize: 50
            },
            total: 0,
            //表格
            tableData: [],
            //弹窗
            opt: {},
            domain: appConfig.domain,
            level: ''
        }
    },
    methods: {
        /**
         * 查询
         */
        async search(){
            const params = JSON.parse(JSON.stringify(this.params))
            params.start_time = this.toStartDate(this.params.start_time)
            params.end_time = this.toEndDate(this.params.end_time)
            const res = await getLoginLog(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
        },
        //编辑
        async edit(data){
            this.opt = data
            this.openDrawer()
        },
        toStatus(status){

        },
        toDate(ts){
            return new Date(parseInt(ts) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');  
        }
    },
    created(){
        this.level = this.$storage.getLocalData('level')
        this.setTimeDate()
        this.search()
    },
}
</script>
<style lang="stylus" scoped>
</style>