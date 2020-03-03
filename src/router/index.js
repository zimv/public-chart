import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/pages/layout';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'echarts/bar',
          name: 'echarts-bar',
          component: () => import('@/pages/echarts/bar'),
        },
        {
          path: 'highcharts/line',
          name: 'highcharts-line',
          component: () => import('@/pages/highcharts/line'),
        },
        {
          path: 'antv/line',
          name: 'antv-line',
          component: () => import('@/pages/antv/line'),
        }
      ]
    },
  ]
});

export default router;
