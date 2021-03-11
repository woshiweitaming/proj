<template>
    <div class="topbar_class">
        <div class="span">
          <el-popover
              placement="bottom"
              width="100"
              trigger="click"
          >
              <div class="list">
                <span class="top_labels" @click="changePwd">修改密码</span>
                <span class="top_labels" @click="exit">退出账户</span>
              </div>
              <span class="text" slot="reference">欢迎回来，{{username}} <i class="el-icon-caret-bottom"></i></span>
          </el-popover>
        </div>
        <el-dialog
            title="修改密码"
            :visible.sync="dialogVisible"
            width="400px"
            :append-to-body="true"
            :before-close="() => dialogVisible = false"
        >
            <el-form ref="form" :model="form" :rules="rules">
                <el-form-item prop="oldpwd">
                    <el-input type="password" size="small" placeholder="请输入原密码" v-model="form.oldpwd" ></el-input>
                </el-form-item>
                <el-form-item prop="newpwd">
                    <el-input type="password" size="small" placeholder="请输入新密码" v-model="form.newpwd" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small"  @click="valid">修改</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import Storage from '@/utils/Storage'
import Validate from '@/utils/Validate'
import Tips from '@/utils/Tips'
import { logOut, updPwd } from '@/api/admins'
export default {
    name: 'Topbar',
    data(){
      return {
        username: Storage.getLocalData('uname'),
        form: {
            oldpwd: '',
            newpwd: '',
        },
        rules: {
            oldpwd: [
                { required: true, message: '请输入账户名称', trigger: 'blur' },
            ],
            newpwd: [
                { required: true, message: '请输入账户密码', trigger: 'blur' },
            ]
        },
        dialogVisible: false
      }
    },
    methods: {
      async exit(){
        this.$alert('您确定要退出账号吗', '系统提示', {
          confirmButtonText: '确定',
          callback: async action => {
            if(action === 'confirm'){
              const res = await logOut()
              Storage.removeLocalData('uid')
              Storage.removeLocalData('uname')
              this.$router.push({path: '/login'})
            }
          }
        });
      },
      changePwd(){
        this.dialogVisible = true
      },
      valid(){
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.updatePwd()
                } else {
                    return false;
                }
            });
        },
        async updatePwd(){
            const res = await updPwd(this.form)
            console.log(res.rpCode)
            if(Validate.checkRscode(res.rpCode)){
               this.dialogVisible = false
               Tips.successTips('成功')
           }else{
               Tips.errorTips(res.rpMsg)
           }
        },
    },
}
</script>
<style lang="stylus" scoped>
.topbar_class
  width 100%
  height 40px
  position fixed
  top 0px
  left 200px
  background #fafafa
  border-bottom 1px solid #eee
  z-index 10
  text-align right 
  
.topbar_class .span 
  font-size 14px
  vertical-align top 
  position fixed
  top 0
  right 10px
  z-index 10
.topbar_class .text
  display inline-block
  line-height 40px
  color #666
.top_labels
  display block
  line-height 40px
  font-size 14px
  cursor pointer
  padding-left 10px
.top_labels:hover
  background #eee
.qrcode
  position fixed
  top 0
  height 40px
  left 200px
  line-height 40px
  font-size 14px
  padding 0 30px
  cursor pointer
</style>