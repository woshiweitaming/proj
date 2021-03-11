<template>
<div class="record_wrapper_class">
    <div class="record_content">
        <div class="buttons">
            <el-button size="mini" type="primary" @click="openDialog()">添加产品</el-button>
        </div>
        <!--表格-->
        <div class="table_class">
            <el-table :data="tableData" border @sort-change="sortChange">
                <el-table-column prop="mid" label="产品ID" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="name" label="产品名称" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="logo" label="LOGO" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-popover placement="top-start" title="产品Logo" width="250" trigger="click" :ref="scope.$index">
                            <img width="250" v-if="scope.row.logo !== null" :src="scope.row.logo">
                            <span slot="reference" class="check">查看</span>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column prop="D0" label="灵活存取年化收益率" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="D30" label="30天年化收益率" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="D60" label="60天年化收益率" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="D90" label="90天年化收益率" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="type" label="风险类型" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span>{{toStatus(scope.row.type)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="min_redeem_day" label="最小锁仓天数" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="min_amount" label="最小锁仓数量" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="punish_ratio" label="违约处罚金" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="status" label="状态" sortable show-overflow-tooltip width="100px">
                    <template slot-scope="scope">
                        <el-select @change="(status) => changeStatus(scope.row.mid, status)" class="input_bar" size="mini" v-model="scope.row.status" placeholder="请选择">
                            <el-option v-for="(items, index) in coinPoolProductStatus" :key="index" :label="items.name" :value="items.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column prop="create_time" label="创建时间" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="操作" sortable show-overflow-tooltip width="100px">
                    <template slot-scope="scope">
                        <el-button class="table_btn" type="primary" plain size="mini" @click="openDialog(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <div class="pagination">
        <el-pagination :small="true" background @current-change="currentChangeHandler" @size-change="handleSizeChange" :current-page="params.pageNumber" :page-sizes="[50, 100, 200, 300, 400]" layout="total, sizes, prev, pager, next" :total="total">
        </el-pagination>
    </div>
    <el-dialog title="锁仓挖矿产品" :visible.sync="status" width="600px" :before-close="closeHandler">
        <div class="form_main">
            <el-form ref="form" label-position="right" label-width="180px">
                <el-form-item label="产品ID">
                    <el-select class="input_bar" size="mini" v-model="form.pid" placeholder="请选择">
                        <el-option v-for="(items, index) in pList" :key="index" :label="items.name" :value="items.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="产品Logo">
                    <el-upload class="upload-demo" :action="action" multiple :headers="uploadParams" name="head_img" :on-success="onSuccess" :before-upload="beforeUpload" :file-list="fileList" list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="灵活存取年化收益率(%)">
                    <el-input size="mini" v-model="form.D0"></el-input>
                </el-form-item>
                <el-form-item label="30天年化收益率(%)">
                    <el-input size="mini" v-model="form.D30"></el-input>
                </el-form-item>
                <el-form-item label="60天年化收益率(%)">
                    <el-input size="mini" v-model="form.D60"></el-input>
                </el-form-item>
                <el-form-item label="90天年化收益率(%)">
                    <el-input size="mini" v-model="form.D90"></el-input>
                </el-form-item>
                <el-form-item label="最小锁仓天数(天)">
                    <el-input size="mini" v-model="form.min_redeem_day"></el-input>
                </el-form-item>
                <el-form-item label="最小锁仓数量">
                    <el-input size="mini" v-model="form.min_amount"></el-input>
                </el-form-item>
                <el-form-item label="违约处罚比例(%)">
                    <el-input size="mini" v-model="form.punish_ratio"></el-input>
                </el-form-item>
                <el-form-item label="风险类型">
                    <el-select class="input_bar" size="mini" v-model="form.type" placeholder="请选择">
                        <el-option v-for="(items, index) in riskStatus" :key="index" :label="items.name" :value="items.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button size="mini" @click="closeHandler">取 消</el-button>
            <el-button size="mini" type="primary" @click="save">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
import {
    getAdminMiningPoolProductList,
    updateAdminMiningPoolProductStatus,
    getProductList,
    addAdminMiningPoolProduct
} from '@/api/admins'
import validate from '@/utils/validate'
import appConfig from '@/config/appConfig'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import {
    coinPoolProductStatus,
    riskStatus
} from '@/datas/status_datas'
export default {
    name: 'StakingProductList',
    mixins: [commonMixins, recordMixins, paginationMixins],
    data() {
        const token = this.$storage.getLocalData('token')
        return {
            params: {
                pageNumber: 1,
                pageSize: 50
            },
            tableData: [],
            total: 0,
            coinPoolProductStatus: coinPoolProductStatus,
            riskStatus: riskStatus,
            uploadParams: {
                token: token
            },
            fileList: [],
            file: '',
            action: '',
            //弹窗
            status: false,
            form: {
                pid: '',
                logo: '',
                D0: '',
                D30: '',
                D60: '',
                D90: '',
                min_redeem_day: '',
                min_amount: '',
                punish_ratio: '',
                type: 0,
                action_type: 'add',
            },
            pList: []
        }
    },
    methods: {
        async search() {
            const params = JSON.parse(JSON.stringify(this.params))
            const res = await getAdminMiningPoolProductList(params)
            this.tableData = res.data.list
            this.total = res.data.totalRow
        },
        toStatus(status) {
            return riskStatus.filter(res => res.value == status)[0].name
        },
        async changeStatus(mid, status) {
            const params = {
                mid: mid,
                status: status
            }
            const res = await updateAdminMiningPoolProductStatus(params)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.search()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        openDialog(data) {
            if (typeof data === 'undefined') {
                this.form = {
                    pid: '',
                    logo: '',
                    D0: '',
                    D30: '',
                    D60: '',
                    D90: '',
                    min_redeem_day: '',
                    min_amount: '',
                    punish_ratio: '',
                    type: 0,
                    action_type: 'add',
                }
                this.file = ''
                this.fileList = []
            } else {
                const params = JSON.parse(JSON.stringify(data))
                this.form = params
                this.form.pid = this.pList.filter(res => res.name == params.name)[0].id
                this.form.action_type = 'update'
                this.fileList = [{
                    name: 'logo',
                    url: params.logo
                }]
            }
            this.status = true
        },
        closeHandler() {
            this.status = false
        },
        onSuccess(response, file, fileList) {
            this.form.logo = response.logo
            this.file = file
            this.fileList = [{
                name: file.name,
                url: response.logo
            }]
        },
        beforeUpload(file) {
            this.fileList = [file]
            this.file = file
            return true
        },
        async getProductListHandler() {
            const params = {
                pageSize: 1000,
                pageNumber: 1,
                state: 0,
                name: ''
            }
            const res = await getProductList(params)
            this.pList = res.data.list
        },
        async save() {
            const res = await addAdminMiningPoolProduct(this.form)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.closeHandler()
                this.search()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        }
    },
    created() {
        this.search()
        this.getProductListHandler()
        this.action = appConfig.domain + '/admin/uploadCoinPoolImg'
    },
}
</script>

<style lang="stylus" scoped>
.buttons {
    margin-bottom 10px
}
</style>
