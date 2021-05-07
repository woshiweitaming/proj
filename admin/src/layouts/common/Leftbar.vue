<template>
<div class="leftbar_class">
    <img class="logo" :src="logo">
    <div class="menu_main_class">
        <el-menu router :default-active="getDefaultActive" class="el-menu-vertical-demo" background-color="#20242d" text-color="#fff" active-text-color="#fff" :unique-opened="true">
            <el-submenu v-show="getShow(items)" :index="items.path" v-for="(items, index) in routeList.length > 0 && routeList[0].children" :key="index">
                <template slot="title">
                    <span>{{items.name}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-show="!value.hidden" v-for="(value, key) in items.children" :key="key" :index="value.path">
                        <span>{{value.name}}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</div>
</template>

<script>
import appConfig from '@/config/appConfig'
import routeMenuDatas from '@/datas/route_menu_datas'
import {
    getProPage
} from '@/api/admins'
export default {
    name: 'Leftbar',
    data() {
        return {
            logo: appConfig.logo,
            routeList: [],
            level: ''
        }
    },
    computed: {
        getDefaultActive() {
            if (this.$route.path.indexOf('/admin/notice') > -1) {
                return '/admin/notice'
            }
            return this.$route.path
        },
        getShow() {
            return items => {
                return items.meta.level.findIndex(res => res == this.level) > -1
            }
        }
    },
    methods: {
        async getProPageHanlder() {
            if (this.level == 0) {
                const res = await getProPage()
                const routeList = routeMenuDatas[0].children
                if (typeof res.data !== 'undefined') {
                    const forecast = routeList.filter(d => d.path === '/forecast')[0]
                    res.data.forEach((items, index) => {
                        const route = {
                            name: items.name,
                            path: '/forecast/forecast_list/' + items.id,
                            meta: {
                                title: items.name,
                                requireAuth: true,
                                isHidden: false,
                            },
                            component: () => import('@/views/forecast/index'),
                        }
                        forecast.children.push(route)
                    })
                    routeMenuDatas[0].children = routeList
                }
            }
            this.routeList = routeMenuDatas
        }
    },
    created() {
        this.level = this.$storage.getLocalData('level')
        this.getProPageHanlder()
    }
}
</script>

<style scoped>
.logo {
    width: 120px;
    margin: 10px auto;
    display: block;
}

.el-menu {
    border-right: none !important
}

.el-menu-item.is-active {
    background: #409eff !important
}

.leftbar_class {
    height: 100%;
}

.menu_main_class {
    overflow: auto;
    height: 100%;
}
</style>
