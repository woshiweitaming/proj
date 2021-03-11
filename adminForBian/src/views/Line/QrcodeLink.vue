<template>
    <div class="qrcode_class"  v-loading="loading">
        <div class="qrcode_class_main">
            <div class="qrcode_labels" v-for="(items, index) in dataList" :key="index">
                <span class="name">{{items.name}}</span>
                <!-- <vue-qr :text="items.url" :size="150" ></vue-qr> -->
                <div class="qrcode" :id="`poster${index}`">
                    <div class="bg"><img src="/img/invite.jpg"></div>
                    <vue-qr class="qrcode_img" :text="items.url" :size="80" :margin="5"></vue-qr>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import html2canvas from "html2canvas"
import vueQr from 'vue-qr'
import storage from '@/utils/storage'
import { getUserUrl } from '@/api/admins'
export default {
    name: 'QRcode',
    data(){
        return {
            dataList: [],
            loading: true,
            count: 0
        }
    },
    methods: {
        async getUserUrlHandler(){
            const id = storage.getLocalData('type')
            const res = await getUserUrl()
            this.dataList = res.data
            const that = this
            this.dataList.forEach((ele, index) => {
              that.poster(index)
            })
        },
        poster(index){
          const that = this
          const dom = document.getElementById(`poster${index}`)
          if(dom == null){
             return setTimeout(() => {
               that.poster(index)
             }, 1000)
          }
          this.count++
          html2canvas(dom, {
              useCORS: true,
              allowTaint: false,
              logging: false,
              letterRendering: true,
              onclone(doc) {
                let e = doc.querySelector(`#poster${index}`)
                e.style.display = 'block'
              }
            }).then(function(canvas) {
              // 在微信里,可长按保存或转发
              const img = canvas.toDataURL('image/png')
              dom.innerHTML = '<img class="poster" src="'+img+'">'
            })
        }
    },
    components: {
        vueQr
    },
    watch: {
      count(val){
        if(val === this.dataList.length){
          this.loading = false
        }
      }
    },
    created(){
        this.getUserUrlHandler()
    },
}
</script>
<style lang="stylus" scoped>
.qrcode_class
  padding 0 10px
.qrcode_class_main
  width 1000px
  margin 10px auto
.qrcode_class_main .qrcode_labels
  width 33.3333%
  display inline-block
  text-align center
  box-sizing border-box
  padding 10px
.qrcode_class_main .qrcode_labels .name
  display block
  line-height 30px
  padding-left 10px
  font-size 14px
  color #666
.qrcode
  width 100%
  position relative
.bg
  width 100%
  display inline-block
  position relative
  img  
     width 100%
.qrcode_img
  position absolute
  bottom 25px
  left 118px
  border-radius 10px
</style>
<style lang="stylus">
.poster
  width 100%
</style>