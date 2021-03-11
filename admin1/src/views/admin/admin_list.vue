<template>
   <div class="container">
       <div class="query">
            <form class="layui-form layui-form-pane" onsubmit="return false" action="#">
                <div class="layui-form-item">
                    <div class="layui-inline">
                        <label class="layui-form-label">用户名</label>
                        <div class="layui-input-inline">
                            <input type="text" v-model="form.uname" autocomplete="off" class="layui-input">
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">姓名</label>
                        <div class="layui-input-inline">
                            <input type="text" v-model="form.name" autocomplete="off" class="layui-input">
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">账户类型</label>
                        <div class="layui-input-inline">
                            <select name="interest" lay-filter="accountTypes">
                                <option v-for="(curItems, index) in accountTypes" :key="index" :value="curItems.value">{{curItems.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">运营中心</label>
                        <div class="layui-input-inline">
                            <select name="interest" lay-filter="accountTypes">
                                <option v-for="(curItems, index) in accountTypes" :key="index" :value="curItems.value">{{curItems.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">代理线</label>
                        <div class="layui-input-inline">
                            <select name="interest" lay-filter="accountTypes">
                                <option v-for="(curItems, index) in accountTypes" :key="index" :value="curItems.value">{{curItems.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <button type="submit" class="layui-btn layui-btn-sm layui-btn-normal" lay-filter="data-search-btn"><i class="layui-icon"></i> 搜 索</button>
                    </div>
                </div>
            </form>
       </div>
       <div class="table">
       </div> 
   </div>
</template>
<script>
import commonMixins from '@/mixins/common_mixins'
import staticDatas from '@/config/static_datas'
export default {
    name: 'AdminList',
    mixins: [commonMixins],
    data(){
        return {
            form: {
                uname: '',
                name: ''
            },
            accountTypes: staticDatas.accountTypes
        }
    },
    methods: {
        search(){
            layui.use('table', function(){
                const table = layui.table;
                //第一个实例
                table.render({
                    elem: '#table_main'
                    ,height: 312
                    ,url: 'https://www.layui.com/demo/table/user' //数据接口
                    ,page: true //开启分页
                    ,cols: [[ //表头
                     {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
                    ,{field: 'username', title: '用户名', width:80}
                    ,{field: 'sex', title: '性别', width:80, sort: true}
                    ,{field: 'city', title: '城市', width:80} 
                    ,{field: 'sign', title: '签名', width: 177}
                    ,{field: 'experience', title: '积分', width: 80, sort: true}
                    ,{field: 'score', title: '评分', width: 80, sort: true}
                    ,{field: 'classify', title: '职业', width: 80}
                    ,{field: 'wealth', title: '财富', width: 135, sort: true}
                    ]]
                });    
            });
        }
    },
    created(){
        this.search()
    }
}
</script>
<style lang="stylus" scoped>
</style>