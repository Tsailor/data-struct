import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import {
    Button,
    Upload,
    Input,
    Select,
    Option,
    Icon,
    Collapse,
    CollapseItem,
    Row,
    Col,
    Checkbox,
    CheckboxGroup,
    Dialog,
    Form,
    FormItem,
} from 'element-ui'
import './config/config'

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.use(Icon)
Vue.use(Button)
Vue.use(Upload)
Vue.use(Select)
Vue.use(Input)
Vue.use(Option)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
