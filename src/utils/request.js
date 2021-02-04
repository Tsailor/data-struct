import axios from 'axios'
// import qs from 'qs'
// import local from '../utils/local'
// import { Message } from 'element-ui'
// import router from '@/router/index';
import config from '../config/config'
// 设置请求地址
// axios.defaults.baseURL = config.httpUrl + '/api' //设置请求服务器地址
axios.defaults.timeout = 5000 //请求超时时间

export default Request = {
    get(url, data = {}) {
        return axios.get(url, { params: data })
    },
    post(url, data = {}) {
        return axios.post(url, data)
    },
}
