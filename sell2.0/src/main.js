import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import './common/stylus/index.styl';
import axios from './axios';

Vue.config.productionTip = false;
Vue.use(VueResource); // 全局注册
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  axios,
  template: '<App/>'
});
