<template>
    <div class="create_admin_class">
        <div class="form_class">
            <el-card class="box-card">
                <h4 class="title">创建虚拟号</h4>
                <div class="form_main">
                    <el-form ref="form" :hide-required-asterisk="true" label-position="right" :rules="rules" label-width="80px" :model="form">
                       <el-form-item label="手机号">
                            <el-select size="mini" v-model="form.qh" class="qh" @change="changeQH">
                                <el-option
                                    v-for="(items, index) in prefixSorted"
                                    :key="index"
                                    :label="`${items. prefix}-${items.cn}`"
                                    :value="items.en"
                                >
                                </el-option>
                            </el-select>
                            <el-input size="mini" class="phone form_label" v-model="form.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pwd">
                            <el-input size="mini" type="password" v-model="form.pwd" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="btn" size="small" type="primary" @click="createAdmin">提交</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
import { adminStatus } from '@/datas/status_datas'
import { createUser } from '@/api/admins'
import validate from '@/utils/validate'
import prefixSorted from '@/datas/prefix_datas'
export default {
    name: 'CreateUser',
    data(){
        return {
            form: { 
                
            },
            prefixSorted: prefixSorted,
            rules: {
                pwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '密码需要8-20个字符', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        init(){
            this.form = {
                qh: '',
                phone: '',
                pwd: ''
            }
        },
        async createAdmin(){
            if(this.form.qh == '') return this.$tips.errorTips('请输入区号')
            if(this.form.phone == '') return this.$tips.errorTips('请输入手机号')
            if(this.form.pwd == '') return this.$tips.errorTips('请输入密码')
            const params = {
                qh: this.prefixSorted.filter(d => d.en == this.form.qh)[0].prefix,
                phone: this.form.phone,
                pwd: this.form.pwd
            }
            const res = await createUser(params)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.init()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        changeQH(data){
            this.qh = data
        },
    },
    created(){
        const uid = this.$storage.getLocalData('uid')
        this.init()
    }
}
</script>
<style lang="stylus" scoped>
.form_class
   margin 20px auto
.qh
  width 90px
.phone
  width 175px
  margin-left 10px
</style>