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
                label="建仓价"
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
                prop="nowPrice"
                label="当前价"
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
                prop="buytime"
                label="建仓时间"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                label="操作"
                sortable
                v-if="level == 0"
            >
                <template slot-scope="scope">
                    <el-popconfirm
                        title="您确定要平仓吗？"
                        @onConfirm="close(scope.row.orderno)"
                    >
                        <el-button  slot="reference" v-if="scope.row.ordertype == 1" class="btns input" type="danger" size="mini">平仓</el-button>
                    </el-popconfirm>
                    <el-select @change="val => change(scope.row.orderno, val)" v-if="scope.row.ordertype == 0" class="el-selects btns" size="mini" v-model="getTableData[scope.$index].appoint" placeholder="指定盈亏">
                        <el-option
                            popper-class="select_class"
                            v-for="(items,index) in appointStatusList"
                            :key="index"
                            :label="items.name"
                            :value="items.value">
                        </el-option>
                    </el-select>
                </template>   
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import recordMixins from '@/mixins/record_mixins'
import { appointStatus, tradeTypeStatus, postionOrderTypeStatus } from '@/datas/status_datas'
import { endOrder, updQhOrder } from '@/api/admins'
import validate from '@/utils/validate'
export default {
    name: 'PositionRecordTable',
    mixins: [recordMixins],
    data(){
        return {
            appointStatusList: appointStatus
        }
    },
    methods: {
        async close(orderNo){
             const params = {
                orderNo: orderNo
            }
            const res = await endOrder(params)
            validate.checkCode(res, () => {
                this.$tips.successTips('已平仓')
                this.getTableHandler()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        async change(orderNo, type){
            const params = {
                orderNo: orderNo,
                type: type
            }
            const res = await updQhOrder(params)
            validate.checkCode(res, () => {
                this.$tips.successTips('修改成功')
                this.getTableHandler()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        toStatus(status){
            return tradeTypeStatus.filter(res => res.value == status)[0].name
        },
        toOrderType(status){
            return postionOrderTypeStatus.filter(res => res.value == status)[0].name
        }
    },
}
</script>
<style lang="stylus" scoped>
</style>