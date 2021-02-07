import Helloworld from '../components/helloworld'
import Navbar from '../components/navbar'
import ExHome from '../examples/home'
import Index from '../examples/index'
import AvatarUpload from '../examples/avatar-upload'
import Search from '../examples/search'
import ChoiceQuestion from '../examples/choice-question'
import VueRouter from 'vue-router'
export const routes = [
    {
        path: '/',
        components: {
            nav: Navbar,
            default: Helloworld,
        },
    },
    {
        path: '/examples',
        // component: Index,
        components: {
            nav: Navbar,
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
]
const router = new VueRouter({
    routes,
})
export default router
