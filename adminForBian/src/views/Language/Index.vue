<template>
    <div class="language_class">
        <div class="table_class">
            <el-popconfirm
               title="请确认语言修改无误，确定更新吗？"
               @onConfirm="updLanguageHanlder(true)"
            >
                 <el-button type="primary" slot="reference" plain size="mini">更新</el-button>
            </el-popconfirm>
            <div class="table_data_class">
                <el-table
                    :data="tableData"
                    border
                    v-loading="loading"
                >
                    <el-table-column
                        prop="name"
                        label="Key"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="cn"
                        label="中文"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="en"
                        label="英文"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="cns"
                        label="繁体"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="ja"
                        label="日文"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="ko"
                        label="韩语"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="vi"
                        label="越南语"
                        sortable
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        sortable
                        show-overflow-tooltip
                        width="100"
                    >
                        <template slot-scope="scope">
                             <el-button type="success" plain size="mini" @click="edit(scope.row)">修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>       
        <el-dialog
            title="修改语言配置"
            :visible.sync="dialog"
            width="600px"
            :before-close="handleClose">
            <div class="language_dialog">
                <el-form ref="form" label-position="left" label-width="120px">
                    <el-form-item label="中文">
                        <el-input size="mini" class="form_label" v-model="curData.cn"></el-input>
                    </el-form-item>
                    <el-form-item label="英文">
                        <el-input size="mini" class="form_label" v-model="curData.en"></el-input>
                    </el-form-item>
                    <el-form-item label="繁体">
                        <el-input size="mini" class="form_label" v-model="curData.cns"></el-input>
                    </el-form-item>
                    <el-form-item label="日语">
                        <el-input size="mini" class="form_label" v-model="curData.ja"></el-input>
                    </el-form-item>
                    <el-form-item label="韩语">
                        <el-input size="mini" class="form_label" v-model="curData.ko"></el-input>
                    </el-form-item>
                    <el-form-item label="越南文">
                        <el-input size="mini" class="form_label" v-model="curData.vi"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" @click="handleClose">取 消</el-button>
                <el-button size="small" type="primary" @click="save">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { updLanguage, updLanguage2 } from '@/api/admins'
import validate from '@/utils/validate'
export default {
    name: 'Language',
    data(){
        return {
            tableData: [],
            loading: false,
            dialog: false,
            curData: {}
        }
    },
    methods: {
        async updLanguageHanlder(upd){
            this.loading = true
            let params = {}
            if(upd){
                params = {upd: true}
            }
            const res = await updLanguage(params)
            this.loading = false
            if(upd){
                validate.checkCode(res, () => {
                    this.$tips.successTips('成功')
                }, msg => {
                    this.$tips.errorTips(msg)
                })
                return 
            }
            let arr = []
            for(let key in res.data){
                let obj = {
                    name: key
                }
                arr.push(Object.assign(obj, res.data[key]))
            }
            this.tableData = arr
        },
        edit(data){
            this.dialog = true
            this.curData = JSON.parse(JSON.stringify(data))
        },
        handleClose(){
            this.dialog = false
        },
        async save(){
            const jsonObj = {
                    cn: this.curData.cn,
                    en: this.curData.en,
                    cns: this.curData.cns,
                    ja: this.curData.ja,
                    ko: this.curData.ko,
                    vi: this.curData.vi,
            }
            const params = {
                key: this.curData.name,
                jsonObj: JSON.stringify(jsonObj)
            }
            const res = await updLanguage(params)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.handleClose()
                this.updLanguageHanlder()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        }
    },
    created(){
        this.updLanguageHanlder()
    }
}
</script>
<style lang="stylus" scoped>
.table_data_class{
    margin-top 10px
}
</style>