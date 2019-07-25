import axios from 'axios'
let util = {}

// const ajaxUrl = "/bi-repair";
const ajaxUrl = location.href.match('uat') ? '/bi-uatrepair' : '/bi-repair'
util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000
})

util.transParams = data => {
  let params = new URLSearchParams()
  for (let item in data) {
    params.append(item, data['' + item + ''])
  }
  return params
}
util.headersUrlencoded = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
}
util.headersMultipart = {
  headers: { 'Content-Type': 'multipart/form-data' }
}
util.false = {
  headers: { 'Content-Type': 'false' }
}
export default util
