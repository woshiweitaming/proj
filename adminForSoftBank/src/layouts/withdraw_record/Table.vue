<template>
    <div class="record_wrapper_class">
        <div class="record_content">
            <!--查询-->
            <div class="query_class">
                <div class="query_data_class">
                    <div class="query_items">
                        <div class="query_label" >
                            <span>充值状态</span>
                            <el-select class="input_bar" size="mini" v-model="params.status" placeholder="请选择">
                                <el-option
                                    v-for="(items, index) in rechargeStatusSelect"
                                    :key="index"
                                    :label="items.name"
                                    :value="items.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>用户名</span>
                            <el-input type="text" class="input_bar" v-model="params.uname" size="mini"></el-input>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>手机号</span>
                            <el-input type="text" class="input_bar" v-model="params.phone" size="mini"></el-input>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>邮箱</span>
                            <el-input type="text" class="input_bar" v-model="params.email" size="mini"></el-input>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>运营中心</span>
                            <el-select @change="getP2" class="input_bar" size="mini" v-model="params.p1" placeholder="请选择">
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
                            <el-select @change="getP3" class="input_bar" size="mini" v-model="params.p2" placeholder="请选择">
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
                        <div class="query_label" >
                            <span>代理人</span>
                            <el-select class="input_bar" size="mini" v-model="params.p3" placeholder="请选择">
                                <el-option
                                    v-for="(items, index) in p3List"
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
                            <span>开始时间</span>
                            <el-date-picker
                                class="input_date_bar"
                                size="mini"
                                v-model="params.start_time"
                                type="datetime"
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
                                class="input_date_bar"
                                size="mini"
                                v-model="params.end_time"
                                type="datetime"
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
                <div class="table_data_class">
                    <el-table
                        :data="tableData"
                        border
                        @sort-change="sortChange"
                    >
                        <el-table-column
                            prop="orderno"
                            label="订单编号"
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
                            prop="buname"
                            label="姓名"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="amount"
                            label="金额"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="bname"
                            label="充值渠道"
                            sortable
                            show-overflow-tooltip
                            width="120px"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="btime"
                            label="充值时间"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="operator"
                            label="审核人"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="logprice"
                            label="充值后余额"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="dollar"
                            label="实际到账"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="phone"
                            label="手机"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="imgurl"
                            label="凭证"
                            sortable
                            show-overflow-tooltip
                        >
                        <template slot-scope="scope">
                            <el-popover
                                placement="top-start"
                                title="凭证"
                                width="250"
                                trigger="click"
                                :ref="scope.$index"
                            >
                                <img width="250" v-if="scope.row.imgurl !== null" :src="domain+'/'+scope.row.imgurl" >
                                <span slot="reference" class="check">查看</span>
                            </el-popover>
                        </template>
                        </el-table-column>
                        <el-table-column
                            prop="ncikname"
                            label="上级代理"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="cltime"
                            label="审核时间"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="status"
                            label="状态"
                            sortable
                            show-overflow-tooltip
                        >   
                            <template slot-scope="scope">
                                <span>{{toStatus(scope.row.status)}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="操作"
                            width="80"
                            v-if="level == 0"
                        >
                            <template slot-scope="scope">
                                <el-button v-if="scope.row.status == 1" type="success" plain size="mini" @click="edit(scope.row)">审核</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <Drawer size="350px">
                        <RechrageForm :opt="opt" />
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
import { rechargeStatus } from '@/datas/status_datas'
import { getPayList } from '@/api/admins'
import appConfig from '@/config/appConfig'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import Drawer from '@/components/Drawer/Drawer'
import RechrageForm from '@/layouts/recharge_record/RechrageForm'
export default {
    name: 'RechargeRecord',
    mixins: [parentSelectMixins, commonMixins, recordMixins, paginationMixins],
    components: {
        Drawer,
        RechrageForm
    },
    data(){
        return {
            params: {
                status: 1,
                uname: '',
                phone: '',
                email: '',
                start_time: '',
                end_time: '',
                pageNumber: 1,
                pageSize: 50
            },
            total: 0,
            rechargeStatusSelect: rechargeStatus,
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
            params.start_time = params.start_time/1000
            params.end_time = params.end_time/1000
            const res = await getPayList(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
        },
        //编辑
        async edit(data){
            this.opt = data
            this.openDrawer()
        },
        toStatus(status){

        }
    },
    created(){
        this.level = this.$storage.getLocalData('level')
        this.getP1()
        this.setTimeDate()
        this.search()
    },
}
</script>
<style lang="stylus" scoped>
</style>