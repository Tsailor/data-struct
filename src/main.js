import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import { Button, Upload, Input, Select, Option, Icon } from 'element-ui'
import './config/config'

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.use(Icon)
Vue.use(Button)
Vue.use(Upload)
Vue.use(Select)
Vue.use(Input)
Vue.use(Option)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
