<template>
    <div class="pay_setting_class">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6" v-for="(params, index) in dataList" :key="index">
                <el-card class="box-card">
                     <h4 class="title">支付设置{{index+1}}</h4>
                    <el-form ref="form" label-position="left" label-width="120px">
                        <el-form-item label="渠道名">
                            <el-input size="mini" class="form_label" v-model="params.name"></el-input>
                        </el-form-item>
                        <el-form-item label="链名称1">
                            <el-input size="mini" class="form_label" v-model="params.name1"></el-input>
                        </el-form-item>
                        <el-form-item label="地址1">
                            <el-input size="mini" class="form_label" v-model="params.val1"></el-input>
                        </el-form-item>
                        <el-form-item label="链名称2">
                            <el-input size="mini" class="form_label" v-model="params.name2"></el-input>
                        </el-form-item>
                        <el-form-item label="地址2">
                            <el-input size="mini" class="form_label" v-model="params.val2"></el-input>
                        </el-form-item>
                        <el-form-item label="链名称3">
                            <el-input size="mini" class="form_label" v-model="params.name3"></el-input>
                        </el-form-item>
                        <el-form-item label="地址3">
                            <el-input size="mini" class="form_label" v-model="params.val3"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="btn" size="small" @click="setPayConfigHandler(index)" type="primary">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { getPayConfig, updPayConfig } from '@/api/admins'
import validate from '@/utils/validate'
export default {
    name: 'PaySetting',
    data(){
        return {
            dataList: []
        }
    },
    methods: {
        /**
         * 获取支付配置
         */
        async getPayConfigHandler(){
            const res = await getPayConfig()
            this.dataList = res.data
        },
        /**
         * 设置支付配置
         */
        async setPayConfigHandler(index){
            const res = await updPayConfig(this.dataList[index])
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
    },
    created(){
        this.getPayConfigHandler()
    }
}
</script>
<style lang="stylus" scoped>
.form_class
    width 80%
.form .title
    text-align center
</style>