import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueFirestore from 'vue-firestore';
Vue.config.productionTip = false;
Vue.use(VueFirestore, {key: 'id'});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
