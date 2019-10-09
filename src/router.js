import Vue from 'vue'
import Router from 'vue-router'
import Main from './pages/MainNew'
import Courses from './pages/Courses'
import Feedbacks from './pages/Feedbacks'
import Teachers from './pages/Teachers'
import Contacts from './pages/Contacts.vue'
import Club from './pages/Club'
import ClubEventInfo from './pages/ClubEventInfo'
import Events from './pages/Events'
import EventInfo from './pages/EventInfo'
import Schools from './pages/Schools'
import SchoolInfo from './pages/SchoolInfo'
import Partners from './pages/Partners'
import PartnerInfo from './pages/PartnerInfo'
import Test from './pages/Test'
import About from './pages/About'
import Program from './pages/Program'
import Policy from './pages/Policy'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
            meta: {
                layout: 'mainPage'
            }
        },
        {
            path: '/courses',
            name: 'courses',
            component: Courses
        },
        {
            path: '/feedbacks',
            name: 'feedbacks',
            component: Feedbacks
        },
        {
            path: '/teachers',
            name: 'teachers',
            component: Teachers
        },
        {
            path: '/club',
            name: 'club',
            component: Club
        },
        {
            path: '/club/:name',
            name: 'clubEventInfo',
            component: ClubEventInfo
        },
        {
            path: '/events',
            name: 'events',
            component: Events
        },
        {
            path: '/events/:name',
            name: 'eventInfo',
            component: EventInfo
        },
        {
            path: '/schools',
            name: 'schools',
            component: Schools
        },
        {
            path: '/schools/:name',
            name: 'schoolInfo',
            component: SchoolInfo
        },
        {
            path: '/partners',
            name: 'partners',
            component: Partners
        },
        {
            path: '/partners/:name',
            name: 'partnersInfo',
            component: PartnerInfo
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/program',
            name: 'program',
            component: Program
        },
        {
            path: '/policy',
            name: 'policy',
            component: Policy
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
            props: {
                phone: '+7 (495) 920-74-30',
                additionalPhone: '+7 (916) 169-18-37',
                address: 'Москва, Малый Каретный переулок 11/1',
                email: 'info@centroespanol.ru',
                metroStationsInfo: ['метро Цветной Бульвар - 6 минут пешком',
                    'метро Трубная - 11 минут пешком', 'метро Чеховская - 12 минут пешком']
            }
        }
    ],
    scrollBehavior (to,from, savedPosition) {
        return { x: 0, y: 0}
    }
})
