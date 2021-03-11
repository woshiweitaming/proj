/**
 * 三级联动混入
 */
import { mapMutations, mapGetters } from 'vuex'
import { getManageId } from '@/api/admins'
const parentSelelctMixins = {
    data(){
        return {
            params: {
                p1: '',
                p2: '',
                p3: ''
            },
            p1List: [],
            p2List: [],
            p3List: []
        }
    },
    methods: {
        getData(){
            const uid = this.$storage.getLocalData('uid')
            if(this.level == 0){
                this.getP1()
            }
            if(this.level == 1){
                this.getP2(uid)
            }
            if(this.level == 2){
                this.getP3(uid)
            }
        },
        //获取运营中心
        async getP1(uid){
            const res = await getManageId({uid: uid})
            this.params.p1 = uid
            this.p1List = res.data
        },
        //获取代理线
        async getP2(uid){
            this.params.p2 = ''
            this.params.p3 = ''
            const res = await getManageId({uid: uid})
            this.p2List = res.data
        },
        //获取代理人
        async getP3(uid){
            this.params.p3 = ''
            const res = await getManageId({uid: uid})
            this.p3List = res.data
        }
    },
    computed:{
    },
    created(){
    }
}

export default parentSelelctMixins