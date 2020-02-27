import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueJSModal from "vue-js-modal";
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false;

Vue.use(require('vue-moment'));
Vue.use(VueJSModal, {dialog: true});
Vue.use(VueCarousel);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
