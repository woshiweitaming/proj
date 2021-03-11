<template>
    <div class="table_class">
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
                prop="otype"
                label="账户类型"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="price"
                label="变更金额"
                sortable
                show-overflow-tooltip
            >
                <template slot-scope="scope">
                    <span :class="scope.row.price > 0 ? 'green' : 'red'">{{scope.row.price}}</span>
                </template>  
            </el-table-column>
            <el-table-column
                prop="explain"
                label="说明"
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
                prop="time"
                label="操作时间"
                sortable
                show-overflow-tooltip
            >
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import recordMixins from '@/mixins/record_mixins'
export default {
    name: 'PaylogRecordTable',
    mixins: [recordMixins],
    methods: {
    }
}
</script>   