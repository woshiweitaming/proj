<template>
    <div class="account_leftmoney_class">
        <div class="menu_tab">
            <div @click="changeMenuBar(index)" :class="['menu_label', index === accountActive ? 'on' : '']" v-for="(items, index) in accountTyoeList" :key="index">{{items.name}}</div>
        </div>
        <div class="tables">
            <el-table
                :data="getTableData"
                border
            > 
                <el-table-column
                    prop="name"
                    label="币种"
                    sortable
                    show-overflow-tooltip
                >   
                </el-table-column>
                    <el-table-column
                    prop="usable"
                    label="可用"
                    sortable
                    show-overflow-tooltip
                >
                </el-table-column>
                    <el-table-column
                    prop="freeze"
                    label="冻结"
                    sortable
                    show-overflow-tooltip
                >
                </el-table-column>
                    <el-table-column
                    prop="convert"
                    label="折合"
                    sortable
                    show-overflow-tooltip
                >
                </el-table-column>
            </el-table>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button class="dialog_btn" size="small"  @click="closeHandler">取 消</el-button>
            <el-button class="dialog_btn"  size="small" type="primary" @click="changeLeftmoneyHanlder">确 定</el-button>
        </span>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { historyOrderTypeStatus } from '@/datas/status_datas'
import { getAllBanlace } from '@/api/admins'
import validate from '@/utils/validate'
export default {
    name: 'AccountLeftmoney',
    props: ['opt'],
    data(){
        return {
            //账户余额
            accountListData: [],
            //账户类型
            accountTyoeList: historyOrderTypeStatus,
            //当前选择
            accountActive: 0
        }
    },
    methods: {
        changeMenuBar(index){
            this.accountActive = index
        },
        closeHandler(){
            this.setCheckLeftmoneyDialogStatus(false)
        },
        changeLeftmoneyHanlder(){
            this.closeHandler()
        },
        async getAccountBalanceHanlder(){
            const params = {
                uid: this.opt.uid
            }
            const res = await getAllBanlace(params)
            validate.checkCode(res, () => {
                this.accountListData = res.data
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        ...mapMutations({
           setCheckLeftmoneyDialogStatus: 'SET_CHECK_LEFTMONEY_DIALOG_STATUS'
        })
    },
    computed: {
        getTableData(){
            const active = this.accountActive
            if(this.accountListData.length === 0) return []
            const data = this.accountListData.filter(res => {
                if(res.type == active){
                    return res
                }
            })
            console.log(data)
            const dataList = []
            for(let key in data[0]){
                if(key !== 'type'){
                    const obj = {
                        name: key
                    }
                    dataList.push(Object.assign(obj, data[0][key]))
                }
            }
            return dataList
        }, 
        ...mapGetters({
             getCheckLeftmoneyDialogStatus: 'getCheckLeftmoneyDialogStatus'
        }) 
    },
    watch: {
        getCheckLeftmoneyDialogStatus: {
            handler(val){
                console.log(val)
                if(val){
                    this.getAccountBalanceHanlder()
                }
            },
            immediate: true,
            deep: true
        }
    }
}
</script>
<style lang="stylus" scoped>
.dialog-footer
    width 100%
    text-align center
    display block
.menu_tab
  width 200px
  margin auto
  display flex
  margin-bottom 10px
.menu_tab .menu_label
  flex 1
  text-align center
  cursor pointer
  line-height 35px
.menu_tab .menu_label.on
  border-bottom: 2px solid #255cd4
  color #255cd4 
.tables
    margin-bottom 10px
</style>