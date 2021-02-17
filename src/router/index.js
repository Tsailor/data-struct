import HelloWorld from '../components/helloworld'
import Navbar from '../components/navbar'
import ExHome from '../examples/home'
import Index from '../examples/index'
import AvatarUpload from '../examples/avatar-upload'
import Search from '../examples/search'
import ChoiceQuestion from '../examples/choice-question'

/* 正式内容 */
import VueRouter from 'vue-router'
import teaIndex from './teaIndex'
export const routes = [
    {
        path: '/',
        components: {
            nav: Navbar,
            default: HelloWorld,
        },
    },
    {
        path: '/examples',
        // component: Index,
        components: {
            // nav: Navbar,
            default: Index,
        },
        redirect: '/examples/index',
        children: [
            {
                path: 'index',
                component: ExHome,
            },
            {
                path: 'avatarUpload',
                component: AvatarUpload,
            },
            {
                path: 'search',
                component: Search,
            },
            {
                path: 'choice-question',
                component: ChoiceQuestion,
            },
        ],
    },
    {
        path: '/avatarUpload',
        component: AvatarUpload,
    },
    ...teaIndex,
]
const router = new VueRouter({
    routes,
    linkExactActiveClass: 'active', // 精确匹配
})
export default router
