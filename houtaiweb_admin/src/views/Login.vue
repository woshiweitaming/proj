<template>
    <transition name="fade">
        <div class="login_class"
            v-loading="loading"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
        >
            <div class="title">登录账号 <em>/Login</em></div>
            <div class="form">
                <el-form ref="LoginForm" :model="form" :rules="rules">
                    <el-form-item prop="uname">
                        <el-input v-model="form.uname" placeholder="请输入账号" size="small"></el-input>
                    </el-form-item>
                    <el-form-item prop="pwd">
                        <el-input type="password" placeholder="请输入密码" v-model="form.pwd"  size="small"></el-input>
                    </el-form-item>
                    <el-form-item prop="code">
                        <el-input class="code_input" placeholder="请输入验证码" v-model="form.code"  size="small"></el-input>
                        <img class="img_input" :src="`${domain}/pub/getShearCaptcha?rand=${getRand}`" @click="getShearCaptchaHandler">
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="validLogin"  size="small">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </transition>
</template>
<script>
import Tips from '@/utils/Tips'
import Validate from '@/utils/Validate'
import Storage from '@/utils/Storage'
import ApiConfig from '@/config/ApiConfig'
import { login, getShearCaptcha } from '@/api/admins'
export default {
    name: 'Login',
    data(){
        return {
            form: {
                uname: '',
                pwd: '',
                code: ''
            },
            rand: '',
            rules: {
                uname: [
                    { required: true, message: '请输入账户名称', trigger: 'blur' },
                ],
                pwd: [
                    { required: true, message: '请输入账户密码', trigger: 'blur' },
                ],
                code: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ],
            },
            loading: false,
            captcha: '',
            domain: ApiConfig.getApiDomain()
        }
    },
    methods: {
        validLogin(){
            this.$refs['LoginForm'].validate((valid) => {
                if (valid) {
                    this.loginHandler()
                } else {
                    return false;
                }
            });
        },
        async loginHandler(){
            this.loading = true
            this.form.rand = this.rand
            const res = await login(this.form)
            this.loading = false
            if(Validate.checkRscode(res.rpCode)){
                Storage.setLocalData('uname', res.data.uname)
                Storage.setLocalData('uid', res.data.uid)
                Storage.setLocalData('token', res.data.token)
                Storage.setLocalData('ucode', res.data.ucode)
                this.$router.push({path: '/'})
            }else{
                Tips.errorTips(res.rpMsg)
                this.getShearCaptchaHandler()
            }
        },
        async getShearCaptchaHandler(){
            this.rand = Math.random()
        }
    },
    computed: {
        getRand(){
            return this.rand
        }
    },
    created(){
        this.rand = Math.random()
    }
}
</script>
<style lang="stylus" scoped>
.login_class
  width 400px
  height 350px
  border 1px solid #eee
  border-radius 4px
  background #fff
  position fixed
  top 40%
  left 50%
  margin-top -150px
  margin-left -200px
  padding 20px
.login_class .title
  font-size 18px
  color #2f2d5c
  margin 40px 0
  text-align center
.login_class .title em
  font-size 12px
  font-style normal
  color #aaa
.code_input
  width 200px
.img_input
  width 80px
  float right
</style>