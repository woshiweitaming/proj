<template>
<div class="record_wrapper_class">
    <div class="record_content">
        <!--查询-->
        <div class="query_class">
            <div class="query_data_class">
                <div class="query_items">
                    <div class="query_label">
                        <span>产品名称</span>
                        <el-input clearable type="text" class="input_bar" v-model="params.name" size="mini"></el-input>
                    </div>
                </div>
                <div class="query_items">
                    <div class="query_label">
                        <span>状态</span>
                        <el-select clearable class="input_bar" size="mini" v-model="params.state" placeholder="请选择">
                            <el-option v-for="(items, index) in productStatus" :key="index" :label="items.name" :value="items.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="query_items">
                    <el-button type="primary" @click="search" size="mini">查询</el-button>
                </div>
            </div>
        </div>
        <!--表格-->
        <div class="table_class">
            <div class="table_data_class">
                <el-table :data="tableData" border @sort-change="sortChange">
                    <el-table-column prop="code" label="产品代码" sortable>
                    </el-table-column>
                    <el-table-column prop="id" label="产品ID" sortable width="100">
                    </el-table-column>
                    <el-table-column prop="name" label="产品名" sortable>
                    </el-table-column>
                    <el-table-column prop="fee" label="手续费" sortable>
                    </el-table-column>
                    <el-table-column prop="sprice" label="止赢" sortable>
                    </el-table-column>
                    <el-table-column prop="eprice" label="止赢" sortable>
                    </el-table-column>
                    <el-table-column prop="sort" label="排序" sortable>
                    </el-table-column>
                    <el-table-column prop="spread" label="点差" sortable>
                    </el-table-column>
                    <el-table-column prop="unit" label="单位" sortable>
                    </el-table-column>
                    <el-table-column prop="price" label="当前价格" sortable>
                        <template slot-scope="scope">
                            <span class="price">{{scope.row.price}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="state" label="状态" sortable>
                        <template slot-scope="scope">
                            <span>{{scope.row.state == 0 ? '正常' : '禁用'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="80" v-if="level == 0">
                        <template slot-scope="scope">
                            <el-button type="success" plain size="mini" @click="edit(scope.row)">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <Drawer size="350px">
                    <EditProduct @callback="callback" :opt="opt" />
                </Drawer>
            </div>
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
    mapMutations
} from 'vuex'
import {
    productStatus
} from '@/datas/status_datas'
import {
    getProductList
} from '@/api/admins'
import appConfig from '@/config/appConfig'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import Drawer from '@/components/Drawer/Drawer'
import EditProduct from '@/layouts/product_list/EditProduct'
export default {
    name: 'RechargeRecord',
    mixins: [commonMixins, recordMixins, paginationMixins],
    components: {
        Drawer,
        EditProduct
    },
    data() {
        return {
            params: {
                state: 0,
                name: '',
                pageNumber: 1,
                pageSize: 50
            },
            total: 0,
            productStatus: productStatus,
            //表格
            tableData: [],
            //弹窗
            opt: {},
            domain: appConfig.domain,
            level: '',
            timer: null
        }
    },
    methods: {
        /**
         * 查询
         */
        async search() {
            const params = JSON.parse(JSON.stringify(this.params))
            const res = await getProductList(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
        },
        //编辑
        async edit(data) {
            this.opt = data
            this.openDrawer()
        },
        setTimer() {
            this.timer = setInterval(() => {
                this.search()
            }, 5000)
        }
    },
    created() {
        this.level = this.$storage.getLocalData('level')
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
