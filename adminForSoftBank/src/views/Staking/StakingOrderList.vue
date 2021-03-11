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
                        <span>订单号</span>
                        <el-input clearable type="text" class="input_bar" v-model="params.orderNo" size="mini"></el-input>
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
                <div class="query_items">
                    <div class="query_label">
                        <span>状态</span>
                        <el-select clearable class="input_bar" size="mini" v-model="params.status" placeholder="请选择">
                            <el-option v-for="(items, index) in stakingStatus" :key="index" :label="items.name" :value="items.value">
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
                <el-table-column prop="name" label="产品名称" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="uname" label="用户名" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="orderNo" label="订单编号" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="aliasUid" label="用户ID" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="amount" label="锁仓数量" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="period" label="锁仓周期" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="backMoney" label="返回金" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="remainDays" label="剩余天数" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="beginDate" label="开始日期" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="endDate" label="结束日期" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="profit" label="总收益" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="punish_ratio" label="违约处罚金" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="punish_ratio" label="违约处罚率(%)" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="status" label="状态" sortable show-overflow-tooltip width="100px">
                    <template slot-scope="scope">
                        <span>{{toStatus(scope.row.status)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="create_time" label="创建时间" sortable show-overflow-tooltip>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <div class="pagination">
        <el-pagination :small="true" background @current-change="currentChangeHandler" @size-change="handleSizeChange" :current-page="params.pageNumber" :page-sizes="[50, 100, 200, 300, 400]" layout="total, sizes, prev, pager, next" :total="total">
        </el-pagination>
    </div>
</div>
</template>

<script>
import {
    getAdminMiningPoolOrderList
} from '@/api/admins'
import validate from '@/utils/validate'
import appConfig from '@/config/appConfig'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import {
    stakingStatus
} from '@/datas/status_datas'
export default {
    name: 'StakingProductList',
    mixins: [commonMixins, recordMixins, paginationMixins, parentSelectMixins],
    data() {
        const token = this.$storage.getLocalData('token')
        return {
            params: {
                pageNumber: 1,
                pageSize: 50,
                uname: '',
                status: '',
                orderNo: '',
                uid: '',
                p1: ''
            },
            tableData: [],
            total: 0,
            stakingStatus: stakingStatus,
        }
    },
    methods: {
        async search() {
            const params = JSON.parse(JSON.stringify(this.params))
            const res = await getAdminMiningPoolOrderList(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
        },
        toStatus(status) {
            return stakingStatus.filter(res => res.value == status)[0].name
        },
    },
    created() {
        this.search()
        this.getData()
    },
}
</script>

<style lang="stylus" scoped>
.buttons {
    margin-bottom 10px
}
</style>
