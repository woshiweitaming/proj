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
                        <span>用户ID </span>
                        <el-input clearable type="text" class="input_bar" v-model="params.uid" size="mini"></el-input>
                    </div>
                </div>
                <div class="query_items">
                    <div class="query_label">
                        <span>手机号</span>
                        <el-input clearable type="text" class="input_bar" v-model="params.phone" size="mini"></el-input>
                    </div>
                </div>
                <div class="query_items">
                    <div class="query_label">
                        <span>姓名</span>
                        <el-input clearable type="text" class="input_bar" v-model="params.ncikname" size="mini"></el-input>
                    </div>
                </div>
                <div class="query_items">
                    <div class="query_label">
                        <span>交易类型</span>
                        <el-select clearable class="input_bar" size="mini" v-model="params.otype" placeholder="请选择">
                            <el-option v-for="(items, index) in tradeTypeStatus" :key="index" :label="items.name" :value="items.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="query_items">
                    <div class="query_label">
                        <span>账户类型</span>
                        <el-select clearable class="input_bar" size="mini" v-model="params.ordertype" placeholder="请选择">
                            <el-option v-for="(items, index) in postionOrderTypeStatus" :key="index" :label="items.name" :value="items.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="query_items" v-if="level == 0">
                    <div class="query_label">
                        <span>运营中心</span>
                        <el-select clearable @change="getP2" class="input_bar" size="mini" v-model="params.p1" placeholder="请选择">
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
                <div class="query_items" v-if="level == 0 || level == 1 || level == 2">
                    <div class="query_label">
                        <span>代理人</span>
                        <el-select class="input_bar" size="mini" v-model="params.p3" placeholder="请选择">
                            <el-option v-for="(items, index) in p3List" :key="index" :label="items.ncikname" :value="items.uid">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="query_items">
                    <div class="query_label">
                        <span>开始时间</span>
                        <el-date-picker clearable class="input_date_bar" size="mini" v-model="params.start_time" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="开始时间">
                        </el-date-picker>
                    </div>
                </div>
                <div class="query_items">
                    <div class="query_label">
                        <span>结束时间</span>
                        <el-date-picker clearable class="input_date_bar" size="mini" v-model="params.end_time" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="结束时间">
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
            <div class="total_class">
                <div class="labels">
                    <span>盈亏：</span>
                    <strong :class="totalData.loss > 0 ? 'green' : 'red'">{{totalData.loss === null ? 0 : totalData.loss}}</strong>
                </div>
                <div class="labels">
                    <span>手数：</span>
                    <strong>{{totalData.onumber === null ? 0 : totalData.onumber}}</strong>
                </div>
                <div class="labels">
                    <span>消费金额：</span>
                    <strong>{{totalData.price === null ? 0 : totalData.price}}</strong>
                </div>
                <div class="labels">
                     <span>手续费：</span>
                    <strong>{{totalData.fee === null ? 0 : totalData.fee}}</strong>
                </div>
            </div>
            <el-table :data="tableData" border @sort-change="sortChange">
                <el-table-column prop="orderno" label="订单号" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="ptitle" label="产品名" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="otype" label="交易类型" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span :class="scope.row.otype === 0 ? 'green' : 'red'">{{toStatus(scope.row.otype)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="loss" label="账户类型" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span>{{toOrderType(scope.row.ordertype)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="uname" label="用户名" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="unit" label="单位" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="onumber" label="手数" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="endloss" label="止损" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="endprofit" label="止盈" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="buyprice" label="建仓价" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="price" label="消费金额" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="nowPrice" label="当前价" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="loss" label="盈亏" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span :class="scope.row.loss > 0 ? 'green' : 'red'">{{scope.row.loss}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="fee" label="手续费" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="buytime" label="建仓时间" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="操作" sortable v-if="getShowStatus">
                    <template slot-scope="scope">
                        <el-popconfirm title="您确定要平仓吗？" @onConfirm="close(scope.row.orderno)">
                            <el-button slot="reference" v-if="scope.row.ordertype == 1" class="btns input" type="danger" size="mini">平仓</el-button>
                        </el-popconfirm>
                        <el-select @change="val => change(scope.row.orderno, val)" v-if="scope.row.ordertype == 0" class="el-selects btns" size="mini" v-model="tableData[scope.$index].appoint" placeholder="指定盈亏">
                            <el-option popper-class="select_class" v-for="(items,index) in appointStatus" :key="index" :label="items.name" :value="items.value">
                            </el-option>
                        </el-select>
                    </template>
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
    mapMutations,
    mapGetters
} from 'vuex'
import {
    appointStatus,
    tradeTypeStatus,
    postionOrderTypeStatus
} from '@/datas/status_datas'
import {
    endOrder,
    updQhOrder,
    getOrderList
} from '@/api/admins'
import appConfig from '@/config/appConfig'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
export default {
    name: 'PositionOrderList',
    mixins: [parentSelectMixins, commonMixins, recordMixins, paginationMixins],
    data() {
        return {
            params: {
                uid: '',
                otype: '',
                ordertype: 0,
                uname: '',
                phone: '',
                email: '',
                start_time: '',
                end_time: '',
                pageNumber: 1,
                pageSize: 50
            },
            total: 0,
            totalData: {},
            //表格
            tableData: [],
            postionOrderTypeStatus: postionOrderTypeStatus,
            tradeTypeStatus: tradeTypeStatus,
            appointStatus: appointStatus,
            //弹窗
            opt: {},
            domain: appConfig.domain,
            level: '',
            timer: null
        }
    },
    computed: {
        getShowStatus(){
            const domain = appConfig.domain
            // if(domain === 'https://www.snapexlab.com' || domain == 'http://180.178.39.226:8080'){
            //     return this.level == 0 || this.level == 1 || this.level == 2 ? true : false
            // }else{
            //     return this.level == 0 ? true : false
            // }
            return this.level == 0 ? true : false
        },
        ...mapGetters({
            getChangeLeftmoneyDialogStatus: 'getChangeLeftmoneyDialogStatus',
            getCheckLeftmoneyDialogStatus: 'getCheckLeftmoneyDialogStatus'
        })
    },
    methods: {
        /**
         * 查询
         */
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
            params.start_time = this.toStartDate(this.params.start_time)
            params.end_time = this.toEndDate(this.params.end_time)
            const res = await getOrderList(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
            this.totalData = res.data.total
        },
        async close(orderNo) {
            const params = {
                orderNo: orderNo
            }
            const res = await endOrder(params)
            validate.checkCode(res, () => {
                this.$tips.successTips('已平仓')
                this.search()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        async change(orderNo, type) {
            const params = {
                orderNo: orderNo,
                type: type
            }
            const res = await updQhOrder(params)
            validate.checkCode(res, () => {
                this.$tips.successTips('修改成功')
                this.search()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        toStatus(status) {
            return tradeTypeStatus.filter(res => res.value == status)[0].name
        },
        toOrderType(status) {
            return postionOrderTypeStatus.filter(res => res.value == status)[0].name
        },
        setTimer() {
            this.timer = setInterval(() => {
                this.search()
            }, 5000)
        },
    },
    created() {
        this.level = this.$storage.getLocalData('level')
        this.setTimeDate()
        this.getData()
        this.search()
    },
    activated() {
        this.setTimer()
    },
    deactivated() {
        clearInterval(this.timer)
        this.timer = null
    }
}
</script>

<style lang="stylus" scoped>
</style>
