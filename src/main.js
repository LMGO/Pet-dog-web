import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs;
Vue.prototype.$store = store;
Vue.use(ElementUI)
// Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.url = 'http://10.100.122.144:8083';
Vue.prototype.url1 = 'http://10.100.201.21:8081';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
