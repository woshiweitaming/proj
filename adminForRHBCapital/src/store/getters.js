//获取查询条件
export const getQueryData = state => state.queryData
//获取分页数据
export const getPagination = state => state.pagination
//获取记录回调
export const getRecordCallback = state => state.recordCallback
//获取记录数据
export const getTableData = state => state.tableData
export const getDrawerStatus = state => state.drawerStatus
//获取抽屉状态
export const getUpdpwdDrawerStatus = state => state.updpwdDrawerStatus
//获取预测表刷新状态
export const getIsRefreshForecastRecord = state => state.isRefreshForecastRecord
//获取修改余额弹窗状态
export const getChangeLeftmoneyDialogStatus = state => state.changeLeftmoneyDialogStatus
//获取查看余额弹窗状态
export const getCheckLeftmoneyDialogStatus = state => state.checkLeftmoneyDialogStatus
export const getProductList = state => state.productList