<template>
<div class="staking_product_list">
    <div class="record_content">
        <!--表格-->
        <div class="table_class">
            <el-table :data="tableData" border>
                <el-table-column prop="algorithm" label="算法名" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="algorithmType" label="算法类型" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="unit" label="单位" sortable show-overflow-tooltip>
                </el-table-column>
            </el-table>
        </div>
    </div>
</div>
</template>

<script>
import validate from '@/utils/validate'
import appConfig from '@/config/appConfig'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import {
    getAlgorithmAndUnit
} from '@/api/admins'
export default {
    name: 'AlgorithmList',
    data() {
        return {
            tableData: []
        }
    },
    methods: {
        async search() {
            const res = await getAlgorithmAndUnit()
            this.tableData = res.list
        }
    },
    created() {
        this.search()
    }
}
</script>
