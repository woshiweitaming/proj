<template>
    <div class="record_wrapper_class">
        <div class="record_content">
            <!--查询-->
            <div class="query_class">
                <div class="query_data_class">
                    <div class="query_items">
                        <div class="query_label" >
                            <span>代理名</span>
                            <el-input clearable type="text" class="input_bar" v-model="params.uname" size="mini"></el-input>
                        </div>
                    </div>
                    <div class="query_items" >
                        <div class="query_label" >
                            <span>类型</span>
                            <el-radio border :label="items.value" size="mini" v-model="params.level" v-for="(items, index) in levelList" :key="index">{{items.name}}</el-radio>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>开始时间</span>
                            <el-date-picker
                                clearable
                                @change="changeStart"
                                class="input_date_bar"
                                size="mini"
                                v-model="params.start_time"
                                type="date"
                                format="yyyy-MM-dd"
                                value-format="timestamp"
                                placeholder="开始时间">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>结束时间</span>
                            <el-date-picker
                                @change="changeEnd"
                                clearable
                                class="input_date_bar"
                                size="mini"
                                v-model="params.end_time"
                                type="date"
                                format="yyyy-MM-dd"
                                value-format="timestamp"
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
                <div class="table_class">
                    <el-table
                        :data="tableData"
                        border
                        @sort-change="sortChange"
                    >
                        <el-table-column
                            prop="ncikname"
                            label="姓名"
                            sortable
                        >
                        </el-table-column>
                        <el-table-column
                            prop="ck"
                            label="存款"
                            sortable
                        >
                        </el-table-column>
                        <el-table-column
                            prop="tk"
                            label="提款"
                            sortable
                        >
                        </el-table-column>
                        <el-table-column
                            prop="tz"
                            label="金额调整"
                            sortable
                        >
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
import { getAccountState, adminStatus } from '@/datas/status_datas'
import { getReportList } from '@/api/admins'
import appConfig from '@/config/appConfig'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import Drawer from '@/components/Drawer/Drawer'
import ChangeAdminInfo from '@/layouts/admin/admin_list/ChangeAdminInfo'
import { formatDate } from '@/utils/utils'
export default {
    name: 'AdminList',
    mixins: [commonMixins, recordMixins, paginationMixins],
    components: {
        Drawer,
        ChangeAdminInfo
    },
    data(){
        return {
            params: {
                level: 1,
                uname: '',
                pageNumber: 1,
                pageSize: 50,
                start_time: '',
                end_time: ''
            },
            total: 0,
            //表格
            tableData: [],
            typeList: adminStatus,
            //弹窗
            opt: {},
            domain: appConfig.domain,
            levelList: [
                {
                    name: '运营中心',
                    value: 3
                },
                {
                    name: '代理线',
                    value: 2
                },
                {
                    name: '代理人',
                    value: 1
                }
            ]
        }
    },
    methods: {
        /**
         * 查询
         */
        async search(){
            const params = JSON.parse(JSON.stringify(this.params))
            params.start_time = params.start_time === '' || params.start_time == null ? '' : params.start_time / 1000
            params.end_time = params.end_time === '' || params.start_time == null ? '' : params.end_time / 1000
            const res = await getReportList(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
        },
        async changeInfo(data){
            this.opt = data
            this.openDrawer()
        },
        toType(status){
            const data = getAccountState.filter(res => res.value == status)
            return typeof data[0] === 'undefined' ? '-' : data[0].name
        },
        toAdminType(status){
            const data = adminStatus.filter(res => res.value == status)
            return data.length === 0 ? '-' : data[0].name
        },
        toDate(ts){
            return new Date(parseInt(ts) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');  
        },
        _formatDate: function (value) {
            if (value == null) {
                return '';
            } else {
                let date = new Date(value);
                let y = date.getFullYear();// 年
                let MM = date.getMonth() + 1;// 月
                MM = MM < 10 ? ('0' + MM) : MM;
                let d = date.getDate();// 日
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + MM + '-' + d
            }
        },
        changeEnd(ts){
            this.params.end_time = ts
        },
        changeStart(ts){
            this.params.start_time = ts
        }
    },
    created(){
        this.level = this.$storage.getLocalData('level')
        const date = new Date()
        const currStartDate = new Date(formatDate(date)).getTime()
        const currEndDate = new Date(formatDate(date)).getTime()
        this.params.start_time = currStartDate
        this.params.end_time = currEndDate
        this.search()
    },
}
</script>
<style lang="stylus" scoped>
</style>