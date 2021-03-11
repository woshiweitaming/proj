<template>
    <el-drawer
        :visible="getDrawerStatus"
        :with-header="false"
        :before-close="handleClose"
        :destroyOnClose="true"
        :size="size"
        :direction="direction"
        :modal-append-to-body="false"
    >
        <slot></slot>
    </el-drawer>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'Drawer',
    props: ['size', 'direction'],
    computed: {
        getDirection(){
            const direction = typeof this.direction === 'undefined' ? 'rtl' : this.direction
            return direction
        },
        ...mapGetters({
            getDrawerStatus: 'getDrawerStatus'
        })
    },
    methods: {
        handleClose(){
            this.setDrawerStatus(false)
        },
        ...mapMutations({
            setDrawerStatus: 'SET_DRAWER_STATUS'
        })
    }
}
</script>
<style scoped>
</style>