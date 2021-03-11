<template>
    <el-container class="container">
        <el-aside class="left_bar">
            <Leftbar />
        </el-aside>
        <el-container>
            <el-header class="header">
                 <Topbar />
            </el-header>
            <el-main class="main">
                <TabMenu />
                <div class="main_class">
                    <keep-alive>
                        <router-view />
                    </keep-alive>
                </div>
            </el-main>
        </el-container>
        <audio ref="audio1" hidden="true" src="../audio/cz.mp3"></audio>
        <audio ref="audio2" hidden="true" src="../audio/tx.mp3"></audio>
    </el-container>
</template>
<script>
import commonMixins from '@/mixins/common_mixins'
import Topbar from '@/layouts/common/Topbar'
import Leftbar from '@/layouts/common/Leftbar'
import TabMenu from '@/layouts/common/TabMenu'
import appConfig from '@/config/appConfig'
export default {
    name: 'Index',
    components: {
        Topbar,
        Leftbar,
        TabMenu
    },
    mixins: [commonMixins],
    methods: {
        initWS(){
            const sid = Date.parse(new Date())
            const wsUrl = appConfig.wsDomain + '/websocket/'+sid+'/999'
            this.websock = new WebSocket(wsUrl);
            this.websock.onmessage = this.websocketonmessage;
            this.websock.onopen = this.websocketonopen;
            this.websock.onerror = this.websocketonerror;
            this.websock.onclose = this.websocketclose;
        },
         websocketonopen(){ //连接建立之后执行send方法发送数据
            this.websocketsend();
        },
        websocketonerror(){//连接建立失败重连
            this.initWebSocket();
        },
        websocketonmessage(e){ //数据接收
            const redata = JSON.parse(e.data);
            if(redata.type === 0){
                //充值
                this.$notify({
                    title: '系统提醒',
                    message: '您有一条新的充值订单',
                    type: 'success'
                });
                const playPromise = this.$refs.audio1.play()
            }
            if(redata.type === 1){
                this.$notify({
                    title: '系统提醒',
                    message: '您有一条新的提现订单',
                    type: 'success'
                });
                //提现
                const playPromise = this.$refs.audio2.play()
            }
        },
        websocketsend(Data){//数据发送
            this.websock.send(Data);
        },
        websocketclose(e){  //关闭
            console.log('断开连接',e);
        },
        play(url){
        },
    },
    created(){
        this.initWS()
    }
}
</script>
<style lang="stylus" scoped>
.left_bar
   height 100%
   background #20242d
   width 140px !important
   overflow hidden
.header
   height 40px !important
   text-align right 
   background #f9f9f9
.main
   height 100%
</style>