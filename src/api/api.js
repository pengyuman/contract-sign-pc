/* eslint-disable */
import util from '../libs/util'

const API = {
  // 登录权限判断
  checkAccess(data) {
    return util.ajax.get('/sso/callback', {
      responseType: 'json',
      params: data
    })
  },
  // 获取故障类型列表
  getFaultList(data) {
    return util.ajax.get('/do/ftype/list', {
      responseType: 'json',
      params: data
    })
  },
  // 获取单个故障类型列表
  getFaultTypeList(data) {
    return util.ajax.get('/do/ftypeList', {
      responseType: 'json',
      params: data
    })
  },
  // 添加
  addFaultType(data) {
    return util.ajax.post(
      '/do/ftype/add',
      util.transParams(data),
      util.headersUrlencoded
    )
  },
  //更新
  updateFaultType(data) {
    return util.ajax.post(
      '/do/ftype/edit',
      util.transParams(data),
      util.headersUrlencoded
    )
  },
  // 删除
  deleteFaultType(data) {
    return util.ajax.post(
      '/do/ftype/delete',
      util.transParams(data),
      util.headersUrlencoded
    )
  },
  // 获取分组管理列表
  getGroupList(data) {
    return util.ajax.get('/do/group/list', {
      responseType: 'json',
      params: data
    })
  }
}
export default API
