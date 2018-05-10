import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './routes';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
