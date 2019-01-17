import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/css/reset.css'
import { Button, Toast,Loading } from 'vant'

import api from './api'
Vue.prototype.$api = api; //将所有接口挂载的vue实例原型上。
//一次只能use一个
Vue.use(Button);
Vue.use(Toast);
Vue.use(Loading);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
