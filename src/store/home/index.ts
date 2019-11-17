import request from '@/utils/request'
import { State } from './interface';
import { Commit } from 'vuex'

interface GetTodayWeatherParam {
  city: string
}

interface GetConfigsParam {
  ids: string
}

const state: State = {
  count: 0,
  message: '',
  test: []
}

const getters = {
  count: (state: State) => state.count
}

const mutations = {
  INCREMENT(state: State, num: number) {
    state.count += num
  },

  DECREMENT(state: State, num: number) {
    state.count -= num
  },

  MESSAGE(state: State, payload: any) {
    state.message = payload.message
  }
}

const actions = {
  /* request.get('/weather_mini', {}).then(res => {
    console.log(res);
  }) */
  getTodayWeather(context: { commit: Commit }, params: GetTodayWeatherParam) {
    console.log(38, params);
    return request.get('/weather_mini', { params })
  },

  getMeCenterConfig(context: { commit: Commit }, params: GetConfigsParam) {
    return request.get('/mecenter/config', { params })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
