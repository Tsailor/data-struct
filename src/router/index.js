import HelloWorld from '../components/helloworld';
import Navbar from '../components/navbar';
import ExHome from '../examples/home';
import Index from '../examples/index';
import AvatarUpload from '../examples/avatar-upload';
import Search from '../examples/search';
import ChoiceQuestion from '../examples/choice-question';

/* 正式内容 */
import VueRouter from 'vue-router';
import teaIndex from './teaIndex';
import AdminLogin from 'comViews/adminLogin';
import { isLogined } from 'utils/util';
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
        path: '/adminlogin',
        component: AdminLogin,
    },
    ...teaIndex,
];
const router = new VueRouter({
    routes,
    linkExactActiveClass: 'active', // 精确匹配
});

//判断一下有没有教师token 没有得话强制跳登录页
router.beforeEach((to, from, next) => {
    const adminPath = [
        '/admin',
        '/admin/index',
        '/admin/classexam',
        '/admin/class',
        '/admin/questions',
        '/admin/test',
    ];

    if (adminPath.includes(to.path)) {
        if (isLogined()) {
            next(); //放行
        } else {
            console.log('重定向到登录');
            next('/adminlogin'); //重置到登录
        }
    } else {
        next(); //放行
    }
});

export default router;
