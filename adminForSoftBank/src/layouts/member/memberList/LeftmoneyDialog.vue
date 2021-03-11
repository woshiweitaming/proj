<template>
    <div class="leftmoney_dialog_class">
        <el-form ref="form" label-position="right" label-width="80px">
            <!-- <el-form-item label="钱包">
                <el-select
                    v-model="type"
                    size="small"
                    class="select"
                >
                    <el-option
                        v-for="(el, keys) in qbList"
                        :key="keys"
                        :label="el.name"
                        :value="el.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="币种">
                <el-select
                    v-model="bcode"
                    size="small"
                    class="select"
                >
                    <el-option
                        v-for="(el, keys) in pList"
                        :key="keys"
                        :label="el.name"
                        :value="el.id">
                    </el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="类型">
                <el-select
                    v-model="payType"
                    size="small"
                    class="select"
                >
                    <el-option
                        v-for="(el, keys) in payTypeStatus"
                        :key="keys"
                        :label="el.name"
                        :value="el.value">
                    </el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item label="操作金额">
               <el-input type="text" class="input_bar" placeholder="请输入操作金额" size="small" v-model="banlace"></el-input>
            </el-form-item>
            <el-form-item label="备注" v-if="payType == 0">
               <el-input type="text" class="input_bar" placeholder="请输入备注" size="small" v-model="remarks"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button class="dialog_btn" size="small"  @click="closeHandler">取 消</el-button>
            <el-button class="dialog_btn" size="small" type="primary" @click="changeLeftmoneyHanlder">确 定</el-button>
        </span>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getMemberList, updBanlace, getAllBanlace } from '@/api/admins'
import validate from '@/utils/validate'
import { payTypeStatus } from '@/datas/status_datas'
export default {
    name: 'LeftmoneyDialog',
    props: ['opt'],
    data(){
        return {
            banlace: '',
            bcode: '',
            remarks: '',
            type: '',
            pList: [],
            qbList: [
                {
                    name: '期货',
                    value: 0
                },
                {
                    name: '合约',
                    value: 1
                },
                {
                    name: '币币',
                    value: 2
                }
            ],
            payTypeStatus: payTypeStatus,
            payType: 0
        }
    },
    computed: {
        ...mapGetters({
            getChangeLeftmoneyDialogStatus: 'getChangeLeftmoneyDialogStatus',
            getProductList: 'getProductList'
        })
    },
    methods: {
        closeHandler(){
            this.setLeftmoneyDialogStatus(false)
        },
        async changeLeftmoneyHanlder(){
            if(this.banlace === ''){
                return this.$tips.errorTips('余额不能为空')
            }
            const params = {
                updUid: this.opt.updUid, 
                banlace: this.banlace,
                // type: this.type,
                // bcode: this.bcode,
                // payType: this.payType,
                remarks: this.remarks
            }
            const res = await updBanlace(params)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.closeHandler()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        ...mapMutations({
           setLeftmoneyDialogStatus: 'SET_LEFTMONEY_DIALOG_STATUS'
        })
    },
    watch: {
        getProductList:{
            handler(val){
                const arr = JSON.parse(JSON.stringify(val))
                arr.push({name: 'USDT', id: 99})
                this.pList = arr
            },
            deep: true,
            immediate: true
        }
    }
}
</script>
<style lang="stylus" scoped>
.dialog-footer
    width 100%
    text-align center
    display block
.input_bar
    margin-bottom 20px
.select
    margin-bottom 10px
</style>