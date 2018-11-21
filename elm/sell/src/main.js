import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
import './common/stylus/index.styl';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

/* eslint-disable no-new */
let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/goods': {
     component: goods,
     meta: {
       keepAlive: true
     }
    },
  '/ratings': {
     component: ratings,
     meta: {
      keepAlive: true
    }
    },
  '/seller': {
     component: seller,
     meta: {
      keepAlive: true
    }
  }
});
// 将router运行在app文件的app节点上
router.start(app, '#app');

// router.go('/goods');
