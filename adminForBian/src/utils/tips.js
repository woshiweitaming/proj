import { Message } from 'element-ui';

const tips = {
    //成功提示
    successTips: (msg) => {
        return Message({
            message: msg,
            type: 'success',
            duration: 1000
        })
    },
    //错误提示
    errorTips: (msg) => {
        return Message.error({
            message: msg,
            duration: 1000
        })
    },
    //警告提示
    warningTips: (msg) => {
        return Message({
            message: msg,
            type: 'warning',
            duration: 1000
        })
    }
}

export default tips