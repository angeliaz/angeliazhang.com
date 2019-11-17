import Vue from 'vue';

// CSS reset
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// global
import '@/styles/index.scss';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import '@/mock';
import '@/permission'
// import '@/utils/tree.js'
// import '@/utils/array.js';
// import '@/utils/chain.js';
// import '@/utils/event-loop.js';
// import '@/utils/tool.js';
// import '@/utils/string.js';
// import '@/utils/copy.js';
// import '@/utils/class.js';
// import '@/utils/array_str_object.js'
// import '@/utils/call_apply.js'
// import '@/utils/sort.js'
// import '@/utils/closure.js'
import '@/utils/fetch.js'

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
