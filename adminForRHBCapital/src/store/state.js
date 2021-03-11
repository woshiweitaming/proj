const state = {
    //分页
    pagination: {
        pageNumber: 1,
        pageSize: 50,
        total: 0
    },
    //查询条件
    queryData: {},
    //记录回调
    recordCallback: {},
    //记录数据
    tableData: [],
    drawerStatus: false,
    //打开抽屉
    updpwdDrawerStatus: false,
    //修改余额弹窗状态
    changeLeftmoneyDialogStatus: false,
    //查看余额弹窗状态
    checkLeftmoneyDialogStatus: false,
    //是否刷新预测表
    isRefreshForecastRecord: false,
    productList: []
}


export default state