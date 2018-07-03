import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueResource); 
Vue.use(VueRouter);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { routes } from "./routes";

let router = new VueRouter({routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
