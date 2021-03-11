<template>
    <div class="recharge_form_class">
       <div class="form_main">
            <h4 class="title">审核订单</h4>
            <el-form ref="form" :model="params" label-width="100px">
                <el-form-item label="订单号">
                    <el-input class="input" :disabled="true" v-model="params.orderno"  size="small"></el-input>
                </el-form-item>
                <el-form-item prop="amount" label="金额">
                    <el-input class="input" v-model="params.amount" placeholder="请输入金额" size="small"></el-input>
                </el-form-item>
                <el-form-item prop="remark" label="备注">
                    <el-input class="input" v-model="params.remarks" placeholder="请输入备注" size="small"></el-input>
                </el-form-item>
                <el-form-item prop="amount" label="是否通过">
                    <el-select
                        v-model="params.type"
                        size="mini"
                        class="input"
                    >
                        <el-option
                            v-for="(el, key) in stateList"
                            :key="key"
                            :label="el.name"
                            :value="el.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button class="btn"  type="primary" @click="submit" size="small">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { auditingStatus } from '@/datas/status_datas'
import { getProductList, updPro } from '@/api/admins'
import recordMixins from '@/mixins/record_mixins'
import validate from '@/utils/validate'
import { examinePay } from '@/api/admins' 
export default {
    name: 'RechargeForm',
    props: ['opt'],
    mixins: [recordMixins],
    data(){
        return {
            params: {
                type: 0,
                orderNo: '',
                amount: '',
                remarks: ''
            },
            stateList: auditingStatus
        }
    },
    methods: {
         async submit(){
            const res = await examinePay(this.params)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.$emit('callback')
                this.setDrawerStatus(false)
            }, msg => {
                this.$tips.errorTips(msg)
            })
        }
    },
    watch: {
        getDrawerStatus: {
            handler(val){
                if(val){
                    this.params = this.opt
                    this.params.orderNo = this.opt.orderno
                }
            },
            immediate: true,
            deep: true
        }
    }
}
</script>
<style lang="stylus" scoped>
.recharge_form_class
    padding 20px
</style>