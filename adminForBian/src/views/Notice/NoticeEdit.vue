<template>
    <div class="notice_edit_class">
         <div class="form_class">
            <div class="form_main">
                <el-form ref="form" label-position="right" label-width="100px" :model="params">
                    <el-form-item label="标题">
                        <el-input placeholder="请输入标题" size="mini" class="form_label" v-model="params.title"></el-input>
                    </el-form-item>
                        <el-form-item label="是否为公告">
                        <el-select v-model="params.notice" placeholder="请选择" size="mini">
                            <el-option
                                v-for="item in noticeList"
                                :key="item.name"
                                :label="item.name"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="选择语言">
                        <el-select v-model="params.type" placeholder="请选择" size="mini">
                            <el-option
                                v-for="item in typeList"
                                :key="item.name"
                                :label="item.name"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="上传图片">
                        <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple
                            :limit="1"
                            :before-upload="beforeUpload"
                            :file-list="fileList"
                         >
                             <el-button size="small" type="primary">点击上传</el-button>  
                         </el-upload>
                         <img width="300" height="150" :src="params.img" v-if="params.img">
                    </el-form-item>
                    <el-form-item label="内容">
                        <editor id="tinymce1" v-model="params.content" :init="init"></editor>
                    </el-form-item>    
                    <el-form-item>
                        <el-button class="btn" size="small" type="primary" @click="submit">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
         </div>
              <!-- <editor id="tinymce1" v-model="params.content" :init="init"></editor> -->
    </div>
</template>
<script>
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import { updNBanner, getNBanner } from '@/api/admins'
import { getNoticeStatus, langStatus } from '@/datas/status_datas'
import validate from '@/utils/validate'
import 'tinymce/icons/default/icons'
import 'tinymce/themes/silver'
import 'tinymce/plugins/image'// 插入上传图片插件
import 'tinymce/plugins/media'// 插入视频插件
import 'tinymce/plugins/table'// 插入表格插件
import 'tinymce/plugins/lists'// 列表插件
import 'tinymce/plugins/wordcount'// 字数统计插件
import 'tinymce/plugins/link'// 超链接
let content = ''
let encontent = ''
export default {
    name: 'NoticeEdit',
    data(){
        return {
            params: {
                title: '',
                content: '',
                head_img: '',
                notice: 1,
                type: 0
            },
            typeList: langStatus,
            init: {
                language_url: './tinymce/langs/zh_CN.js',//语言包的路径
                language: 'zh_CN',//语言
                skin_url: './tinymce/skins/ui/oxide',
                height: 300,//编辑器高度
                branding: false,//是否禁用“Powered by TinyMCE”
                menubar: false,//顶部菜单栏显示，
                plugins: 'lists image media table wordcount link',
                toolbar: 'fontsizeselect | fontselect | undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat | link',
            },
            noticeList: [],
            formData: {},
            file: {},
            fileList: [],
        }
    },
    components: {
        Editor
    },
    methods: {
        async getBannerHandler(id){
            const res = await getNBanner({id: id})
            this.params = {}
            this.params = res.data
            content = this.params.content
            encontent = this.params.encontent
        },
        beforeUpload(file){
            this.file = file
            this.fileList = [file]
            return false
        },
        async submit(){
            this.formData = new FormData()
            if(this.params.title === ''){
                return this.$tips.errorTips('中文标题不能为空')
            }
            if(this.params.content === ''){
                return this.$tips.errorTips('中文内容不能为空')
            }
            if(typeof this.params.id != 'undefined'){
                this.formData.append('id', this.params.id)
            }
            this.formData.append('head_img', this.file)
            this.formData.append('title', this.params.title)
            this.formData.append('content', this.params.content)
            this.formData.append('notice', this.params.notice)
            this.formData.append('type', this.params.type)
            const res = await updNBanner(this.formData)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.$router.push({path: '/admin/notice/notice_list'})
            },msg => {
                this.$tips.errorTips(msg)
            })
        },
        initHanlder(){
            tinymce.init({})
            this.noticeList = getNoticeStatus
            this.formData = new FormData()
            const id = this.$route.params.id
            if(id == 0){
                this.params = {
                    title: '',
                    entitle: '',
                    content: '',
                    encontent: '',
                    head_img: '',
                    notice: 1,
                    type: 0
                }
            }else{
                this.getBannerHandler(id)
            }
        }
    },
    created(){
        this.initHanlder()
    },
    watch: {
        $route(to, from){
           this.initHanlder()
        }
    }
}
</script>
<style lang="stylus" scoped>
.notice_edit_class
    height 100%
    overflow auto
.form_class
    width 100%
.form_label
    width 400px
.btn
    width 180px
</style>