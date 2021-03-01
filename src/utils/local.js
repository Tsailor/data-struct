//  /*window.btoa()和window.atob()分别是加密和解密的方法，
//  但是其实并不是真正的加密解密方式，只是转换了一个编码格式
//  用btoa()将明文转换成base-64格式。(因为默认的编码是utf-8)
//  window.btoa是用于创建一个base-64编码的字符串
//  encodeURIComponent() 原字串作为URI组成部分被被编码后的新字符串。
//  */
//  //封装加密
//  //加密过程
//  //先将object转换成json字符串，再用encode编码成ascll码，然后再bota加密
//  const JiaMi = function(val)
//  {
//      return window.btoa(encodeURIComponent( JSON.stringify(val) ) )

//  }
// //封装解密
// //加密过程的逆运算
// const JieMi = function (val)
// {
//     return JSON.parse( decodeURIComponent( window.atob(val) ))
// }

//封装本地存储的封装
export default {
    //   get(key){
    //         let _key = JiaMi(key);
    //         return JieMi(localstorage.getItem(key))

    //     },
    //     set(key,val){
    //         let _key = JiaMi(key);
    //         let _val = JiaMi(val);
    //         localStorage.setItem(_key,_val)
    //     },
    //     remove(key){
    //         let _key = JiaMi(key)
    //         localStorage.removeItem(_key)
    //     },
    //     clear(){
    //         localStorage.clear()
    //     },

    // 登录状态使用sessionStorage存储
    getSessionVal(val) {
        // JSON.stringify("token") 和 "token"是不一样的
        let key = window.btoa(val)
        let value = sessionStorage.getItem(key)

        if (value) {
            value = JSON.parse(decodeURIComponent(window.atob(value)))
        }
        return value
    },
    setSessionVal(key, val) {
        // let _key = window.btoa(encodeURIComponent(key));
        let _key = window.btoa(key)
        let _val = window.btoa(encodeURIComponent(JSON.stringify(val)))
        sessionStorage.setItem(_key, _val)
    },
    // 退出登录的时候直接 请空sessionStorage里的内容，再重定向到首页
    clearSession() {
        sessionStorage.clear()
    },
}
