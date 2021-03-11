<template>
    <div class="query_class" v-if="showQuery">
        <Setting v-if="$route.path.indexOf('forecast/forecast_list') > -1" />
        <div class="query_data_class" v-else>
            <div class="query_items" v-for="(items, index) in queryData" :key="index">
                <div class="query_label"  v-if="items.type === 'select'" >
                    <span>{{items.name}}</span>
                    <el-select class="input_bar" size="mini" v-model="items.value" placeholder="请选择">
                        <el-option
                            v-for="(items, index) in items.children"
                            :key="index"
                            :label="items.name"
                            :value="items.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="query_label"  v-if="items.type === 'text'" >
                    <span>{{items.name}}</span>
                    <el-input v-if="items.type === 'text'" type="text" class="input_bar" v-model="items.value" size="mini"></el-input>
                </div>
                <div class="query_label"  v-if="items.type === 'select_p1' && level == 0" >
                    <span>{{items.name}}</span>
                    <el-select @change="getP1" class="input_bar" size="mini" v-model="items.value" placeholder="请选择">
                        <el-option
                            v-for="(items, index) in p1List"
                            :key="index"
                            :label="items.ncikname"
                            :value="items.uid">
                        </el-option>
                    </el-select>
                </div>
                <div class="query_label"  v-if="items.type === 'select_p2' && (level == 0 || level == 1)" >
                    <span>{{items.name}}</span>
                    <el-select @change="getP2" class="input_bar" size="mini" v-model="items.value" placeholder="请选择">
                        <el-option
                            v-for="(items, index) in p2List"
                            :key="index"
                            :label="items.ncikname"
                            :value="items.uid">
                        </el-option>
                    </el-select>
                </div>
                <div class="query_label"  v-if="items.type === 'select_p3' && (level == 0 || level == 1 || level == 2)" >
                    <span>{{items.name}}</span>
                    <el-select class="input_bar" size="mini" v-model="items.value" placeholder="请选择">
                        <el-option
                            v-for="(items, index) in p3List"
                            :key="index"
                            :label="items.ncikname"
                            :value="items.uid">
                        </el-option>
                    </el-select>
                </div>
                <div class="query_label" v-if="items.type === 'start_date'">
                    <span>{{items.name}}</span>
                    <el-date-picker
                        class="input_date_bar"
                        size="mini"
                        v-model="items.value"
                        type="datetime"
                        format="yyyy-MM-dd"
                        value-format="timestamp"
                        placeholder="开始时间">
                    </el-date-picker>
                </div>
                <div class="query_label" v-if="items.type === 'start_date_hms'">
                    <span>{{items.name}}</span>
                    <el-date-picker
                        class="input_date_bar hms"
                        size="mini"
                        v-model="queryData[index].value"
                        type="datetime"
                        value-format="timestamp"
                        placeholder="开始时间">
                    </el-date-picker>
                </div>
                <div class="query_label" v-if="items.type === 'end_date'">
                    <span>{{items.name}}</span>
                    <el-date-picker
                        size="mini"
                        class="input_date_bar"
                        v-model="items.value"
                        type="datetime"
                        format="yyyy-MM-dd"
                        value-format="timestamp"
                        placeholder="结束时间">
                    </el-date-picker>
                </div>
                 <div class="query_label" v-if="items.type === 'end_date_hms'">
                    <span>{{items.name}}</span>
                    <el-date-picker
                        size="mini"
                        class="input_date_bar hms"
                        v-model="items.value"
                        type="datetime"
                        value-format="timestamp"
                        placeholder="结束时间">
                    </el-date-picker>
                </div>
            </div>
            <div class="query_items" v-if="!hiddenBtn">
                <el-button type="primary" @click="search" size="mini">查询</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import queryMixins from '@/mixins/query_mixins'
import recordMixins from '@/mixins/record_mixins'
import parentMixins from '@/mixins/parent_mixins'
import Setting from '@/layouts/forecast/Setting'
export default {
    name: 'RechargeQuery',
    mixins: [queryMixins, recordMixins, parentMixins],
    props: ['queryData', 'hiddenBtn'], 
    data(){
        return { 
            show: false,
            level: ''
        }
    },
    components: {
        Setting
    },
    computed: {
        showQuery(){
            switch (this.$route.path){
                case '/admin/notice/notice_list' :
                   return false
                default :
                   return true
            }
        },
    },
    created(){
        this.level = this.$storage.getLocalData('level')
        this.getData()
    }
}
</script>
<style lang="stylus" scoped>
</style>