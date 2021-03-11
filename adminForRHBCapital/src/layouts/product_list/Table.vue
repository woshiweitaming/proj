<template>
    <div class="table_data_class">
        <el-table
            :data="getTableData.list"
            border
            @sort-change="sortChange"
        >
            <el-table-column
                prop="code"
                label="产品代码"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="id"
                label="产品ID"
                sortable
                width="100"
            >
            </el-table-column>
            <el-table-column
                prop="name"
                label="产品名"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="fee"
                label="手续费"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="sprice"
                label="止赢"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="eprice"
                label="止赢"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="sort"
                label="排序"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="spread"
                label="点差"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="unit"
                label="单位"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="price"
                label="当前价格"
                sortable
            >
                <template slot-scope="scope">
                <span class="price">{{scope.row.price}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="state"
                label="状态"
                sortable
            >
            <template slot-scope="scope">
                <span>{{scope.row.state == 0 ? '正常' : '禁用'}}</span>
            </template>
            </el-table-column>
            <el-table-column
                label="操作"
                width="80"
                v-if="level == 0"
            >
            <template slot-scope="scope">
                <el-button type="success" plain size="mini" @click="edit(scope.row)">编辑</el-button>
            </template>
            </el-table-column>
        </el-table>
        <Drawer size="350px">
           <EditProduct :opt="opt" />
        </Drawer>
    </div>
</template>
<script>
import recordMixins from '@/mixins/record_mixins'
import Drawer from '@/components/Drawer/Drawer'
import EditProduct from '@/layouts/product_list/EditProduct'
export default {
    name: 'ProductRecordTable',
    mixins: [recordMixins],
    data(){
        return {
            opt: {},
            timer: null
        }
    },
    methods: {
        async edit(data){
            this.opt = data
            this.openDrawer()
        },
        setTimer(){
            this.timer = setInterval(() => {
                this.getTableHandler()
            }, 5000)
        },
        clearTimer(){
            clearInterval(this.timer)
            this.timer = null   
        }
    },
    components: {
        Drawer,
        EditProduct
    },
    created(){
        //this.setTimer()
        this.$once('hook:beforeDestroy', () => {            
            clearInterval(this.timer);                                    
        })
    },
}
</script>
<style lang="stylus" scoped>
.price
    color #00f
    font-weight bold
</style>