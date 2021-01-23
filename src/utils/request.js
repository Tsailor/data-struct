// 封装整个项目的ajax 网络请求
// 引入axios qs
import axios from 'axios'
// import qs from 'qs'
// import local from '../utils/local'
// import { Message } from 'element-ui'
// import router from '@/router/index';
import config from '../config/config'
// 设置请求地址
axios.defaults.baseURL = config.httpUrl + '/api' //设置请求服务器地址
axios.defaults.timeout = 5000 //请求超时时间

// 请求拦截器
// axios.interceptors.request.use(config => {
//     // 取出本地token
//     let tk = local.get('token')
//     if (tk) {
//         config.headers.Authorization = tk // 统一给后端携带令牌
//     }
//     return config
// })

// 响应拦截器
// axios.interceptors.response.use(response => {
// 响应拦截器先拦截住
// 如果code和msg都有
//  if (response.data.code !== undefined && response.data.msg !== undefined) {
// 将code和msg提取出来
//         let { code, msg } = response.data
//         if (code === 0) {
//             Message({
//                 type: 'success',
//                 message: msg,
//             });
//         } else if (code === 1) {
//             Message.error(msg)
//         }
//     }
//     return response;
// }, (err) => {
//     if (
//         err.response.data.code !== undefined && err.response.data.msg !== undefined
//     ) {
//         let { code, msg } = err.response.data
//         if (code === 401) {
//             Message.error(msg)
//             local.clear()
//             router.push('/login')
//         }
//   }
// })

// 封装通用的get和post请求
export default Request = {
    get(url, data = {}) {
        return axios.get(url, { params: data })
    },
    post(url, data = {}) {
        axios.post(url, { params: data })
    },
}
