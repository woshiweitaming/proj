<template>
    <div class="edit_finacing_class">
        <div class="form_class">
            <h4 class="title">添加理财产品</h4>
            <div class="form_main">
                <el-form ref="form" label-position="right" label-width="120px" :model="form">
                    <el-form-item label="产品名称" prop="pro_name">
                        <el-input size="mini" v-model="form.pro_name" placeholder="请输入产品名称"></el-input>
                    </el-form-item>
                    <el-form-item label="周期" prop="ro_period">
                        <el-input size="mini" v-model="form.pro_period" placeholder="请输入周期"></el-input>
                    </el-form-item>
                    <el-form-item label="日收益率" prop="day_rate">
                        <el-input class="w50" size="mini" v-model="min1" placeholder="请输入最小日收益率"></el-input>
                        <span class="line">~</span>
                        <el-input class="w50" size="mini" v-model="max1" placeholder="请输入最大日收益率"></el-input>
                    </el-form-item>
                    <el-form-item label="当日收益利率" prop="current_rate">
                        <el-input size="mini" v-model="form.current_rate" placeholder="请输入当日收益利率"></el-input>
                    </el-form-item>
                    <el-form-item label="违约结算利率" prop="penalty_rate">
                        <el-input size="mini" v-model="form.penalty_rate" placeholder="请输入违约结算利率"></el-input>
                    </el-form-item>
                    <el-form-item label="单笔限额" prop="money_scope">
                        <el-input class="w50" size="mini" v-model="min" placeholder="请输入单笔最小限额"></el-input>
                        <span class="line">~</span>
                        <el-input class="w50" size="mini" v-model="max" placeholder="请输入单笔最大限额"></el-input>
                    </el-form-item>
                    <el-form-item label="排序">
                        <el-input size="mini" v-model="form.sort" placeholder="请输入排序（选填）"></el-input>
                    </el-form-item>
                    <el-form-item label="产品Logo">
                        <el-upload
                            class="upload-demo"
                            :action="action"
                            multiple
                            :headers="params"
                            name="head_img"
                            :on-success="onSuccess"
                            :before-upload="beforeUpload"
                            :file-list="fileList"
                            list-type="picture"
                        >
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="产品介绍">
                        <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="form.introduce"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="btn" size="small" type="primary" @click="validateForm(true)">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import appConfig from '@/config/appConfig'
import { uploadCoinPoolImg, addCoinPoolProduct } from '@/api/admins'
import validate from '@/utils/validate'
export default {
    name: 'EditFinacing',
    props: ['opt'],
    data(){
        return {
            form: {},
            fileList: [],
            file: '',
            action: '',
            params: {
                token: ''
            },
            min: '',
            max: '',
            min1: '',
            max1: ''
        }
    },
    methods: {
        validateForm(flag) {
            this.$refs.form.validate((valid) => {
            if (valid) {
                this.uploadCoinPoolImgHandler()
            } else {
                return false;
            }
            });
        },
        async uploadCoinPoolImgHandler(){
            if(this.form.pro_name === ''){
                return this.$tips.errorTips('请输入产品名称')
            }
            if(this.form.pro_period === ''){
                return this.$tips.errorTips('请输入周期')
            }
            // if(this.form.day_rate === ''){
            //     return this.$tips.errorTips('请输入日收益率')
            // }
            if(this.form.current_rate === ''){
                return this.$tips.errorTips('请输入当日收益利率')
            }
            if(this.form.penalty_rate === ''){
                return this.$tips.errorTips('请输入违约结算利率')
            }
            if(this.min === ''){
                return this.$tips.errorTips('请输入单笔最小限额')
            }
            if(this.max === ''){
                return this.$tips.errorTips('请输入单笔最大限额')
            }
            if(this.min1 === ''){
                return this.$tips.errorTips('请输入最小日收益额')
            }
            if(this.max1 === ''){
                return this.$tips.errorTips('请输入最大日收益额')
            }
            if(this.form.introduce === ''){
                return this.$tips.errorTips('请输入产品介绍')
            }
            this.form.money_scope = this.min + '~' + this.max
            this.form.day_rate = this.min1 + '~' + this.max1
            const res = await addCoinPoolProduct(this.form)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.$emit('callback')
                this.setDrawerStatus(false)
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        init(){
            const logoImg = this.opt.pro_logo
            this.params = {
                token: this.$storage.getLocalData('token')
            }
            this.action = appConfig.domain + '/admin/uploadCoinPoolImg'
            if(JSON.stringify(this.opt) === '{}'){
                this.form = {
                    logo_img: '',
                    pro_logo: '',
                    pro_name: '',
                    pro_period: '',
                    day_rate: '',
                    current_rate: '',
                    penalty_rate: '',
                    money_scope: '',
                    type: 'add',
                    sort: '',
                    introduce: ''
                }
                this.form.logo_img = ''
                this.min = ''
                this.max = ''
                this.min1 = ''
                this.max1 = ''
                this.fileList = [] 
            }else{
                this.form = JSON.parse(JSON.stringify(this.opt))
                const arr = this.form.money_scope.split('~')
                const arr1 = this.form.day_rate.split('~')
                this.min = arr[0]
                this.max = arr[1]
                this.min1 = arr1[0]
                this.max1 = arr1[1]
                this.form.logo_img = logoImg
                this.form.type = 'update'
                this.fileList = [{name: 'logo', url: logoImg}] 
            }
        },
        onSuccess(response, file, fileList){
            this.form.logo_img = response.logo
        },
        beforeUpload(file){
            this.fileList = [file]
            this.file = file
            return true
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
<style>
.el-drawer.rtl{
    overflow: scroll;
}
</style>
<style lang="stylus" scoped>
.form_class
    height 100%
.edit_finacing_class
    padding 10px
    box-sizing border-box
    height 100%
.w50
    width 126px
.line
    padding 0 10px
</style>