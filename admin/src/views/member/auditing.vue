<template>
<div class="record_wrapper_class">
    <audio id="player" ref="audio1"><source src="../../audio/rz.mp3" type="audio/mp3"></audio>
    <iframe src="../../audio/silence.mp3" allow="autoplay" id="audio" style="display:none"></iframe>
    <div class="record_content">
        <!--查询-->
        <div class="query_class">
            <div class="query_data_class">
                <div class="query_items">
                    <div class="query_label">
                        <span>用户ID</span>
                        <el-input clearable type="text" class="input_bar" v-model="params.uid" size="mini"></el-input>
                    </div>
                </div>
                <div class="query_items">
                    <div class="query_label">
                        <span>用户名</span>
                        <el-input clearable type="text" class="input_bar" v-model="params.uname" size="mini"></el-input>
                    </div>
                </div>
                <div class="query_items">
                    <div class="query_label">
                        <span>状态</span>
                        <el-select clearable class="input_bar" size="mini" v-model="params.type" placeholder="请选择">
                            <el-option v-for="(items, index) in typeList" :key="index" :label="items.name" :value="items.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="query_items">
                    <el-button type="primary" @click="search" size="mini">查询</el-button>
                </div>
            </div>
        </div>
        <!--表格-->
        <div class="table_class">
            <el-table :data="tableData" border @sort-change="sortChange">
                <el-table-column prop="aliasUid" label="用户ID" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="name" label="姓名" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="parentName" label="上级代理" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="uname" label="用户名" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="country" label="国家" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="p1" label="身份证正面" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span class="check" @click="check(scope.row.p1)">查看</span>
                    </template>
                </el-table-column>
                <el-table-column prop="p2" label="身份证反面" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span class="check" @click="check(scope.row.p2)">查看</span>
                    </template>
                </el-table-column>
                <el-table-column prop="p3" label="手持身份证" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span class="check" @click="check(scope.row.p3)">查看</span>
                    </template>
                </el-table-column>
                <el-table-column prop="idcard" label="身份证号" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="adds" label="居住地址" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="type" label="审核状态" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span>{{toStatus(scope.row.type)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="ac_time" label="认证时间" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span>{{toActime(scope.row.ac_time)}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200" v-if="level == 0">
                    <template slot-scope="scope" v-if="scope.row.type != 2">
                        <el-button class="examine_btns" v-if="scope.row.type !== 0" type="success" plain size="mini" @click="pass(scope.row.uid, 0)">通过</el-button>
                        <el-button class="examine_btns" v-if="scope.row.type !== 1 || scope.row.type !== 2" type="danger" plain size="mini" @click="pass(scope.row.uid, 1)">驳回</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <div class="pagination">
        <el-pagination :small="true" background @current-change="currentChangeHandler" @size-change="handleSizeChange" :current-page="params.pageNumber" :page-sizes="[50, 100, 200, 300, 400]" layout="total, sizes, prev, pager, next" :total="total">
        </el-pagination>
    </div>
    <el-dialog title="审核" :visible.sync="dialogVisible" width="600px" :before-close="closeHandler">
        <div class="img">
            <img :src="imgUrl" @load="load(this)" alt @mousewheel="rollImg(this)" ref="bigImage">
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button size="mini" type="primary" @click="closeHandler">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
import {
    mapMutations,
    mapGetters
} from 'vuex'
import {
    updateCertificaByUid,
    getCertificationList,
    getPayAndDrawalCount
} from '@/api/admins'
import {
    getAdvancedAttestationStatus,
    auditingStatusList
} from '@/datas/status_datas'
import appConfig from '@/config/appConfig'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import validate from '@/utils/validate'
import { formatDate } from '@/utils/utils'
let timer = null
export default {
    name: 'MemberList',
    mixins: [commonMixins, recordMixins, paginationMixins],
    data() {
        return {
            params: {
                uid: '',
                uname: '',
                type: 3,
                pageNumber: 1,
                pageSize: 50
            },
            total: 0,
            //表格
            tableData: [],
            typeList: auditingStatusList,
            //弹窗
            opt: {},
            domain: appConfig.domain,
            level: '',
            dialogVisible: false,
            imgUrl: ''
        }
    },
    methods: {
        /**
         * 查询
         */
        async search() {
            const params = JSON.parse(JSON.stringify(this.params))
            const res = await getCertificationList(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
        },
        async pass(uid, type) {
            const res = await updateCertificaByUid({
                uid: uid,
                type: type
            })
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.search()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        toStatus(status) {
            const data = getAdvancedAttestationStatus
            return data.filter(res => res.value == status)[0].name
        },
        check(imgUrl) {
            this.imgUrl = appConfig.domain + '/' + imgUrl
            this.dialogVisible = true
        },
        closeHandler() {
            this.$refs.bigImage.style.zoom = '100%'
            this.dialogVisible = false
        },
        load() {
            const width = this.$refs.bigImage.style.width = '500px'
        },
        toActime(ts){
            let _ts = ts == 'null' ? '--' : Number(ts) * 1000
            return this.format(_ts)
        },
        add0(m){
            return m<10?'0'+m:m 
        },
        format(shijianchuo){
            var time = new Date(shijianchuo);
            var y = time.getFullYear();
            var m = time.getMonth()+1;
            var d = time.getDate();
            var h = time.getHours();
            var mm = time.getMinutes();
            var s = time.getSeconds();
            return y+'-'+this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);
        },
        rollImg() {
            var zoom = parseInt(this.$refs.bigImage.style.zoom) || 30;
            zoom += event.wheelDelta / 12;
            if (zoom >= 30 && zoom < 100) {
                this.$refs.bigImage.style.zoom = zoom + "%";
            }
            return false;
        },
        async getPayAndDrawalCountHandler(){
            const res = await getPayAndDrawalCount()
            const count = res.data.checkCount
            if(count > 0){
                this.$notify({
                    title: '系统提醒',
                    message: '您有一条新的审核',
                    type: 'success'
                });
                this.$refs.audio1.play()
            }
        },
        setTimer(){
            const that = this
            timer = setInterval(() => {
                that.getPayAndDrawalCountHandler()
            },30000)
        }
    },
    created() {
        this.level = this.$storage.getLocalData('level')
        this.search()
    },
    activated(){
        const that = this
        const iframe = document.getElementById('audio')
        iframe.onload = () => {
            that.setTimer()
            setTimeout(() => {
                that.getPayAndDrawalCountHandler()
            }, 2000)
        }
    },
    deactivated() {
        clearInterval(timer)
        timer = null
    }
}
</script>

<style lang="stylus" scoped>
</style>
