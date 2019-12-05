import Vue from 'vue'
import Router from 'vue-router'
import Main from './pages/Main'
import Courses from './pages/Courses'
import Feedbacks from './pages/Feedbacks'
import Teachers from './pages/Teachers'
import Contacts from './pages/Contacts';
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
import Schedule from './pages/Schedule';
import Payment from './pages/Payment'
import NotFound from './pages/NotFound';
import HowToLearn from './pages/HowToLearn';
import Dele from './pages/Dele'

Vue.use(Router);

// noinspection ES6ShorthandObjectProperty
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
            path: '/schedule',
            name: 'schedule',
            component: Schedule
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
            path: '/howtolearn',
            name: 'howtolearn',
            component: HowToLearn
        },
        {
            path: '/dele',
            name: 'dele',
            component: Dele
        },
        {
            path: '/payment',
            name: 'payment',
            component: Payment
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
            component: Contacts
        },
        {
            path: '*',
            name: 'notfound',
            component: NotFound
        }
    ],
    scrollBehavior () {
        return { x: 0, y: 0}
    }
})
