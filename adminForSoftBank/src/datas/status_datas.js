//交易类型
export const tradeTypeStatus = [
    {
        name: '买入',
        value: 0
    },
    {
        name: '卖出',
        value: 1
    }
]
//持仓交易类型
export const postionOrderTypeStatus = [
    {
        name: '期货',
        value: 0
    },
    {
        name: '合约',
        value: 1
    }
]
//历史交易类型
export const historyOrderTypeStatus = [
    {
        name: '期货',
        value: 0
    },
    {
        name: '合约',
        value: 1
    },
    {
        name: '币币',
        value: 2
    }
]

//充值状态
export const rechargeStatus = [
    {
        name: '待付款',
        value: 0
    },
    {
        name: '待审核',
        value: 1
    },
    {
        name: '充值成功',
        value: 2
    },
    {
        name: '充值失败',
        value: 3
    },
    {
        name: '交易超时',
        value: 4
    },
    {
        name: '撤销充值',
        value: 5
    }
]

//提现状态
export const withdrawStatus = [
    {
        name: '申请中',
        value: 0
    },
    {
        name: '通过',
        value: 1
    },
    {
        name: '未通过',
        value: 2
    }
]
//上级状态
export const adminStatus =[
    {
        name: '运营中心',
        value: 1
    },
    {
        name: '代理线',
        value: 2
    },
    {
        name: '代理人',
        value: 3
    }
]
//账户状态
export const getAccountState = [
    {
        name: '正常',
        value: 0
    },
    {
        name: '锁定',
        value: 1
    },
    {
        name: '冻结',
        value: 2
    }
]
//排序状态
export const getSortOrder = [
    {
        name: '倒序',
        value: 'desc'
    },
    {
        name: '正序',
        value: 'asc'
    }
]
//用户状态
export const userStatus = [
    {
        name: '普通',
        value: 0
    },
    {
        name: '代理',
        value: 1
    },
]
//产品状态
export const productStatus = [
    {
        name: '正常',
        value: 0
    },
    {
        name: '禁用',
        value: 1
    }
]
//审核状态
export const auditingStatus = [
    {
        name: '通过',
        value: 0
    },
    {
        name: '拒绝',
        value: 1
    },
]
//认证状态
export const getAttestationStatus = [
    {
        name: '已认证',
        value: 0
    },
    {
        name: '未认证',
        value: 1
    },
]
//高级认证状态
export const getAdvancedAttestationStatus = [
    {
        name: '未认证',
        value: 0
    },
    {
        name: '初级认证',
        value: 1
    },
    {
        name: '高级认证',
        value: 2
    },
    {
        name: '审核中',
        value: 3
    }
]
//公告状态
export const getNoticeStatus = [
    {
        name: '是',
        value: 0
    },
    {
        name: '否',
        value: 1
    }
]
//持仓操作
export const appointStatus = [
    {
        name: '缺省',
        value: 0
    },
    {
        name: '盈',
        value: 1
    },
    {
        name: '亏',
        value: 2
    }
]
//审核
export const auditingStatusList = [
    {
        name: '通过',
        value: 2
    },
    {
        name: '审核中',
        value: 3
    }
]
//币池订单状态
export const coinPoolOrderStatus = [
    {
        name: '进行中',
        value: 0
    },
    {
        name: '已赎回',
        value: 1
    },
    {
        name: '已完成',
        value: 2
    },
    {
        name: '取消',
        value: 3
    }
]
//币池产品状态
export const coinPoolProductStatus = [
    {
        name: '在售',
        value: 0
    },
    {
        name: '下架',
        value: 1
    }
]
//语言状态
export const langStatus = [
    {
        name: '中文',
        value: 0
    },
    {
        name: '英文',
        value: 1
    },
    {
        name: '日文',
        value: 2
    },
    {
        name: '韩文',
        value: 3
    },
    {
        name: '中文繁体',
        value: 4
    },
    {
        name: '越南文',
        value: 5
    }
]

//语言状态
export const riskStatus = [
    {
        name: '低风险',
        value: 0
    },
    {
        name: '中风险',
        value: 1
    },
    {
        name: '高风险',
        value: 2
    }
]

//锁仓挖矿状态
export const stakingStatus = [
    {
        name: '收益中',
        value: 0
    },
    {
        name: '已完成',
        value: 1
    },
    {
        name: '赎回中',
        value: 2
    },
    {
        name: '已取消',
        value: 3
    },
    {
        name: '赎回完成',
        value: 4
    }
]

//pow挖矿状态
export const yieldStatus = [
    {
        name: '收益中',
        value: 0
    },
    {
        name: '已到期',
        value: 1
    }
]

//修改余额
export const payTypeStatus = [
    {
        name: '自定义',
        value: 0
    },
    {
        name: '存款',
        value: 1
    }
]