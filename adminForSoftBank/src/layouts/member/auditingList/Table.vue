<template>
    <div class="table_data_class">
         <el-table
            :data="getTableData.list"
            border
            @sort-change="sortChange"
        >
            <el-table-column
                prop="name"
                label="用户名"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="country"
                label="国家"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="p1"
                label="身份证正面"
                sortable
                show-overflow-tooltip
            >
                <template slot-scope="scope">
                <el-popover
                    placement="top-start"
                    title="证件"
                    width="250"
                    trigger="click"
                    :ref="scope.$index"
                >
                    <img width="250" v-if="scope.row.p1 !== null" :src="domain+'/'+scope.row.p1" >
                    <span slot="reference" class="check">查看</span>
                </el-popover>
                </template>
            </el-table-column>
            <el-table-column
                prop="p2"
                label="身份证反面"
                sortable
                show-overflow-tooltip
            >   
                <template slot-scope="scope">
                <el-popover
                    placement="top-start"
                    title="证件"
                    width="250"
                    trigger="click"
                    :ref="scope.$index"
                >
                    <img width="250" v-if="scope.row.p2 !== null" :src="domain+'/'+scope.row.p2" >
                    <span slot="reference" class="check">查看</span>
                </el-popover>
                </template>
            </el-table-column>
            <el-table-column
                prop="p3"
                label="手持身份证"
                sortable
                show-overflow-tooltip
            >
                <template slot-scope="scope">
                <el-popover
                    placement="top-start"
                    title="证件"
                    width="250"
                    trigger="click"
                    :ref="scope.$index"
                >
                    <img width="250" v-if="scope.row.p3 !== null" :src="domain+'/'+scope.row.p3" >
                    <span slot="reference" class="check">查看</span>
                </el-popover>
                </template>
            </el-table-column>
            <el-table-column
                prop="idcard"
                label="身份证号"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
                <el-table-column
                prop="adds"
                label="居住地址"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="type"
                label="审核状态"
                sortable
                show-overflow-tooltip
            >
                <template slot-scope="scope">
                    <span>{{toStatus(scope.row.type)}}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="操作"
                width="200"
                v-if="level == 0"
            >
                <template slot-scope="scope">
                    <el-button class="examine_btns" v-if="scope.row.type !== 0" type="success" plain size="mini" @click="pass(scope.row.uid, 0)">通过</el-button>
                    <el-button class="examine_btns" v-if="scope.row.type !== 1 || scope.row.type !== 2" type="danger" plain size="mini" @click="pass(scope.row.uid, 1)">驳回</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import recordMixins from '@/mixins/record_mixins'
import appConfig from '@/config/appConfig'
import { updateCertificaByUid } from '@/api/admins'
import { getAdvancedAttestationStatus } from '@/datas/status_datas'
import validate from '@/utils/validate'
export default {
    name: 'auditingRecordTable',
    mixins: [recordMixins],
    data(){
        return {
            domain: appConfig.domain
        }
    },
    methods: {
        async pass(uid, type){
            const res = await updateCertificaByUid({uid: uid, type: type})
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.getTableHandler()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        toStatus(status){
            const data = getAdvancedAttestationStatus
            return data.filter(res => res.value == status)[0].name
        },
    }
}
</script>
<style lang="stylus" scoped>
.check
   color #09f
   cursor pointer
</style>