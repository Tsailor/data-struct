import Helloworld from '../components/HelloWorld'
import ExHome from '../examples/index'
import AvatarUpload from '../examples/avatar-upload'
import VueRouter from 'vue-router'
const routes = [
    { path: '/', component: Helloworld },
    {
        path: '/examples',
        component: ExHome,
        children: [
            {
                path: 'avatarUpload',
                component: AvatarUpload,
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
