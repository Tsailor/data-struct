import TeaNavbar from '../components/teaNavbar'
import TeaMenu from '../components/teaMenu'
import AdminIndex from '../tViews/adminIndex'
import AdminHome from '../tViews/adminHome'
import AdminTest from '../tViews/adminTest'
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
                    menu: TeaMenu,
                },
            },
            {
                path: 'test',
                components: {
                    default: AdminTest,
                    menu: TeaMenu,
                },
            },
        ],
    },
]
export default teaIndex
