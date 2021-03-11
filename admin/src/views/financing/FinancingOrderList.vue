<template>
<div class="record_wrapper_class">
    <div class="record_content">
        <!--查询-->
        <div class="query_class">
            <div class="query_data_class">
                <div class="query_items">
                    <div class="query_label">
                        <span>用户名</span>
                        <el-input clearable type="text" class="input_bar" v-model="params.uname" size="mini"></el-input>
                    </div>
                </div>
                <div class="query_items">
                    <div class="query_label">
                        <span>订单编号</span>
                        <el-input clearable type="text" class="input_bar" v-model="params.order_no" size="mini"></el-input>
                    </div>
                </div>
                <div class="query_items">
                    <div class="query_label">
                        <span>用户ID</span>
                        <el-input clearable type="text" class="input_bar" v-model="params.uid" size="mini"></el-input>
                    </div>
                </div>
                <div class="query_items" v-if="level == 0">
                    <div class="query_label">
                        <span>运营中心</span>
                        <el-select clearable class="input_bar" size="mini" v-model="params.p1" placeholder="请选择">
                            <el-option v-for="(items, index) in p1List" :key="index" :label="items.ncikname" :value="items.uid">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="query_items" v-if="level == 0 || level == 1">
                    <div class="query_label">
                        <span>代理线</span>
                        <el-select clearable @change="getP3" class="input_bar" size="mini" v-model="params.p2" placeholder="请选择">
                            <el-option v-for="(items, index) in p2List" :key="index" :label="items.ncikname" :value="items.uid">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="query_items">
                    <div class="query_label">
                        <span>状态</span>
                        <el-select clearable class="input_bar" size="mini" v-model="params.status" placeholder="请选择">
                            <el-option v-for="(items, index) in coinPoolOrderStatusList" :key="index" :label="items.name" :value="items.value">
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
            <el-table :data="tableData" border @sort-change="sortChange">
                <el-table-column prop="order_no" label="订单号" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="uname" label="用户名" sortable show-overflow-tooltip>
                </el-table-column>
                 <el-table-column prop="aliasUid" label="用户ID" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="账户类型" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span>{{toUserType(scope.row.type)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="amount" label="托管金额" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="pro_period" label="周期" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="day_rate" label="日收益率" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="start_time" label="起息时间" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="end_time" label="结息时间" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="remain_days" label="剩余天数" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="profit" label="已反收益" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="penalty_rate" label="违约比例" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="penalty_money" label="违约金" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="back_money" label="归还本金" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="status" label="状态" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span>{{toStatus(scope.row.status)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="create_time" label="订单时间" sortable show-overflow-tooltip>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination :small="true" background @current-change="currentChangeHandler" @size-change="handleSizeChange" :current-page="params.pageNumber" :page-sizes="[50, 100, 200, 300, 400]" layout="total, sizes, prev, pager, next" :total="total">
            </el-pagination>
        </div>
    </div>
</div>
</template>

<script>
import {
    coinPoolOrderStatus,
    userStatus
} from '@/datas/status_datas'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import {
    getCoinPoolOrderList
} from '@/api/admins'
import validate from '@/utils/validate'
export default {
    name: 'FinancingOrder',
    mixins: [commonMixins, recordMixins, paginationMixins, parentSelectMixins],
    data() {
        return {
            params: {
                uname: '',
                order_no: '',
                status: 0,
                pageNumber: 1,
                pageSize: 50,
                uid: '',
                p1: ''
            },
            total: 0,
            totalData: [],
            coinPoolOrderStatusList: coinPoolOrderStatus,
            userStatus: userStatus
        }
    },
    methods: {
        async search() {
            const params = JSON.parse(JSON.stringify(this.params))
            let uid = this.$storage.getLocalData('uid')
            if (this.level == 1) {
                params.p1 = uid
            }
            if (this.level == 2) {
                params.p2 = uid
            }
            if (this.level == 3) {
                params.p3 = uid
            }
            const res = await getCoinPoolOrderList(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
        },
        toUserType(status) {
            const data = userStatus.filter(res => res.value == status)
            return typeof data[0] === 'undefined' ? '-' : data[0].name
        },
        toStatus(status) {
            const data = coinPoolOrderStatus.filter(res => res.value == status)
            return typeof data[0] === 'undefined' ? '-' : data[0].name
        }
    },
    created() {
        this.search()
        this.getData()
    },
}
</script>

<style scoped>
</style>
