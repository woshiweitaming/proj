/**
 * 路由菜单表
 */
import appConfig from '@/config/appConfig'
const routeMenuDatas = [
    {
        name: '首页',
        path: '/',
        meta: {
            title: appConfig.appName,
            requireAuth: true,
        },
        hidden: true,
        redirect: '/recharge',
        component: () => import('@/views/Index'),
        children: [
            //管理员
            {
                name: '管理员',
                path: '/admin',
                redirect: '/admin/admin_list',
                meta: {
                    title: appConfig.appName,
                    requireAuth: true,
                    level: [0]
                },
                hidden: true,
                component: () => import('@/views/Admin/Index'),
                children: [
                    {
                        name: '管理员列表',
                        path: '/admin/admin_list',
                        meta: {
                            title: '管理员列表',
                            requireAuth: true
                        },
                        component: () => import('@/views/Admin/AdminList'),
                    },
                    {
                        name: '创建管理员',
                        path: '/admin/create_admin',
                        meta: {
                            title: '创建管理员',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Admin/CreateAdmin'),
                    },
                    {
                        name: '帐变记录',
                        path: '/admin/paylog_record',
                        meta: {
                            title: '帐变记录',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Admin/PaylogRecord'),
                    },
                    {
                        name: '登录日志',
                        path: '/admin/login_log',
                        meta: {
                            title: '帐变记录',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Admin/LoginLog'),
                    },
                    {
                        name: '网站设置',
                        path: '/admin/website_setting',
                        meta: {
                            title: '网站设置',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Admin/WebsiteSetting'),
                    },
                    {
                        name: '支付设置',
                        path: '/admin/pay_setting',
                        meta: {
                            title: '支付设置',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Admin/PaySetting'),
                    },
                    {
                        name: '公告管理',
                        path: '/admin/notice',
                        meta: {
                            title: '公告管理',
                            requireAuth: true,
                        },
                        redirect: '/admin/notice/notice_list',
                        component: () => import('@/views/Notice/Index'),
                        children: [
                            {
                                name: '公告列表',
                                path: '/admin/notice/notice_list',
                                meta: {
                                    title: '公告列表',
                                    requireAuth: true,
                                },
                                component: () => import('@/views/Notice/NoticeList'),
                            },
                            {
                                name: '公告编辑',
                                path: '/admin/notice/notice_edit/:id',
                                meta: {
                                    title: '公告编辑',
                                    requireAuth: true
                                },
                                component: () => import('@/views/Notice/NoticeEdit'),
                            }
                        ]
                    },
                    {
                        name: '语言配置',
                        path: '/admin/language',
                        meta: {
                            title: '语言配置',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Language/Index'),
                    },
                ]
            },
            {
                name: '报表管理',
                path: '/report',
                redirect: '/report/report_list',
                meta: {
                    title: appConfig.appName,
                    requireAuth: true,
                    level: [0,1,2,3]
                },
                hidden: true,
                component: () => import('@/views/Report/Index'),
                children: [
                    {
                        name: '统计报表',
                        path: '/admin/report_list',
                        meta: {
                            title: '统计报表',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Admin/ReportList'),
                    },
                ]
            },
            {
                name: '产品管理',
                path: '/product',
                redirect: '/product/product_list',
                meta: {
                    title: appConfig.appName,
                    requireAuth: true,
                    level: [0]
                },
                hidden: true,
                component: () => import('@/views/Product/Index'),
                children: [
                    {
                        name: '产品列表',
                        path: '/product/product_list',
                        meta: {
                            title: '产品列表',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Product/ProductList'),
                    }
                ]
            },
            {
                name: '充值管理',
                path: '/recharge',
                redirect: '/recharge/recharge_record',
                meta: {
                    title: appConfig.appName,
                    requireAuth: true,
                    level: [0,1,2,3]
                },
                hidden: true,
                component: () => import('@/views/Recharge/Index'),
                children: [
                    {
                        name: '充值记录',
                        path: '/recharge/recharge_record',
                        meta: {
                            title: '充值记录',
                            requireAuth: true,
                            keepAlive: true
                        },
                        component: () => import('@/views/Recharge/RechargeRecord'),
                    }
                ]
            },
            {
                name: '提现管理',
                path: '/withdraw',
                redirect: '/withdraw/withdraw_record',
                meta: {
                    title: appConfig.appName,
                    requireAuth: true,
                    level: [0,1,2,3]
                },
                hidden: true,
                component: () => import('@/views/Withdraw/Index'),
                children: [
                    {
                        name: '提现记录',
                        path: '/withdraw/withdraw_record',
                        meta: {
                            title: '提现记录',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Withdraw/WithdrawRecord'),
                    }
                ]
            },
            {
                name: '会员管理',
                path: '/member',
                redirect: '/member/member_list',
                meta: {
                    title: appConfig.appName,
                    requireAuth: true,
                    level: [0,1,2,3]
                },
                hidden: true,
                component: () => import('@/views/Member/Index'),
                children: [
                    {
                        name: '会员列表',
                        path: '/member/member_list',
                        meta: {
                            title: '会员列表',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Member/MemberList'),
                    },
                    {
                        name: '认证审核',
                        path: '/member/auditing',
                        meta: {
                            title: '认证审核',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Member/Auditing'),
                    },
                ]
            },
            {
                name: '订单管理',
                path: '/order',
                redirect: '/order/position_list',
                meta: {
                    title: appConfig.appName,
                    requireAuth: true,
                    level: [0,1,2,3]
                },
                hidden: true,
                component: () => import('@/views/Order/Index'),
                children: [
                    {
                        name: '持仓订单',
                        path: '/order/position_order_list',
                        meta: {
                            title: '持仓订单',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Order/PositionOrderList'),
                    },
                    {
                        name: '平仓订单',
                        path: '/order/history_order_list',
                        meta: {
                            title: '平仓订单',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Order/HistoryOrderList'),
                    },
                ]
            },
            {
                name: '理财管理',
                path: '/financing',
                redirect: '/financing/financing_product_list',
                meta: {
                    title: appConfig.appName,
                    requireAuth: true,
                    level: [0,1,2,3]
                },
                hidden: true,
                component: () => import('@/views/Financing/Index'),
                children: [
                    {
                        name: '理财产品',
                        path: '/financing/financing_product_list',
                        meta: {
                            title: '理财产品', 
                            requireAuth: true,
                        },
                        component: () => import('@/views/Financing/FinancingProductList'),
                    },
                    {
                        name: '理财订单',
                        path: '/financing/financing_order_list',
                        meta: {
                            title: '理财订单',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Financing/FinancingOrderList'),
                    },
                    {
                        name: '理财报表',
                        path: '/financing/financing_report_list',
                        meta: {
                            title: '理财报表',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Financing/FinancingReportList'),
                    },
                ]
            },
            {
                name: '挖矿锁仓',
                path: '/staking',
                redirect: '/staking/staking_product_list',
                meta: {
                    title: appConfig.appName,
                    requireAuth: true,
                    level: [0,1,2,3]
                },
                hidden: true,
                component: () => import('@/views/Staking/Index'),
                children: [
                    {
                        name: '产品列表',
                        path: '/staking/staking_product_list',
                        meta: {
                            title: '产品列表', 
                            requireAuth: true,
                        },
                        component: () => import('@/views/Staking/StakingProductList'),
                    },
                    {
                        name: '订单列表',
                        path: '/staking/staking_order_list',
                        meta: {
                            title: '订单列表', 
                            requireAuth: true,
                        },
                        component: () => import('@/views/Staking/StakingOrderList'),
                    },
                ]
            },
            {
                name: 'Pow矿机',
                path: '/pow',
                redirect: '/pow/pow_product_list',
                meta: {
                    title: appConfig.appName,
                    requireAuth: true,
                    level: [0,1,2,3]
                },
                hidden: true,
                component: () => import('@/views/Staking/Index'),
                children: [
                    {
                        name: '产品列表',
                        path: '/pow/pow_product_list',
                        meta: {
                            title: '产品列表', 
                            requireAuth: true,
                        },
                        component: () => import('@/views/Pow/PowProductList'),
                    },
                    {
                        name: '挖矿订单',
                        path: '/pow/order_list',
                        meta: {
                            title: '挖矿订单', 
                            requireAuth: true,
                        },
                        component: () => import('@/views/Pow/OrderList'),
                    }
                ]
            },
            {
                name: '预测管理',
                path: '/forecast',
                redirect: '/forecast/:name',
                meta: {
                    title: appConfig.appName,
                    requireAuth: true,
                    level: [0]
                },
                hidden: true,
                component: () => import('@/views/Forecast/Index'),
                children: [
                    {
                        name: '预测表',
                        path: '/forecast/forecast_list/:id',
                        hidden: true,
                        meta: {
                            title: '预测表',
                            requireAuth: true,
                            level: 0
                        },   
                        component: () => import('@/views/Forecast/ForecastList'),     
                    },
                ]
            },
            {
                name: '线路管理',
                path: '/line',
                redirect: '/line/qrcode_link',
                meta: {
                    title: appConfig.appName,
                    requireAuth: true,
                    level: [0,1,2,3]
                },
                hidden: true,
                component: () => import('@/views/Line/Index'),
                children: [
                    {
                        name: '二维码链接',
                        path: '/line/qrcode_link',
                        meta: {
                            title: '二维码链接',
                            requireAuth: true,
                        },
                        component: () => import('@/views/Line/QrcodeLink'),
                    },
                ]
            }
        ]
    },
    {
        name: 'Login',
        path: '/login',
        meta: {
            title: 'DBS后台管理',
            requireAuth: false,
        },
        component: () => import('@/views/Login'),
    },
    {
        path: '/404',
        meta: {
           title: '404',
        },
        component: () => import('@/views/404'),
        hidden: true
    },
    { path: '*', redirect: '/404', hidden: true }
]

export default routeMenuDatas