<template>
   <RecordWrapper :queryData="queryData" :hiddenBtn="true" :hiddenPagination="true" />
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import RecordWrapper from '@/layouts/record/Index'
import queryMixins from '@/mixins/query_mixins'
import recordMixins from '@/mixins/record_mixins'
import { getProductPriceList } from '@/api/admins'
export default {
    name: 'RechargeRecord',
    mixins: [queryMixins, recordMixins],
    components: {
        RecordWrapper
    },
    data(){
        return {
            queryData: []
        }
    },
    methods: {
        async createQurey(){
            const paths = this.$route.path.split('/')
            const id = paths[paths.length - 1]
            const params = {id: id}
            const res = await getProductPriceList(params)
            this.setTableData(res.data)
            this.setRefreshForecastRecord(false)
        },
        ...mapMutations({
            setRefreshForecastRecord: 'SET_REFRESH_FORECAST_RECORD'
        })
    },
    computed: {
        ...mapGetters({
            getIsRefreshForecastRecord: 'getIsRefreshForecastRecord'
        })
    },
    created(){
        this.createQurey()
    },
    watch: {
        $route(to, from){
            this.createQurey()
        },
        getIsRefreshForecastRecord(val){
            if(val){
                this.createQurey()
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
</style>