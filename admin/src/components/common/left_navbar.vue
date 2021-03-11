<template>
    <div class="index_container">
        <div class="layui-side layui-bg-black">
            <div class="layui-side-scroll">
                <div class="layui-nav layui-nav-tree site-demo-nav">
                    <ul class="layui-nav layui-nav-tree" lay-filter="test" lay-shrink="all">
                        <li :class="['layui-nav-item', $route.path.indexOf(curItem.path) > -1 ? 'layui-nav-itemed' : '']" v-for="(curItem, index) in routeList" :key="index">
                            <a href="javascript:;">{{curItem.meta.title}}</a>
                            <dl class="layui-nav-child">
                                <dd :class="[$route.path == `/${curItem.path}/${ele.path}` ? 'layui-this' : '']" v-for="(ele, idx) in curItem.children" :key="idx"><a :href="`/#/${curItem.path}/${ele.path}`">{{ele.meta.title}}</a></dd>
                            </dl>
                        </li>
                     </ul>
                </div>
            </div>
        </div>
        <router-view />
    </div>
</template>
<script>
import routesConfig from '@/config/routes_config'
export default {
    name: 'Left_navbar',
    data(){
        return {
            routeList: routesConfig[0].children
        }
    },
}
</script>