<template>
<div class="qrcode_class">
    <div class="qrcode_class_main">
        <div class="qrcode_labels" v-for="(items, index) in dataList" :key="index">
            <span class="name">{{items.name}}</span>
            <vue-qr :text="items.url" :size="150"></vue-qr>
        </div>
    </div>
</div>
</template>

<script>
import vueQr from 'vue-qr'
import {
    getUserUrl
} from '@/api/admins'
export default {
    name: 'Qrcode',
    components: {
        vueQr
    },
    data() {
        return {
            dataList: []
        }
    },
    methods: {
        async getUserUrlHandler() {
            const res = await getUserUrl()
            this.dataList = res.data
        }
    },
    created() {
        this.getUserUrlHandler()
    }
}
</script>

<style scoped>
.qrcode_class {
    padding: 0 10px
}

.qrcode_class_main {
    width: 1000px;
    margin: 10px auto
}

.qrcode_class_main .qrcode_labels {
    width: 25%;
    display: inline-block;
    text-align: center;
}

.qrcode_class_main .qrcode_labels .name {
    display: block;
    line-height: 30px;
    padding-left: 10px;
    font-size: 14px;
    color: #666
}
</style>
