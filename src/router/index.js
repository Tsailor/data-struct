import Helloworld from '../components/helloworld'
import ExHome from '../examples/home'
import Index from '../examples/index'
import AvatarUpload from '../examples/avatar-upload'
import Search from '../examples/search'
import VueRouter from 'vue-router'
export const routes = [
    { path: '/', component: Helloworld },
    {
        path: '/examples',
        component: Index,
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
