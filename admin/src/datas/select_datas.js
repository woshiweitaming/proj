import {
    tradeTypeStatus,
    postionOrderTypeStatus,
    historyOrderTypeStatus,
    userStatus,
    rechargeStatus,
    withdrawStatus,
    productStatus
} from './status_datas'
//交易类型下拉
export const tradeTypeSelect = {
    name: '交易类型',
    key: 'otype',
    type: 'select',
    value: '',
    children: tradeTypeStatus
}
//持仓交易类型下拉
export const positionOrderTypeSelect = {
    name: '账户类型',
    key: 'ordertype',
    type: 'select',
    value: 0,
    children: postionOrderTypeStatus
}
//历史交易类型下拉
export const historyOrderTypeSelect = {
    name: '账户类型',
    key: 'ordertype',
    type: 'select',
    value: 0,
    children: historyOrderTypeStatus
}
//充值状态下拉
export const rechargeStatusSelect = {
    name: '充值状态',
    key: 'status',
    type: 'select',
    value: 1,
    children: rechargeStatus
}
//提现状态下拉
export const withdrawStatusSelect = {
    name: '提现状态',
    key: 'status',
    type: 'select',
    value: 0,
    children: withdrawStatus
}
//产品列表下拉
export const productStatusSelect = {
    name: '状态',
    key: 'state',
    type: 'select',
    value: 0,
    children: productStatus
}
//用户类型下拉
export const userStatusSelect = {
    name: '类型',
    key: 'state',
    type: 'select',
    value: 0,
    children: userStatus
}
//运营中心
export const p1StatusSelect = {
    name: '运营中心',
    key: 'p1',
    type: 'select_p1',
    value: '',
    children: []
}
//代理线
export const p2StatusSelect = {
    name: '代理线',
    key: 'p2',
    type: 'select_p2',
    value: '',
    children: []
}
//代理人
export const p3StatusSelect = {
    name: '代理人',
    key: 'p3',
    type: 'select_p3',
    value: '',
    children: []
}