import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
// import statistics from './statistics/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home
  }
});
