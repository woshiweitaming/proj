<template>
    <div class="record_wrapper_class">
        <div class="record_content">
            <!--查询-->
            <div class="query_class">
                <div class="query_data_class">
                    <div class="query_items">
                        <div class="query_label" >
                            <span>用户名</span>
                            <el-input clearable type="text" class="input_bar" v-model="params.uname" size="mini"></el-input>
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
                            <span>用户ID</span>
                            <el-input clearable type="text" class="input_bar" v-model="params.uid" size="mini"></el-input>
                        </div>
                    </div>
                    <div class="query_items">
                        <div class="query_label" >
                            <span>邮箱</span>
                            <el-input clearable type="text" class="input_bar" v-model="params.email" size="mini"></el-input>
                        </div>
                    </div>
                    <!-- <div class="query_items">
                        <div class="query_label" >
                            <span>类型</span>
                            <el-select @change="getP2" class="input_bar" size="mini" v-model="params.state" placeholder="请选择">
                                <el-option
                                    v-for="(items, index) in userStatus"
                                    :key="index"
                                    :label="items.name"
                                    :value="items.value"
                                >
                                </el-option>
                            </el-select>
                        </div>
                    </div> -->
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
                         <el-button v-if="level == 0" type="primary" @click="createUser" size="mini">创建虚拟号</el-button>
                    </div>
                </div>
            </div>
            <!--表格-->
            <div class="table_class">
                <el-table
                    :data="tableData"
                    border
                    @sort-change="sortChange"
                >
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
                        prop="phone"
                        label="手机号"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="ncikname"
                        label="昵称"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="bname"
                        label="姓名"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <!-- <el-table-column
                        prop="email"
                        label="邮箱"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column> -->
                    <el-table-column
                        prop="leve"
                        label="等级"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="balance"
                        label="余额"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="jifen"
                        label="积分"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <!-- <el-table-column
                        prop="idcard"
                        label="身份证"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column> -->
                    <el-table-column
                        prop="p1"
                        label="代理商"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <!-- <el-table-column
                        prop="p2"
                        label="会员单位"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="p3"
                        label="运营中心"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column> -->
                    <el-table-column
                        prop="attestation"
                        label="认证状态"
                        sortable
                        show-overflow-tooltip
                        width="120px"
                    >
                        <template slot-scope="scope">
                            <span :class="scope.row.attestation === 0 ? 'green' : 'red'">{{toAttestation(scope.row.attestation)}}</span>
                        </template>
                    </el-table-column>
                    <!-- <el-table-column
                        prop="remarks"
                        label="备注"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column> -->
                    <el-table-column
                        prop="ctime"
                        label="注册时间"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="ltime"
                        label="最后登录时间"
                        sortable
                        width="140px"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="状态"
                        sortable
                        show-overflow-tooltip
                        width="80px"
                    >
                        <template slot-scope="scope">
                            <span>{{toStatus(scope.row.state)}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        :width="level == 0 || level == 1 ? '180px' : '120px'"
                    >
                        <template slot-scope="scope">
                            <el-button v-if="level == 0 || level == 1" class="table_btn" type="danger" plain size="mini" @click="toUserDetail(scope.row.uid)">查看</el-button>
                            <el-button v-if="level == 0 || level == 1" class="table_btn table_btn1" type="primary" plain size="mini" @click="changeLeftmoney(scope.row.uid)">余额调整</el-button>
                            <!-- <el-button class="table_btn table_btn1" type="success" plain size="mini" @click="checkLeftmoney(scope.row.uid)">查看余额</el-button> -->
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <Drawer size="700px">
                <MemberEdit @callback="callback" :opt="opt"  />
            </Drawer>
            <el-dialog
                title="修改余额"
                :visible="getChangeLeftmoneyDialogStatus"
                width="450px"
                :before-close="changeLeftmoneyClose"
            >
            <LeftmoneyDialog :opt="opt" />
            </el-dialog>
            <el-dialog
                title="查看余额"
                :visible="getCheckLeftmoneyDialogStatus"
                width="1280px"
                :before-close="checkLeftmoneyClose"
            >
                <AccountLeftmoneyDialog :opt="opt" />
            </el-dialog>
            <el-dialog
                title="创建虚拟号"
                :visible="showDialog"
                width="500px"
                :before-close="closeCreateUser"
                @close="closeSuccess"
            >
               <CreateUser/>
            </el-dialog>
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
import { userStatus, getAttestationStatus, getAccountState } from '@/datas/status_datas'
import { getProductList, getMemberList } from '@/api/admins'
import appConfig from '@/config/appConfig'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import Drawer from '@/components/Drawer/Drawer'
import MemberEdit from '@/layouts/member/memberList/MemberEdit'
import CreateUser from '@/layouts/member/memberList/CreateUserDialog'
import LeftmoneyDialog from '@/layouts/member/memberList/LeftmoneyDialog'
import AccountLeftmoneyDialog from '@/layouts/member/memberList/AccountLeftmoneyDialog'
export default {
    name: 'MemberList',
    mixins: [parentSelectMixins, commonMixins, recordMixins, paginationMixins],
    components: {
        MemberEdit,
        Drawer,
        LeftmoneyDialog ,
        AccountLeftmoneyDialog,
        CreateUser
    },
    data(){
        return {
            params: {
                // state: 0,
                uname: '',
                phone: '',
                email: '',
                start_time: '',
                end_time: '',
                uid: '',
                pageNumber: 1,
                pageSize: 50
            },
            total: 0,
            userStatus: userStatus,
            //表格
            tableData: [],
            //弹窗
            opt: {},
            domain: appConfig.domain,
            level: '',
            showDialog: false
        }
    },
    computed: {
        ...mapGetters({
            getChangeLeftmoneyDialogStatus: 'getChangeLeftmoneyDialogStatus',
            getCheckLeftmoneyDialogStatus: 'getCheckLeftmoneyDialogStatus',
            getDrawerStatus: 'getDrawerStatus'
        })
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
            }            if(this.level == 3){
                params.p3 = uid
            }
            params.start_time = params.start_time === '' || params.start_time == null ? '' : params.start_time/1000
            params.end_time = params.end_time === '' || params.start_time == null ? '' : params.end_time/1000
            const res = await getMemberList(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
        },
        toUserDetail(uid){
            this.opt = {uid: uid}
            this.openDrawer()
        },
        changeLeftmoney(uid){
            this.opt = {updUid: uid}
            this.setLeftmoneyDialogStatus(true)
        },
        checkLeftmoney(uid){
            this.opt = {uid: uid}
            this.setCheckLeftmoneyDialogStatus(true)
        },
        toAttestation(status){
            const data = getAttestationStatus.filter(res => res.value == status)
            return typeof data[0] === 'undefined' ? '-' : data[0].name
        },
        toStatus(status){
            const data = getAccountState.filter(res => res.value == status)
            return typeof data[0] === 'undefined' ? '-' : data[0].name
        },
        changeLeftmoneyClose(){
            this.setLeftmoneyDialogStatus(false)
        },
        checkLeftmoneyClose(){
            this.setCheckLeftmoneyDialogStatus(false)
        },
        async getProductListHandler(){
            const res = await getProductList({pageNumber: 1,pageSize: 50})
            this.setProductList(res.data.list)
        },
        createUser(){
            this.showDialog = true
        },
        closeCreateUser(){
            this.showDialog = false
        },
        closeSuccess(){
            this.showDialog = false
            this.search()
        },
        ...mapMutations({
           setLeftmoneyDialogStatus: 'SET_LEFTMONEY_DIALOG_STATUS',
           setCheckLeftmoneyDialogStatus: 'SET_CHECK_LEFTMONEY_DIALOG_STATUS',
           setProductList: 'SET_PRODUCT_LIST'
        })
    },
    created(){
        this.level = this.$storage.getLocalData('level')
        this.getData()
        this.setTimeDate()
        this.search()
        this.getProductListHandler()
    },
}
</script>
<style lang="stylus" scoped>
</style>