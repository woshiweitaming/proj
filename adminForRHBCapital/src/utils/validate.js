const validate = {
    checkCode(data, success, error){
        //未登录
        if(data.rpCode === '100003'){
            return error(data.rpMsg, true)
        }else{
            if(data.rpCode === '000000'){
                return success(data)
            }else{
                return error(data.rpMsg)
            }
        }
    }
}
export default validate