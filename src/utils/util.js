// 工具函数
import local from './local';
export const deepClone = value => {
    return JSON.parse(JSON.stringify(value));
};

export const isLogined = () => {
    return !!local.getSessionVal('token');
};

export const throttle = (fun, delay) => {
    let preMs = Date.now();
    return function(...args) {
        const that = this;
        let curMs = Date.now();
        if (curMs - preMs >= delay) {
            fun.apply(that, args);
            preMs = curMs;
        }
    };
};
