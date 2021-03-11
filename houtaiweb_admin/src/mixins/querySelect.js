import { getManageId  } from '@/api/admins'
import Storage from '@/utils/Storage'
import Select from '@/ui/Select'
const querySelect = {
    data(){
        return {
            p1List: [],
            p2List: [],
            p3List: [],
            level: Storage.getLocalData('type'),
            uid: Storage.getLocalData('uid'),
        }
    },
    methods: {
        search(){
            for(let key in this.queryData){
                this.params[key] = this.queryData[key].value
            }
            const p1 = this.params.p1
            const p2 = this.params.p2
            const p3 = this.params.p3

            if(this.level == 0){
                if(p3 != ''){
                    delete this.params.p1
                    delete this.params.p2
                }else  if(p2 != ''){
                    delete this.params.p1
                    delete this.params.p3
                }else if(p1 != ''){
                    delete this.params.p2
                    delete this.params.p3
                }
            }
            if(this.level == 1){
                this.params.p1 = this.uid
                if(p3 != ''){
                    delete this.params.p1
                    delete this.params.p2
                }else if(p2 != ''){
                    delete this.params.p1
                    delete this.params.p3
                }
            }
            if(this.level == 2){
                delete this.params.p1
                this.params.p2 = this.uid
                if(p3 != ''){
                    delete this.params.p2
                }else{
                    delete this.params.p3
                }
            }
            if(this.level == 3){
                delete this.params.p1
                delete this.params.p2
                this.params.p3 = this.uid
            }
            this.getListHandler()
        },
        getP(key, uid){
            if(key === 'p1'){
                this.getP2(uid)
            }
            if(key === 'p2'){
                this.getP3(uid)
            }
        },
        async getP1(){
            this.queryData.p1.value = ''
            const res = await getManageId()
            this.p1List = res.data
            this.queryData.p1.children = this.p1List
        },
        async getP2(uid){
            this.queryData.p2.value = ''
            const res = await getManageId({uid: uid})
            this.p2List = res.data
            this.queryData.p2.children = this.p2List
            this.queryData.p3.children = []
        },
        async getP3(uid){
            this.queryData.p3.value = ''
            const res = await getManageId({uid: uid})
            this.p3List = res.data
            this.queryData.p3.children = this.p3List
        },
        isShow(items){
            const level = Storage.getLocalData('type')
            const key = items.key
            if(level == 0){
                return true
            }
            if(level == 1){
                if(key == 'p1'){
                    return false
                }else{
                    return true
                }
            }
            if(level == 2){
                if(key == 'p1' || key == 'p2'){
                    return false
                }else{
                    return true
                }
            }
            if(level == 3){
                return false
            }
            return true
        },
        init(){
            if(this.level == 0){
                this.getP1()   
            }
            if(this.level == 1){
                this.getP2(this.uid)   
            }
            if(this.level == 2){
                this.getP3(this.uid)   
            }
        }
    },
    mounted() {
        this.init()
    },
    watch: {
        '$route': 'init'
    },
}

export default querySelect