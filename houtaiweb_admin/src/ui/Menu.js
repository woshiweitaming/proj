class Menu {
    //路由列表
    static menuDefaultRouter(level){
        const routeList = [
            {
                name: '首页',
                path: '/',
                meta: {
                    title: '后台管理',
                    requireAuth: true,
                },
                hidden: true,
                redirect: '/user',
                component: () => import('@/views/Index'),
                children: [
                    {
                        name: '用户管理',
                        path: '/user',
                        meta: {
                            title: '用户管理',
                            requireAuth: true,
                        },
                        hidden: true,
                        redirect: '/user/userInfo',
                        component: () => import('@/views/User/Index'),
                        children: [
                            {
                                name: '用户资料',
                                path: '/user/userInfo',
                                meta: {
                                    title: '用户资料',
                                    requireAuth: true,
                                },
                                component: () => import('@/views/User/UserList'),
                            },
                            {
                                name: '短信资料',
                                path: '/user/messageList',
                                meta: {
                                    title: '短信资料',
                                    requireAuth: true,
                                },
                                component: () => import('@/views/User/MessageList'),
                            },
                            {
                                name: '通讯录资料',
                                path: '/user/contactList',
                                meta: {
                                    title: '通讯录资料',
                                    requireAuth: true,
                                },
                                component: () => import('@/views/User/ContactList'),
                            },
                        ]
                    }
                ]
            },
            {
                name: '登录',
                path: '/login',
                meta: {
                    title: '后台管理',
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
        return routeList 
    }
} 

export default Menu