import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Header from './components/Header.vue'
import AlphabetDrinks from './components/AlphabetDrinks.vue'

import ApiService from './service/api.service'

import './assets/tailwind.css'

ApiService.init()

Vue.component('Header', Header)
Vue.component('AlphabetDrinks', AlphabetDrinks)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
