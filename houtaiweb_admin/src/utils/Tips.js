import { Message } from 'element-ui';

class Tips {
    //成功提示
    static successTips(msg){
        return Message({
            message: msg,
            type: 'success',
            duration: 1000
        })
    }
    //错误提示
    static errorTips(msg){
        return Message.error({
            message: msg,
            duration: 1000
        })
    }
    //警告提示
    static warningTips(msg){
        return Message({
            message: msg,
            type: 'warning',
            duration: 1000
        })
    }
}

export default Tips