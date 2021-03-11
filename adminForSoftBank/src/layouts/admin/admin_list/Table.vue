<template>
    <div class="table_class">
        <el-table
            :data="getTableData.list"
            border
            @sort-change="sortChange"
        >
            <el-table-column
                prop="uid"
                label="机构码"
                sortable
                width="120"
            >
            </el-table-column>
            <el-table-column
                prop="uname"
                label="用户名"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="ncikname"
                label="姓名"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="uname2"
                label="代理线"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="uname3"
                label="运营中心"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="state"
                label="账户状态"
                sortable
                width="120"
            >
                <template slot-scope="scope">
                    <span>{{toType(scope.row.state)}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="type"
                label="管理员类型"
                sortable
                width="120"
            >
                <template slot-scope="scope">
                    <span>{{toAdminType(scope.row.type)}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="ltime"
                label="最后登录时间"
                sortable
            >
            </el-table-column>
            <el-table-column
                label="操作"
                width="90"
            >
                <template slot-scope="scope">
                    <el-button class="input" type="danger" size="small" @click="changeInfo(scope.row.ncikname, scope.row.uid, scope.row.uid2, scope.row.uid3 )">修改</el-button>
                </template>   
            </el-table-column>
        </el-table>
        <Drawer size="350px">
            <ChangeAdminInfo :opt="opt" />
        </Drawer>
    </div>
</template>
<script>
import recordMixins from '@/mixins/record_mixins'
import Drawer from '@/components/Drawer/Drawer'
import ChangeAdminInfo from '@/layouts/admin/admin_list/ChangeAdminInfo'
import { getAccountState, adminStatus } from '@/datas/status_datas'
export default {
    name: 'AdminListRecordTable',
    mixins: [recordMixins],
    data(){
        return {
            opt: {}
        }
    },
    components: {
        Drawer,
        ChangeAdminInfo
    },
    methods: {
        async changeInfo(nickname, uid, uid2, uid3){
            let parentId = 0
            if(uid2 !== null){
                parentId = uid3
            }
            if(uid3 !== null){
                parentId = uid2
            }
            this.opt = {
                updUid: uid,
                nickName: nickname,
                parentId: parentId
            }
            this.openDrawer()
        },
        toType(status){
            const data = getAccountState.filter(res => res.value == status)
            return typeof data[0] === 'undefined' ? '-' : data[0].name
        },
        toAdminType(status){
            const data = adminStatus.filter(res => res.value == status)
            return data.length === 0 ? '-' : data[0].name
        }
    },
}
</script>