<template>
    <div class="create_admin_class">
        <div class="form_class">
            <el-card class="box-card">
                <h4 class="title">创建管理员</h4>
                <div class="form_main">
                    <el-form ref="form" label-position="right" :rules="rules" label-width="80px" :model="form">
                        <el-form-item label="角色类型" prop="type">
                            <el-select
                                v-model="form.type"
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
                        <el-form-item label="运营中心" v-if="form.type === 2 || form.type === 3">
                            <el-select
                                v-model="p1"
                                size="mini"
                                class="select_bar"
                                @change="getP1"
                            >
                                <el-option
                                    v-for="(el, key) in p1List"
                                    :key="key"
                                    :label="el.ncikname"
                                    :value="el.uid">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="代理线" v-if="form.type === 3">
                            <el-select
                                v-model="p2"
                                size="mini"
                                class="select_bar"
                                @change="getP2"
                            >
                                <el-option
                                    v-for="(el, key) in p2List"
                                    :key="key"
                                    :label="el.ncikname"
                                    :value="el.uid">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="用户名" prop="uname">
                            <el-input size="mini" v-model="form.uname" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pwd">
                            <el-input size="mini" type="password" v-model="form.pwd" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item label="真实姓名" prop="nickName">
                            <el-input size="mini" v-model="form.nickName" placeholder="请输入真实姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="上级编号">
                            <el-input size="mini" type="number" v-model="form.parentId" placeholder="请输入上级编号"></el-input>
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
import { adminStatus } from '@/datas/status_datas'
import { register } from '@/api/admins'
import validate from '@/utils/validate'
import parentMixins from '@/mixins/parent_mixins'
export default {
    name: 'CreateAdmin',
    mixins: [parentMixins],
    data(){
        return {
            form: { 
                
            },
            typeList: adminStatus, 
            rules: {
                type: [
                    { required: true, message: '请选择角色类型', trigger: 'change' },
                ],
                uname: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 6, max: 16, message: '用户名需要6-16个字符', trigger: 'blur' }
                ],
                pwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '密码需要8-20个字符', trigger: 'blur' }
                ],
                nickName: [
                    { required: true, message: '请输入真实姓名', trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        validateForm() {
            this.$refs.form.validate((valid) => {
            if (valid) {
                this.createAdmin()
            } else {
                return false;
            }
            });
        },
        init(){
            this.form = {
                uname: '',
                pwd: '',
                nickName: '',
                type: 1,
                parentId: '',
                uid: ''
            }
        },
        async createAdmin(){
            if(this.form.type === 1) {
                this.form.parentId = 0
            }
            if(this.form.type === 2){
                this.form.parentId = this.p1
            }
            if(this.form.type === 3){
                if(this.p2 === '') this.$tips.errorTips('上级不存在，无法创建')
                this.form.parentId = this.p2
            }
            const res = await register(this.form)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.init()
            }, msg => {
                this.$tips.errorTips(msg)
                this.form.parentId = ''
            })
        }
    },
    created(){
        const uid = this.$storage.getLocalData('uid')
        this.init()
        this.getData()
    }
}
</script>
<style lang="stylus" scoped>
.form_class
   margin 20px auto
</style>