/**
 * 通用混入组件
 */
import { mapMutations, mapGetters } from 'vuex'
import appConfig from '@/config/appConfig'
const commonMixins = {
    data(){
        return {
            domain: appConfig.domain,
        }
    },
    methods: {
        //重置分页数据
        resetPaginationHandler(){
            this.setPagination({
                pageNumber: 1,
                pageSize: 50,
                total: 0
            })
        },
        //重置查询数据
        resetQueryData(){
            this.setQueryData(this.getQueryData)
        },
        //提示
        backTips(res){
            this.$tips.successTips(res.rpMsg)
        },
        toStartDate(date){
            if(date == '' || date == null) return ''
            return (new Date(date + ' 00:00:00').getTime()) / 1000
        },
        toEndDate(date){
            if(date == ''  || date == null) return ''
            return (new Date(date + ' 23:59:59').getTime()) / 1000
        },
        ...mapMutations({
            setPagination: 'SET_PAGINATION',
            setQueryData: 'SET_QUERY_DATA',
            setTableData: 'SET_TABLE_DATA'
        })
    },
    computed: {
        ...mapGetters({
            getQueryData: 'getQueryData'
        })
    },
    // watch: {
    //     $route(to, from){
    //         this.resetPaginationHandler()
    //         this.resetQueryData()
    //         // this.setTableData([])
    //     }
    // }
}

export default commonMixins