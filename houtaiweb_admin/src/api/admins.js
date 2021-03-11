import request from '@/request/request'
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
export const getUserList = (data = {}) => {
  return request({
    url: '/admin/getUserList',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}
export const getSmsList = (data = {}) => {
  return request({
    url: '/admin/getSmsList',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const getMailList = (data = {}) => {
  return request({
    url: '/admin/getMailList',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const updPwd  = (data = {}) => {
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

export const logOut  = (data = {}) => {
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

export const exportText = (data = {}) => {
  return request({
    url: 'admin/exportText',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}

export const del  = (data = {}) => {
  return request({
    url: '/admin/delUser',
    method: 'get',
    params: data,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  })
}
