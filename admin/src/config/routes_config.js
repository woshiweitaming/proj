const routesConfig = [
    {
        path: '/',
        name: 'Index',
        meta: {
          title: '首页'
        },
        component:  () => import('@/views/index.vue'),
        redirect: '/admin',
        children: [
          {
            path: 'admin',
            name: 'Admin',
            meta: {
              title: '管理员',
              requireAuth: true
            },
            redirect: '/admin/admin_list',
            component:  () => import('@/views/admin/index.vue'),
            children: [
              {
                path: 'admin_list',
                name: 'AdminList',
                meta: {
                  title: '管理员列表',
                  requireAuth: true
                },
                component:  () => import('@/views/admin/admin_list.vue'),
              },
              {
                path: 'create_admin',
                name: 'CreateAdmin',
                meta: {
                  title: '创建管理员',
                  requireAuth: true
                },
                component:  () => import('@/views/admin/create_admin.vue'),
              },
              {
                path: 'paylog_record',
                name: 'PaylogRecord',
                meta: {
                  title: '帐变记录',
                  requireAuth: true
                },
                component:  () => import('@/views/admin/paylog_record.vue'),
              },
              {
                path: 'report_list',
                name: 'ReportList',
                meta: {
                  title: '统计报表',
                  requireAuth: true
                },
                component:  () => import('@/views/admin/report_list.vue'),
              },
              {
                path: 'login_log',
                name: 'LoginLog',
                meta: {
                  title: '登录日志',
                  requireAuth: true
                },
                component:  () => import('@/views/admin/login_log.vue'),
              },
              {
                path: 'website_setting',
                name: 'WebsiteSetting',
                meta: {
                  title: '网站设置',
                  requireAuth: true
                },
                component:  () => import('@/views/admin/website_setting.vue'),
              },
              {
                path: 'pay_setting',
                name: 'PaySetting',
                meta: {
                  title: '支付设置',
                  requireAuth: true
                },
                component:  () => import('@/views/admin/pay_setting.vue'),
              },
              {
                path: 'notice_list',
                name: 'NoticeList',
                meta: {
                  title: '支付设置',
                  requireAuth: true
                },
                component:  () => import('@/views/admin/notice_list.vue'),
              },
              {
                path: 'language_setting',
                name: 'LanguageSetting',
                meta: {
                  title: '语言设置',
                  requireAuth: true
                },
                component:  () => import('@/views/admin/language_setting.vue'),
              },
            ]
          },
          {
            path: 'product',
            name: 'Product',
            meta: {
              title: '产品管理',
              requireAuth: true
            },
            redirect: '/product/product_list',
            component:  () => import('@/views/product/index.vue'),
            children: [
              {
                path: 'product_list',
                name: 'ProductList',
                meta: {
                  title: '产品列表',
                  requireAuth: true
                },
                component:  () => import('@/views/product/product_list.vue'),
              },
            ]
          },
          {
            path: 'recharge',
            name: 'Recharge',
            meta: {
              title: '充值管理',
              requireAuth: true
            },
            redirect: '/recharge/recharge_list',
            component:  () => import('@/views/recharge/index.vue'),
            children: [
              {
                path: 'recharge_list',
                name: 'RechargeList',
                meta: {
                  title: '充值列表',
                  requireAuth: true
                },
                component:  () => import('@/views/recharge/recharge_list.vue'),
              },
            ]
          },
          {
            path: 'withdraw',
            name: 'Withdraw',
            meta: {
              title: '提现管理',
              requireAuth: true
            },
            redirect: '/withdraw/withdraw_list',
            component:  () => import('@/views/withdraw/index.vue'),
            children: [
              {
                path: 'withdraw_list',
                name: 'WithdrawList',
                meta: {
                  title: '提现列表',
                  requireAuth: true
                },
                component:  () => import('@/views/withdraw/withdraw_list.vue'),
              },
            ]
          },
          {
            path: 'member',
            name: 'Member',
            meta: {
              title: '会员列表',
              requireAuth: true
            },
            redirect: '/member/member_list',
            component:  () => import('@/views/member/index.vue'),
            children: [
              {
                path: 'member_list',
                name: 'MemberList',
                meta: {
                  title: '会员列表',
                  requireAuth: true
                },
                component:  () => import('@/views/member/member_list.vue'),
              },
              {
                path: 'auditing',
                name: 'Auditing',
                meta: {
                  title: '会员审核',
                  requireAuth: true
                },
                component:  () => import('@/views/member/auditing.vue'),
              },
            ]
          },
          {
            path: 'financing',
            name: 'Financing',
            meta: {
              title: '理财管理',
              requireAuth: true
            },
            redirect: '/financing/financing_product_list',
            component:  () => import('@/views/financing/index.vue'),
            children: [
              {
                path: 'financing_product_list',
                name: 'FinancingProductList',
                meta: {
                  title: '理财产品',
                  requireAuth: true
                },
                component:  () => import('@/views/financing/financing_product_list.vue'),
              },
              {
                path: 'financing_order_list',
                name: 'FinancingOrderList',
                meta: {
                  title: '理财订单',
                  requireAuth: true
                },
                component:  () => import('@/views/financing/financing_order_list.vue'),
              },
              {
                path: 'financing_report_list',
                name: 'FinancingReportList',
                meta: {
                  title: '理财报表',
                  requireAuth: true
                },
                component:  () => import('@/views/financing/financing_report_list.vue'),
              },
            ]
          },
          {
            path: 'staking',
            name: 'Staking',
            meta: {
              title: '挖矿锁仓',
              requireAuth: true
            },
            redirect: '/staking/staking_product_list',
            component:  () => import('@/views/staking/index.vue'),
            children: [
              {
                path: 'staking_product_list',
                name: 'StakingProductList',
                meta: {
                  title: '产品列表',
                  requireAuth: true
                },
                component:  () => import('@/views/staking/staking_product_list.vue'),
              },
              {
                path: 'staking_order_list',
                name: 'StakingOrderList',
                meta: {
                  title: '订单列表',
                  requireAuth: true
                },
                component:  () => import('@/views/staking/staking_order_list.vue'),
              },
            ]
          },
          {
            path: 'pow',
            name: 'Pow',
            meta: {
              title: 'Pow矿机',
              requireAuth: true
            },
            redirect: '/pow/pow_product_list',
            component:  () => import('@/views/pow/index.vue'),
            children: [
              {
                path: 'pow_product_list',
                name: 'PowProductList',
                meta: {
                  title: '产品列表',
                  requireAuth: true
                },
                component:  () => import('@/views/pow/pow_product_list.vue'),
              },
              {
                path: 'pow_order_list',
                name: 'PowOrderList',
                meta: {
                  title: '订单列表',
                  requireAuth: true
                },
                component:  () => import('@/views/pow/pow_order_list.vue'),
              },
            ]
          },
          {
            path: 'forecast',
            name: 'Forecast',
            meta: {
              title: '预测管理',
              requireAuth: true
            },
            component:  () => import('@/views/forecast/index.vue'),
            children: [
              {
                path: 'forecast_list/:id',
                name: 'ForecastList',
                meta: {
                  title: '',
                  requireAuth: true
                },
                component:  () => import('@/views/forecast/forecast_list.vue'),
              },
            ]
          },
          {
            path: 'line',
            name: 'Line',
            meta: {
              title: '线路管理',
              requireAuth: true
            },
            redirect: '/line/qrcode_link',
            component:  () => import('@/views/line/index.vue'),
            children: [
              {
                path: 'qrcode_link',
                name: 'QrcodeLink',
                meta: {
                  title: '二维码链接',
                  requireAuth: true
                },
                component:  () => import('@/views/line/qrcode_link.vue'),
              },
            ]
          }
        ]
      },
      {
          path: '/login',
          name: 'Login',
          meta: {
              title: '后台管理系统',
              requireAuth: false,
          },
          component: () => import('@/views/login/index'),
      },
      {
          path: '/404',
          name: '404',
          meta: {
            title: '404',
          },
          component: () => import('@/views/404/index'),
          hidden: true
      },
      { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]

export default routesConfig