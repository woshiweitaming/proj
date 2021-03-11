class Select{
    static getAdminType(){
        return [
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
    }
    static getAccountState(){
        return [
            {
                name: '正常',
                value: 0
            },
            {
                name: '锁定',
                value: 1
            }
        ]
    }
    static getSortOrder(){
        return [
            {
                name: '倒序',
                value: 'desc'
            },
            {
                name: '正序',
                value: 'asc'
            }
        ]
    }
    static getState(){
        return [
        ]
    }
    static getPayState(){
        return [
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
    }
    static getDrawithState(){
        return [
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
    }
    static getUType(){
        return [
            {
                name: '普通',
                value: 0
            },
            {
                name: '代理',
                value: 1
            },
        ]
    }
    static getOType(){
        return [
            {
                name: '买入',
                value: 0
            },
            {
                name: '卖出',
                value: 1
            },
        ]
    }
    static getProState(){
        return [
            {
                name: '正常',
                value: 0
            },
            {
                name: '禁用',
                value: 1
            },
        ]
    }
    static getPassType(){
        return [
            {
                name: '通过',
                value: 0
            },
            {
                name: '拒绝',
                value: 1
            },
        ]
    }
    static getAttestation(){
        return [
            {
                name: '已认证',
                value: 0
            },
            {
                name: '未认证',
                value: 1
            },
        ]
    }
}

export default Select