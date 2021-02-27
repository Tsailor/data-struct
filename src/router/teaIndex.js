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
                    //menu: TeaMenu,
                },
            },
            {
                path: 'test',
                components: {
                    default: AdminTest,
                    // menu: TeaMenu,
                },
            },
            {
                path: 'class',
                components: {
                    default: AdminClass,
                    //menu: TeaMenu,
                },
                // props: { default: true, menu: false },
            },
            {
                path: 'questions',
                components: {
                    default: AdminQuestions,
                    //menu: TeaMenu,
                },
                // props: { default: true, menu: false }, statistics
            },
            {
                path: 'statistics',
                components: {
                    default: AdminStatistics,
                    //menu: TeaMenu,
                },
                // props: { default: true, menu: false }, statistics
            },
        ],
    },
];
export default teaIndex;
