import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
Vue.use(VueResource);
Vue.use(VueRouter);


import App from './components/App.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App, meta: { title: "Main page" } },
  ]
})

router.afterEach((toRoute, fromRoute) => {
  document.title = toRoute.meta.title;
})

var app = new Vue({
  el: '#app',
  router,
  data() {
    return {}
  }
})
