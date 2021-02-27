import TeaNavbar from 'teaComponents/teaNavbar';
// import TeaMenu from 'teaComponents/teaMenu';
import AdminIndex from 'tViews/adminIndex';
import AdminHome from 'tViews/adminHome';
import AdminTest from 'tViews/adminTest';
import AdminClass from 'tViews/adminClass';
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
        ],
    },
];
export default teaIndex;
