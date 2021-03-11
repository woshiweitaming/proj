<template>
    <div class="table_data_class">
        <el-table
            :data="getTableData.list"
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
</template>
<script>
import queryMixins from '@/mixins/query_mixins'
import recordMixins from '@/mixins/record_mixins'
import appConfig from '@/config/appConfig'
import Drawer from '@/components/Drawer/Drawer'
import RechrageForm from '@/layouts/recharge_record/RechrageForm'
export default {
    name: 'RechargeRecordTable',
    mixins: [queryMixins, recordMixins],
    components: {
        Drawer,
        RechrageForm
    },
    data(){
        return {
            domain: appConfig.domain,
            opt: {}
        }
    },
    methods: {
        async edit(data){
            this.opt = data
            this.openDrawer()
        },
        toStatus(status){

        }
    },
}
</script>
<style lang="stylus" scoped>
.check
   color #09f
</style>