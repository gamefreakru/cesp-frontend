import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/pages/Main.vue'
import Courses from './components/pages/Courses.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      props: {
        phone: '8 (495) 920-74-30',
        additionalPhone: '8 916 1691837',
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
    }
  ]
})
