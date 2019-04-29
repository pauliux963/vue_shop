import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import './assets/app.scss';
import jQuery from 'jquery';


window.$ = window.jQuery = jQuery;

import 'popper.js';


Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Hero', require('./components/Hero.vue').default);
Vue.component('Productsnew', require('./shop/Productsnew.vue').default);
Vue.component('Footer', require('./components/Footer.vue').default);



Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
