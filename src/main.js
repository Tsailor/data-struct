import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false;
// 区分 环境
// console.log("环境:",process.env.NODE_ENV)

new Vue({
  render: h => h(App),
}).$mount('#app')
