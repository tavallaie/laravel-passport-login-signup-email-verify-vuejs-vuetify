import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import app_users from './store/modules/app_users'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://filma24.test/';

export default new Vuex.Store({
  state: {
      loader: false

  },
  mutations: {
      LOADER(state, payload) {
          state.loader = payload
      }

  },
  actions: {

  },
    modules: {
        app_users
    }
})
