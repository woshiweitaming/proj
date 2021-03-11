<template>
    <div class="edit_product_class">
        <div class="form_main">
            <h4 class="title">编辑产品</h4>
            <el-form ref="form" label-position="right" label-width="80px" :model="form" :rules="rules">
                    <el-form-item prop="unit" label="单位">
                        <el-input class="input" v-model="form.unit" placeholder="请输入单位" size="small"></el-input>
                    </el-form-item>
                    <el-form-item prop="fee" label="手续费">
                        <el-input class="input"  placeholder="请输入手续费" v-model="form.fee" size="small"></el-input>
                    </el-form-item>
                    <el-form-item prop="sprice"  label="止盈">
                        <el-input class="input"  placeholder="请输入止盈" v-model="form.sprice" size="small"></el-input>
                    </el-form-item>
                        <el-form-item prop="spread"  label="点差">
                        <el-input class="input"  v-model="form.spread" placeholder="请输入点差"  size="small"></el-input>
                    </el-form-item>
                    <el-form-item prop="eprice"  label="止损">
                        <el-input class="input"  placeholder="请输入止损" v-model="form.eprice" size="small"></el-input>
                    </el-form-item>
                    <el-form-item prop="state" label="状态">
                        <el-select
                            v-model="form.state"
                                size="small"
                        >
                            <el-option
                                v-for="(el, key) in stateList"
                                :key="key"
                                :label="el.name"
                                :value="el.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="sort"  label="排序">
                        <el-input class="input"  placeholder="请输入排序" v-model="form.sort"  size="small"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="btn" size="small" type="primary" @click="validateForm">提交</el-button>
                    </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { productStatus } from '@/datas/status_datas'
import { getProductList, updPro } from '@/api/admins'
import recordMixins from '@/mixins/record_mixins'
import validate from '@/utils/validate'
export default {
    name: 'EditProduct',
    props: ['opt'],
    mixins: [recordMixins],
    data(){
        return {
            form: {},
            rules: {
                unit: [
                    { required: true, message: '请输入单位', trigger: 'blur' },
                ],
                fee: [
                    { required: true, message: '请输入手续费', trigger: 'blur' },
                ],
                sprice: [
                    { required: true, message: '请输入止损', trigger: 'blur' },
                ],
                spread: [
                    { required: true, message: '请输入点差', trigger: 'blur' },
                ],
                eprice: [
                    { required: true, message: '请输入止盈', trigger: 'blur' },
                ],
                state: [
                    { required: true, message: '请选择状态', trigger: 'change' },
                ],
                sort: [
                    { required: true, message: '请输入排序', trigger: 'blur' },
                ]
            },
            stateList: productStatus
        }
    },
    methods: {
        validateForm(){
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.updProHandler()
                } else {
                    return false;
                }
            });
        },
        async updProHandler(){
            const res = await updPro(this.form)
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
                    this.form = this.opt
                }
            },
            immediate: true,
            deep: true
        }
    }
}
</script>
<style lang="stylus" scoped>
.edit_product_class
    padding 20px
</style>