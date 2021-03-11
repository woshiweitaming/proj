<template>
    <div class="login_class">
        <div class="login_main">
            <div class="login_form">
                <el-card class="box-card">
                    <h4 class="title">登录 <em>/ Login</em></h4>
                    <div class="form_main">
                        <el-form ref="form" label-position="right" :hide-required-asterisk="true" :rules="rules" label-width="80px" :model="form">
                            <el-form-item label="用户名" prop="uname">
                                <el-input size="small" v-model="form.uname" placeholder="请输入用户名"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="pwd">
                                <el-input size="small" type="password" v-model="form.pwd" placeholder="请输入密码"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码" prop="code">
                                <el-input class="code_input" size="small" v-model="form.code" placeholder="请输入验证码"></el-input>
                                <img class="img_input" :src="`${domain}/pub/getShearCaptcha?rand=${getRand}`" @click="getShearCaptchaHandler">
                            </el-form-item>
                            <el-form-item>
                                <el-button class="btn" size="small" type="primary" @click="validateForm">提交</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>
<script>
import commonMixins from '@/mixins/common_mixins'
import { login } from '@/api/admins'
import validate from '@/utils/validate'
export default {
    name: 'Login',
    mixins: [commonMixins],
    data(){
        return {
            form: {
                uname: '',
                pwd: '',
                rand: '',
                code: ''
            },
            rules: {
                uname: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 5, max: 16, message: '用户名需要6-16个字符', trigger: 'blur' }
                ],
                pwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '密码需要8-20个字符', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ],
            },
        }
    },
    methods: {
        validateForm() {
            this.$refs.form.validate((valid) => {
            if (valid) {
                this.loginHandler()
            } else {
                return false;
            }
            });
        },
        /**
         * 获取验证码
         */
        async getShearCaptchaHandler(){
            this.form.rand = Math.random()
        },
        /**
         * 登录
         */
        async loginHandler(){
            const res = await login(this.form)
            validate.checkCode(res, () => {
                const { uname, ncikname, token, type, uid } = res.data
                this.$storage.setLocalData('uname', uname)
                this.$storage.setLocalData('nickname', ncikname)
                this.$storage.setLocalData('token', token)
                this.$storage.setLocalData('level', type)
                this.$storage.setLocalData('uid', uid)
                this.$router.push({path: '/'})
            }, (msg) => {
                this.getShearCaptchaHandler()
                this.$tips.errorTips(msg)
            })
        }
    },
    computed: {
        getRand(){
            return this.form.rand
        }
    },
}
</script>
<style lang="stylus" scoped>
.login_class
   width 100%
   height 100%
.el-row
.el-col
   height 100%
.login_main
   height 100%
   padding-top 80px
   box-sizing border-box
.login_form
   width 400px
   height 360px
   position fixed
   top 50%
   left 50%
   margin-left -200px
   margin-top -180px
.img_input
   width 120px
   position absolute
   right 0
.code_input
   width 150px
em
  font-size 12px
  font-style normal
  color #ccc
</style>