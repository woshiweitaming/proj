<template>
    <div class="table_data_class">
        <el-table
            :data="getTableData.list"
            border
            @sort-change="sortChange"
        >
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
            <el-table-column
                prop="idcard"
                label="身份证"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="p1"
                label="代理商"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
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
            </el-table-column>
            <el-table-column
                prop="attestation"
                label="认证状态"
                sortable
                show-overflow-tooltip
            >
                <template slot-scope="scope">
                    <span :class="scope.row.attestation === 0 ? 'green' : 'red'">{{toAttestation(scope.row.attestation)}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="remarks"
                label="备注"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
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
            >
                <template slot-scope="scope">
                    <span>{{toStatus(scope.row.state)}}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="操作"
                width="280px"
                v-if="level == 0"
            >
                <template slot-scope="scope">
                    <el-button class="table_btn" type="danger" plain size="mini" @click="toUserDetail(scope.row.uid)">查看</el-button>
                    <el-button class="table_btn table_btn1" type="primary" plain size="mini" @click="changeLeftmoney(scope.row.uid)">余额调整</el-button>
                    <el-button class="table_btn table_btn1" type="success" plain size="mini" @click="checkLeftmoney(scope.row.uid)">查看余额</el-button>
                </template>
            </el-table-column>
        </el-table>
        <Drawer size="700px">
            <MemberEdit :opt="opt"  />
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
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import recordMixins from '@/mixins/record_mixins'
import { getAttestationStatus, getAccountState } from '@/datas/status_datas'
import Drawer from '@/components/Drawer/Drawer'
import MemberEdit from '@/layouts/member/memberList/MemberEdit'
import LeftmoneyDialog from '@/layouts/member/memberList/LeftmoneyDialog'
import AccountLeftmoneyDialog from '@/layouts/member/memberList/AccountLeftmoneyDialog'
export default {
    name: 'MemberListRecordTable',
    mixins: [recordMixins],
    components: {
        MemberEdit,
        Drawer,
        LeftmoneyDialog ,
        AccountLeftmoneyDialog
    },
    data(){
        return {
            opt: {}
        }
    },
    computed: {
        ...mapGetters({
            getChangeLeftmoneyDialogStatus: 'getChangeLeftmoneyDialogStatus',
            getCheckLeftmoneyDialogStatus: 'getCheckLeftmoneyDialogStatus'
        })
    },
    methods: {
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
        ...mapMutations({
           setLeftmoneyDialogStatus: 'SET_LEFTMONEY_DIALOG_STATUS',
           setCheckLeftmoneyDialogStatus: 'SET_CHECK_LEFTMONEY_DIALOG_STATUS'
        })
    }
}
</script>