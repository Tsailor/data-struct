import TeaNavbar from 'teaComponents/teaNavbar';
// import TeaMenu from 'teaComponents/teaMenu';
import AdminIndex from 'tViews/adminIndex';
import AdminHome from 'tViews/adminHome';
import AdminTest from 'tViews/adminTest';
import AdminClass from 'tViews/adminClass';
import AdminQuestions from 'tViews/adminQuestions';
import AdminStatistics from 'tViews/adminStatistics';
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
            },
            {
                path: 'test',
                components: {
                    default: AdminTest,
                },
            },
            {
                path: 'class',
                components: {
                    default: AdminClass,
                },
            },
            {
                path: 'questions',
                components: {
                    default: AdminQuestions,
                },
            },
            {
                path: 'statistics',
                components: {
                    default: AdminStatistics,
                },
            },
        ],
    },
];
export default teaIndex;
