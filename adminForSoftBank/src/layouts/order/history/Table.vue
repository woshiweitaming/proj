<template>
    <div class="table_data_class">
         <div class="total_class">
             <div class="labels">
                <strong :class="getTableData.total && getTableData.total.loss > 0 ? 'green' : 'red'">{{getTableData.total && getTableData.total.loss === null ? 0 : getTableData.total && getTableData.total.loss}}</strong>
                <span>盈亏</span>
            </div>
            <div class="labels">
                <strong>{{getTableData.total && getTableData.total.onumber === null ? 0 : getTableData.total && getTableData.total.onumber}}</strong>
                <span>手数</span>
            </div>
            <div class="labels">
                <strong>{{getTableData.total && getTableData.total.price === null ? 0 : getTableData.total && getTableData.total.price}}</strong>
                <span>消费金额</span>
            </div>
            <div class="labels">
                <strong>{{getTableData.total && getTableData.total.fee === null ? 0 : getTableData.total && getTableData.total.fee}}</strong>
                <span>手续费</span>
            </div>
        </div>
        <el-table
            :data="getTableData.list"
            border
            @sort-change="sortChange"
        >
            <el-table-column
                prop="orderno"
                label="订单号"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="ptitle"
                label="产品名"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="otype"
                label="交易类型"
                sortable
                show-overflow-tooltip
            >
                <template slot-scope="scope">
                    <span :class="scope.row.otype === 0 ? 'green' : 'red'">{{toStatus(scope.row.otype)}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="loss"
                label="账户类型"
                sortable
                show-overflow-tooltip
            >
                <template slot-scope="scope">
                    <span>{{toOrderType(scope.row.ordertype)}}</span>
                </template>  
            </el-table-column>
            <el-table-column
                prop="uname"
                label="用户名"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="unit"
                label="单位"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="onumber"
                label="手数"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="endloss"
                label="止损"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="endprofit"
                label="止盈"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="buyprice"
                label="买入价"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="sellprice"
                label="平仓价"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="price"
                label="消费金额"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="loss"
                label="盈亏"
                sortable
                show-overflow-tooltip
            >
                <template slot-scope="scope">
                    <span :class="scope.row.loss > 0 ? 'green' : 'red'">{{scope.row.loss}}</span>
                </template>  
            </el-table-column>
            <el-table-column
                prop="fee"
                label="手续费"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="selltime"
                label="平仓时间"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="buytime"
                label="买入时间"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import recordMixins from '@/mixins/record_mixins'
export default {
    name: 'HistoryRecordTable',
    mixins: [recordMixins],
    methods: {
        async close(orderNo){

        },
        change(){

        },
        toStatus(){

        },
        toOrderType(){

        }
    }
}
</script>