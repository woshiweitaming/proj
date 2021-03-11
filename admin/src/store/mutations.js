const mutations = {
    //设置查询条件数据
    ['SET_QUERY_DATA'](state, data){
        state.queryData = data
    },
    //设置分页数据
    ['SET_PAGINATION'](state, data){
        state.pagination = data
    },
    //设置记录回调
    ['SET_RECORD_CALLBACK'](state, data){
        state.recordCallback = data
    },
    //设置记录数据
    ['SET_TABLE_DATA'](state, data){
        state.tableData = data
    },
    //设置状态
    ['SET_DRAWER_STATUS'](state, data){
        state.drawerStatus = data
    },
    //设置修改密码状态
    ['SET_UPDPWD_DRAWER_STATUS'](state, data){
        state.updpwdDrawerStatus = data
    },
    //刷新预测表
    ['SET_REFRESH_FORECAST_RECORD'](state, data){
        state.isRefreshForecastRecord = data
    },
    //切换修改余额弹窗状态
    ['SET_LEFTMONEY_DIALOG_STATUS'](state, data){
        state.changeLeftmoneyDialogStatus = data
    },
    //切换查看余额弹窗状态
    ['SET_CHECK_LEFTMONEY_DIALOG_STATUS'](state, data){
        state.checkLeftmoneyDialogStatus = data
    },
    ['SET_PRODUCT_LIST'](state, data){
        state.productList = data
    }
}

export default mutations