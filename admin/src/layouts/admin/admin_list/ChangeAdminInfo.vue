<template>
    <div class="change_admin_info">
        <div class="form_main">
            <h4 class="title">修改管理员信息</h4>
            <el-form ref="form" label-position="right" label-width="80px" :model="form" :rules="rules">
                <el-form-item label="姓名" prop="nickName">
                    <el-input size="mini" v-model="form.nickName" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="运营中心" v-show="type == 2 || type == 3">
                    <el-select clearable @change="(val) => getP2(val, true)" class="input_bar" size="mini" v-model="params.p1" placeholder="请选择">
                        <el-option
                            v-for="(items, index) in p1List"
                            :key="index"
                            :label="items.ncikname"
                            :value="items.uid"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="代理线" v-show="type == 3">
                    <el-select clearable class="input_bar" size="mini" v-model="params.p2" placeholder="请选择">
                        <el-option
                            v-for="(items, index) in p2List"
                            :key="index"
                            :label="items.ncikname"
                            :value="items.uid"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                 <el-form-item label="佣金比例" prop="ratio">
                    <el-input size="mini" v-model="form.ratio" placeholder="请输入佣金比例"></el-input>
                </el-form-item>
                 <el-form-item label="密码">
                    <el-input size="mini" type="password" v-model="form.pwd" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="账号状态" prop="state">
                    <el-select
                        v-model="form.state"
                        size="mini"
                        class="select_bar"
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
                    <el-button class="btn" size="small" type="primary" @click="validateForm">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getAccountState } from '@/datas/status_datas'
import commonMixins from '@/mixins/common_mixins'
import parentSelectMixins from '@/mixins/parent_select_mixins'
import { updInfo } from '@/api/admins'
import validate from '@/utils/validate'
import { getManageId } from '@/api/admins'
export default {
    name: 'ChangeAdminInfo',
    props: ['opt'],
    mixins: [commonMixins, parentSelectMixins],
    data(){
        return {
            form: {
                nickName: '',
                ratio: '',
                state: 0,
                pwd: '',
                updUid: '',
                parentId: '',
            },
            type: '',
            stateList: [],
            rules: {
                nickName: [
                    { required: true, message: '请选择角色类型', trigger: 'blur' },
                ],
                ratio: [
                    { required: true, message: '请输入佣金比例', trigger: 'blur' },
                ],
                state: [
                    { required: true, message: '请选择账户类型', trigger: 'change' },
                ],
            },
            params: {
                p1: '',
                p2: '',
                p3: ''
            },
            p1List: [],
            p2List: [],
            p3List: []
        }
    },
    methods: {
        validateForm() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.updInfoHandler()
                } else {
                    return false;
                }
            });
        },
        async updInfoHandler(){
            if(this.type == 3){
                if(this.params.p1 == '' || this.params.p2 === ''){
                    return  this.$tips.errorTips('请选择上级')
                }
                this.form.parentId = this.params.p2
            }
            if(this.type == 2){
                if(this.params.p1 === ''){
                    console.log(this.params.p1)
                    return  this.$tips.errorTips('请选择上级')
                }
                this.form.parentId = this.params.p1
            }
            if(this.type == 1){
               this.form.parentId = 0
            }
            const res = await updInfo(this.form)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.$emit('callback')
                this.setDrawerStatus(false)
            }, msg => {
                this.$tips.errorTips(msg)
            })

        },
        async init(){
            this.params.p1 = this.params.p2 = ''
            this.stateList = getAccountState
            this.form.nickName = this.opt.ncikname
            this.form.updUid = this.opt.uid
            this.getP1()
            //上下级
            const type = this.opt.type
            this.type = type
            if(type == 3){
                this.params.p1 = this.opt.uid3
                this.params.p2 = this.opt.uid2
                this.form.parentId = this.params.p2
                this.getP2(this.params.p1)
            }
            if(type == 2){
                 this.params.p1 = this.opt.uid2
                 this.form.parentId = this.params.p1
            }
        },
        async getP1(){
            const res = await getManageId()
            this.p1List = res.data
        },
        async getP2(uid, isDel){
            if(isDel){
                this.params.p2 = ''
            }
            const res = await getManageId({uid: uid})
            this.p2List = res.data
        },
        ...mapMutations({
            setDrawerStatus: 'SET_DRAWER_STATUS'
        })
    },
    computed: {
        ...mapGetters({
            getDrawerStatus: 'getDrawerStatus'
        })
    },
    watch: {
        getDrawerStatus: {
            handler(val){
                if(val){
                    this.init()
                }
            },
            deep: true,
            immediate: true
        }
    }
}
</script>
<style lang="stylus" scoped>
.change_admin_info
   padding 20px
</style>