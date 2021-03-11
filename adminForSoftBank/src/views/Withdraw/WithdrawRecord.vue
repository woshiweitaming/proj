<template>
    <div class="record_wrapper_class">
        <audio id="player" ref="audio1" autoplay><source src="../../audio/tx.mp3" type="audio/mp3"></audio>
        <div class="record_content">
            <!--查询-->
            <div class="query_class">
                <div class="query_data_class">
                    <div class="query_items">
                        <div class="query_label" >
                            <span>充值状态</span>
                            <el-select clearable class="input_bar" size="mini" v-model="params.status" placeholder="请选择">
                                <el-option
                                    v-for="(items, index) in withdrawStatus"
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
                            <el-input clearable type="text" class="input_bar" v-model="params.uname" size="mini"></el-input>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>用户ID</span>
                            <el-input clearable type="text" class="input_bar" v-model="params.uid" size="mini"></el-input>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>手机号</span>
                            <el-input clearable type="text" class="input_bar" v-model="params.phone" size="mini"></el-input>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>邮箱</span>
                            <el-input clearable type="text" class="input_bar" v-model="params.email" size="mini"></el-input>
                        </div>
                    </div>
                    <div class="query_items" v-if="level == 0">
                        <div class="query_label" >
                            <span>运营中心</span>
                            <el-select clearable @change="getP2" class="input_bar" size="mini" v-model="params.p1" placeholder="请选择">
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
                    <div class="query_items"  v-if="level == 0 || level == 1">
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
                    <div class="query_items"  v-if="level == 0 || level == 1 || level == 2">
                        <div class="query_label" >
                            <span>代理人</span>
                            <el-select clearable class="input_bar" size="mini" v-model="params.p3" placeholder="请选择">
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
                                clearable 
                                class="input_date_bar"
                                size="mini"
                                v-model="params.start_time"
                                type="date"
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
                                clearable 
                                class="input_date_bar"
                                size="mini"
                                v-model="params.end_time"
                                type="date"
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
                <div class="total_class">
                    <div class="labels">
                        <span>提现金额：</span>
                        <strong>{{totalData === null ? 0 : totalData}}</strong>
                    </div>
                 </div>
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
                            prop="aliasUid"
                            label="用户ID"
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
                            prop="banknumber"
                            label="卡号"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="badds"
                            label="开户行"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="qbdizhi"
                            label="钱包地址"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="operator"
                            label="操作人"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="cltime"
                            label="处理时间"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="dollar"
                            label="金额"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="fee"
                            label="手续费"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="realityNumber"
                            label="实际到账金额"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="logprice"
                            label="提现后余额"
                            sortable
                            show-overflow-tooltip
                            width="120"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="zhenname"
                            label="姓名"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="btime"
                            label="申请时间"
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
                            prop="bankname"
                            label="银行名"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="ncikname"
                            label="上级代理"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="remarks"
                            label="备注"
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
                            width="150"
                            v-if="level == 0"
                        >
                            <template slot-scope="scope">
                                <el-button v-if="scope.row.status == 0" type="success" plain size="mini" @click="edit(scope.row)">审核</el-button>
                                <el-button type="primary" plain size="mini" @click="changeBank(scope.row)">改卡</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <Drawer size="350px">
                        <WithdrawFormForm @callback="callback" :opt="opt" />
                    </Drawer>
                    <el-dialog
                        title="改卡"
                        :visible.sync="bankDialogStatus"
                        width="500px"
                        :before-close="handleClose">
                        <el-form ref="form" :hide-required-asterisk="true" label-position="right" label-width="80px" >
                            <el-form-item label="订单号">
                                <el-input size="mini" v-model="bankParams.orderNo" :disabled="true"></el-input>
                            </el-form-item>
                            <el-form-item label="卡号" prop="pwd">
                                <el-input size="mini"  v-model="bankParams.banknumber" placeholder="请输入新卡号"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button size="mini" @click="bankDialogStatus = false">取 消</el-button>
                            <el-button size="mini" type="primary" @click="updBankHandler">确 定</el-button>
                        </span>
                    </el-dialog>
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
import { mapMutations, mapGetters } from 'vuex'
import { withdrawStatus } from '@/datas/status_datas'
import { getDrawithalList, getPayAndDrawalCount, updBank } from '@/api/admins'
import appConfig from '@/config/appConfig'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import Drawer from '@/components/Drawer/Drawer'
import WithdrawFormForm from '@/layouts/withdraw_record/WithdrawForm'
import validate from '@/utils/validate'
let timer = null
export default {
    name: 'RechargeRecord',
    mixins: [parentSelectMixins, commonMixins, recordMixins, paginationMixins],
    components: {
        Drawer,
        WithdrawFormForm
    },
    data(){
        return {
            params: {
                status: 0,
                uid: '',
                uname: '',
                phone: '',
                email: '',
                start_time: '',
                end_time: '',
                pageNumber: 1,
                pageSize: 50
            },
            total: 0,
            totalData: 0,
            withdrawStatus: withdrawStatus,
            //表格
            tableData: [],
            //弹窗
            opt: {},
            domain: appConfig.domain,
            level: '',
            bankParams: {
                orderNo: '',
                banknumber: ''
            },
            bankDialogStatus: false
        }
    },
    methods: {
        /**
         * 查询
         */
        async search(){
            const params = JSON.parse(JSON.stringify(this.params))
            let uid = this.$storage.getLocalData('uid')
            if(this.level == 1){
                params.p1 = uid
            }
            if(this.level == 2){
                params.p2 = uid
            }  
            if(this.level == 3){
                params.p3 = uid
            }
            params.start_time = params.start_time === '' || params.start_time == null ? '' : params.start_time/1000
            params.end_time = params.end_time === '' || params.start_time == null ? '' : params.end_time/1000
            const res = await getDrawithalList(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
            this.totalData = res.data.sum
        },
        //编辑
        async edit(data){
            this.opt = data
            this.openDrawer()
        },
        toStatus(status){
            return withdrawStatus[status].name
        },
         async getPayAndDrawalCountHandler(){
            const res = await getPayAndDrawalCount()
            const count = res.data.drawalCount_5m
            if(count > 0){
                this.$notify({
                    title: '系统提醒',
                    message: '您有一条新的提现订单',
                    type: 'success'
                });
                // this.$refs.audio1.src= '../../audio/tx.mp3'
                this.$refs.audio1.play()
            }
        },
        setTimer(){
            const that = this
            timer = setInterval(() => {
                that.getPayAndDrawalCountHandler()
            },30000)
        },
        changeBank(data){
            this.bankParams.orderNo = data.orderno
            this.bankParams.banknumber = data.banknumber
            this.bankDialogStatus = true
        },
        handleClose(){
            this.bankDialogStatus = false
        },
        async updBankHandler(){
            const res = await updBank(this.bankParams)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.handleClose()
                this.search()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        }
    },
    computed: {
        ...mapGetters({
            getDrawerStatus: 'getDrawerStatus'
        })
    },
    created(){
        this.level = this.$storage.getLocalData('level')
        this.getData()
        this.setTimeDate()
        this.search()
    },
    mounted(){
        this.getPayAndDrawalCountHandler()
        this.setTimer()
    },
    activated(){
        const that = this
        setTimeout(() => {
            that.getPayAndDrawalCountHandler()
        }, 1000)
        this.setTimer()
    },
    deactivated() {
        clearInterval(timer)
        timer = null
    }
}
</script>
<style lang="stylus" scoped>
</style>