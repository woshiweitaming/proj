<template>
    <div class="setting_class">
        <span class="title">K线趋势设置：</span>
        <div class="setting_label">
            <el-date-picker
                clearable 
                class="input_date_bar"
                size="mini"
                v-model="form.startTime"
                type="datetime"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="timestamp"
                placeholder="开始时间">
            </el-date-picker>
        </div>
        <div class="setting_label">
            <el-date-picker
                clearable 
                class="input_date_bar"
                size="mini"
                v-model="form.endTime"
                type="datetime"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="timestamp"
                placeholder="结束时间">
            </el-date-picker>
        </div>
        <div class="setting_label">
            <span class="price">当前价格：{{curPrice}}</span>
        </div>
        <div class="setting_label">
            <el-input size="mini" clearable type="number" placeholder="请输入最终价格" v-model="form.endPrice" ></el-input>
        </div>
        <div class="setting_label">
            <el-input size="mini" clearable type="text" placeholder="请输入浮动值" v-model="form.floatval" ></el-input>
        </div>
        <div class="setting_label">
            <span class="tips">{{placeholder}}</span>
        </div>
         <div class="setting_label">
            <el-button type="primary" size="mini" @click="setOrSetToProductConfigHandler">设置趋势</el-button>
            <el-button size="mini" @click="refresh" class="refresh"><i class="el-icon-refresh-right"></i>刷新数据</el-button>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import recordMixins from '@/mixins/record_mixins'
import validate from '@/utils/validate'
import { getfieldage, getProductPriceList, updProF, getOrSetToProductConfig } from '@/api/admins'
export default {
    name: 'Setting',
    mixins: [recordMixins],
    data(){
        return {
            form: {
                startTime: '',
                endTime: '',
                endPrice: '',
                floatval: '',
            },
            curPrice: 0,
            placeholder: ''
        }
    },
    methods: {
        async setOrSetToProductConfigHandler(){
            if(this.form.startTime === ''){
                return this.$tips.errorTips('请输入开始时间')
            }
            if(this.form.endTime === ''){
                return this.$tips.errorTips('请输入结束时间')
            }
            if(this.form.endPrice === ''){
                return this.$tips.errorTips('请输入最终价格')
            }
                if(this.form.floatval === ''){
                return this.$tips.errorTips('请输入浮动值')
            }
            const paths = this.$route.path.split('/')
            const id = paths[paths.length - 1]
            let params = {
                pid: id,
                startTime: this.form.startTime/1000,
                endTime: this.form.endTime/1000,
                floatval: this.form.floatval,
                endPrice: this.form.endPrice
            }
            const res = await getOrSetToProductConfig(params)
            validate.checkCode(res, () => {
                this.$tips.successTips('成功')
                this.refresh()
            }, msg => {
                this.$tips.errorTips(msg)
            })
        },
        async getOrSetToProductConfigHandler(){
            const paths = this.$route.path.split('/')
            const id = paths[paths.length - 1]
            const params = {
                pid: id
            }
            const res = await getOrSetToProductConfig(params)
            this.curPrice = res.currPrice
            this.form.floatval = res.floating
            const arr = res.floating.split(',')
            this.placeholder = `浮动值范围:${arr[0]} - ${arr[1]},用英文逗号隔开`
        },
        refresh(){
            this.setRefreshForecastRecord(true)
        },
        ...mapMutations({
            setRefreshForecastRecord: 'SET_REFRESH_FORECAST_RECORD'
        })
    },
    created(){
        this.getOrSetToProductConfigHandler()
    }
}
</script>
<style lang="stylus" scoped>
.setting_class
    height 40px
.title
    line-height 40px
    font-size 12px
    color #666;
    display inline-block
.setting_label
    display inline-block
    margin 0 5px
.input_date_bar
    width 220px !important
.price
    line-height 40px
    display inline-block
    font-weight bold
    color #09f
    font-size 12px
.tips
    font-size 12px
    color #666
</style>