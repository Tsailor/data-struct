// 工具函数
import local from './local'
export const deepClone = value => {
    return JSON.parse(JSON.stringify(value))
}

export const isLogined = () => {
    return !!local.getSessionVal('token')
}
