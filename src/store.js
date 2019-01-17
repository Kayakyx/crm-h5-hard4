import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    isLoading: false
  },
  mutations: {
    //改变state里状态的方法。
    loginSuccess(store, param){ //在 http.js 里通过引入 store, 直接通过store.commit('loginSuccess',值)，修改了，不用在写action了。
      store.token = param;
    },
    changeIsLoading(store, param){
      store.isLoading = param;
    }
  },
  actions: {

  }
})
