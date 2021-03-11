import request from '@/fetch'
import qs from 'qs'

//登录
export const login = (data = {}) => {
    return request({
      url: '/admin/login',
      method: 'post',
      data,
      transformRequest: [function (data) {
        data = qs.stringify(data);
        return data;
      }],
      headers:{'Content-Type':'application/x-www-form-urlencoded'}
    })
}

//注册
export const register = (data ={}) => {
  return request({
    url: '/admin/register',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

//管理员列表
export const getManagerList = (data = {}) => {
  return request({
    url: '/admin/manageList',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}


//产品列表
export const getProductList = (data = {}) => {
  return request({
    url: '/admin/getProductList',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

//充值列表
export const getPayList = (data = {}) => {
  return request({
    url: '/admin/getPayList',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}


//提现列表
export const getDrawithalList = (data = {}) => {
  return request({
    url: '/admin/getExtractList',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}


//持仓列表
export const getOrderList = (data = {}) => {
  return request({
    url: '/admin/getOrder',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

//历史列表
export const getHisOrder = (data = {}) => {
  return request({
    url: '/admin/getHisOrder',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

//会员列表
export const getMemberList = (data = {}) => {
  return request({
    url: '/admin/getUserInfoList',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}


//会员详情
export const getUserInfo = (data = {}) => {
  return request({
    url: '/admin/getUserInfo',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}


//产品列表
export const getProPage = (data = {}) => {
  return request({
    url: '/admin/getProPage',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

//修改密码
export const updPwd = (data = {}) => {
  return request({
    url: '/admin/updPwd',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

//修改资料
export const updInfo = (data = {}) => {
  return request({
    url: '/admin/updInfo',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

//修改资料
export const updUserInfo = (data = {}) => {
  return request({
    url: '/admin/updUserInfo',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updPro = (data = {}) => {
  return request({
    url: '/admin/updProduct',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getProductPriceList = (data = {}) => {
  return request({
    url: '/admin/getProductPriceList',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updProF = (data = {}) => {
  return request({
    url: '/admin/updProF',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const examinePay = (data = {}) => {
  return request({
    url: '/admin/examinePay',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const examineExtract = (data = {}) => {
  return request({
    url: '/admin/examineExtract',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getManageId = (data = {}) => {
  return request({
    url: '/admin/getManageId',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getRank = (data = {}) => {
  return request({
    url: '/admin/getRank',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}


export const loginOut = (data = {}) => {
  return request({
    url: '/admin/loginOut',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const endOrder = (data = {}) => {
  return request({
    url: '/admin/endOrder',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getShearCaptcha = (data = {}) => {
  return request({
    url: '/pub/getShearCaptcha',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getUserUrl = (data = {}) => {
  return request({
    url: '/admin/getUserUrl',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updBanlace = (data = {}) => {
  return request({
    url: '/admin/updBanlace',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getPayLogList = (data = {}) => {
  return request({
    url: '/admin/getPayLogList',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getCertificationList = (data = {}) => {
  return request({
    url: '/admin/getCertificationList',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updateCertificaByUid = (data = {}) => {
  return request({
    url: '/admin/updateCertificaByUid',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getConfig = (data = {}) => {
  return request({
    url: '/admin/getConfig',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updConfig = (data = {}) => {
  return request({
    url: '/admin/updConfig',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getAllBanlace = (data = {}) => {
  return request({
    url: '/admin/getAllBanlace',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getPayConfig = (data = {}) => {
  return request({
    url: '/admin/getPayConfig',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updPayConfig = (data = {}) => {
  return request({
    url: '/admin/updPayConfig',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}


export const getOrSetToProductConfig = (data = {}) => {
  return request({
    url: '/admin/getOrSetToProductConfig',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updBanner = (data = {}) => {
  return request({
    url: '/admin/updBanner',
    method: 'post',
    data,
    headers: {'content-Type': 'multipart/form-data'}
  })
}

export const getBanner = (data = {}) => {
  return request({
    url: '/admin/getBanner',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getNBanner = (data = {}) => {
  return request({
    url: '/admin/getNBanner',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updNBanner = (data = {}) => {
  return request({
    url: '/admin/updNBanner',
    method: 'post',
    data,
    headers: {'content-Type': 'multipart/form-data'}
  })
}

export const delBanner = (data = {}) => {
  return request({
    url: '/admin/updNBanner',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}
export const updQhOrder = (data = {}) => {
  return request({
    url: '/admin/updQhOrder',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}
export const getCoinPoolOrderList = (data = {}) => {
  return request({
    url: '/admin/getCoinPoolOrderList',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}
export const getCoinPoolReportList = (data = {}) => {
  return request({
    url: '/admin/getCoinPoolReportList',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const uploadCoinPoolImg = (data = {}) => {
  return request({
    url: '/admin/uploadCoinPoolImg',
    method: 'post',
    data,
    headers: {'content-Type': 'multipart/form-data'}
  })
}

export const getCoinPoolproductList = (data = {}) => {
  return request({
    url: '/admin/getCoinPoolproductList',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updateCoinPoolProductStatus = (data = {}) => {
  return request({
    url: '/admin/updateCoinPoolProductStatus',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const addCoinPoolProduct = (data = {}) => {
  return request({
    url: '/admin/addCoinPoolProduct',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updLanguage = (data = {}) => {
  return request({
    url: '/admin/updLanguage',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updLanguage2 = (data = {}) => {
  return request({
    url: '/admin/updLanguage',
    method: 'post',
    data,
    // transformRequest: [function (data) {
    //   data = qs.stringify(data);
    //   return data;
    // }],
    // headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getAdminMiningPoolProductList = (data = {}) => {
  return request({
    url: '/admin/getAdminMiningPoolProductList',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updateAdminMiningPoolProductStatus = (data = {}) => {
  return request({
    url: '/admin/updateAdminMiningPoolProductStatus',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const addAdminMiningPoolProduct = (data = {}) => {
  return request({
    url: '/admin/addAdminMiningPoolProduct',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getAdminMiningPoolOrderList = (data = {}) => {
  return request({
    url: '/admin/getAdminMiningPoolOrderList',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getAdminPowMiningProductList = (data = {}) => {
  return request({
    url: '/admin/getAdminPowMiningProductList',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getAlgorithmAndUnit = (data = {}) => {
  return request({
    url: '/admin/getAlgorithmAndUnit',
    method: 'get',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updateAdminPowProductStatus = (data = {}) => {
  return request({
    url: '/admin/updateAdminPowProductStatus',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getAdminPowOrderList = (data = {}) => {
  return request({
    url: '/admin/getAdminPowOrderList',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const addAdminPowMiningPoolProduct = (data = {}) => {
  return request({
    url: '/admin/addAdminPowMiningPoolProduct',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getPayAndDrawalCount = (data = {}) => {
  return request({
    url: '/admin/getPayAndDrawalCount',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const createUser = (data = {}) => {
  return request({
    url: '/admin/createUser',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getLoginLog = (data = {}) => {
  return request({
    url: '/admin/getLoginLog',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}
export const getReportList = (data = {}) => {
  return request({
    url: '/admin/getReportList',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}
export const updBank = (data = {}) => {
  return request({
    url: '/admin/updBank',
    method: 'post',
    data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}