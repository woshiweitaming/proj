<template>
<div class="record_wrapper_class">
    <div class="record_content">
        <!--查询-->
        <div class="query_class">
            <div class="query_data_class">
                <div class="query_items">
                    <div class="query_label">
                        <span>产品ID</span>
                        <el-input clearable type="text" class="input_bar" v-model="params.mpid" size="mini"></el-input>
                    </div>
                </div>
                <div class="query_items">
                    <el-button type="primary" @click="search" size="mini">查询</el-button>
                    <el-button size="mini" type="primary" @click="openDialog()">添加产品</el-button>
                </div>
            </div>
        </div>
        <!--表格-->
        <div class="table_class">
            <el-table :data="tableData" border @sort-change="sortChange">
                <el-table-column prop="mpid" label="产品ID" sortable show-overflow-tooltip width="100px">
                </el-table-column>
                <el-table-column prop="mineMachineName" label="矿机型号" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="logo" label="LOGO" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-popover placement="top-start" title="产品Logo" width="250" trigger="click" :ref="scope.$index">
                            <img width="250" v-if="scope.row.logo !== null" :src="scope.row.logo">
                            <span slot="reference" class="check">查看</span>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="可挖币种" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="mineRate" label="矿机算力" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="algorithm" label="矿机算法" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="mineMonthPrice" label="月租价格" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="minePrice" label="买断价格" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="status" label="状态" sortable show-overflow-tooltip width="100px">
                    <template slot-scope="scope">
                        <el-select @change="(status) => changeStatus(scope.row.mpid, status)" class="input_bar" size="mini" v-model="scope.row.status" placeholder="请选择">
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
        <div class="pagination">
            <el-pagination :small="true" background @current-change="currentChangeHandler" @size-change="handleSizeChange" :current-page="params.pageNumber" :page-sizes="[50, 100, 200, 300, 400]" layout="total, sizes, prev, pager, next" :total="total">
            </el-pagination>
        </div>
    </div>
    <el-dialog title="编辑产品" :visible.sync="status" width="600px" :before-close="closeHandler">
        <div class="form_main">
            <el-form ref="form" label-position="right" label-width="180px">
                <el-form-item label="矿机型号">
                    <el-input size="mini" v-model="form.mineMachineName"></el-input>
                </el-form-item>
                <el-form-item label="产品Logo">
                    <el-upload class="upload-demo" :action="action" multiple :headers="uploadParams" name="head_img" :on-success="onSuccess" :before-upload="beforeUpload" :file-list="fileList" list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="算力类型">
                    <el-select @change="change" size="mini" v-model="form.algorithmType" placeholder="请选择">
                        <el-option v-for="(items, index) in algorithmList" :key="index" :label="`${items.algorithm}`" :value="items.algorithmType">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="矿机算力">
                    <el-input size="mini" class="small" v-model="form.mineRate"></el-input>
                    <span class="unit">单位：{{getUnit}}</span>
                    <span class="tips">单位换算公式：<br />1000K=1M,1000M=1G,1000G=1T,1000T=1P,1000P=1E</span>
                </el-form-item>
                <el-form-item label="可挖币种">
                    <el-input size="mini" :value="getCurrency" disabled></el-input>
                </el-form-item>
                <el-form-item label="月租价格">
                    <el-input size="mini" v-model="form.mineMonthPrice"></el-input>
                </el-form-item>
                <el-form-item label="买断价格">
                    <el-input size="mini" v-model="form.minePrice"></el-input>
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
import validate from '@/utils/validate'
import appConfig from '@/config/appConfig'
import commonMixins from '@/mixins/common_mixins'
import recordMixins from '@/mixins/record_mixins'
import paginationMixins from '@/mixins/pagination_mixins'
import {
    coinPoolProductStatus
} from '@/datas/status_datas'

import {
    getAdminPowMiningProductList,
    getAlgorithmAndUnit,
    updateAdminPowProductStatus,
    addAdminPowMiningPoolProduct
} from '@/api/admins'
export default {
    name: 'PowProductList',
    mixins: [commonMixins, recordMixins, paginationMixins],
    data() {
        const token = this.$storage.getLocalData('token')
        return {
            params: {
                pageNumber: 1,
                pageSize: 50,
                mpid: ''
            },
            tableData: [],
            total: 0,
            coinPoolProductStatus: coinPoolProductStatus,
            fileList: [],
            file: '',
            action: '',
            //弹窗
            status: false,
            form: {
                logo: '',
                algorithmType: '',
                mineMachineName: '',
                mineRate: '',
                unit: '',
                minePrice: '',
                mineMonthPrice: '',
                action_type: '',
                mpid: '',
            },
            uploadParams: {
                token: token
            },
            algorithmList: []
        }
    },
    methods: {
        async search() {
            const params = JSON.parse(JSON.stringify(this.params))
            const res = await getAdminPowMiningProductList(params)
            this.tableData = res.data.list.sort(this.sort)
            this.total = res.data.totalRow
        },
        sort(a, b) {
            return a.mpid - b.mpid
        },
        async changeStatus(mid, status) {
            const params = {
                mpid: mid,
                status: status
            }
            const res = await updateAdminPowProductStatus(params)
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
                    logo: '',
                    algorithmType: '',
                    mineMachineName: '',
                    mineRate: '',
                    unit: '',
                    minePrice: '',
                    mineMonthPrice: '',
                    mpid: '',
                    action_type: 'add',
                }
                this.file = ''
                this.fileList = []
            } else {
                const params = JSON.parse(JSON.stringify(data))
                this.form = params
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
        async save() {
            const res = await addAdminPowMiningPoolProduct(this.form)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.closeHandler()
                this.search()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        async getAlgorithmAndUnitHandler() {
            const res = await getAlgorithmAndUnit()
            this.algorithmList = res.list
        },
        change(val) {
            const data = this.algorithmList.filter(res => res.algorithmType == val)[0]
            this.form.unit = data.unit
        }
    },
    computed: {
        getUnit() {
            const arr = this.algorithmList.filter(res => res.algorithmType == this.form.algorithmType)
            return arr.length == 0 ? '' : arr[0].unit
        },
        getCurrency() {
            const arr = this.algorithmList.filter(res => res.algorithmType == this.form.algorithmType)
            return arr.length == 0 ? '' : arr[0].name
        }
    },
    created() {
        this.search()
        this.getAlgorithmAndUnitHandler()
        this.action = appConfig.domain + '/admin/uploadCoinPoolImg'
    }
}
</script>

<style scoped>
.small {
    width: 160px;
    margin-right: 10px;
}

.tips {
    font-size: 12px;
    display: block;
    color: red;
    line-height: 20px;
}

.unit {
    color: #999;
    font-size: 12px;
}
</style>
