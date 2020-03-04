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
          path: 'collectpage',
          name: 'collectpage',
          component: () => import('@/pages/collectPage'),
        },
        {
          path: 'echarts/line',
          name: 'echarts-line',
          component: () => import('@/pages/echarts/line'),
        },
        {
          path: 'echarts/bar',
          name: 'echarts-bar',
          component: () => import('@/pages/echarts/bar'),
        },
        {
          path: 'echarts/stack-bar',
          name: 'echarts-stack-bar',
          component: () => import('@/pages/echarts/stack-bar'),
        },
        {
          path: 'echarts/pie',
          name: 'echarts-pie',
          component: () => import('@/pages/echarts/pie'),
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
