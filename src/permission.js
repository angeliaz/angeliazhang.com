import router from '@/router'

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // console.log('router', to, from)
  next();
})