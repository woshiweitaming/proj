<template>
    <div class="pagination" v-if="getPagination.pageNumber">
        <el-pagination
            :small="true"
            background
            @current-change="currentChangeHandler"
            @size-change="handleSizeChange"
            :current-page="getPagination.pageNumber"
            :page-sizes="[50, 100, 200, 300, 400]"
            layout="total, sizes, prev, pager, next"
            :total="getPagination.total">
        </el-pagination>
    </div>
</template>
<script>
export default {
    name: 'Pagination',
}
</script>
<style lang="stylus" scoped>
.pagination
   text-align center
   height 50px
   width 100%
   position absolute
   bottom 0 
</style>