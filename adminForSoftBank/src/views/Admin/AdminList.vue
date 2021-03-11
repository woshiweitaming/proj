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
                            <span>姓名</span>
                            <el-input clearable type="text" class="input_bar" v-model="params.ncikname" size="mini"></el-input>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>账户类型</span>
                            <el-select clearable @change="getP2" class="input_bar" size="mini" v-model="params.type" placeholder="请选择">
                                <el-option
                                    v-for="(items, index) in typeList"
                                    :key="index"
                                    :label="items.name"
                                    :value="items.value"
                                >
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="query_items" >
                        <div class="query_label" >
                            <span>运营中心</span>
                            <el-select clearable  @change="getP2" class="input_bar" size="mini" v-model="params.p1" placeholder="请选择">
                                <el-option
                                    v-for="(items, index) in p1List"
                                    :key="index"
                                    :label="items.ncikname"
                                    :value="items.uid"
                                >
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>代理线</span>
                            <el-select clearable @change="getP3" class="input_bar" size="mini" v-model="params.p2" placeholder="请选择">
                                <el-option
                                    v-for="(items, index) in p2List"
                                    :key="index"
                                    :label="items.ncikname"
                                    :value="items.uid"
                                >
                                </el-option>
                            </el-select>
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
                            prop="uid"
                            label="机构码"
                            sortable
                            width="120"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="uname"
                            label="用户名"
                            sortable
                        >
                        </el-table-column>
                        <el-table-column
                            prop="ncikname"
                            label="姓名"
                            sortable
                        >
                        </el-table-column>
                        <el-table-column
                            prop="uname2"
                            label="代理线"
                            sortable
                        >
                        </el-table-column>
                        <el-table-column
                            prop="uname3"
                            label="运营中心"
                            sortable
                        >
                        </el-table-column>
                        <el-table-column
                            prop="state"
                            label="账户状态"
                            sortable
                            width="120"
                        >
                            <template slot-scope="scope">
                                <span>{{toType(scope.row.state)}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="type"
                            label="管理员类型"
                            sortable
                            width="120"
                        >
                            <template slot-scope="scope">
                                <span>{{toAdminType(scope.row.type)}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="ltime"
                            label="最后登录时间"
                            sortable
                        >
                        </el-table-column>
                        <el-table-column
                            label="操作"
                            width="90"
                        >
                            <template slot-scope="scope">
                                <el-button class="input" type="danger" size="small" @click="changeInfo(scope.row)">修改</el-button>
                            </template>   
                        </el-table-column>
                    </el-table>
                    <Drawer size="350px">
                        <ChangeAdminInfo @callback="callback" :opt="opt" />
                    </Drawer>
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
import { getManagerList } from '@/api/admins'
import appConfig from '@/config/appConfig'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import Drawer from '@/components/Drawer/Drawer'
import ChangeAdminInfo from '@/layouts/admin/admin_list/ChangeAdminInfo'
export default {
    name: 'AdminList',
    mixins: [parentSelectMixins, commonMixins, recordMixins, paginationMixins],
    components: {
        Drawer,
        ChangeAdminInfo
    },
    data(){
        return {
            params: {
                type: '',
                uname: '',
                ncikname: '',
                pageNumber: 1,
                pageSize: 50
            },
            total: 0,
            //表格
            tableData: [],
            typeList: adminStatus,
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
            const res = await getManagerList(this.params)
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
        }
    },
    created(){
        this.level = this.$storage.getLocalData('level')
        this.getP1()
        this.search()
    },
}
</script>
<style lang="stylus" scoped>
</style>