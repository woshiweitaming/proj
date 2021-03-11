/**
 * 记录混入
 */
import { mapGetters, mapMutations } from 'vuex'
import { formatDate } from '@/utils/utils'
const recordMixins = {
    data(){
        return {
            level: 0,
            tableData: [],
        }
    },
    methods: {
        //排序切换
        sortChange(column){
            this.params['sortname'] = column.prop
            this.params['sortorder'] = column.order === 'ascending' ? 'asc' : 'desc'
            this.search()
        },
        //打开抽屉
        openDrawer(){
            this.setDrawerStatus(true)
        },
        callback(){
            this.search()
        },
        //设置时间
        setTimeDate(hms){
            const date = new Date()
            
            // //带时分秒
            // const currStartDate = new Date(formatDate(date) + ' 00:00:00').getTime()
            // const currEndDate = new Date(formatDate(date) + ' 23:59:59').getTime()
            // if(hms){
            //    // this.params.start_time = currStartDate * 1000
            //     this.params.end_time = currEndDate * 1000
            // }else{
            //     //this.params.start_time = currStartDate
            //     this.params.end_time = currEndDate
            // }
        },
        // //排序切换
        // sortChange(column){
        //     let params = this.getQueryData
        //     params['sortname'] = column.prop
        //     params['sortorder'] = column.order === 'ascending' ? 'asc' : 'desc'
        //     this.setQueryData(params)
        // },
        // async getTableHandler(){
        //     const paramsData = this.getQueryData
        //     if(paramsData.start_time || paramsData.end_time){
        //         if(paramsData.start_time != null){
        //             paramsData.start_time = paramsData.start_time.toString().length === 13 ? paramsData.start_time / 1000 :  paramsData.start_time
        //         }
        //         if(paramsData.end_time != null){
        //             paramsData.end_time = paramsData.end_time.toString().length === 13 ? paramsData.end_time / 1000 :  paramsData.end_time
        //         }
        //     }
        //     const params = Object.assign(paramsData, this.getPagination)
        //     const res = await this.getRecordCallback(params)
        //     const data = res.data
        //     const paginationData = res.data.pageNumber 
        //     ? { pageNumber: res.data.pageNumber, pageSize: res.data.pageSize, total: res.data.totalRow }
        //     : {}
        //     this.setTableData(data)
        //     this.setPagination(paginationData)
        // },
        // //打开抽屉
        // openDrawer(){
        //     this.setDrawerStatus(true)
        // },
        ...mapMutations({
            setPagination: 'SET_PAGINATION',
            setTableData: 'SET_TABLE_DATA',
            setQueryData: 'SET_QUERY_DATA',
            setDrawerStatus: 'SET_DRAWER_STATUS'
        })
    },
    computed: {
        ...mapGetters({
            getPagination: 'getPagination',
            getQueryData: 'getQueryData',
            getRecordCallback: 'getRecordCallback',
            getTableData: 'getTableData',
            getDrawerStatus: 'getDrawerStatus'
        })
    },
}

export default recordMixins