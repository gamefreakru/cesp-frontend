import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/pages/Main'
import Courses from './components/pages/Courses'
import Feedbacks from './components/pages/Feedbacks'
import Teachers from './components/pages/Teachers'
import Contacts from './components/pages/Contacts.vue'
import Club from './components/pages/Club'
import ClubEventInfo from './components/pages/ClubEventInfo' 

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
