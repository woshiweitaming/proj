import Select from './Select'
class Query{
    static ucode = {
        label: '授权码',
        key: 'ucode',
        type: 'text',
        value: ''
    }

    static uid = {
        label: '用户编码',
        key: 'uid',
        type: 'text',
        value: ''
    }
   
    static getUserQuery(){
        const data = {
            ucode: this.ucode
        }
        return data
    }
    static getMessageQuery(){
        const data = {
            ucode: this.ucode,
            uid: this.uid
        }
        return data
    }
    static getContactQuery(){
        const data = {
            ucode: this.ucode,
            uid: this.uid
        }
        return data
    }
}

export default Query