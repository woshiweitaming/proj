/**
 * 三级联动混入
 */
import { mapMutations, mapGetters } from 'vuex'
import { getManageId } from '@/api/admins'
const parentMixins = {
    data(){
        return {
            p1: '',
            p2: '',
            p3: '',
            p1List: [],
            p2List: [],
            p3List: [],
            level: ''
        }
    },
    methods: {
        async getData(){
            this.p1 = ''
            this.p2 = ''
            this.p3 = ''
            this.p1List = []
            this.p2List = []
            this.p3List = []
            let uid = this.$storage.getLocalData('uid')
            let res = {}
            if(this.level == 0){
                res = await getManageId()
                this.p1List = res.data
            }else if(this.level == 1){
                this.getP2(uid)
            }else if(this.level == 2){
                this.getP3(uid)
            }
        },
        //获取p1
        async getP1(uid){
            const res = await getManageId({uid: uid})
            this.p2List = res.data
            const queryData = this.getQueryData
            queryData.p1 = uid
            this.setQueryData(queryData)
        },
        //获取p2
        async getP2(uid){
            const res = await getManageId({uid: uid})
            this.p3List = res.data
            const queryData = this.getQueryData
            queryData.p2 = uid
            this.setQueryData(queryData)
        },
        //获取p3
        async getP3(uid){
            const queryData = this.getQueryData
            queryData.p2 = uid
            this.setQueryData(queryData)
        },
        //处理ParentId
        parentIdHandler(){
            let parentId = 0
            if(this.p3 !== ''){
                parentId = this.p3
            }else if(this.p2 !== ''){
                parentId = this.p2
            }
            return parentId
        },
        ...mapMutations({
            setQueryData: 'SET_QUERY_DATA'
        })
    },
    computed:{
        ...mapGetters({
            getQueryData: 'getQueryData'
        })
    },
    created(){
        this.level = this.$storage.getLocalData('level')
        //this.getData()
    }
}

export default parentMixins