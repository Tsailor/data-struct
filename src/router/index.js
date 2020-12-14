import Helloworld from '../components/HelloWorld'
import ExHome from '../examples/index'
import AvatarUpload from '../examples/avatar-upload'
import VueRouter from 'vue-router'
const routes = [
    { path: '/', exact: true, component: Helloworld },
    {
        path: '/examples',
        exact: true,
        component: ExHome,
        children: [
            {
                path: '/avatarUpload',
                exact: true,
                component: AvatarUpload,
            },
        ],
    },
    {
        path: '/avatarUpload',
        exact: true,
        component: AvatarUpload,
    },
]
const router = new VueRouter({
    routes,
})
export default router
