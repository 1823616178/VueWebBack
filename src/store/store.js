/**
 * Created by superman on 17/2/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {},
    token: null,
    id: '',
    NavSwitchWidth:''
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.token = data
      localStorage.setItem('LOginStatus', 'isLoad')
      state.token = data
    },
    [types.LOGOUT]: state => {
      localStorage.removeItem('token')
      state.token = null
    },
    [types.ID]: (state, data) => {
      state.id = data
    }
  },
  actions: {
    
  }
})
