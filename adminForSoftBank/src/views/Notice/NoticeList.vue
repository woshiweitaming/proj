<template>
    <div class="record_wrapper_class">
        <div class="record_content">
            <!--查询-->
            <div class="query_class">
                <div class="query_data_class">
                    <div class="query_items">
                        <div class="query_label" >
                            <span>语言类型</span>
                            <el-select v-model="params.type" placeholder="请选择" size="mini">
                                <el-option
                                    v-for="item in typeList"
                                    :key="item.name"
                                    :label="item.name"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="query_items">
                        <el-button type="primary" @click="search" size="mini">查询</el-button>
                    </div>
                    <div class="query_items">
                        <el-button type="primary" @click="addNotice" size="mini">添加公告</el-button>
                    </div>
                </div>
            </div>
            <!--表格-->
            <div class="table_class">
                <div class="table_data_class">
                    <el-table
                        :data="tableData"
                        border
                        @sort-change="sortChange"
                    >
                        <el-table-column
                            prop="title"
                            label="标题"
                            sortable
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                            prop="type"
                            label="语言"
                            sortable
                            show-overflow-tooltip
                        >
                            <template slot-scope="scope">
                                <span>{{typeList.filter(res => res.value == scope.row.type)[0].name}}</span>
                            </template>  
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
import { mapMutations } from 'vuex'
import { getBanner, delBanner, getNBanner } from '@/api/admins'
import appConfig from '@/config/appConfig'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import validate from '@/utils/validate'
import { langStatus } from '@/datas/status_datas'
export default {
    name: 'NoticeList',
    mixins: [parentSelectMixins, commonMixins, recordMixins, paginationMixins],
    data(){
        return {
            total: 0,
            //表格
            tableData: [],
            //弹窗
            opt: {},
            params: {
                type: ''
            },
            typeList: langStatus,
            domain: appConfig.domain,
            level: ''
        }
    },
    methods: {
        /**
         * 查询
         */
        async search(){
            const params = JSON.parse(JSON.stringify(this.params))
            delete params.p1
            delete params.p2
            delete params.p3
            const res = await getNBanner(params)
            this.tableData = res.data
        },
        edit(data){
           const id = data.id
           this.$router.push({path: '/admin/notice/notice_edit/'+id})
       },
       addNotice(){
           this.$router.push({path: '/admin/notice/notice_edit/0'})
       },
       async del(data){
           const id = data.id
           const params = {id: id, del: 0, type: '0'}
           const res = await delBanner(params)
           validate.checkCode(res, () => {
               this.$tips.successTips('删除成功')
               this.search()
           }, msg => {
               this.$tips.errorTips(msg)
           })
       },
       onConfirm(data){
           this.del(data)
       }
    },
    created(){
        this.level = this.$storage.getLocalData('level')
        this.setTimeDate()
        this.search()
    },
}
</script>
<style lang="stylus" scoped>
</style>