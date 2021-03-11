<template>
    <div class="table_class">
        <div class="btn_bar">
            <el-button type="primary" class="btn" size="mini" @click="addNotice">添加公告</el-button>
        </div>
        <el-table
            :data="getTableData"
            border
        >
            <el-table-column
                prop="title"
                label="中文标题"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="entitle"
                label="英文标题"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="img"
                label="图片地址"
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
                    <img width="250" v-if="scope.row.img !== null" :src="scope.row.img" >
                    <span slot="reference" class="check">查看</span>
                </el-popover> 
                </template>  
            </el-table-column>
            <el-table-column
                prop="notice"
                label="是否为公告"
                sortable
                show-overflow-tooltip
            >
                <template slot-scope="scope">
                    <span>{{scope.row.notice == 0 ? '是' : '否'}}</span>
                </template>  
            </el-table-column>
                <el-table-column
                prop="operator"
                label="操作"
                sortable
                show-overflow-tooltip
                width="200"
            > 
                    <template slot-scope="scope">
                        <el-button class="table_btn" type="primary" @click="edit(scope.row)" plain size="mini">编辑</el-button>
                        <el-popconfirm
                            title="您确认要删除这条公告吗？"
                            @onConfirm="onConfirm(scope.row)"
                        >
                             <el-button slot="reference" class="table_btn" type="danger" plain size="mini">删除</el-button>
                        </el-popconfirm>
                </template>  
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import recordMixins from '@/mixins/record_mixins'
import { updBanner, delBanner } from '@/api/admins'
import validate from '@/utils/validate'
export default {
    name: 'NoticeRecordTable',
    mixins: [recordMixins],
    methods: {
       edit(data){
           const id = data.id
           this.$router.push({path: '/admin/notice/notice_edit/'+id})
       },
       addNotice(){
           this.$router.push({path: '/admin/notice/notice_edit/0'})
       },
       async del(data){
           const id = data.id
           const params = {id: id, del: 0}
           const res = await delBanner(params)
           validate.checkCode(res, () => {
               this.$tips.successTips('删除成功')
               this.getTableHandler()
           }, msg => {
               this.$tips.errorTips(msg)
           })
       },
       onConfirm(data){
           this.del(data)
       }
    }
}
</script>
<style lang="stylus" scoped>
.btn_bar
  width 80px
  margin-bottom 10px
</style>