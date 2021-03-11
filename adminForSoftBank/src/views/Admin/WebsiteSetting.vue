<template>
    <div class="website_setting_class">
        <div class="form_class">
            <el-card class="box-card">
                <h4 class="title">网站设置</h4>
                <div class="form_main">
                    <el-form ref="form" label-position="right" :rules="rules" label-width="140px" :model="form">
                        <el-form-item label="版本号" prop="vesion">
                            <el-input size="mini" v-model="form.vesion" placeholder="请输入版本号"></el-input>
                        </el-form-item>
                        <el-form-item label="客服地址" prop="kfUrl">
                            <el-input size="mini" v-model="form.kfUrl" placeholder="请输入客服地址"></el-input>
                        </el-form-item>
                        <el-form-item label="更新包地址" prop="dowurl">
                            <el-input size="mini" v-model="form.dowurl" placeholder="请输入更新包地址"></el-input>
                        </el-form-item>
                        <el-form-item label="单笔提现手续费" prop="fee">
                            <el-input  size="mini" v-model="form.fee" placeholder="请输入期货配置"></el-input>
                        </el-form-item>
                        <el-form-item label="期货配置" prop="qhconfig">
                            <el-input type="textarea" :rows="10" size="mini" v-model="form.qhconfig" placeholder="请输入期货配置"></el-input>
                            <p class="tips">例：秒,收益,最少买入!秒,收益,最少买入</p>
                        </el-form-item>
                        <el-form-item label="出入款账户" prop="atype">
                            <el-select
                                v-model="form.atype"
                                size="mini"
                                class="select_bar"
                            >
                                <el-option
                                    v-for="(el, key) in typeList"
                                    :key="key"
                                    :label="el.name"
                                    :value="el.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="btn" size="small" type="primary" @click="validateForm">提交</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
import { getConfig, updConfig } from '@/api/admins'
import { historyOrderTypeStatus  } from '@/datas/status_datas'
import validate from '@/utils/validate'
export default {
    name: 'CreateAdmin',
    data(){
        return {
            form: { 
                vesion: '',
                qhconfig: '',
                atype: 0,
                kfUrl: '',
                fee: '',
                dowurl: ''
            },
            typeList: [], 
            rules: {
                vesion: [
                    { required: true, message: '请输入版本号', trigger: 'blur' },
                ],
                kfUrl: [
                    { required: true, message: '请输入客服地址', trigger: 'blur' },
                ],
                dowurl: [
                    { required: true, message: '请输入更新包下载地址', trigger: 'blur' },
                ],
                qhconfig: [
                    { required: true, message: '请输入期货配置', trigger: 'blur' },
                ],
                fee: [
                    { required: true, message: '请输入单笔提现手续费', trigger: 'blur' },
                ],
                atype: [
                    { required: true, message: '请选择出入款账户', trigger: 'change' },
                ],
            }
        }
    },
    methods: {
        validateForm() {
            this.$refs.form.validate((valid) => {
            if (valid) {
                this.setWebsiteInfo()
            } else {
                return false;
            }
            });
        },
        async setWebsiteInfo(){
            const res = await updConfig(this.form)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        async getConfigHandler(){
            const res = await getConfig()
            this.form = res.data
        }
    },
    created(){
        this.getConfigHandler()
        this.typeList = historyOrderTypeStatus
    }
}
</script>
<style lang="stylus" scoped>
.form_class
   width 500px
   margin 20px auto
.tips
    font-size 13px
    color #999
</style>