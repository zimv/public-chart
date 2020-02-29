import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/echarts/bar',
      name: 'echarts-bar',
      component: () => import('@/pages/echarts/bar')
    },
  ]
});

export default router;
