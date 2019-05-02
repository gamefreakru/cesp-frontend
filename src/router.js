import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/pages/Main'
import Courses from './components/pages/Courses'
import Feedbacks from './components/pages/Feedbacks'
import Teachers from './components/pages/Teachers'
import Contacts from './components/pages/Contacts.vue'
import Club from './components/pages/Club'
import ClubEventInfo from './components/pages/ClubEventInfo' 
import Events from './components/pages/Events'
import EventInfo from './components/pages/EventInfo'
import Schools from './components/pages/Schools'
import SchoolInfo from './components/pages/SchoolInfo'
import Partners from './components/pages/Partners'
import PartnerInfo from './components/pages/PartnerInfo'
import Test from './components/pages/Test'
import About from './components/pages/About'
import Program from './components/pages/Program'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      props: {
        phone: '+7 (495) 920-74-30',
        additionalPhone: '+7 (916) 169-18-37',
        address: 'Москва, Малый Каретный переулок 11/1',
        email: 'info@centroespanol.ru',
        metroStationsInfo: ['метро Цветной Бульвар - 6 минут пешком',
          'метро Трубная - 11 минут пешком', 'метро Чеховская - 12 минут пешком']
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
  ]
})
