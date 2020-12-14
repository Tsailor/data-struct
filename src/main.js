import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import { Button } from 'element-ui'

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.component(Button.name, Button)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
