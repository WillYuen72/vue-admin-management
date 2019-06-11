import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './plugins/element.js'
import logLevel from './plugins/logLevel'

Vue.config.productionTip = false
Vue.use(logLevel, { level: process.env.VUE_APP_LOG_LEVEL })

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
