import TeaNavbar from 'teaComponents/teaNavbar';
// import TeaMenu from 'teaComponents/teaMenu';
import AdminIndex from 'tViews/adminIndex';
import AdminHome from 'tViews/adminHome';
import AdminTest from 'tViews/adminTest';
import AdminClass from 'tViews/adminClass';
import AdminQuestions from 'tViews/adminQuestions';
import AdminStatistics from 'tViews/adminStatistics';
import AdminClassexam from 'tViews/adminClassexam';
import AdminOnlineexam from 'tViews/adminOnlineexam';
const teaIndex = [
    {
        path: '/admin',
        // component: Index,
        components: {
            nav: TeaNavbar,

            default: AdminIndex,
        },
        redirect: '/admin/index',
        children: [
            {
                path: 'index',
                components: {
                    default: AdminHome,
                },
                meta: {
                    title: '主页',
                },
            },
            {
                path: 'test',
                components: {
                    default: AdminTest,
                },
                meta: {
                    title: '课程信息',
                },
            },
            {
                path: 'class',
                components: {
                    default: AdminClass,
                },
                meta: {
                    title: '班级管理',
                },
            },
            {
                path: 'questions',
                components: {
                    default: AdminQuestions,
                },
                meta: {
                    title: '题库',
                },
            },
            {
                path: 'statistics',
                components: {
                    default: AdminStatistics,
                },
                meta: {
                    title: '统计信息',
                },
            },
            {
                path: 'classexam',
                components: {
                    default: AdminClassexam,
                },
                meta: {
                    title: '课前测',
                },
            },
            {
                path: 'onlineexam',
                components: {
                    default: AdminOnlineexam,
                },
                meta: {
                    title: '试卷',
                },
            },
        ],
    },
];
export default teaIndex;
