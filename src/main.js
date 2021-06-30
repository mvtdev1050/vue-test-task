import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisH, faClock, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(Vuex);
Vue.use(VueRouter);
library.add(faEllipsisH, faClock, faComment)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const routes = [
  {
    name: 'Index',
    path: '/',
    component: Index
  },
];

const router = new VueRouter({mode: "history", routes: routes})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
