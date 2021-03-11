<template>
    <div class="forecast_record_class">
        <el-table
          border
          :data="getTableData"
        >
             <el-table-column
               prop="high"
                label="最高价格"
            >
            </el-table-column>
            <el-table-column 
               prop="low"
                label="最低价格"
            >
            </el-table-column>
            <el-table-column 
               prop="oprice"
                label="封盘价格"
            >
            </el-table-column>
            <el-table-column 
               prop="fprice"
                label="点差"
            >
            </el-table-column>
            <el-table-column 
               prop="nprice"
                label="最终价格"
            >
            </el-table-column>
            <el-table-column 
               prop="time"
                label="时间"
            >
                 <template slot-scope="scope">
                     <span>{{timeConvert(scope.row.time)}}</span>
                 </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import recordMixins from '@/mixins/record_mixins'
export default {
    name: 'ForecastListTable',
    mixins: [recordMixins],
    methods: {
        timeConvert(timestamp,num = 'YYYY-MM-DD hh:mm:ss'){//num:0 YYYY-MM-DD  num:1  YYYY-MM-DD hh:mm:ss // timestamp:时间戳 
            timestamp = timestamp+'';
            timestamp = timestamp.length==10?timestamp*1000:timestamp;
            var date = new Date(timestamp);
            var y = date.getFullYear();  
            var m = date.getMonth() + 1;  
            m = m < 10 ? ('0' + m) : m;  
            var d = date.getDate();  
            d = d < 10 ? ('0' + d) : d;  
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;  
            second = second < 10 ? ('0' + second) : second; 
            if(num==0){
                return y + '-' + m + '-' + d;  
            }else{
                return y + '-' + m + '-' + d +' '+ h +':'+ minute +':' + second;  
            }
        },
    }
}
</script>
<style lang="stylus" scoped>
</style>