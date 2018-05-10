import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Favorites from './components/Favorites';

// Use plugin vue-router
Vue.use(Router);

// Define routes config
export default new Router({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/favorites',
      component: Favorites
    }
  ]
});
