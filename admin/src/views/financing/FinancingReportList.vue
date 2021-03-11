<template>
<div class="record_wrapper_class">
    <div class="record_content">
        <!--查询-->
        <div class="query_class">
            <div class="query_data_class">
                <div class="query_items">
                    <div class="query_label">
                        <el-date-picker clearable class="input_date_range_bar" size="mini" v-model="params.dataDate" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
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
            <el-table :data="tableData" border @sort-change="sortChange">
                <el-table-column prop="start_time" label="日期" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="totalAmount" label="投资总额" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="totalBackMoney" label="归还本金总金额" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="totalProfit" label="已反总额" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="totalPenaltyMoney" label="违约总额" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="totalProfitLoss" label="总盈亏" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span :class="Number(scope.row.totalProfitLoss) > 0 ? 'green' : 'red'">{{scope.row.totalProfitLoss}}</span>
                    </template>
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
import {
    getCoinPoolReportList
} from '@/api/admins'
import validate from '@/utils/validate'
export default {
    name: 'FinancingOrder',
    mixins: [commonMixins, recordMixins, paginationMixins],
    data() {
        return {
            params: {
                dataDate: [],
                pageNumber: 1,
                pageSize: 50
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
            params.dataDate = params.dataDate.join('~')
            const res = await getCoinPoolReportList(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
        },
    },
    created() {
        this.search()
    },
}
</script>

<style scoped>
.input_date_range_bar {
    width: 250px !important
}
</style>
