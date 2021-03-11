<template>
    <div class="record_wrapper_class">
        <div class="record_content">
            <keep-alive>
                <Query :queryData="queryData" :hiddenBtn="hiddenBtn" />
            </keep-alive>
            <Table />
        </div>
        <Pagination v-if="!hiddenPagination" />
    </div>
</template>
<script>
import Query from '@/layouts/record/Query'
import Table from '@/layouts/record/Table'
import Pagination from '@/layouts/record/Pagination'
export default {
    name: 'RecordWrapper',
    props: ['queryData','hiddenBtn', 'hiddenPagination'],
    data(){
        return {
            key: ''
        }
    },
    components: {
        Query,
        Table,
        Pagination,
    },
}
</script>
<style lang="stylus" scoped>
.record_wrapper_class
    height 100%
    padding-bottom 60px
    position relative
    box-sizing border-box
.record_wrapper_class .record_content
    height 100%
    display flex
    flex-direction column
    
</style>