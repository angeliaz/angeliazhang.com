import request from '@/utils/request'
import { async } from 'q';

const state = {
  articleList: [],
  task: {
    enumMap: [],
    fieldList: [],
    filterList: [],
    taskData: {
      page: 1,
      pages: 1,
      size: 20,
      total: 0,
      list: []
    },
  },
  cycleList: []
};

const getters = {
  articleList: state => state.articleList,
  enumMap: state => state.task.enumMap,
  filterList: state => {
    return state.task.filterList.map(item => {
      const fieldData = state.task.fieldList.filter(fieldItem => {
        return fieldItem.prop === item.prop;
      });
      if (fieldData.length) {
        item.label = fieldData[0].label;
      }
      item.enum = state.task.enumMap[item.prop];
      return item;
    });
  },
  fieldList: state => state.task.fieldList,
  taskData: state => state.task.taskData
};

const mutations = {
  setArticleList(state, payload) {
    state.articleList = payload;
  },

  setTaskList(state, payload) {
    state.task = payload;
  },

  setCycleList(state, payload) {
    state.cycleList = payload;
  }
};

const actions = {
  async getArticleList({ commit }, params) {
    const res = await request.get('/api/article', { params });
    commit('setArticleList', JSON.parse(res).data);
    return JSON.parse(res).data;
  },

  async getTaskList({ commit }, params) {
    const res = await request.get('/api/task', { params });
    commit('setTaskList', JSON.parse(res).data);
    return JSON.parse(res).data;
  },

  async getCycleList({ commit }, params) {
    const res = await request.post('/exshow/costtime_task_overall_cycle', { params });
    console.log('getCycleList', res)
    // commit('setCycleList', JSON.parse(res).data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}