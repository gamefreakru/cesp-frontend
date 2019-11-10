import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VBodyScrollLock from 'v-body-scroll-lock';

Vue.config.productionTip = false;

Vue.use(require('vue-moment'));
Vue.use(VBodyScrollLock);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
