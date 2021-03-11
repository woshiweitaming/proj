<template>
    <div class="updpwd_class">
         <div class="form_main">
            <h4 class="title">修改密码</h4>
            <el-form ref="form" label-position="right" label-width="80px" :model="form" :rules="rules">
                <el-form-item label="旧密码" prop="oldpwd">
                    <el-input size="mini" type="password" v-model="form.oldpwd" placeholder="请输入旧密码"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newpwd">
                    <el-input size="mini" type="password" v-model="form.newpwd" placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="btn" size="small" type="primary" @click="validateForm">提交</el-button>
                </el-form-item>
            </el-form>
         </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import validate from '@/utils/validate'
import { updPwd } from '@/api/admins'
export default {
    name: 'Updpwd',
    data(){
        return {
            form: {
                oldpwd: '',
                newpwd: ''
            },
            rules: {
                oldpwd: [
                    { required: true, message: '请输入旧密码', trigger: 'blur' }
                ],
                newpwd: [
                    { required: true, message: '请输入新密码', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        validateForm() {
            this.$refs.form.validate((valid) => {
            if (valid) {
                this.updPwdHandler()
            } else {
                return false;
            }
            });
        },
        async updPwdHandler(){
            const res = await updPwd(this.form)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.setUpdpwdDrawerStatus(false)
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        ...mapMutations({
            setUpdpwdDrawerStatus: 'SET_UPDPWD_DRAWER_STATUS'
        })
    }
}
</script>
<style lang="stylus" scoped>
.updpwd_class
    padding 10px    
.title
    text-align left 
</style>