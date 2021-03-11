<template>
    <div class="member_edit">
        <div class="form_main">
            <h4 class="title">编辑会员</h4>
            <el-form ref="form" label-position="right" label-width="100px" :model="params">
                 <el-form-item label="运营中心">
                    <el-select
                    v-model="params.p1"
                    size="mini"
                    :disabled="disabled"
                    class="form_label"
                    @change="getP1"
                    >
                        <el-option
                            v-for="(el, keys) in p1List"
                            :key="keys"
                            :label="el.ncikname"
                            :value="el.uid">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="代理线">
                    <el-select
                    v-model="params.p2"
                    size="mini"
                    :disabled="disabled"
                    class="form_label"
                    @change="getP2"
                    >
                        <el-option
                            v-for="(el, keys) in p2List"
                            :key="keys"
                            :label="el.ncikname"
                            :value="el.uid">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="代理人">
                    <el-select
                    v-model="params.p3"
                    size="mini"
                    :disabled="disabled"
                    class="form_label"
                    >
                        <el-option
                            v-for="(el, keys) in p3List"
                            :key="keys"
                            :label="el.ncikname"
                            :value="el.uid">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="账号">
                    <el-input size="mini" class="form_label" v-model="params.uname"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input size="mini" class="form_label" v-model="params.email"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input size="mini" type="password" class="form_label" :disabled="disabled" v-model="params.pwd"></el-input>
                </el-form-item>
                <el-form-item label="银行卡号">
                    <el-input size="mini" class="form_label" :disabled="disabled" v-model="params.banknumber"></el-input>
                </el-form-item>
                <el-form-item label="支行地址">
                    <el-input size="mini" class="form_label" :disabled="disabled" v-model="params.badds"></el-input>
                </el-form-item>
                <el-form-item label="钱包地址">
                    <el-input size="mini" class="form_label" :disabled="disabled" v-model="params.qbdizhi"></el-input>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input size="mini" class="form_label" :disabled="disabled" v-model="params.ncikname"></el-input>
                </el-form-item>
                <el-form-item label="会员等级">
                    <el-input size="mini" class="form_label" :disabled="disabled" v-model="params.leve"></el-input>
                </el-form-item>
                <el-form-item label="积分">
                    <el-input size="mini" class="form_label" :disabled="disabled" v-model="params.jifen"></el-input>
                </el-form-item>
                <el-form-item label="账户类型">
                    <el-select
                        v-model="params.type"
                        size="mini"
                        :disabled="disabled"
                       class="form_label"
                     >
                          <el-option
                             v-for="(el, keys) in accountTypeStatus"
                             :key="keys"
                             :label="el.name"
                             :value="el.value">
                          </el-option>
                     </el-select>
                </el-form-item>
                <el-form-item label="手机号">
                      <el-select size="mini" v-model="qh" class="qh" @change="changeQH">
                         <el-option
                            v-for="(items, index) in prefixSorted"
                            :key="index"
                            :label="`${items. prefix}-${items.cn}`"
                            :value="items.en"
                          >
                          </el-option>
                     </el-select>
                     <el-input size="mini" class="phone form_label" :disabled="disabled" v-model="params.phone"></el-input>
                </el-form-item>
                <el-form-item label="持卡人">
                    <el-input  size="mini" class="form_label" :disabled="disabled" v-model="params.bname"></el-input>
                </el-form-item>
                <el-form-item label="身份证">
                    <el-input size="mini" class="form_label" :disabled="disabled" v-model="params.idcard"></el-input>
                </el-form-item>
                <el-form-item label="身份证姓名">
                    <el-input size="mini" class="form_label" :disabled="disabled" v-model="params.name"></el-input>
                </el-form-item>
                <el-form-item label="账户状态">
                    <el-select
                    v-model="params.state"
                    size="mini"
                    :disabled="disabled"
                    class="form_label"
                    >
                        <el-option
                            v-for="(el, keys) in acccountStatus"
                            :key="keys"
                            :label="el.name"
                            :value="el.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="银行名称">
                    <el-input size="mini" class="form_label" :disabled="disabled" v-model="params.bankname"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input size="mini" class="form_label" :disabled="disabled" v-model="params.remarks"></el-input>
                </el-form-item>
                <el-form-item class="btn_label">
                    <el-button class="btn" size="small" type="primary" @click="submit">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import commonMixins from '@/mixins/common_mixins'
import parentMixins from '@/mixins/parent_mixins'
import recordMixins from '@/mixins/record_mixins'
import { getUserInfo, updUserInfo } from '@/api/admins'
import validate from '@/utils/validate'
import { userStatus, getAccountState  } from '@/datas/status_datas'
import prefixSorted from '@/datas/prefix_datas'
import { getManageId } from '@/api/admins'
export default {
    name: 'MemeberEdit',
    props: ['opt'],
    mixins: [commonMixins, recordMixins],
    data(){
        return {
            params: {},
            qh: '',
            disabled: false,
            accountTypeStatus: userStatus,
            acccountStatus: getAccountState,
            prefixSorted: prefixSorted,
            p1List: [],
            p2List: [],
            p3List: [],
        }
    },
    methods: {
        async getUserInfoHandler(){
            const res = await getUserInfo(this.opt)
            validate.checkCode(res, async () => {
                this.params = res.data
                this.qh = res.data.qh == null || res.data.qh == '' ? this.prefixSorted.filter(d => d.prefix == '86')[0].en : this.prefixSorted.filter(d => d.prefix == res.data.qh)[0].en
                const res1 = await getManageId({uid: this.params.p1})
                const res2 = await getManageId({uid:  this.params.p2})
                this.p2List = res1.data
                this.p3List = res2.data
            }, error => {
                this.$tips.errorTips(msg)
            })
        },
        async getManage(){
            //获取运营中心数据
            const res1 = await getManageId()
            this.p1List = res1.data
            this.getUserInfoHandler()
        },
        //获取p1
        async getP1(uid){
            const res = await getManageId({uid: uid})
            this.params.p2 = ''
            this.params.p3 = ''
            this.p2List = res.data
        },
        //获取p2
        async getP2(uid){
            const res = await getManageId({uid: uid})
            this.params.p3 = ''
            this.p3List = res.data
        },
        changeQH(data){
            this.qh = data
        },
        async submit(){
            this.params.qh = this.prefixSorted.filter(d => d.en === this.qh)[0].prefix
            this.params.parentId = this.parentIdHandler()
            this.params.updUid = this.opt.uid 
            const res = await updUserInfo(this.params)
            validate.checkCode(res, () => {
                this.$tips.successTips('修改成功')
                this.$emit('callback')
                this.setDrawerStatus(false)
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        //处理ParentId
        parentIdHandler(){
            let parentId = 0
            if(this.params.p3 !== ''){
                parentId = this.params.p3
            }else if(this.params.p2 !== ''){
                parentId = this.params.p2
            }
            return parentId
        },
    },
    watch: {
        getDrawerStatus: {
            handler(val){
                if(val){
                    this.getManage()
                }
            },
            immediate: true,
            deep: true
        }
    }
}
</script>
<style lang="stylus" scoped>
.member_edit
   padding 10px

.el-form
   display flex
   flex-wrap wrap

.el-form-item
   width 50%

.form_label
   width 100%

.qh
  width 80px
.phone
  width 150px
  margin-left 10px
.btn_label
  width 100%
.btn_label .btn
  width 43%
</style>