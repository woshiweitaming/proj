/**
 * 查询混入组件
 */
import { mapMutations, mapGetters } from 'vuex'
import { formatDate } from '@/utils/utils'
const queryMixins = {
    methods: {
        async search(){
            this.makeQueryData(this.queryData)
        },
        /**
         * 创建查询数据
         */
        makeQueryData(data){
            let queryData = {}
            data.forEach((items, index) => {
                const date = new Date()
                const currStartDate = new Date(formatDate(date) + ' 00:00:00').getTime()
                const currEndDate = new Date(formatDate(date) + ' 23:59:59').getTime()
                // if(items.key === 'p1' || items.key === 'p2' || items.key === 'p3'){
                //     items.value = ''
                // }
                if(items.key == 'start_date_hms'){
                    items.value = currStartDate * 1000
                }
                if(items.key == 'end_date_hms'){
                    items.value = currEndDate * 1000
                }
                if(items.key == 'start_date'){
                    items.value = currStartDate  
                }
                if(items.key == 'end_date'){
                    items.value = currEndDate  
                }
                queryData[items.key] = items.value
            })
            this.setQueryData(queryData)
            this.getTableHandler()
        },
        ...mapMutations({
            setQueryData: 'SET_QUERY_DATA',
            setRecordCallback: 'SET_RECORD_CALLBACK'
        })
    },
    computed:{
        ...mapGetters({
            getPagination: 'getPagination',
            getQueryData: 'getQueryData'
        })
    },
    watch: {
        $route(to, from){
            const queryData = this.getQueryData
            queryData.p1 = ''
            queryData.p2 = ''
            queryData.p3 = ''
            this.setQueryData(queryData)
        }
    }
}

export default queryMixins