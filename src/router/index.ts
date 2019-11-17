import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/index.vue';

Vue.use(Router);

export const constantRoutes = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: { title: 'Home' }
    }]
  },
  {
    path: '/markdown',
    name: 'markdown',
    component: Layout,
    // redirect: '/home',
    children: [{
      path: 'index',
      name: 'markdown',
      component: () => import('@/views/Markdown.vue'),
      meta: { title: 'markdown' }
    }]
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Layout,
    redirect: '/statistics/gdp',
    children: [{
      path: 'population',
      name: 'population',
      meta: { title: 'population' },
      component: () => import('@/views/statistics/population/index.vue'),
      children: [{
        path: 'age',
        name: 'age',
        component: () => import('@/views/statistics/population/age.vue'),
        meta: { title: 'age' }
      }, {
        path: 'gender',
        name: 'gender',
        component: () => import('@/views/statistics/population/gender.vue'),
        meta: { title: 'gender' }
      }]
    }, {
      path: 'gdp',
      name: 'gdp',
      component: () => import('@/views/statistics/gdp/index.vue'),
      meta: { title: 'gdp' }
    }, {
      path: 'gdp/:year?/test/:type?',
      name: 'year',
      component: () => import('@/views/statistics/gdp/year/index.vue'),
      // 对象模式
      // props: { test: 'test1', name: 'user' },
      // 布尔模式：
      props: true,
      // 函数模式
      // props: (route: any) => ({ name: route.query.name}),
      meta: { title: 'year' },
      hidden: true
    }, {
      path: 'internet',
      name: 'internet',
      component: () => import('@/views/statistics/internet/index.vue'),
      meta: { title: 'gdp' },
      hidden: true
    }]
  },
  {
    path: '/code',
    name: 'code',
    component: Layout,
    children: [
      {
        path: 'vue',
        name: 'vue',
        component: () => import('@/views/code/vue/index.vue'),
        meta: { title: 'vue' }
      },
      {
        path: 'react',
        name: 'react',
        component: () => import('@/views/code/vue/index.vue'),
        meta: { title: 'react' }
      },
      {
        path: 'ES6',
        name: 'ES6',
        component: () => import('@/views/code/vue/index.vue'),
        meta: { title: 'ES6' }
      },
      {
        path: 'node',
        name: 'node',
        component: () => import('@/views/code/vue/index.vue'),
        meta: { title: 'node'},
        children: [
          {
            path: 'nodejs',
            name: 'nodejs',
            component: () => import('@/views/code/vue/index.vue'),
            meta: { title: 'nodejs' }
          },
          {
            path: 'npm',
            name: 'npm',
            component: () => import('@/views/code/vue/index.vue'),
            meta: { title: 'npm' }
          }
        ]
      },
      {
        path: 'mobile',
        name: 'mobile',
        component: () => import('@/views/code/vue/index.vue'),
        meta: { title: 'mobile' },
        children: [
          {
            path: 'wxapp',
            name: 'wxapp',
            component: () => import('@/views/code/vue/index.vue'),
            meta: { title: 'wxapp' }
          },
          {
            path: 'h5',
            name: 'h5',
            component: () => import('@/views/code/vue/index.vue'),
            meta: { title: 'h5' }
          },
        ]
      },
      {
        path: 'css',
        name: 'css',
        component: () => import('@/views/code/vue/index.vue'),
        meta: { title: 'css' }
      },
      {
        path: 'webpack',
        name: 'webpack',
        component: () => import('@/views/code/vue/index.vue'),
        meta: { title: 'webpack' }
      },
      {
        path: 'http',
        name: 'http',
        component: () => import('@/views/code/vue/index.vue'),
        meta: { title: 'http' }
      },
      {
        path: 'algorithm',
        name: 'algorithm',
        component: () => import('@/views/code/vue/index.vue'),
        meta: { title: 'algorithm' }
      }
    ]
  },
  {
    path: '/economics',
    name: 'economics',
    component: Layout,
    children: [
      {
        path: 'arbitrage',
        name: 'arbitrage',
        component: () => import('@/views/economics/arbitrage.vue'),
        meta: { title: 'arbitrage' }
      },
      {
        path: 'quantitative',
        name: 'quantitative',
        component: () => import('@/views/economics/quantitative.vue'),
        meta: { title: 'quantitative' }
      },
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/economics/index.vue'),
        meta: { title: 'index' }
      },
      {
        path: 'market',
        name: 'market',
        component: () => import('@/views/economics/market.vue'),
        meta: { title: 'market' }
      },
      {
        path: 'research',
        name: 'research',
        component: () => import('@/views/economics/research.vue'),
        meta: { title: 'research' }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'about',
        component: () => import('@/views/About.vue'),
        meta: { title: 'about' }
      }
    ]
  },
  {
    path: '/chart',
    name: 'chart',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'chart',
        component: () => import('@/views/Chart.vue'),
        meta: { title: 'chart' }
      }
    ]
  },
  {
    path: '/whole',
    name: 'whole',
    component: () => import(/* webpackChunkName: "whole" */ '@/views/About.vue')
  },
  {
    path: '/github',
    name: 'github',
    children: [{
      path: 'https://cn.vuejs.org/v2/api/#',
      name: 'vue',
      meta: { title: 'vue', icon: 'lollipop' }
    }, {
      path: 'https://router.vuejs.org/zh/',
      name: 'vue-router',
      meta: { title: 'vue-router' }
    }, {
      path: 'https://github.com/vuejs/awesome-vue',
      name: 'awesome-vue',
      meta: { title: 'awesome-vue' }
    }, {
      path: 'https://panjiachen.github.io/vue-element-admin/',
      name: 'vue-element-admin',
      meta: { title: 'vue-element-admin' }
    }, {
      path: 'https://element.eleme.cn/#/zh-CN/component/installation',
      name: 'element',
      meta: { title: 'element' }
    }, {
      path: 'https://www.zybuluo.com/mdeditor#1230489',
      name: 'zybl',
      meta: { title: 'zybl' }
    }]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: constantRoutes
});
