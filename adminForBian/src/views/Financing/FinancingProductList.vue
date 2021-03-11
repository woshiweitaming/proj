<template>
<div class="record_wrapper_class">
    <div class="record_content">
        <!--查询-->
        <div class="query_class">
            <div class="query_data_class">
                <div class="query_items">
                    <el-button type="primary" @click="add" size="mini">添加产品</el-button>
                </div>
            </div>
        </div>
        <!--表格-->
        <div class="table_class">
            <el-table :data="tableData" border @sort-change="sortChange">
                <el-table-column prop="sort" label="排序" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="pro_name" label="产品名称" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="pro_period" label="周期" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="current_rate" label="当日利率" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="pro_logo" label="LOGO" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-popover placement="top-start" title="产品Logo" width="250" trigger="click" :ref="scope.$index">
                            <img width="250" v-if="scope.row.pro_logo !== null" :src="scope.row.pro_logo">
                            <span slot="reference" class="check">查看</span>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column prop="penalty_rate" label="违约结算比例" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="money_scope" label="投资金额范围" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="day_rate" label="日收益率" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="create_time" label="添加时间" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="状态" sortable show-overflow-tooltip width="100px">
                    <template slot-scope="scope">
                        <el-select @change="(status) => changeStatus(scope.row.fid, status)" class="input_bar" size="mini" v-model="scope.row.status" placeholder="请选择">
                            <el-option v-for="(items, index) in coinPoolProductStatus" :key="index" :label="items.name" :value="items.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column label="操作" sortable show-overflow-tooltip width="100px">
                    <template slot-scope="scope">
                        <el-button class="table_btn" type="primary" plain size="mini" @click="edit(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination :small="true" background @current-change="currentChangeHandler" @size-change="handleSizeChange" :current-page="params.pageNumber" :page-sizes="[50, 100, 200, 300, 400]" layout="total, sizes, prev, pager, next" :total="total">
            </el-pagination>
        </div>
        <Drawer size="500px">
            <EditFinancing @callback="callback" :opt="opt" />
        </Drawer>
    </div>
</div>
</template>

<script>
import {
    mapMutations,
    mapGetters
} from 'vuex'
import {
    coinPoolProductStatus
} from '@/datas/status_datas'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import EditFinancing from '@/views/Financing/EditFinacing'
import Drawer from '@/components/Drawer/Drawer'
import {
    getCoinPoolproductList,
    updateCoinPoolProductStatus
} from '@/api/admins'
import validate from '@/utils/validate'
import appConfig from '@/config/appConfig'
export default {
    name: 'FinancingProduct',
    mixins: [commonMixins, recordMixins, paginationMixins],
    data() {
        return {
            params: {
                pageNumber: 1,
                pageSize: 50
            },
            total: 0,
            totalData: [],
            coinPoolProductStatus: coinPoolProductStatus,
            domain: appConfig.domain,
            drawerStatus: false,
            opt: {}
        }
    },
    components: {
        EditFinancing,
        Drawer
    },
    methods: {
        async search() {
            const params = JSON.parse(JSON.stringify(this.params))
            const res = await getCoinPoolproductList(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
        },
        async edit(data) {
            this.opt = data
            this.openDrawer()
        },
        add() {
            this.opt = {}
            this.openDrawer()
        },
        async changeStatus(fid, status) {
            const params = {
                fid: fid,
                status: status
            }
            const res = await updateCoinPoolProductStatus(params)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.search()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
    },
    computed: {
        ...mapGetters({
            getDrawerStatus: 'getDrawerStatus'
        })
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
