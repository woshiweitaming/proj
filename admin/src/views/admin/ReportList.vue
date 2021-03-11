<template>
    <div class="record_wrapper_class">
        <div class="record_content">
            <!--查询-->
            <div class="query_class">
                <div class="query_data_class">
                    <!-- <div class="query_items">
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
                    </div> -->
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
                                value-format="yyyy-MM-dd"
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
                <div class="level_list">
                    <span class="labels" v-for="(items, index) in userList" :key="index">
                        <span v-if="index == userList.length -1">当前用户：</span>
                        <b @click="queryData(index, items.uid, items.type)">{{items.uname}}</b>
                    </span>
                </div>
                <div class="table_class">
                    <el-table
                        :data="tableData"
                        border
                        @sort-change="sortChange"
                        :show-summary="true"
                    >
                        <el-table-column
                            prop="ncikname"
                            label="用户名"
                            sortable
                        >
                        </el-table-column>
                        <el-table-column
                            prop="ck"
                            label="存款"
                            sortable
                        >
                            <template slot-scope="scope">
                                <span>{{scope.row.ck == null || scope.row.ck == ''  ? 0 : scope.row.ck }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="tk"
                            label="提款"
                            sortable
                        >
                            <template slot-scope="scope">
                                <span>{{scope.row.tk == null || scope.row.tk == ''  ? 0 : scope.row.tk }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="tz"
                            label="调整金额"
                            sortable
                        >
                            <template slot-scope="scope">
                                <span>{{scope.row.tz == null || scope.row.tz == ''  ? 0 : scope.row.tz }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="ct"
                            label="存提差"
                            sortable
                        >
                            <template slot-scope="scope">
                                <span>{{scope.row.ct == null || scope.row.ct == ''  ? 0 : scope.row.ct}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="yk"
                            label="盈亏（存款-提款-调整金额）"
                            sortable
                        >
                            <template slot-scope="scope">
                             <span :class="getClass(scope.row.yk)">{{scope.row.yk == null || scope.row.yk == ''  ? 0 : scope.row.yk }}</span>
                           </template>
                        </el-table-column>
                        <el-table-column
                            label="操作"
                            width="80"
                            v-if="params.type != 4"
                        >
                           <template slot-scope="scope">
                               <el-button size="mini" v-if="curLevel != 4" @click="queryNext(scope.row)" type="primary">下级</el-button>
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
                type: 0,
                parentID: 0,
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
                },
                {
                    name: '会员',
                    value: 0
                }
            ],
            curLevel: 0,
            userList: [],
            uid: ''
        }
    },
    computed: {
        getClass(){
            return yk => {
                if(yk > 0) return 'green'
                if(yk == 0) return ''
                if(yk < 0) return 'red'
            }
        }
    },
    methods: {
        /**
         * 查询
         */
        async search(){
            const params = JSON.parse(JSON.stringify(this.params))
            params.start_time = this.toStartDate(params.start_time)
            params.end_time = this.toEndDate(params.end_time)
            params.parentID = this.curLevel == 0 ? (this.level == 0 ? 0 : this.uid) : this.uid
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
        },
        queryNext(data){
           const uname = data.ncikname
           this.uid = data.uid
           this.curLevel++
           this.params.type = Number(data.level) + 1
           this.userList.push({uname: uname, uid: this.uid, type: this.params.type})
           this.search()
        },
        queryData(index, uid, type){
            this.userList = this.userList.slice(0, index+1)
            this.curLevel = index
            this.params.type = type
            this.uid = uid 
            this.search()
        },
        geKS(ck, tk){
            const _ck = ck == '' || ck == null ? 0 : ck
            const _tk = tk == '' || tk == null ? 0 : tk
            return ck - tk
        }
    },
    created(){
        this.level = this.$storage.getLocalData('level')
        this.uid = this.$storage.getLocalData('uid')
        const date = new Date()
        const currStartDate = formatDate(date)
        const currEndDate = formatDate(date)
        this.params.start_time = currStartDate
        this.params.end_time = currEndDate
        this.params.type = Number(this.level) + 1
        this.search()
        const user = {uname: this.$storage.getLocalData('uname'), uid: this.uid, type: this.params.type}
        this.userList.push(user)
    },
}
</script>
<style lang="stylus" scoped>
.level_list
    display inline-block
    line-height 40px
    font-size 13px
    color #666
.level_list .labels b
    cursor pointer
    color blue
.level_list .labels b::after
    content ' -> ' 
    color #666
.level_list .labels:last-child b::after
    content ''
</style>